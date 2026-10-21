import JSZip from 'jszip';
import { DrupalFile, PageItem } from '../types';
import { loadMenuLinks, INITIAL_MENU_LINKS } from './menuLinksConfig';

export const getDrupalThemeFiles = (customPages: PageItem[] = []): DrupalFile[] => {
  const currentMenuLinks = typeof window !== 'undefined' ? loadMenuLinks() : INITIAL_MENU_LINKS;
  const menuLinksYaml = currentMenuLinks.map(link => `  - id: "${link.id}"
    title: "${link.title}"
    url: "${link.drupalUrl}"
    category: "${link.category}"
    icon: "${link.icon}"
    has_builtin_page: ${link.hasBuiltInPage}
    description: "${link.description.replace(/"/g, '\\"')}"`).join('\n');

  return [
    {
      path: 'ctddcfn_theme.info.yml',
      description: 'Definição do tema Drupal 10/11, metadados, regiões e dependências',
      language: 'yaml',
      category: 'core',
      content: `name: 'CTDDCFN Tactical Theme'
type: theme
description: 'Tema institucional tático para o Comando do Treinamento e do Desenvolvimento Doutrinário do CFN (Marinha do Brasil). Suporta Drupal 10 e 11 com Tailwind CSS e Twig modular.'
package: 'Custom'
core_version_requirement: '^10 || ^11'
base theme: false

libraries:
  - ctddcfn_theme/global-styling
  - ctddcfn_theme/global-scripts

regions:
  header_top: 'Topo Institucional & Brasão'
  primary_nav: 'Navegação Primária Horizontal'
  sidebar: 'Menu Lateral de Doutrina e Ensino'
  highlighted: 'Destaque Operacional / Alertas'
  content: 'Conteúdo Principal'
  help: 'Ajuda / Orientações Pedagógicas'
  footer_first: 'Rodapé - Identidade & Lema'
  footer_second: 'Rodapé - Endereço & Sede'
  footer_third: 'Rodapé - Contatos Oficiais'
  footer_fourth: 'Rodapé - Rede Institucional'
  footer_bottom: 'Rodapé - Classificação & Homologação'
`
    },
    {
      path: 'ctddcfn_theme.libraries.yml',
      description: 'Registro de bibliotecas CSS, JavaScript e fontes externas do tema',
      language: 'yaml',
      category: 'core',
      content: `global-styling:
  version: 1.0.0
  css:
    theme:
      css/tailwind.css: {}
      css/components.css: {}
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap': { type: external, minified: true }
      'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200': { type: external, minified: true }

global-scripts:
  version: 1.0.0
  js:
    js/main.js: {}
  dependencies:
    - core/drupal
    - core/drupalSettings
    - core/once
`
    },
    {
      path: 'ctddcfn_theme.theme',
      description: 'Funções de preprocessamento PHP para injetar variáveis, menus e migalhas no Drupal',
      language: 'php',
      category: 'core',
      content: `<?php

/**
 * @file
 * Funções de suporte e preprocess do tema CTDDCFN para Drupal 10 e 11.
 */

use Drupal\\Core\\Template\\Attribute;

/**
 * Implements hook_preprocess_html().
 */
function ctddcfn_theme_preprocess_html(&$variables) {
  // Adiciona classes utilitárias no <body> para o tema tático
  $variables['attributes']['class'][] = 'bg-surface';
  $variables['attributes']['class'][] = 'text-on-surface';
  $variables['attributes']['class'][] = 'antialiased';
  $variables['attributes']['class'][] = 'selection:bg-secondary-fixed';
  $variables['attributes']['class'][] = 'selection:text-primary-container';
}

/**
 * Implements hook_preprocess_page().
 */
function ctddcfn_theme_preprocess_page(&$variables) {
  $variables['site_name'] = 'CTDDCFN';
  $variables['site_slogan'] = 'A PRONTIDÃO COMEÇA AQUI!';
  $variables['organization_full'] = 'Comando do Treinamento e do Desenvolvimento Doutrinário do Corpo de Fuzileiros Navais';
  $variables['system_status'] = 'SISTEMA OPERACIONAL SEGURO';
  $variables['security_classification'] = 'CLASSIFICAÇÃO: RESERVADO';
  $variables['current_year'] = date('Y');
}

/**
 * Implements hook_preprocess_node().
 */
function ctddcfn_theme_preprocess_node(&$variables) {
  $node = $variables['node'];
  $bundle = $node->bundle();

  // Injeta metadados operacionais e identificadores militares
  $variables['bundle_class'] = 'node--type-' . $bundle;
  $variables['formatted_date'] = \\Drupal::service('date.formatter')->format($node->getCreatedTime(), 'custom', 'd F, Y');
}

/**
 * Implements hook_preprocess_breadcrumb().
 */
function ctddcfn_theme_preprocess_breadcrumb(&$variables) {
  if (!empty($variables['breadcrumb'])) {
    $variables['breadcrumb'][0]['text'] = 'Início';
  }
}
`
    },
    {
      path: 'ctddcfn_theme.breakpoints.yml',
      description: 'Configuração de breakpoints responsivos para o Drupal',
      language: 'yaml',
      category: 'core',
      content: `ctddcfn_theme.mobile:
  label: mobile
  mediaQuery: '(max-width: 767px)'
  weight: 0
  multipliers:
    - 1x
    - 2x

ctddcfn_theme.tablet:
  label: tablet
  mediaQuery: '(min-width: 768px) and (max-width: 1023px)'
  weight: 1
  multipliers:
    - 1x
    - 2x

ctddcfn_theme.desktop:
  label: desktop
  mediaQuery: '(min-width: 1024px)'
  weight: 2
  multipliers:
    - 1x
    - 2x
`
    },
    {
      path: 'templates/layout/html.html.twig',
      description: 'Template mestre HTML do Drupal com tags essenciais e bibliotecas',
      language: 'twig',
      category: 'templates',
      content: `<!DOCTYPE html>
<html{{ html_attributes.addClass('no-js') }}>
  <head>
    <head-placeholder token="{{ placeholder_token }}">
    <title>{{ head_title|safe_join(' | ') }}</title>
    <css-placeholder token="{{ placeholder_token }}">
    <js-placeholder token="{{ placeholder_token }}">
  </head>
  <body{{ attributes }}>
    <a href="#main-content" class="visually-hidden focusable skip-link px-4 py-2 bg-graphite-teal text-white z-50">
      {{ 'Pular para o conteúdo principal'|t }}
    </a>
    {{ page_top }}
    {{ page }}
    {{ page_bottom }}
    <js-bottom-placeholder token="{{ placeholder_token }}">
  </body>
</html>
`
    },
    {
      path: 'templates/layout/page.html.twig',
      description: 'Template principal da página Drupal: Cabeçalho, Barra de Navegação, Sidebar, Conteúdo e Rodapé',
      language: 'twig',
      category: 'templates',
      content: `{#
/**
 * @file
 * Template principal de layout para o tema CTDDCFN.
 * Disponível para Drupal 10 e 11.
 */
#}
<header class="w-full bg-white border-b border-surface-container-high/80 shadow-[0_2px_12px_rgba(0,46,50,0.06)] z-30">
  <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 py-4">
    <!-- Brasão e Identidade Formal -->
    <div class="flex items-center gap-4 shrink-0">
      {{ page.header_top }}
      <a href="{{ front_page }}" class="flex items-center gap-3.5 group">
        <img src="{{ base_path ~ directory }}/logo.svg" alt="Brasão Oficial CTDDCFN" class="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow shrink-0" />
        <div class="flex flex-col text-left">
          <div class="flex items-center gap-2">
            <span class="font-headline text-xl font-bold tracking-tight text-[#002e32] leading-none">CTDDCFN</span>
            <span class="bg-[#bad435]/25 text-[#374500] border border-[#bad435]/50 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider font-technical-code">MARINHA DO BRASIL</span>
          </div>
          <span class="text-[11px] md:text-xs font-bold text-slate-600 tracking-tight uppercase leading-snug line-clamp-1 max-w-[550px] mt-0.5">
            {{ organization_full }}
          </span>
          <span class="text-[10px] font-extrabold text-[#566500] uppercase tracking-widest leading-none mt-1">
            {{ site_slogan }}
          </span>
        </div>
      </a>
    </div>

    <!-- Barra de Busca Centralizada com Bússola Tática -->
    <div class="flex-1 max-w-xl mx-4 hidden md:block">
      <form action="/busca" method="get" class="relative flex items-center">
        <span class="material-symbols-outlined absolute left-3.5 text-slate-400 text-lg pointer-events-none">search</span>
        <input name="q" class="w-full pl-10 pr-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-800 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-[#002e32] focus:ring-1 focus:ring-[#002e32] transition-all placeholder:text-slate-400" placeholder="Pesquisar doutrinas, diretrizes, ordens e sistemas..." type="search" />
      </form>
    </div>

    <!-- Atalhos de Estado, Notificação e Perfil do Militar -->
    <div class="flex items-center gap-2 shrink-0">
      <button class="relative p-2 text-slate-600 hover:text-[#002e32] hover:bg-slate-100 transition-colors rounded-lg" title="Avisos Operacionais" type="button">
        <span class="material-symbols-outlined text-[22px]">notifications</span>
        <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#bad435] ring-2 ring-white"></span>
      </button>
      <div class="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>
      <div class="flex items-center gap-2 pl-1">
        <div class="w-9 h-9 rounded-full border border-[#002e32]/20 p-0.5 bg-slate-100 shrink-0 overflow-hidden flex items-center justify-center">
          <span class="material-symbols-outlined text-slate-700 text-lg">shield_person</span>
        </div>
        <div class="hidden lg:flex flex-col text-left">
          <span class="text-xs font-bold text-slate-900 leading-tight">1º SG-FN</span>
          <span class="text-[10px] text-slate-500 font-technical-code leading-none">OPERADOR</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Barra de Navegação Primária em Graphite Teal (#002E32) -->
  <nav class="bg-[#002E32] text-white border-t border-teal-800">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto">
      {{ page.primary_nav }}
      <div class="shrink-0 py-2 ml-4">
        <a class="inline-flex items-center gap-1.5 bg-[#bad435] hover:bg-[#a8c428] text-[#1c1c1c] px-3.5 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95" href="/user/login">
          <span class="material-symbols-outlined text-sm font-bold">lock</span>
          INTRANET AUTH
        </a>
      </div>
    </div>
  </nav>
</header>

<!-- Corpo com Sidebar + Conteúdo Principal -->
<div class="w-full flex-1 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-6">
  <!-- Barra Lateral (Menu Esquerdo & Bússola) -->
  <aside class="w-full lg:w-72 shrink-0 flex flex-col gap-5">
    {{ page.sidebar }}
  </aside>

  <!-- Área de Conteúdo Principal -->
  <main id="main-content" class="flex-1 min-w-0 flex flex-col gap-6">
    {% if page.highlighted %}
      <div class="w-full">
        {{ page.highlighted }}
      </div>
    {% endif %}

    {{ page.content }}
  </main>
</div>

<!-- Rodapé Institucional Homologado -->
<footer class="w-full bg-[#002E32] text-white py-10 px-4 sm:px-6 lg:px-8 border-t border-teal-800 mt-12">
  <div class="max-w-[1440px] mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      <div class="space-y-3">
        <div class="flex items-center gap-3">
          <img src="{{ base_path ~ directory }}/logo.svg" alt="CTDDCFN Brasão Oficial" class="w-14 h-14 object-contain drop-shadow" />
          <div class="flex flex-col">
            <span class="font-headline text-lg font-bold text-white leading-tight">CTDDCFN</span>
            <span class="font-technical-code text-[11px] text-[#bad435] font-bold uppercase tracking-wider">Marinha do Brasil</span>
          </div>
        </div>
        <p class="text-xs text-teal-100 leading-relaxed font-semibold">
          {{ organization_full }}
        </p>
        <p class="font-technical-code text-[11px] text-[#bad435] font-bold uppercase tracking-widest">
          {{ site_slogan }}
        </p>
      </div>

      <div class="space-y-2">
        {{ page.footer_second }}
      </div>

      <div class="space-y-2">
        {{ page.footer_third }}
      </div>

      <div class="space-y-2">
        {{ page.footer_fourth }}
      </div>
    </div>

    <!-- Linha de Copyright e Homologação Federal -->
    <div class="border-t border-teal-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
      <div class="space-y-1">
        <p class="font-technical-code text-xs text-teal-200">
          © {{ current_year }} CTDDCFN - Comando do Treinamento e do Desenvolvimento Doutrinário do CFN. Todos os direitos reservados.
        </p>
        <p class="font-technical-code text-[11px] text-teal-300/70">
          Portal homologado de acordo com os padrões da Marinha do Brasil e do Governo Federal.
        </p>
      </div>
      <div class="flex items-center gap-4 font-technical-code text-xs text-teal-100 shrink-0">
        <span class="inline-flex items-center gap-1.5 font-bold">
          <span class="w-2 h-2 rounded-full bg-[#bad435] animate-pulse"></span>
          {{ system_status }}
        </span>
        <span class="text-teal-400">•</span>
        <span class="bg-black/30 border border-teal-700/60 px-2.5 py-0.5 rounded text-[#bad435] font-bold">
          {{ security_classification }}
        </span>
      </div>
    </div>
  </div>
</footer>
`
    },
    {
      path: 'templates/content/node--noticia.html.twig',
      description: 'Template Twig para o tipo de conteúdo Notícia / Boletim Doutrinário',
      language: 'twig',
      category: 'templates',
      content: `{#
/**
 * @file
 * Template para exibição do node Notícia (node--noticia.html.twig)
 */
#}
<article{{ attributes.addClass('bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-6') }}>
  <!-- Cabeçalho da Notícia -->
  <header class="space-y-3 border-b border-slate-100 pb-5">
    <div class="flex flex-wrap items-center gap-3 font-technical-code text-xs text-slate-500">
      <span class="px-2 py-0.5 rounded bg-secondary-fixed/20 text-[#374500] font-bold uppercase">
        {{ node.field_categoria.value|default('Comunicação Doutrinária') }}
      </span>
      <span>•</span>
      <span class="flex items-center gap-1">
        <span class="material-symbols-outlined text-[16px] text-teal-800">calendar_today</span>
        {{ formatted_date }}
      </span>
      <span>•</span>
      <span class="text-teal-900 font-semibold">{{ node.field_autor.value|default('SECOM / CTDDCFN') }}</span>
    </div>

    <h1 class="font-headline text-2xl md:text-3xl font-bold text-[#002e32] leading-tight">
      {{ label }}
    </h1>

    {% if node.field_resumo.value %}
      <p class="text-base text-slate-600 leading-relaxed font-medium">
        {{ node.field_resumo.value }}
      </p>
    {% endif %}
  </header>

  <!-- Imagem de Destaque -->
  {% if content.field_imagem|render %}
    <div class="rounded-lg overflow-hidden border border-slate-200 shadow-sm max-h-[480px]">
      {{ content.field_imagem }}
    </div>
  {% endif %}

  <!-- Corpo da Notícia -->
  <div class="prose max-w-none text-slate-800 leading-relaxed space-y-4">
    {{ content.body }}
  </div>

  <!-- Tags e Rodapé do Node -->
  {% if node.field_tags.value %}
    <footer class="pt-4 border-t border-slate-100 flex flex-wrap gap-2 font-technical-code text-xs">
      {{ content.field_tags }}
    </footer>
  {% endif %}
</article>
`
    },
    {
      path: 'templates/content/node--biografia.html.twig',
      description: 'Template Twig para biografias oficiais (Comandante e Suboficial-Mor)',
      language: 'twig',
      category: 'templates',
      content: `{#
/**
 * @file
 * Template para biografias militares (node--biografia.html.twig)
 */
#}
<article{{ attributes.addClass('space-y-6') }}>
  <!-- Hero Card Biográfico -->
  <div class="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start">
    <div class="w-full md:w-56 shrink-0 rounded-lg overflow-hidden border-2 border-slate-200 shadow aspect-[3/4] bg-slate-100 relative">
      {{ content.field_foto }}
      <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#002e32]/90 via-[#002e32]/40 to-transparent p-2 text-center">
        <span class="text-[10px] text-white tracking-widest uppercase font-semibold">Corpo de Fuzileiros Navais</span>
      </div>
    </div>

    <div class="flex-1 space-y-3">
      <span class="text-xs font-bold tracking-widest uppercase text-slate-500 font-technical-code">Curriculum Vitae Oficial</span>
      <h1 class="font-headline text-2xl md:text-3xl font-bold text-[#002e32] leading-tight">
        {{ label }}
      </h1>
      <p class="text-sm md:text-base font-semibold text-teal-800">
        {{ node.field_cargo.value }}
      </p>

      <div class="pt-2 flex flex-wrap gap-2 text-xs">
        <div class="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-slate-700">
          <span class="font-bold text-[#002e32]">Promoção:</span>
          <span>{{ node.field_data_promocao.value }}</span>
        </div>
        <div class="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-slate-700">
          <span class="font-bold text-[#002e32]">Naturalidade:</span>
          <span>{{ node.field_naturalidade.value }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Dados Pessoais & Carreira -->
  <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
    <h2 class="font-headline text-lg font-bold text-[#002e32] border-b pb-2 flex items-center gap-2">
      <span class="w-1.5 h-4 bg-[#bad435] rounded-sm"></span>
      Trajetória &amp; Carreira
    </h2>
    <div class="text-sm leading-relaxed text-slate-700">
      {{ content.body }}
    </div>
  </div>
</article>
`
    },
    {
      path: 'templates/content/node--diretriz.html.twig',
      description: 'Template Twig para Missão, Visão e Tarefas Regimentais',
      language: 'twig',
      category: 'templates',
      content: `{#
/**
 * @file
 * Template para Diretrizes Doutrinárias e Missão (node--diretriz.html.twig)
 */
#}
<article{{ attributes.addClass('space-y-6') }}>
  <header class="bg-white rounded-xl shadow-sm p-6 md:p-8 border-t-4 border-[#002e32] space-y-2">
    <span class="font-technical-code text-xs text-[#566500] font-bold uppercase tracking-wider">
      Diretriz Estratégica CFN • Marinha do Brasil
    </span>
    <h1 class="font-headline text-2xl md:text-3xl font-bold text-[#002e32]">
      {{ label }}
    </h1>
    {% if node.field_subtitulo.value %}
      <p class="text-slate-600 font-medium">{{ node.field_subtitulo.value }}</p>
    {% endif %}
  </header>

  <!-- Bloco de Destaque Oficial -->
  {% if node.field_proposito_superior.value %}
    <div class="bg-[#002E32] text-white rounded-xl p-6 md:p-8 shadow-md relative overflow-hidden">
      <blockquote class="font-headline text-lg md:text-xl leading-relaxed text-white">
        “{{ node.field_proposito_superior.value }}”
      </blockquote>
    </div>
  {% endif %}

  <!-- Conteúdo Estruturado -->
  <div class="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-slate-200 leading-relaxed text-slate-800">
    {{ content.body }}
  </div>
</article>
`
    },
    {
      path: 'templates/content/node--curriculo.html.twig',
      description: 'Template Twig para Matrizes Curriculares e Cursos do CFN',
      language: 'twig',
      category: 'templates',
      content: `{#
/**
 * @file
 * Template para Cursos e Matrizes Curriculares (node--curriculo.html.twig)
 */
#}
<article{{ attributes.addClass('bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-4') }}>
  <div class="flex items-center justify-between border-b pb-3">
    <div class="flex items-center gap-2">
      <span class="material-symbols-outlined text-[#002e32] text-2xl">school</span>
      <h1 class="font-headline text-xl font-bold text-[#002e32]">{{ label }}</h1>
    </div>
    <span class="px-2.5 py-1 rounded bg-[#bad435]/20 text-[#374500] font-technical-code text-xs font-bold uppercase">
      {{ node.field_sigla.value }}
    </span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-technical-code text-xs">
    <div class="p-3 bg-slate-50 rounded">
      <span class="text-slate-500 uppercase block">Vigência</span>
      <span class="text-slate-900 font-bold">{{ node.field_vigencia.value|default('2026') }}</span>
    </div>
    <div class="p-3 bg-slate-50 rounded">
      <span class="text-slate-500 uppercase block">Modalidade</span>
      <span class="text-slate-900 font-bold">{{ node.field_modalidade.value|default('Presencial') }}</span>
    </div>
    <div class="p-3 bg-slate-50 rounded">
      <span class="text-slate-500 uppercase block">Homologação</span>
      <span class="text-slate-900 font-bold">{{ node.field_portaria.value|default('Portaria CTDDCFN') }}</span>
    </div>
  </div>

  <div class="prose max-w-none text-slate-700 text-sm leading-relaxed">
    {{ content.body }}
  </div>
</article>
`
    },
    {
      path: 'templates/content/node--page.html.twig',
      description: 'Template Twig para Páginas Básicas e Novas Páginas criadas no CMS',
      language: 'twig',
      category: 'templates',
      content: `{#
/**
 * @file
 * Template para Páginas Básicas Institucionais (node--page.html.twig)
 */
#}
<article{{ attributes.addClass('bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6') }}>
  <header class="border-b border-slate-100 pb-4 space-y-2">
    <nav class="flex items-center gap-2 text-xs font-technical-code text-slate-500 uppercase">
      <a href="{{ front_page }}" class="hover:text-[#002e32]">Início</a>
      <span>/</span>
      <span class="text-[#002e32] font-semibold">{{ label }}</span>
    </nav>
    <h1 class="font-headline text-2xl md:text-3xl font-bold text-[#002e32]">
      {{ label }}
    </h1>
  </header>

  {% if content.field_imagem|render %}
    <div class="rounded-lg overflow-hidden border border-slate-200">
      {{ content.field_imagem }}
    </div>
  {% endif %}

  <div class="prose max-w-none text-slate-800 leading-relaxed text-sm sm:text-base">
    {{ content.body }}
  </div>
</article>
`
    },
    {
      path: 'templates/content/node--ex-comandante.html.twig',
      description: 'Template Twig para a Galeria Histórica de Ex-Comandantes',
      language: 'twig',
      category: 'templates',
      content: `{#
/**
 * @file
 * Template para exibição de Ex-Comandante do CDD-CFN / CTDDCFN.
 */
#}
<article{{ attributes.addClass('bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col') }}>
  <div class="relative bg-slate-100 p-4 pb-0 flex justify-center items-center overflow-hidden rounded-t-lg">
    <div class="relative w-48 h-60 rounded-t-lg overflow-hidden border-2 border-slate-300 shadow-inner bg-slate-200">
      {{ content.field_foto_oficial }}
      <div class="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#002E32] via-[#BAD435] to-[#8F7034]"></div>
    </div>
  </div>
  <div class="p-5 flex-grow flex flex-col justify-between text-center bg-white border-t border-slate-100">
    <span class="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-100 text-[#002E32] mb-1 font-mono">
      {{ content.field_posto_graduacao }}
    </span>
    <h3 class="text-sm font-extrabold text-slate-900 uppercase font-serif">
      {{ label }}
    </h3>
    <div class="mt-3 pt-2 border-t border-slate-100 text-xs font-mono text-slate-700">
      <span class="block text-slate-500 text-[10px]">Período de Comando:</span>
      <strong>{{ content.field_periodo_comando }}</strong>
    </div>
  </div>
</article>
`
    },
    {
      path: 'templates/content/node--podcast.html.twig',
      description: 'Template Twig para episódios do Podcast Momento Doutrinário',
      language: 'twig',
      category: 'templates',
      content: `{#
/**
 * @file
 * Template para episódios do Podcast Momento Doutrinário (Spotify e Intranet).
 */
#}
<article{{ attributes.addClass('p-4 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition') }}>
  <div class="flex items-center justify-between gap-3">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-[#002E32] text-[#BAD435] flex items-center justify-center font-bold">
        <i class="ph ph-headphones text-lg"></i>
      </div>
      <div>
        <h4 class="text-xs font-bold text-[#002E32]">{{ label }}</h4>
        <p class="text-[11px] text-slate-500 font-mono">{{ content.field_duracao }} • {{ content.field_tema }}</p>
      </div>
    </div>
    <div class="flex items-center gap-2">
      {{ content.field_audio_link }}
    </div>
  </div>
</article>
`
    },
    {
      path: 'templates/navigation/menu--sidebar.html.twig',
      description: 'Template Twig para o menu lateral tático integrado ao painel do Drupal 10/11',
      language: 'twig',
      category: 'templates',
      content: `{#
/**
 * @file
 * Template para o menu lateral tático (menu--sidebar.html.twig).
 * Permite que cada link aponte para a URL configurada no Drupal Admin (/admin/structure/menu/manage/sidebar).
 */
#}
{% import _self as menus %}

<nav class="tactical-sidebar-menu space-y-1">
  {{ menus.menu_links(items, attributes, 0) }}
</nav>

{% macro menu_links(items, attributes, menu_level) %}
  {% import _self as menus %}
  {% if items %}
    <ul class="space-y-1">
      {% for item in items %}
        {%
          set item_classes = [
            'group relative flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg transition-all',
            item.in_active_trail ? 'bg-[#002E32] text-white font-bold shadow-sm' : 'text-slate-700 hover:bg-slate-100 hover:text-[#002E32]',
          ]
        %}
        <li class="menu-item">
          <a href="{{ item.url }}"{{ item.attributes.addClass(item_classes) }}{% if item.url.isExternal %} target="_blank" rel="noopener noreferrer"{% endif %}>
            <div class="flex items-center gap-2.5 min-w-0">
              <span class="material-symbols-outlined text-[18px] {{ item.in_active_trail ? 'text-[#BAD435]' : 'text-slate-400 group-hover:text-[#002E32]' }}">
                {{ item.options.attributes.icon|default('article') }}
              </span>
              <span class="truncate">{{ item.title }}</span>
            </div>

            {% if item.url.isExternal %}
              <span class="material-symbols-outlined text-[14px] text-slate-400 opacity-70 group-hover:opacity-100">
                open_in_new
              </span>
            {% endif %}
          </a>

          {% if item.below %}
            <div class="pl-4 mt-1 border-l-2 border-slate-200 space-y-1">
              {{ menus.menu_links(item.below, attributes, menu_level + 1) }}
            </div>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  {% endif %}
{% endmacro %}
`
    },
    {
      path: 'config/install/system.menu.sidebar.yml',
      description: 'Entidade de configuração do Menu Lateral Doutrinário no Drupal 10',
      language: 'yaml',
      category: 'config',
      content: `langcode: pt-br
status: true
dependencies:
  enforced:
    module:
      - ctddcfn_theme
id: sidebar
label: 'Menu Lateral Doutrinário (CTDDCFN)'
description: 'Links institucionais e páginas configuráveis do menu esquerdo da doutrina e ensino naval.'
locked: false
`
    },
    {
      path: 'config/install/menu_links_export.yml',
      description: 'Exportação com URLs e atalhos configurados pelo operador para o Drupal 10',
      language: 'yaml',
      category: 'config',
      content: `# Exportação de Links do Menu Lateral para o Drupal 10/11
# Cada link pode ser gerenciado em: /admin/structure/menu/manage/sidebar
menu_name: sidebar
links:
${menuLinksYaml}
`
    },
    {
      path: 'config/install/node.type.noticia.yml',
      description: 'Configuração YAML do tipo de conteúdo Notícia para importação no Drupal 10',
      language: 'yaml',
      category: 'config',
      content: `langcode: pt-br
status: true
dependencies:
  enforced:
    module:
      - ctddcfn_theme
name: 'Notícia / Boletim Doutrinário'
type: noticia
description: 'Informativos, eventos, lições aprendidas e publicações do CTDDCFN e SECOM.'
help: 'Preencha o título, categoria doutrinária, autor e corpo da matéria.'
new_revision: true
preview_mode: 1
display_submitted: true
`
    },
    {
      path: 'config/install/node.type.biografia.yml',
      description: 'Configuração YAML do tipo de conteúdo Biografia Militar',
      language: 'yaml',
      category: 'config',
      content: `langcode: pt-br
status: true
dependencies:
  enforced:
    module:
      - ctddcfn_theme
name: 'Biografia Militar'
type: biografia
description: 'Perfis curriculares de comandantes, suboficiais e autoridades navais.'
help: 'Informe posto/graduação, comissões, cursos e condecorações.'
new_revision: true
preview_mode: 1
display_submitted: false
`
    },
    {
      path: 'config/install/node.type.diretriz.yml',
      description: 'Configuração YAML do tipo de conteúdo Diretriz e Missão Institucional',
      language: 'yaml',
      category: 'config',
      content: `langcode: pt-br
status: true
dependencies:
  enforced:
    module:
      - ctddcfn_theme
name: 'Diretriz Institucional'
type: diretriz
description: 'Atribuições estratégicas, tarefas regimentais, missão e visão de futuro.'
help: 'Descreva a fundamentação regulamentar e o propósito superior.'
new_revision: true
preview_mode: 1
display_submitted: false
`
    },
    {
      path: 'config/install/node.type.curriculo.yml',
      description: 'Configuração YAML do tipo de conteúdo Matriz de Curso',
      language: 'yaml',
      category: 'config',
      content: `langcode: pt-br
status: true
dependencies:
  enforced:
    module:
      - ctddcfn_theme
name: 'Matriz Curricular / Curso'
type: curriculo
description: 'Cursos de formação, aperfeiçoamento, estágios operativos e programas de ensino.'
help: 'Informe a sigla, carga horária, vigência do PLACAPE e ementa curricular.'
new_revision: true
preview_mode: 1
display_submitted: false
`
    },
    {
      path: 'css/tailwind.css',
      description: 'Folha de estilos mestre compilada para o tema Drupal 10+',
      language: 'css',
      category: 'assets',
      content: `/**
 * @file
 * Tailwind CSS compilado para o tema CTDDCFN (Drupal 10 / 11)
 */
@import "tailwindcss";

:root {
  --color-primary: #002e32;
  --color-primary-surface: #00383d;
  --color-secondary: #bad435;
  --color-secondary-dark: #8fa619;
  --color-industrial: #1c1c1c;
  --color-canvas: #f8fafc;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #f7faf9;
  color: #181c1c;
}

h1, h2, h3, h4, h5, h6, .font-headline {
  font-family: 'Montserrat', sans-serif;
}

.font-technical-code {
  font-family: 'Inter', monospace;
  font-feature-settings: 'tnum';
}
`
    },
    {
      path: 'js/main.js',
      description: 'Script frontend Drupal para comportamento de abas, filtros e busca tática',
      language: 'javascript',
      category: 'assets',
      content: `/**
 * @file
 * Script principal de interatividade para o tema CTDDCFN no Drupal 10/11.
 */
(function (Drupal, once) {
  'use strict';

  Drupal.behaviors.ctddcfnTheme = {
    attach: function (context, settings) {
      // Inicia comportamento das abas e navegação tática
      once('ctddcfn-tabs', '[data-tab-target]', context).forEach(function (button) {
        button.addEventListener('click', function () {
          const targetId = this.getAttribute('data-tab-target');
          const parent = this.closest('.tabs-wrapper') || document;
          
          parent.querySelectorAll('[data-tab-target]').forEach(btn => {
            btn.classList.remove('bg-graphite-teal', 'text-white', 'active');
          });
          this.classList.add('bg-graphite-teal', 'text-white', 'active');

          parent.querySelectorAll('.tab-content').forEach(content => {
            if (content.id === targetId) {
              content.classList.remove('hidden');
            } else {
              content.classList.add('hidden');
            }
          });
        });
      });
    }
  };
})(Drupal, once);
`
    },
    {
      path: 'config/install/node.type.flash_doutrinario.yml',
      description: 'Definição do tipo de conteúdo Flash Doutrinário com anexo PDF gerenciado no Drupal',
      language: 'yaml',
      category: 'config',
      content: `langcode: pt-br
status: true
dependencies:
  enforced:
    module:
      - node
      - file
name: 'Flash Doutrinário'
type: flash_doutrinario
description: 'Boletins operacionais de difusão doutrinária imediata com upload de arquivo PDF gerenciado.'
help: 'Preencha o número da edição, assunto tático e faça o upload do arquivo PDF oficial.'
new_revision: true
preview_mode: 1
display_submitted: true
`
    },
    {
      path: 'config/install/field.storage.node.field_arquivo_pdf.yml',
      description: 'Storage do campo de arquivo PDF gerenciado (Managed File API)',
      language: 'yaml',
      category: 'config',
      content: `langcode: pt-br
status: true
dependencies:
  module:
    - node
    - file
id: node.field_arquivo_pdf
field_name: field_arquivo_pdf
entity_type: node
type: file
settings:
  target_type: file
  display_field: false
  display_default: false
  uri_scheme: public
module: file
locked: false
cardinality: 1
translatable: false
indexes: {}
persist_with_no_fields: false
custom_storage: false
`
    },
    {
      path: 'config/install/field.field.node.flash_doutrinario.field_arquivo_pdf.yml',
      description: 'Instância do campo de anexo PDF com regras de upload e diretório de armazenamento',
      language: 'yaml',
      category: 'config',
      content: `langcode: pt-br
status: true
dependencies:
  config:
    - field.storage.node.field_arquivo_pdf
    - node.type.flash_doutrinario
  module:
    - file
id: node.flash_doutrinario.field_arquivo_pdf
field_name: field_arquivo_pdf
entity_type: node
bundle: flash_doutrinario
label: 'Arquivo PDF do Flash Doutrinário'
description: 'Upload do documento oficial homologado em PDF para o acervo de produtos doutrinários.'
required: true
translatable: false
default_value: {}
default_value_callback: ''
settings:
  file_directory: 'flash_doutrinario/[date:custom:Y]-[date:custom:m]'
  file_extensions: 'pdf'
  max_filesize: '50 MB'
  description_field: true
field_type: file
`
    },
    {
      path: 'templates/content/node--flash-doutrinario.html.twig',
      description: 'Template Twig do card e visualização de Flash Doutrinário com download do arquivo PDF',
      language: 'twig',
      category: 'templates',
      content: `{#
/**
 * @file
 * Template Twig do nó Flash Doutrinário para CTDDCFN Tactical Theme.
 *
 * Variáveis disponíveis:
 * - node: Entidade do nó Flash Doutrinário.
 * - content: Elementos renderizáveis (field_arquivo_pdf, body, etc.).
 * - label: Título / Assunto Doutrinário.
 * - url: URL direta do nó no Drupal.
 */
#}
{%
  set classes = [
    'flash-doutrinario-item',
    'bg-white',
    'rounded-2xl',
    'border',
    'border-slate-200',
    'shadow-sm',
    'hover:shadow-xl',
    'transition-all',
    'duration-300',
    'overflow-hidden',
    'flex',
    'flex-col',
    view_mode ? 'node--view-mode-' ~ view_mode|clean_class,
  ]
%}

<article{{ attributes.addClass(classes) }}>
  {# Thumbnail / Visualizador da Capa do Arquivo #}
  <div class="flash-cover-container p-3 pb-1 bg-slate-50/60 flex items-center justify-center">
    <div class="w-full aspect-[1/1.4] max-h-[290px] rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-white relative group">
      {% if content.field_arquivo_pdf %}
        {{ content.field_arquivo_pdf }}
      {% endif %}
    </div>
  </div>

  {# Identificação da Edição #}
  <div class="flash-meta p-4 pt-3 flex flex-col items-center justify-center text-center">
    <h3 class="text-xl font-serif text-[#2a5035] tracking-normal">
      {{ node.field_numero_edicao.value|default(label) }}
    </h3>
    <p class="text-[11px] text-slate-500 font-sans line-clamp-1 mt-0.5">
      {{ label }}
    </p>
  </div>

  {# Ação de Download do Arquivo PDF Gerenciado #}
  {% if node.field_arquivo_pdf.entity %}
    <div class="flash-action px-4 pb-4 mt-auto">
      <a href="{{ file_url(node.field_arquivo_pdf.entity.uri.value) }}" 
         class="w-full py-2 bg-[#bad435] hover:bg-[#8fa619] text-[#002e32] text-xs font-mono font-bold rounded-xl transition flex items-center justify-center gap-1.5 shadow"
         download>
        <span class="material-symbols-outlined text-sm">download</span>
        <span>BAIXAR PDF ({{ node.field_arquivo_pdf.entity.filesize.value|format_size }})</span>
      </a>
    </div>
  {% endif %}

  {# Faixa de Cor Temática na Base #}
  <div class="h-1.5 w-full mt-auto bg-[#bad435]"></div>
</article>
`
    },
    {
      path: 'templates/layout/page--front.html.twig',
      description: 'Template Twig da página inicial (Início / Notícias / Banners Doutrinários)',
      language: 'twig',
      category: 'templates',
      content: `{#
/**
 * @file
 * Template da página inicial (page--front.html.twig)
 */
#}
<div class="space-y-6">
  <!-- Banner Hero de Destaque -->
  <section class="bg-gradient-to-r from-[#002E32] to-[#014248] rounded-2xl p-6 md:p-8 text-white relative overflow-hidden shadow-lg border-b-4 border-[#BAD435]">
    <div class="relative z-10 max-w-3xl space-y-3">
      <span class="px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-[#BAD435] text-[#002E32] rounded font-mono">
        DESTAQUE DOUTRINÁRIO
      </span>
      <h1 class="font-headline text-2xl md:text-4xl font-extrabold tracking-tight">
        {{ page.hero_title|default('Centro de Treinamento e Desenvolvimento Doutrinário do CFN') }}
      </h1>
      <p class="text-sm md:text-base text-slate-200 leading-relaxed font-sans">
        {{ page.hero_lead|default('Disseminação de conceitos táticos, publicações normativas e planejamento de capacitação militar anfíbia.') }}
      </p>
    </div>
  </section>

  <!-- Grade de Notícias e Boletins Recentes -->
  <section class="space-y-4">
    <div class="flex items-center justify-between pb-2 border-b border-slate-200">
      <h2 class="font-headline text-lg font-bold text-[#002E32] uppercase flex items-center gap-2">
        <span class="w-1.5 h-4 bg-[#BAD435] rounded-sm"></span>
        Últimas Publicações &amp; Notícias
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {{ page.content }}
    </div>
  </section>
</div>
`
    },
    {
      path: 'templates/content/node--vagas-2027.html.twig',
      description: 'Template Twig para Solicitação de Vagas 2027 (Layout RACE em 2 colunas, 6 tabelas com 35 turmas e 556 vagas)',
      language: 'twig',
      category: 'templates',
      content: `{#
/**
 * @file
 * Template para Solicitação de Vagas 2027 (node--vagas-2027.html.twig).
 * Layout em 2 colunas (8 colunas conteúdo + 4 colunas apoio), chips de filtro e tabelas de cotas.
 */
#}
<article class="space-y-6 font-sans">
  <!-- Banner Oficial COMIMSUP -->
  <header class="bg-[#002E32] text-white rounded-2xl p-6 md:p-8 shadow-lg border-b-4 border-[#BAD435] font-mono">
    <div class="flex flex-wrap items-center gap-2 text-xs text-[#BAD435] font-bold mb-2">
      <span class="px-2 py-0.5 rounded bg-[#BAD435]/20 border border-[#BAD435]/40 uppercase">Diretriz COMIMSUP</span>
      <span>•</span>
      <span>CICLO DE INSTRUÇÃO E ENSINO 2027</span>
    </div>
    <h1 class="font-headline text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
      Solicitação de Vagas em Cursos e Estágios para 2027
    </h1>
    <p class="text-xs md:text-sm text-slate-300 font-sans mt-2 max-w-3xl leading-relaxed">
      Planejamento de cotas de vagas regulamentadas para Organizações Militares do CFN e público extra-CFN.
    </p>
  </header>

  <!-- Grid Principal 2 Colunas (8 colunas / 4 colunas) -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
    <!-- Coluna Principal (8 colunas) -->
    <div class="lg:col-span-8 space-y-6">
      <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
        <h2 class="font-headline text-base font-bold text-[#002E32] uppercase border-b pb-2">
          Orientações e Procedimentos Regimentais
        </h2>
        <div class="prose max-w-none text-xs text-slate-700 leading-relaxed space-y-2">
          {{ content.body }}
        </div>
      </div>

      <!-- Tabelas de Cursos -->
      <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
        <h2 class="font-headline text-base font-bold text-[#002E32] uppercase border-b pb-2 flex items-center justify-between">
          <span>Quadro Geral de Vagas e Cursos (35 Turmas • 556 Vagas)</span>
        </h2>
        {{ content.field_tabelas_vagas }}
      </div>
    </div>

    <!-- Barra Lateral de Apoio (4 colunas) -->
    <div class="lg:col-span-4 space-y-6">
      <!-- Prazo Crítico Card -->
      <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-3">
        <div class="flex items-center gap-2 text-[#002E32] font-mono text-xs font-bold uppercase">
          <span class="material-symbols-outlined text-[#BAD435]">event_upcoming</span>
          <span>Prazo Regimental</span>
        </div>
        <div class="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
          Data limite de remessa de candidaturas: <strong>22 de julho de 2026</strong>
        </div>
      </div>

      <!-- Métricas Card -->
      <div class="bg-[#002E32] text-white rounded-xl p-5 shadow-sm space-y-3 font-mono text-xs">
        <h3 class="font-bold text-[#BAD435] uppercase">Resumo de Cotas</h3>
        <div class="grid grid-cols-2 gap-2 text-center">
          <div class="p-2 rounded bg-black/30">
            <div class="text-xl font-bold text-[#BAD435]">35</div>
            <div class="text-[10px] text-slate-300">Turmas</div>
          </div>
          <div class="p-2 rounded bg-black/30">
            <div class="text-xl font-bold text-white">556</div>
            <div class="text-[10px] text-slate-300">Total Vagas</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>
`
    },
    {
      path: 'templates/content/node--identidade-visual.html.twig',
      description: 'Template Twig para o Manual de Identidade Visual, Paletas Hex/RGB e Download de Vetores',
      language: 'twig',
      category: 'templates',
      content: `{#
/**
 * @file
 * Template para o Manual de Identidade Visual Oficial (node--identidade-visual.html.twig)
 */
#}
<article class="space-y-6 font-sans">
  <header class="bg-[#002E32] text-white rounded-2xl p-6 md:p-8 shadow-lg border-b-4 border-[#BAD435] font-mono">
    <div class="text-xs text-[#BAD435] font-bold uppercase mb-1">Diretriz de Marca &amp; Comunicação Estratégica</div>
    <h1 class="font-headline text-2xl md:text-3xl font-bold uppercase text-white">Manual Oficial de Identidade Visual</h1>
    <p class="text-xs md:text-sm text-slate-300 font-sans mt-2 max-w-2xl leading-relaxed">
      Padrões cromáticos oficiais, tipografias homologadas e repositório de brasões vetoriais de alta resolução do CTDDCFN.
    </p>
  </header>

  <!-- Paleta Oficial -->
  <section class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
    <h2 class="font-headline text-base font-bold text-[#002E32] uppercase border-b pb-2">Paleta Institucional Homologada</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
      <div class="p-4 rounded-xl bg-[#002E32] text-white space-y-2">
        <span class="block text-[10px] text-[#BAD435] font-bold uppercase">Primária</span>
        <strong class="block text-sm">Graphite Teal Deep</strong>
        <div class="text-[11px] text-slate-300">HEX: #002E32<br>RGB: 0, 46, 50</div>
      </div>
      <div class="p-4 rounded-xl bg-[#BAD435] text-[#002E32] space-y-2">
        <span class="block text-[10px] text-[#002E32] font-bold uppercase">Acento</span>
        <strong class="block text-sm">Renewal Green</strong>
        <div class="text-[11px] text-[#002E32]">HEX: #BAD435<br>RGB: 186, 212, 53</div>
      </div>
      <div class="p-4 rounded-xl bg-slate-100 text-slate-900 border border-slate-300 space-y-2">
        <span class="block text-[10px] text-slate-500 font-bold uppercase">Superfície</span>
        <strong class="block text-sm">Canvas Surface</strong>
        <div class="text-[11px] text-slate-700">HEX: #F7FAF9<br>RGB: 247, 250, 249</div>
      </div>
      <div class="p-4 rounded-xl bg-[#1C1C1C] text-white space-y-2">
        <span class="block text-[10px] text-slate-400 font-bold uppercase">Contraste</span>
        <strong class="block text-sm">Graphite Industrial</strong>
        <div class="text-[11px] text-slate-300">HEX: #1C1C1C<br>RGB: 28, 28, 28</div>
      </div>
    </div>
  </section>

  <!-- Download de Brasões e Vetores -->
  <section class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
    <h2 class="font-headline text-base font-bold text-[#002E32] uppercase border-b pb-2">Repositório de Ativos Oficiais</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {{ content.field_arquivos_marca }}
    </div>
  </section>
</article>
`
    },
    {
      path: 'templates/content/node--com-social-media.html.twig',
      description: 'Template Twig para Canais Multimídia de Comunicação Social (Spotify e YouTube)',
      language: 'twig',
      category: 'templates',
      content: `{#
/**
 * @file
 * Template para Canais Multimídia (node--com-social-media.html.twig)
 */
#}
<article class="space-y-6 font-sans">
  <header class="bg-[#002E32] text-white rounded-2xl p-6 md:p-8 shadow-lg border-b-4 border-[#BAD435] font-mono">
    <div class="text-xs text-[#BAD435] font-bold uppercase mb-1">Comunicação Social e Estratégica</div>
    <h1 class="font-headline text-2xl md:text-3xl font-bold uppercase text-white">{{ label }}</h1>
    <p class="text-xs md:text-sm text-slate-300 font-sans mt-2 max-w-2xl leading-relaxed">
      {{ node.field_descricao.value|default('Transmissões oficiais, episódios em áudio e vídeos doutrinários da Força Naval.') }}
    </p>
  </header>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {{ content.body }}
  </div>
</article>
`
    },
    {
      path: 'templates/content/node--segprotaut.html.twig',
      description: 'Template Twig para o Curso Especial de Segurança e Proteção de Autoridades (C-Esp-SegProtAut)',
      language: 'twig',
      category: 'templates',
      content: `{#
/**
 * @file
 * Template para o C-Esp-SegProtAut (node--segprotaut.html.twig)
 */
#}
<article class="space-y-6 font-sans">
  <header class="bg-[#002E32] text-white rounded-2xl p-6 md:p-8 shadow-lg border-b-4 border-[#BAD435] font-mono">
    <div class="text-xs text-[#BAD435] font-bold uppercase mb-1">Ensino &amp; Especialização Militar</div>
    <h1 class="font-headline text-2xl md:text-3xl font-bold uppercase text-white">
      C-Esp-SegProtAut — Segurança e Proteção de Autoridades
    </h1>
    <p class="text-xs md:text-sm text-slate-300 font-sans mt-2 max-w-2xl leading-relaxed">
      Especialização tática em escolta aproximada, proteção de dignitários e tiro defensivo militar.
    </p>
  </header>

  <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
    {{ content.body }}
  </div>
</article>
`
    },
    {
      path: 'templates/content/node--race.html.twig',
      description: 'Template Twig para Relatório de Análise de Conclusão de Curso (RACE - EMA-143)',
      language: 'twig',
      category: 'templates',
      content: `{#
/**
 * @file
 * Template para Relatório de Análise RACE (node--race.html.twig)
 */
#}
<article class="space-y-6 font-sans">
  <header class="bg-[#002E32] text-white rounded-2xl p-6 md:p-8 shadow-lg border-b-4 border-[#BAD435] font-mono">
    <div class="text-xs text-[#BAD435] font-bold uppercase mb-1">Diretoria de Ensino da Marinha • EMA-143</div>
    <h1 class="font-headline text-2xl md:text-3xl font-bold uppercase text-white">
      RACE — Relatório de Análise de Conclusão de Curso
    </h1>
    <p class="text-xs md:text-sm text-slate-300 font-sans mt-2 max-w-2xl leading-relaxed">
      Avaliação pedagógica, indicadores de rendimento e auditoria educacional pós-curso.
    </p>
  </header>

  <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
    {{ content.body }}
  </div>
</article>
`
    },
    {
      path: 'templates/content/node--placape.html.twig',
      description: 'Template Twig para o Plano de Capacitação de Pessoal (PLACAPE 2025/2026)',
      language: 'twig',
      category: 'templates',
      content: `{#
/**
 * @file
 * Template para o PLACAPE (node--placape.html.twig)
 */
#}
<article class="space-y-6 font-sans">
  <header class="bg-[#002E32] text-white rounded-2xl p-6 md:p-8 shadow-lg border-b-4 border-[#BAD435] font-mono">
    <div class="text-xs text-[#BAD435] font-bold uppercase mb-1">Planejamento Bienal 2025/2026</div>
    <h1 class="font-headline text-2xl md:text-3xl font-bold uppercase text-white">
      PLACAPE — Plano de Capacitação de Pessoal
    </h1>
    <p class="text-xs md:text-sm text-slate-300 font-sans mt-2 max-w-2xl leading-relaxed">
      Diretriz geral de cursos, estágios e qualificações operativas para a guarnição do CFN.
    </p>
  </header>

  <div class="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
    {{ content.body }}
  </div>
</article>
`
    },
    {
      path: 'README.md',
      description: 'Guia oficial de instalação e configuração do tema no Drupal 10 e 11',
      language: 'markdown',
      category: 'docs',
      content: `# Tema Tático CTDDCFN para Drupal 10 & 11

Tema institucional homologado para o **Comando do Treinamento e do Desenvolvimento Doutrinário do Corpo de Fuzileiros Navais (Marinha do Brasil)**.

## Compatibilidade
- **Drupal Core**: ^10.0 || ^11.0
- **PHP**: 8.1+ / 8.2+
- **Padrão de Layout**: Tailwind CSS 4 + Twig Engine

## Instalação Passo a Passo

### 1. Copiar Arquivos
Descompacte a pasta do tema no diretório de temas customizados do seu Drupal:
\`\`\`bash
cd /caminho/do/seu/drupal
mkdir -p web/themes/custom
unzip ctddcfn_theme.zip -d web/themes/custom/
\`\`\`

### 2. Ativar o Tema via Drush ou Painel Admin
Via terminal com Drush:
\`\`\`bash
drush theme:enable ctddcfn_theme
drush config-set system.theme default ctddcfn_theme
drush cr
\`\`\`
Ou acesse **Administração > Aparência** (\`/admin/appearance\`), localize **CTDDCFN Tactical Theme** e clique em **Instalar e Definir como Padrão**.

### 3. Tipos de Conteúdo Pré-Configurados
Para habilitar os tipos de conteúdo personalizados:
- **Notícia / Boletim Doutrinário** (\`noticia\`)
- **Biografia Militar** (\`biografia\`)
- **Diretriz Institucional** (\`diretriz\`)
- **Matriz Curricular / Curso** (\`curriculo\`)

Importe as configurações em **Administração > Configuração > Desenvolvimento > Sincronização de Configuração** (\`/admin/config/development/configuration\`).

### 4. Gerenciamento dos Links do Menu Lateral (Sidebar)
Todos os itens do menu esquerdo estão mapeados na entidade de menu \`sidebar\` (\`config/install/system.menu.sidebar.yml\`) e utilizam o template \`templates/navigation/menu--sidebar.html.twig\`.

Para alterar ou adicionar URLs para qualquer link pelo painel do Drupal:
1. No menu superior do Drupal, acesse **Estrutura > Menus** (\`/admin/structure/menu\`).
2. Localize **Menu Lateral Doutrinário (CTDDCFN)** e clique em **Editar menu** (\`/admin/structure/menu/manage/sidebar\`).
3. Localize o link que deseja configurar (ex: *Acordo de Cooperação Técnica*, *Guia do Usuário SIGOD*, *CIM*, etc.) e clique em **Editar**.
4. No campo **Link**, insira a URL desejada:
   - Para uma página ou nó interno do Drupal: \`internal:/node/NUMERO\` ou \`internal:/sua-pagina\`
   - Para um portal ou sistema externo: \`https://exemplo.marinha.mil.br/sistema\`
5. Clique em **Salvar**. A nova rota passará a funcionar imediatamente na interface tática!

---
Homologado em conformidade com as normas de segurança e identidade visual da Marinha do Brasil.
`
    }
  ];
};

/**
 * Generates and triggers download of the full Drupal 10 theme ZIP file
 */
export async function downloadDrupalThemeZip(customPages: PageItem[] = []): Promise<void> {
  const zip = new JSZip();
  const folder = zip.folder('ctddcfn_theme');
  if (!folder) return;

  const files = getDrupalThemeFiles(customPages);

  // Add all static files
  for (const file of files) {
    folder.file(file.path, file.content);
  }

  // Also include custom pages exported as Drupal YAML content seeds
  if (customPages.length > 0) {
    const customPagesJson = JSON.stringify(customPages, null, 2);
    folder.file('config/custom_pages_seed.json', customPagesJson);
  }

  // Generate binary zip
  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'ctddcfn_drupal10_theme.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export const exportDrupalZip = downloadDrupalThemeZip;

