# Plano de Implementação: Template CMS Drupal 10+ e Painel de Páginas CTDDCFN

Construção de uma solução integrada para o CMS Drupal (versões 10 e 11) com tema tático militar completo (CTDDCFN / Marinha do Brasil), incluindo um **Painel de Criação e Gestão de Novas Páginas** em tempo real e um **Exportador de Pacote de Tema Drupal 10/11** pronto para instalação e distribuição.

## Decisões Confirmadas com o Usuário

> [!IMPORTANT]
> As decisões de produto e arquitetura foram alinhadas na Fase 1:
> - **Gerenciamento e Criação de Páginas**: Painel com criador de páginas interativo integrado à visualização em tempo real e exportação dos arquivos do tema Drupal 10/11.
> - **Modelos e Tipos de Conteúdo Pré-configurados**: Notícias, biografias militares, diretrizes estratégicas e matrizes curriculares de cursos.
> - **Padrão de Estilização**: Tailwind CSS com design system tático militar e templates Twig compatíveis com a arquitetura de temas do Drupal 10+.

---

## 1. Visão Geral e Conceito Central

- **O que a aplicação entrega**:
  1. **Visualizador e Preview em Tempo Real de Páginas**: Navegação interativa por todas as páginas temáticas homologadas do CTDDCFN (Notícias Doutrinárias, Comandante, Suboficial-Mor, Missão & Visão, Heráldica, Histórico, Matrizes de Currículos, Flash Doutrinário e Fronteiras da Tecnologia - JID).
  2. **Criador de Novas Páginas (Page Builder)**: Painel administrativo intuitivo que permite ao operador criar novas páginas e posts, selecionar o tipo de conteúdo (Notícia, Biografia, Diretriz, Currículo, Página Básica), definir metadados, anexar mídias, editar seções e publicar diretamente na navegação lateral/principal da aplicação.
  3. **Exportador do Pacote de Tema Drupal 10/11 (`ctddcfn_theme.zip`)**: Download em 1 clique e visualizador com sintaxe destacada de toda a árvore de arquivos nativos do Drupal 10/11 (`.info.yml`, `.libraries.yml`, `.theme`, templates Twig em `templates/layout/`, `templates/content/`, `templates/navigation/` e configurações de tipos de conteúdo `config/install/node.type.*.yml`).

- **Público-Alvo**: Militares, desenvolvedores web, administradores de portais governamentais e equipes de tecnologia da Marinha do Brasil e do CTDDCFN que operam ou pretendem implantar o CMS Drupal 10+.

---

## 2. Experiência do Usuário e Design Visual

- **Identidade Visual Tática (CTDDCFN)**:
  - **Cores Dominantes**: *Graphite Teal* (`#002E32` / `#00383D`) como cor estrutural e de comando; *Renewal Green* (`#BAD435` / `#8FA619`) como acento de prontidão operacional e sinalizadores de status; *Graphite Industrial* (`#1C1C1C`) para dados técnicos; e fundos neutros suaves (`#F8FAFC` / `#F1F4F3`).
  - **Tipografia**: Montserrat para cabeçalhos imponentes e títulos estruturais; Inter para leitura confortável de normativas e diretrizes; números tabulares (`tabular-nums`) para dados e matrizes militares.
  - **Disponibilidade e Acessibilidade**: Contraste estrito WCAG AA, botões com feedback tátil, sem decorações vazias ou badges repetitivos sem função.

- **Fluxos Principais do Usuário**:
  1. **Navegação & Exploração**: O usuário alterna entre os modelos oficiais do CTDDCFN pelo menu superior e barra lateral, com renderização instantânea do layout.
  2. **Criador de Novas Páginas**:
     - Botão destacado "Nova Página" na barra de controle ou cabeçalho.
     - Modal/Drawer com campos: Título, Slug/URL, Modelo/Content Type, Categoria do Menu Lateral, Resumo, Conteúdo Rico/Markdown, Imagem de Destaque, Data e Metadados Militares.
     - A nova página é imediatamente adicionada ao menu correspondente e renderizada com o template Twig correspondente.
  3. **Painel de Exportação Drupal 10**:
     - Aba/Modal dedicado "Pacote Drupal 10/11".
     - Árvore de arquivos navegável com pré-visualização de código Twig/YAML/PHP.
     - Botão "Baixar Pacote do Tema (.ZIP)" que gera todos os arquivos compactados para upload no diretório `/web/themes/custom/ctddcfn_theme`.
     - Guia passo a passo de instalação no Drupal 10 (Drush ou interface administrativa).

---

## 3. Decisões de Produto e Arquitetura

```
┌────────────────────────────────────────────────────────────────────────┐
│                   CTDDCFN - DRUPAL 10+ THEME STUDIO                   │
├────────────────────────────────────────────────────────────────────────┤
│  Top Command Header & Mode Switcher:                                   │
│  [ Visualizador do Portal ]  [ + Criar Nova Página ]  [ Exportar Tema ]│
├──────────────────────┬─────────────────────────────────────────────────┤
│  SIDEBAR DINÂMICA    │  MAIN PREVIEW VIEWPORT                          │
│  • Institucional     │  Renderiza o template ativo (Notícia, Bio, etc.) │
│  • Doutrina          │  Suporte a páginas criadas pelo usuário         │
│  • Novas Páginas (+) │  Alternância de dispositivo (Desktop / Tablet)  │
│  • Bússola Interna   │  Visualização do template Twig equivalente      │
├──────────────────────┴─────────────────────────────────────────────────┤
│  DRUPAL 10/11 EXPORT ENGINE                                            │
│  • ctddcfn_theme.info.yml  • page.html.twig  • node--*.html.twig       │
│  • ctddcfn_theme.theme     • tailwind.css    • node.type.*.yml         │
└────────────────────────────────────────────────────────────────────────┘
```

- **Gerenciamento de Estado**:
  - Estado reativo com persistência em `localStorage` para que páginas criadas pelo usuário permaneçam salvas entre sessões.
  - Conjunto de páginas iniciais fiéis aos anexos disponibilizados pelo usuário.
  - Geração de arquivos ZIP no próprio navegador utilizando `jszip` para download instantâneo sem necessidade de backend externo.

---

## 4. Estrutura dos Arquivos do Tema Drupal 10/11 Gerado

O pacote do tema gerado conterá a estrutura oficial recomendada pelo Drupal:

```
ctddcfn_theme/
├── ctddcfn_theme.info.yml           # Metadados do tema, regiões e compatibilidade ^10 || ^11
├── ctddcfn_theme.libraries.yml      # Registro de estilos Tailwind, fontes e scripts
├── ctddcfn_theme.theme              # Preprocess hooks em PHP (menus, breadcrumbs, usuário)
├── ctddcfn_theme.breakpoints.yml    # Breakpoints responsivos para imagens
├── logo.svg                         # Brasão institucional do CTDDCFN
├── screenshot.png                   # Thumbnail de apresentação do tema no painel Drupal
├── templates/
│   ├── layout/
│   │   ├── html.html.twig           # Estrutura base HTML5 com fontes e meta tags
│   │   ├── page.html.twig           # Layout principal (Header, Sidebar, Main, Footer)
│   │   └── page--front.html.twig    # Layout específico da página inicial
│   ├── navigation/
│   │   ├── menu--main.html.twig     # Menu horizontal superior em Graphite Teal
│   │   ├── menu--sidebar.html.twig  # Menu vertical categorizado com indicador de ativo
│   │   └── breadcrumb.html.twig     # Trilha tática de navegação
│   ├── content/
│   │   ├── node--noticia.html.twig  # Layout para artigos e notícias doutrinárias
│   │   ├── node--biografia.html.twig# Layout para oficiais e suboficial-mor
│   │   ├── node--diretriz.html.twig # Layout para missão, visão e doutrina
│   │   ├── node--curriculo.html.twig# Layout para matrizes de cursos e baremas
│   │   └── node--page.html.twig     # Layout genérico para páginas institucionais
│   └── block/
│       ├── block--system-branding-block.html.twig # Bloco com brasão e lema
│       ├── block--bussola-interna.html.twig       # Busca tática no acervo
│       └── block--footer.html.twig                # Rodapé homologado com 4 colunas
├── config/
│   ├── install/
│   │   ├── node.type.noticia.yml
│   │   ├── node.type.biografia.yml
│   │   ├── node.type.diretriz.yml
│   │   ├── node.type.curriculo.yml
│   │   └── block.block.ctddcfn_*.yml
├── css/
│   ├── tailwind.css                 # Folha de estilo compilada com Tailwind
│   └── components.css               # Estilos específicos de componentes militares
├── js/
│   └── main.js                      # Comportamento interativo de tabs, busca e modais
└── README.md                        # Instruções completas de instalação no Drupal 10/11
```

---

## 5. Plano de Implementação por Etapas

1. **Instalação de Dependência de Exportação**:
   - Adicionar `jszip` para permitir a geração e download direto do arquivo `.zip` contendo todos os templates e arquivos Drupal.
2. **Camada de Dados & Templates Twig do Drupal**:
   - Modelar os geradores de código Twig e YAML para todos os componentes estruturais do Drupal 10/11.
   - Definir os modelos de dados e conteúdo padrão (Notícias, Biografia Comandante, Suboficial-Mor, Missão & Visão, Heráldica, Histórico, Currículos, etc.).
3. **Mecanismo de Criação de Páginas**:
   - Modal com formulário reativo para criação e edição de novas páginas.
   - Seleção de modelo visual (layout template).
   - Inserção dinâmica no menu lateral e na navegação do site.
4. **Visualizador Interativo & Painel de Tema**:
   - Cabeçalho institucional com barra superior Graphite Teal e lema "A Prontidão Começa Aqui!".
   - Menu lateral completo com categorias (Institucional, Produtos Doutrinários, SECOM, Ensino, Navegação, Informática e Páginas Customizadas).
   - Área central com renderização em tempo real da página selecionada.
   - Aba "Ver Código Twig / Drupal" para inspecionar como cada página é mapeada no Drupal 10.
5. **Painel de Exportação e Instruções de Uso**:
   - Seção para inspecionar e baixar o pacote completo `.zip`.
   - Instruções passo a passo de ativação no Drupal 10/11 (`drush theme:enable ctddcfn_theme && drush config-set system.theme default ctddcfn_theme`).
6. **Compilação e Verificação**:
   - Executar `compile_applet` para garantir compilação TypeScript limpa e sem erros.
