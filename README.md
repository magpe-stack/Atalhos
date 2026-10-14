# Atalhos PWA ⌨️

O **Atalhos PWA** é um aplicativo web progressivo minimalista desenvolvido em preto e branco para organizar e consultar listas de atalhos essenciais do ecossistema Windows e softwares de produtividade (PowerToys, Terminal, Scrivener, Obsidian e Affinity). O app funciona **100% offline**.

---

## 🚀 O que é um PWA?
Um **Progressive Web App (PWA)** combina o melhor da web e dos aplicativos móveis. Ele pode ser acessado instantaneamente direto pelo navegador sem nenhuma instalação, mas também oferece a opção de ser **instalado no seu celular ou computador** como um aplicativo nativo, com ícone próprio na tela inicial e suporte completo para funcionamento offline.

---

## 🌐 Como Usar no Site (Sem Instalar)
Basta abrir o arquivo `index.html` ou acessar o link publicado no seu navegador web favorito. Todas as categorias estão organizadas em abas no topo da tela para navegação rápida e fluida.

---

## 📱 Como Instalar como Aplicativo

### 🤖 No Android (Chrome / Edge)
1. Acesse o site do app.
2. Toque no **menu de três pontos** (`⋮`) no canto superior direito do navegador.
3. Selecione **"Instalar aplicativo"** ou **"Adicionar à tela inicial"**.
4. Confirme. O ícone do app aparecerá na sua gaveta de aplicativos.

### 🍎 No iPhone e iPad (Safari)
1. Abra o site no navegador **Safari**.
2. Toque no botão **Compartilhar** (ícone do quadrado com a seta para cima na barra inferior).
3. Selecione **"Adicionar à Tela de Início"** e confirme.

### 💻 No Computador (Chrome, Edge, Brave)
1. Acesse o site no navegador.
2. Clique no ícone de instalação (uma tela com uma seta para baixo) na barra de endereços ou abra o menu `⋮` > **Instalar Atalhos PWA...**.
3. Confirme. O app abrirá em uma janela própria dedicada.

---

## 💻 Como Instalar e Rodar Localmente

1. Baixe todos os arquivos do projeto para uma pasta local (`index.html`, `style.css`, `app.js`, `sw.js`, `manifest.json`, `logo.svg`).
2. Inicie um servidor HTTP local simples na pasta:
   - **Com Python 3:** `python -m http.server 8000`
   - **Com Node.js / npx:** `npx serve`
   - **Com VS Code:** Use a extensão *Live Server* e clique em "Go Live".
3. Acesse `http://localhost:8000` no seu navegador.

---
atalhos-pwa/
├── index.html
├── style.css
├── app.js
├── sw.js
├── manifest.json
├── logo.svg
└── README.md
---
