/**
 * Atalhos PWA - Lógica de renderização de abas e dados
 */

const ATALHOS_DATA = [
  {
    id: "windows",
    name: "Windows",
    subsections: [
      {
        title: "Atalhos Gerais e do Sistema",
        items: [
          { key: "Ctrl + C", desc: "Copia o item selecionado." },
          { key: "Ctrl + V", desc: "Cola o item copiado." },
          { key: "Ctrl + X", desc: "Recorta o item selecionado." },
          { key: "Ctrl + A", desc: "Seleciona todos os itens em uma janela ou documento." },
          { key: "Ctrl + Z", desc: "Desfaz a última ação." },
          { key: "Ctrl + Y", desc: "Refaz uma ação desfeita." },
          { key: "Ctrl + F", desc: "Abre a ferramenta de pesquisa (Localizar)." },
          { key: "Alt + Tab", desc: "Alterna entre os aplicativos abertos." },
          { key: "Alt + F4", desc: "Fecha o item ativo ou sai do aplicativo." },
          { key: "Win + L", desc: "Bloqueia o computador imediatamente." },
          { key: "Win + D", desc: "Mostra ou oculta a área de trabalho." },
          { key: "Win + . ou ;", desc: "Abre o painel de Emojis e símbolos." }
        ]
      },
      {
        title: "Gerenciamento de Janelas e Área de Trabalho",
        items: [
          { key: "Win + Seta Esq / Dir", desc: "Encaixa a janela na metade esquerda ou direita." },
          { key: "Win + Seta Cima", desc: "Maximiza a janela." },
          { key: "Win + Seta Baixo", desc: "Minimiza a janela." },
          { key: "Win + Tab", desc: "Abre a Visão de Tarefas (áreas de trabalho virtuais)." },
          { key: "Win + Ctrl + D", desc: "Cria uma nova área de trabalho virtual." },
          { key: "Win + Ctrl + Seta Esq / Dir", desc: "Alterna entre áreas de trabalho virtuais." },
          { key: "Win + Ctrl + F4", desc: "Fecha a área de trabalho virtual atual." }
        ]
      },
      {
        title: "Navegação e Aplicativos",
        items: [
          { key: "Win + E", desc: "Abre o Explorador de Arquivos." },
          { key: "Win + I", desc: "Abre as Configurações do Windows." },
          { key: "Win + R", desc: "Abre a caixa de diálogo Executar." },
          { key: "Win + S", desc: "Abre a Pesquisa do Windows." },
          { key: "Win + X", desc: "Abre o menu de link rápido." },
          { key: "Ctrl + Shift + Esc", desc: "Abre o Gerenciador de Tarefas diretamente." },
          { key: "PrtScn", desc: "Abre a ferramenta de captura de tela." }
        ]
      },
      {
        title: "Explorador de Arquivos",
        items: [
          { key: "Alt + Seta Cima", desc: "Sobe um nível na hierarquia de pastas." },
          { key: "Alt + Seta Esq / Dir", desc: "Vai para a pasta anterior ou próxima." },
          { key: "Alt + Enter", desc: "Abre as propriedades do item selecionado." },
          { key: "Ctrl + Roda do Mouse", desc: "Altera o tamanho e exibição dos ícones." },
          { key: "F2", desc: "Renomeia o item selecionado." },
          { key: "F3", desc: "Pesquisa um arquivo ou pasta." },
          { key: "Delete", desc: "Envia o item para a Lixeira." },
          { key: "Shift + Delete", desc: "Exclui permanentemente (sem passar pela Lixeira)." }
        ]
      }
    ]
  },
  {
    id: "powertoys",
    name: "PowerToys",
    subsections: [
      {
        title: "Utilitários Principais",
        items: [
          { key: "Alt + Espaço", desc: "PowerToys Run — Lançador rápido." },
          { key: "Win + Shift + C", desc: "Seletor de Cores (Color Picker)." },
          { key: "Win + Shift + T", desc: "Extrator de Texto (OCR) de imagens/vídeos." },
          { key: "Win + Shift + Z", desc: "FancyZones — Organizador avançado de janelas." },
          { key: "Win + Ctrl + T", desc: "Sempre em Destaque (Always on Top)." }
        ]
      },
      {
        title: "Produtividade e Gestão",
        items: [
          { key: "Win + Shift + /", desc: "Guia de Atalhos ativos no momento." },
          { key: "Win + Ctrl + Alt + V", desc: "Colar como Texto Puro (sem formatação)." },
          { key: "Win + Shift + O", desc: "Despertar (Awake) — Mantém o PC ligado." },
          { key: "Win + Shift + Q", desc: "Mudar Foco de Áudio/Microfone globalmente." }
        ]
      }
    ]
  },
  {
    id: "terminal",
    name: "Terminal",
    subsections: [
      {
        title: "Navegação e Arquivos (CMD/PowerShell)",
        items: [
          { key: "dir", desc: "Lista o conteúdo do diretório atual." },
          { key: "cd [caminho]", desc: "Altera o diretório atual." },
          { key: "md / rd", desc: "Cria ou remove pastas." },
          { key: "cls", desc: "Limpa a tela do terminal." }
        ]
      },
      {
        title: "Diagnóstico, Rede e Manutenção",
        items: [
          { key: "ipconfig", desc: "Exibe as configurações de rede." },
          { key: "ping [site/IP]", desc: "Testa a conectividade de rede." },
          { key: "sfc /scannow", desc: "Verifica e repara arquivos corrompidos." },
          { key: "systeminfo", desc: "Exibe informações detalhadas de hardware." },
          { key: "shutdown /s /t 0", desc: "Desliga o computador imediatamente." }
        ]
      }
    ]
  },
  {
    id: "scrivener",
    name: "Scrivener",
    subsections: [
      {
        title: "Navegação e Modos de Visualização",
        items: [
          { key: "F11", desc: "Modo Foco / Tela Cheia." },
          { key: "Ctrl + 1", desc: "Modo Scrivenings (texto contínuo)." },
          { key: "Ctrl + 2", desc: "Modo Cortiça (Corkboard)." },
          { key: "Ctrl + 3", desc: "Modo Outliner (Esboço em tabela)." },
          { key: "Ctrl + Alt + N", desc: "Abre nova janela em paralelo (Split Screen)." }
        ]
      },
      {
        title: "Organização e Edição",
        items: [
          { key: "Ctrl + N", desc: "Cria novo documento/cena." },
          { key: "Ctrl + Shift + F", desc: "Busca avançada em todo o manuscrito." },
          { key: "Ctrl + Shift + C", desc: "Estatísticas de Palavras." },
          { key: "Ctrl + B / I / U", desc: "Negrito, Itálico e Sublinhado." }
        ]
      }
    ]
  },
  {
    id: "obsidian",
    name: "Obsidian",
    subsections: [
      {
        title: "Busca e Navegação",
        items: [
          { key: "Ctrl + O", desc: "Busca Rápida (Quick Switcher) entre notas." },
          { key: "Ctrl + Shift + F", desc: "Busca Global no cofre (vault)." },
          { key: "Ctrl + P", desc: "Paleta de Comandos." },
          { key: "Ctrl + G", desc: "Gráfico Interativo (Graph View)." }
        ]
      },
      {
        title: "Edição e Formatação",
        items: [
          { key: "Ctrl + E", desc: "Alterna entre Edição e Leitura (Preview)." },
          { key: "Ctrl + K", desc: "Insere link de Markdown." },
          { key: "[[", desc: "Abre menu para linkar outra nota." },
          { key: "Ctrl + L", desc: "Seleciona a linha atual." }
        ]
      }
    ]
  },
  {
    id: "affinity",
    name: "Affinity",
    subsections: [
      {
        title: "Ferramentas Principais",
        items: [
          { key: "V", desc: "Ferramenta Mover (Move Tool)." },
          { key: "N", desc: "Ferramenta Nó (Node Tool)." },
          { key: "P", desc: "Ferramenta Caneta (Pen Tool)." },
          { key: "B", desc: "Ferramenta Pincel (Brush Tool)." },
          { key: "I", desc: "Conta-gotas (Eyedropper Tool)." }
        ]
      },
      {
        title: "Visualização e Camadas",
        items: [
          { key: "Ctrl + 0", desc: "Ajusta o documento à tela." },
          { key: "Ctrl + 1", desc: "Visualiza em tamanho real (100%)." },
          { key: "Ctrl + G", desc: "Agrupa camadas selecionadas." },
          { key: "Ctrl + J", desc: "Duplica a camada ou objeto." },
          { key: "Tab", desc: "Oculta ou exibe todos os painéis." }
        ]
      }
    ]
  }
];

function initTabs() {
  const tabsNav = document.getElementById('tabs-nav');
  const tabContentContainer = document.getElementById('tab-content-container');

  if (!tabsNav || !tabContentContainer) return;

  tabsNav.innerHTML = '';
  tabContentContainer.innerHTML = '';

  ATALHOS_DATA.forEach((category, index) => {
    // Cria Botão da Aba
    const btn = document.createElement('button');
    btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
    btn.textContent = category.name;
    btn.setAttribute('data-target', category.id);
    btn.addEventListener('click', () => switchTab(category.id));
    tabsNav.appendChild(btn);

    // Cria Painel de Conteúdo
    const pane = document.createElement('div');
    pane.className = `tab-pane ${index === 0 ? 'active' : ''}`;
    pane.id = `pane-${category.id}`;

    let htmlContent = '';
    category.subsections.forEach(sub => {
      htmlContent += `<h3 class="section-subtitle">${sub.title}</h3>`;
      htmlContent += `<ul class="shortcuts-list">`;
      sub.items.forEach(item => {
        htmlContent += `
          <li class="shortcut-item">
            <span class="shortcut-key">${item.key}</span>
            <span class="shortcut-desc">${item.desc}</span>
          </li>
        `;
      });
      htmlContent += `</ul>`;
    });

    pane.innerHTML = htmlContent;
    tabContentContainer.appendChild(pane);
  });
}

function switchTab(targetId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-target') === targetId);
  });

  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === `pane-${targetId}`);
  });
}

function initTheme() {
  const savedTheme = localStorage.getItem('atalhos-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('atalhos-theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const btnThemeToggle = document.getElementById('theme-toggle');
  if (btnThemeToggle) {
    const iconSpan = btnThemeToggle.querySelector('.icon-theme');
    if (iconSpan) {
      iconSpan.textContent = theme === 'light' ? '☀️' : '🌙';
    }
  }
}

// --- Inicialização Garantida após o DOM carregar ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTabs();

  const btnThemeToggle = document.getElementById('theme-toggle');
  if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', toggleTheme);
  }
});

// --- Registro do Service Worker ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .catch(err => console.error('Falha ao registrar SW:', err));
  });
}
