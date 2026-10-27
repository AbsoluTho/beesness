# Beesness

Aplicativo da Bianca para acompanhar a carteira de clientes, os pedidos por marca (Luc Boo, Lilimoon e Kukiê), os prospectos e a meta do ciclo Inverno 2027.

## Como publicar no GitHub Pages

1. Entre em github.com e crie um repositório novo, por exemplo `beesness`. Pode ser público.
2. Clique em **Add file → Upload files** e arraste todo o conteúdo desta pasta: `index.html`, `manifest.webmanifest`, `sw.js`, `README.md` e a pasta `icons`.
3. Clique em **Commit changes**.
4. Vá em **Settings → Pages**. Em *Source*, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)**, e salve.
5. Em um ou dois minutos o endereço aparece no topo da página, no formato `https://SEU-USUARIO.github.io/beesness/`.

## Como instalar no celular

- **iPhone:** abra o endereço no Safari, toque em Compartilhar e depois em **Adicionar à Tela de Início**.
- **Android:** abra no Chrome, toque nos três pontinhos e depois em **Instalar app** (ou **Adicionar à tela inicial**).

O ícone da abelha aparece na tela, e o app abre em tela cheia. Depois do primeiro acesso, ele funciona até sem internet.

## Onde ficam os dados

Tudo o que a Bianca lança fica salvo no próprio celular dela. Nada vai para servidor.

- Em **Ajustes → Salvar backup**, o app gera um arquivo `.json` com todos os dados. Vale guardar no Drive, no e-mail ou no WhatsApp de vez em quando.
- Para trocar de celular, instale o app no aparelho novo e use **Ajustes → Restaurar backup**.
- No iPhone, use o app sempre pelo ícone da tela de início. O Safari e o app instalado guardam dados separados.

## Atualizar o app

1. Substitua o `index.html` no repositório pela versão nova (os dados da Bianca não são apagados).
2. Em `sw.js`, troque `beesness-v1` por `beesness-v2` (e assim por diante), para os celulares baixarem a versão nova.
