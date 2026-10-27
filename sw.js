// Beesness — funciona offline depois do primeiro acesso.
// Ao publicar uma nova versão do app, aumente o número abaixo.
const CACHE = "beesness-v2";
const ARQUIVOS = [
  "./", "./index.html", "./manifest.webmanifest",
  "./icon-192.png", "./icon-512.png",
  "./apple-touch-icon-180.png", "./favicon-32.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  // Página: tenta a internet primeiro para pegar atualizações; sem sinal, usa a cópia salva.
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(res => {
      const copia = res.clone(); caches.open(CACHE).then(c => c.put("./index.html", copia)); return res;
    }).catch(() => caches.match("./index.html")));
    return;
  }
  // Ícones e fontes: usa a cópia salva e guarda o que for novo.
  e.respondWith(caches.match(req).then(salvo => salvo || fetch(req).then(res => {
    if (res.ok || res.type === "opaque") { const copia = res.clone(); caches.open(CACHE).then(c => c.put(req, copia)); }
    return res;
  })));
});
