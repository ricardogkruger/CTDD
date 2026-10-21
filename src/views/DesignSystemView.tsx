import React, { useState } from 'react';
import { INITIAL_MENU_LINKS } from '../data/menuLinksConfig';

export const DesignSystemView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'typography' | 'colors' | 'components' | 'icons' | 'drupal'>('icons');
  const [iconSearchTerm, setIconSearchTerm] = useState('');
  const [iconCategoryFilter, setIconCategoryFilter] = useState('todos');
  const [iconTesterValue, setIconTesterValue] = useState('military_tech');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIcon(text);
    setTimeout(() => setCopiedIcon(null), 2500);
  };

  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Top Banner (Stitch Design System Spec) */}
      <header className="bg-graphite-teal-deep text-pure-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden border-b-4 border-renewal-green font-technical-code">
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none select-none">
          <span className="text-[180px] font-black tracking-tighter">Aa</span>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-renewal-green text-graphite-industrial rounded">
                STITCH-DS-v3.0
              </span>
              <span className="text-xs uppercase tracking-widest text-renewal-green font-semibold">
                Marinha do Brasil • CFN • CTDDCFN
              </span>
              <span className="px-2.5 py-0.5 text-[11px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-500/30 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-renewal-green animate-pulse"></span> Homologado Oficial Stitch
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-pure-white font-headline uppercase">
              CTDDCFN — Design System Oficial (Stitch)
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl font-body leading-relaxed">
              Constituição visual tática institucional: paleta Graphite Teal &amp; Renewal Green, hierarquia tipográfica dual (Montserrat / Inter), componentes bento, biblioteca de ícones vetoriais e integração nativa com o CMS Drupal 10+.
            </p>
          </div>

          <div className="bg-black/35 backdrop-blur-md border border-white/10 rounded-xl p-4 min-w-[240px] text-xs space-y-2">
            <div className="flex justify-between pb-1 border-b border-white/10">
              <span className="text-slate-400">Headlines:</span>
              <strong className="text-pure-white">Montserrat (700-800)</strong>
            </div>
            <div className="flex justify-between pb-1 border-b border-white/10">
              <span className="text-slate-400">Corpo &amp; Labels:</span>
              <strong className="text-pure-white">Inter (400-600)</strong>
            </div>
            <div className="flex justify-between pb-1 border-b border-white/10">
              <span className="text-slate-400">Tático / Código:</span>
              <strong className="text-renewal-green">Inter monospace (tnum)</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Compatibilidade:</span>
              <strong className="text-pure-white">Drupal 10 &amp; 11 + Twig</strong>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex items-center gap-1.5 border-b border-outline-variant overflow-x-auto pb-1 font-technical-code text-xs">
        {[
          { key: 'typography', label: '1. TIPOGRAFIA & ESCALAS' },
          { key: 'colors', label: '2. PALETA & CORES STITCH' },
          { key: 'components', label: '3. COMPONENTES & BENTO' },
          { key: 'icons', label: '4. ÍCONES DO MENU LATERAL & DOC' },
          { key: 'drupal', label: '5. TOKENS & ARQUITETURA DRUPAL' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`px-4 py-2.5 rounded-t font-bold transition whitespace-nowrap ${
              activeTab === tab.key
                ? 'bg-graphite-teal-deep text-pure-white border-t-2 border-renewal-green'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: Typography */}
      {activeTab === 'typography' && (
        <div className="space-y-6">
          <section className="bg-pure-white rounded-xl p-6 border border-outline-variant shadow-sm space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-outline-variant font-technical-code text-xs">
              <h2 className="text-sm font-bold text-graphite-teal-deep uppercase">
                Escala Tipográfica Homologada no Stitch
              </h2>
              <span className="text-outline">Montserrat &amp; Inter</span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="w-full md:w-1/4">
                  <span className="font-technical-code text-xs font-bold text-graphite-teal-deep bg-surface-container px-2 py-0.5 rounded">
                    display-lg (3rem / 48px)
                  </span>
                  <span className="text-[11px] text-outline block mt-1">Montserrat 800 • -0.03em</span>
                </div>
                <div className="w-full md:w-2/4 font-display-lg text-graphite-teal-deep uppercase">
                  CTDDCFN
                </div>
                <div className="text-xs font-technical-code text-outline">.font-display-lg</div>
              </div>

              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="w-full md:w-1/4">
                  <span className="font-technical-code text-xs font-bold text-graphite-teal-deep bg-surface-container px-2 py-0.5 rounded">
                    headline-xl (2.25rem / 36px)
                  </span>
                  <span className="text-[11px] text-outline block mt-1">Montserrat 700 • -0.02em</span>
                </div>
                <div className="w-full md:w-2/4 font-headline-xl text-graphite-teal-deep">
                  Doutrina Naval e Formação Anfíbia
                </div>
                <div className="text-xs font-technical-code text-outline">.font-headline-xl</div>
              </div>

              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="w-full md:w-1/4">
                  <span className="font-technical-code text-xs font-bold text-graphite-teal-deep bg-surface-container px-2 py-0.5 rounded">
                    headline-lg (1.75rem / 28px)
                  </span>
                  <span className="text-[11px] text-outline block mt-1">Montserrat 700 • -0.015em</span>
                </div>
                <div className="w-full md:w-2/4 font-headline-lg text-graphite-teal-deep">
                  Títulos de Seção e Módulos
                </div>
                <div className="text-xs font-technical-code text-outline">.font-headline-lg</div>
              </div>

              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="w-full md:w-1/4">
                  <span className="font-technical-code text-xs font-bold text-graphite-teal-deep bg-surface-container px-2 py-0.5 rounded">
                    title-md (1.0625rem / 17px)
                  </span>
                  <span className="text-[11px] text-outline block mt-1">Montserrat 600</span>
                </div>
                <div className="w-full md:w-2/4 font-title-md text-graphite-industrial">
                  Revista Âncoras e Fuzis — Edição Anual
                </div>
                <div className="text-xs font-technical-code text-outline">.font-title-md</div>
              </div>

              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="w-full md:w-1/4">
                  <span className="font-technical-code text-xs font-bold text-graphite-teal-deep bg-surface-container px-2 py-0.5 rounded">
                    body-md (1rem / 16px)
                  </span>
                  <span className="text-[11px] text-outline block mt-1">Inter 400 • Padrão de Leitura</span>
                </div>
                <div className="w-full md:w-2/4 font-body-md text-on-surface">
                  A prontidão permanente forja-se no estudo metódico da arte da guerra e no adestramento contínuo.
                </div>
                <div className="text-xs font-technical-code text-outline">.font-body-md</div>
              </div>

              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="w-full md:w-1/4">
                  <span className="font-technical-code text-xs font-bold text-graphite-teal-deep bg-surface-container px-2 py-0.5 rounded">
                    label-sm (0.75rem / 12px)
                  </span>
                  <span className="text-[11px] text-outline block mt-1">Inter 700 • Uppercase • 0.06em</span>
                </div>
                <div className="w-full md:w-2/4 font-label-sm text-graphite-teal-deep">
                  PRODUTOS DOUTRINÁRIOS &middot; CLASSIFICAÇÃO OSTENSIVA
                </div>
                <div className="text-xs font-technical-code text-outline">.font-label-sm</div>
              </div>

              <div className="p-4 rounded-lg bg-graphite-teal-deep text-pure-white border border-teal-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="w-full md:w-1/4">
                  <span className="font-technical-code text-xs font-bold text-graphite-industrial bg-renewal-green px-2 py-0.5 rounded">
                    technical-code (0.8125rem)
                  </span>
                  <span className="text-[11px] text-slate-300 block mt-1">Inter Monospace • tnum</span>
                </div>
                <div className="w-full md:w-2/4 font-technical-code text-renewal-green">
                  DOC-ID: CTDDCFN-FD-ED24 &middot; URI: public://flash_doutrinario/
                </div>
                <div className="text-xs font-technical-code text-slate-400">.font-technical-code</div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* TAB 2: Colors */}
      {activeTab === 'colors' && (
        <div className="space-y-6">
          <section className="bg-pure-white rounded-xl p-6 border border-outline-variant shadow-sm space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-outline-variant font-technical-code text-xs">
              <h2 className="text-sm font-bold text-graphite-teal-deep uppercase">
                Paleta Cromática Stitch (Tokens Homologados)
              </h2>
              <span className="text-outline">WCAG AAA / AA Conforme</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-technical-code text-xs">
              {/* Primary */}
              <div className="p-4 rounded-xl bg-[#002E32] text-white border border-teal-950 space-y-2 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="px-2 py-0.5 bg-black/40 rounded text-[10px] text-renewal-green font-bold uppercase">
                    primary-container
                  </span>
                  <span className="text-slate-300 text-[11px]">#002E32</span>
                </div>
                <h4 className="font-headline text-base font-bold text-pure-white">Graphite Teal Deep</h4>
                <p className="text-[11px] text-slate-300 font-body">
                  Cor institucional de comando. Cabeçalhos de topo, cards estruturais e botões primários.
                </p>
              </div>

              {/* Primary Surface */}
              <div className="p-4 rounded-xl bg-[#00383D] text-white border border-teal-950 space-y-2 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="px-2 py-0.5 bg-black/40 rounded text-[10px] text-renewal-green font-bold uppercase">
                    graphite-teal-surface
                  </span>
                  <span className="text-slate-300 text-[11px]">#00383D</span>
                </div>
                <h4 className="font-headline text-base font-bold text-pure-white">Graphite Teal Surface</h4>
                <p className="text-[11px] text-slate-300 font-body">
                  Variação elevada para hover states, flyouts, submenus e blocos de apoio secundários.
                </p>
              </div>

              {/* Renewal Green */}
              <div className="p-4 rounded-xl bg-[#BAD435] text-[#1C1C1C] border border-lime-400 space-y-2 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="px-2 py-0.5 bg-[#002E32] text-pure-white rounded text-[10px] font-bold uppercase">
                    secondary-fixed (accent)
                  </span>
                  <span className="text-[#1C1C1C] font-bold text-[11px]">#BAD435</span>
                </div>
                <h4 className="font-headline text-base font-bold text-[#1C1C1C]">Renewal Green</h4>
                <p className="text-[11px] text-[#2a300a] font-body">
                  Sinalizador operacional de alta visibilidade, pílulas de status, botões de ação e linha de prontidão.
                </p>
              </div>

              {/* Renewal Green Dark */}
              <div className="p-4 rounded-xl bg-[#8FA619] text-white border border-lime-700 space-y-2 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="px-2 py-0.5 bg-black/40 rounded text-[10px] font-bold uppercase">
                    renewal-green-dark
                  </span>
                  <span className="text-white text-[11px]">#8FA619</span>
                </div>
                <h4 className="font-headline text-base font-bold text-white">Renewal Green Dark</h4>
                <p className="text-[11px] text-emerald-100 font-body">
                  Bordas de badges ativos e estado hover de controles com alto contraste.
                </p>
              </div>

              {/* Graphite Industrial */}
              <div className="p-4 rounded-xl bg-[#1C1C1C] text-white border border-neutral-800 space-y-2 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="px-2 py-0.5 bg-neutral-800 text-slate-300 rounded text-[10px] font-bold uppercase">
                    graphite-industrial
                  </span>
                  <span className="text-slate-300 text-[11px]">#1C1C1C</span>
                </div>
                <h4 className="font-headline text-base font-bold text-white">Graphite Industrial</h4>
                <p className="text-[11px] text-slate-300 font-body">
                  Âncora de dados técnicos, códigos e tipografia escura sobre superfícies verdes.
                </p>
              </div>

              {/* Surface Canvas */}
              <div className="p-4 rounded-xl bg-[#F7FAF9] text-[#181C1C] border border-[#D7DBDA] space-y-2 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="px-2 py-0.5 bg-surface-container rounded text-[10px] font-bold uppercase text-graphite-teal-deep">
                    surface (ground canvas)
                  </span>
                  <span className="text-outline text-[11px]">#F7FAF9</span>
                </div>
                <h4 className="font-headline text-base font-bold text-graphite-teal-deep">Surface Canvas</h4>
                <p className="text-[11px] text-on-surface-variant font-body">
                  Fundo neutro anti-ofuscamento calibrado para conforto visual sob uso prolongado.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* TAB 3: Components */}
      {activeTab === 'components' && (
        <div className="space-y-6">
          <section className="bg-pure-white rounded-xl p-6 border border-outline-variant shadow-sm space-y-6">
            <div className="flex justify-between items-center pb-3 border-b border-outline-variant font-technical-code text-xs">
              <h2 className="text-sm font-bold text-graphite-teal-deep uppercase">
                Componentes Homologados (Stitch Specification)
              </h2>
              <span className="text-outline">Botões, Chips, Bento &amp; Inputs</span>
            </div>

            {/* Buttons Showcase */}
            <div className="space-y-3">
              <h3 className="font-label-sm text-label-sm uppercase text-graphite-teal-deep font-bold">
                Padrões de Botões (4px Corner Radius)
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <button className="px-4 py-2 bg-graphite-teal-deep text-pure-white font-semibold rounded text-sm hover:bg-graphite-teal-surface transition-colors flex items-center gap-2 shadow-xs">
                  <span className="material-symbols-outlined text-base">check</span>
                  <span>Botão Primário</span>
                </button>

                <button className="px-4 py-2 bg-renewal-green text-graphite-industrial font-bold rounded text-sm hover:bg-renewal-green-dark hover:text-white transition-colors flex items-center gap-2 shadow-xs">
                  <span className="material-symbols-outlined text-base">bolt</span>
                  <span>Ação Tática (Accent)</span>
                </button>

                <button className="px-4 py-2 bg-transparent text-graphite-teal-deep border border-graphite-teal-deep font-semibold rounded text-sm hover:bg-surface-container transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">file_download</span>
                  <span>Secundário (Outline)</span>
                </button>

                <button className="px-4 py-2 text-graphite-industrial hover:bg-surface-container font-medium rounded text-sm transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">visibility</span>
                  <span>Ghost</span>
                </button>
              </div>
            </div>

            {/* Chips & Badges Showcase */}
            <div className="space-y-3 pt-4 border-t border-outline-variant">
              <h3 className="font-label-sm text-label-sm uppercase text-graphite-teal-deep font-bold">
                Chips de Classificação &amp; Telemetria Operacional
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-renewal-green/20 text-graphite-teal-deep border border-renewal-green-dark font-technical-code text-xs font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-renewal-green animate-pulse"></span>
                  ATIVO / EM VIGOR
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-graphite-industrial border border-outline-variant font-technical-code text-xs uppercase font-medium">
                  <span className="material-symbols-outlined text-xs text-outline">verified</span>
                  OSTENSIVO
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-status-critical-bg text-status-critical border border-status-critical/30 font-technical-code text-xs font-bold uppercase">
                  <span className="material-symbols-outlined text-xs">lock</span>
                  RESTRITO / RESERVADO
                </span>

                <span className="px-2.5 py-1 bg-primary-container text-renewal-green font-technical-code text-xs uppercase font-bold rounded">
                  DOC-MIL: CTDD-2026
                </span>
              </div>
            </div>

            {/* Bento Card Containers */}
            <div className="space-y-3 pt-4 border-t border-outline-variant">
              <h3 className="font-label-sm text-label-sm uppercase text-graphite-teal-deep font-bold">
                Containers de Módulo (3px Top Indicator Accent)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-pure-white rounded-xl shadow-sm border border-outline-variant p-5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-graphite-teal-deep"></div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-surface-container text-graphite-teal-deep flex items-center justify-center">
                      <span className="material-symbols-outlined text-lg">shield</span>
                    </div>
                    <h4 className="font-title-md text-graphite-teal-deep font-bold">
                      Módulo Institucional
                    </h4>
                  </div>
                  <p className="font-body-sm text-on-surface-variant text-xs">
                    Estrutura com indicador de topo em Graphite Teal para normas, regulamentos e cadeias de comando.
                  </p>
                </div>

                <div className="bg-pure-white rounded-xl shadow-sm border border-outline-variant p-5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-renewal-green"></div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-renewal-green/20 text-graphite-teal-deep flex items-center justify-center">
                      <span className="material-symbols-outlined text-lg">bolt</span>
                    </div>
                    <h4 className="font-title-md text-graphite-teal-deep font-bold">
                      Módulo Operacional Ativo
                    </h4>
                  </div>
                  <p className="font-body-sm text-on-surface-variant text-xs">
                    Estrutura com indicador de topo em Renewal Green para Flash Doutrinário, treinamentos e alertas.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* TAB 4: Icons Documentation & Refinement Hub */}
      {activeTab === 'icons' && (() => {
        const categoriesList = [
          'todos',
          'Institucional',
          'Produtos Doutrinários',
          'Comunicação Social e Estratégica',
          'SECOM',
          'Ensino',
          'Navegação / Administração',
          'Divisão de Informática',
        ];

        const filteredLinks = INITIAL_MENU_LINKS.filter((item) => {
          const matchCat = iconCategoryFilter === 'todos' || item.category === iconCategoryFilter;
          const search = iconSearchTerm.toLowerCase();
          const matchSearch =
            item.title.toLowerCase().includes(search) ||
            item.icon.toLowerCase().includes(search) ||
            item.category.toLowerCase().includes(search) ||
            (item.iconRationale && item.iconRationale.toLowerCase().includes(search)) ||
            item.description.toLowerCase().includes(search);
          return matchCat && matchSearch;
        });

        return (
          <div className="space-y-6">
            {/* Top Overview & Audit Metrics */}
            <section className="bg-pure-white rounded-xl p-6 border border-outline-variant shadow-sm space-y-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-outline-variant">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-graphite-teal-deep text-lg">verified</span>
                    <h2 className="font-title-md text-graphite-teal-deep font-bold uppercase tracking-tight">
                      Documentação &amp; Refinamento Semântico dos Ícones do Menu Lateral
                    </h2>
                  </div>
                  <p className="font-body-sm text-on-surface-variant text-xs max-w-3xl leading-relaxed">
                    Auditoria completa dos 40 itens de navegação do menu lateral esquerdo. Cada glifo vetorial foi rigorosamente mapeado contra a semântica do texto, função regimental da página e padrão oficial <strong>Google Material Symbols Outlined</strong>, eliminando termos não padronizados e ambiguidades.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="px-3 py-1.5 bg-graphite-teal-deep text-renewal-green rounded-lg text-xs font-technical-code font-bold flex items-center gap-1.5 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-renewal-green animate-pulse"></span>
                    40/40 Ícones Homologados
                  </span>
                </div>
              </div>

              {/* Racional de Auditoria & Correções Aplicadas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-technical-code text-xs">
                <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-graphite-teal-deep font-bold">
                    <span className="material-symbols-outlined text-base text-renewal-green-dark">spellcheck</span>
                    <span>Aderência Textual &amp; Semântica</span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant font-sans leading-relaxed">
                    Ícones genéricos como estrelas ou caixas foram refinados para insígnias militares (<code>military_tech</code>), relatórios de análise (<code>assessment</code>), inscrições oficiais (<code>how_to_reg</code>) e dicionários alfabéticos (<code>sort_by_alpha</code>).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-graphite-teal-deep font-bold">
                    <span className="material-symbols-outlined text-base text-renewal-green-dark">security</span>
                    <span>Correção de Glifos Quebrados</span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant font-sans leading-relaxed">
                    Identificação e correção do glifo inválido <code>globe</code> (não existente no Google Material Symbols) para o padrão oficial <code>public</code>, garantindo renderização vetorial cristalina no portal da Internet.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-graphite-teal-deep font-bold">
                    <span className="material-symbols-outlined text-base text-renewal-green-dark">palette</span>
                    <span>Integração com Tokens Stitch</span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant font-sans leading-relaxed">
                    Cada ícone herda os tokens institucionais: estado inativo em <code>text-outline (#707979)</code> e estado ativo/selecionado em <code>text-renewal-green (#BAD435)</code> sobre <code>bg-graphite-teal-deep (#002E32)</code>.
                  </p>
                </div>
              </div>
            </section>

            {/* Interactive Icon Tester */}
            <section className="bg-graphite-teal-deep text-pure-white rounded-xl p-6 shadow-md border-t-2 border-renewal-green space-y-4 font-technical-code">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-renewal-green flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">science</span>
                    Bancada de Testes Interativa de Ícones Material Symbols
                  </h3>
                  <p className="text-xs text-slate-300 font-sans mt-0.5">
                    Digite qualquer nome de ícone do Google Material Symbols para testar sua renderização em tempo real nas escalas e tokens do CTDDCFN.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <input
                      type="text"
                      value={iconTesterValue}
                      onChange={(e) => setIconTesterValue(e.target.value.trim().toLowerCase())}
                      placeholder="Ex: military_tech, shield..."
                      className="px-3 py-1.5 pl-8 rounded bg-black/40 border border-white/20 text-xs text-white placeholder-white/40 focus:outline-none focus:border-renewal-green"
                    />
                    <span className="material-symbols-outlined absolute left-2 top-2 text-xs text-white/50">search</span>
                  </div>
                </div>
              </div>

              {/* Live Preview Box */}
              <div className="p-4 rounded-lg bg-black/25 border border-white/10 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-6 flex-wrap">
                  {/* Size 14px (Sidebar size) */}
                  <div className="text-center">
                    <div className="w-10 h-10 rounded bg-[#001f22] border border-white/10 flex items-center justify-center mx-auto text-renewal-green">
                      <span className="material-symbols-outlined text-sm">{iconTesterValue || 'help'}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 block">Menu (14px)</span>
                  </div>

                  {/* Size 20px (Default size) */}
                  <div className="text-center">
                    <div className="w-12 h-12 rounded bg-[#001f22] border border-white/10 flex items-center justify-center mx-auto text-renewal-green">
                      <span className="material-symbols-outlined text-xl">{iconTesterValue || 'help'}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 block">Padrão (20px)</span>
                  </div>

                  {/* Size 32px (Badge size) */}
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-xl bg-renewal-green text-graphite-industrial flex items-center justify-center mx-auto shadow-md">
                      <span className="material-symbols-outlined text-3xl font-bold">{iconTesterValue || 'help'}</span>
                    </div>
                    <span className="text-[10px] text-renewal-green mt-1 block">Tático (32px)</span>
                  </div>

                  {/* Active Sidebar Item Simulation */}
                  <div className="bg-[#002E32] border border-white/20 px-3 py-2 rounded-lg flex items-center gap-2.5 shadow-sm text-xs">
                    <span className="material-symbols-outlined text-sm text-renewal-green">{iconTesterValue || 'help'}</span>
                    <span className="font-bold text-white">Item do Menu Ativo</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-renewal-green ml-2"></span>
                  </div>
                </div>

                {/* Twig Snippet Generator */}
                <div className="bg-black/50 p-2.5 rounded border border-white/10 text-[11px] font-mono flex items-center gap-3">
                  <span className="text-slate-400">Drupal Twig:</span>
                  <code className="text-renewal-green">{`<span class="material-symbols-outlined">${iconTesterValue}</span>`}</code>
                  <button
                    onClick={() => copyToClipboard(`<span class="material-symbols-outlined">${iconTesterValue}</span>`)}
                    className="p-1 hover:bg-white/10 rounded text-slate-300 hover:text-white transition"
                    title="Copiar snippet Twig"
                  >
                    <span className="material-symbols-outlined text-sm">content_copy</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Filter & Search Controls */}
            <section className="bg-pure-white rounded-xl p-5 border border-outline-variant shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Search Input */}
                <div className="relative w-full md:w-80">
                  <input
                    type="text"
                    value={iconSearchTerm}
                    onChange={(e) => setIconSearchTerm(e.target.value)}
                    placeholder="Filtrar por nome, ícone ou racional..."
                    className="w-full px-3 py-2 pl-9 rounded-lg border border-outline-variant bg-surface-container-low text-xs font-sans text-graphite-industrial focus:outline-none focus:border-graphite-teal-deep"
                  />
                  <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-base text-outline">search</span>
                  {iconSearchTerm && (
                    <button
                      onClick={() => setIconSearchTerm('')}
                      className="absolute right-2.5 top-2.5 text-xs text-outline hover:text-graphite-industrial"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <div className="text-xs font-technical-code text-on-surface-variant">
                  Exibindo <strong>{filteredLinks.length}</strong> de <strong>{INITIAL_MENU_LINKS.length}</strong> itens auditados
                </div>
              </div>

              {/* Category Filter Chips */}
              <div className="flex flex-wrap gap-1.5 font-technical-code text-[11px]">
                {categoriesList.map((cat) => {
                  const count = cat === 'todos' ? INITIAL_MENU_LINKS.length : INITIAL_MENU_LINKS.filter((m) => m.category === cat).length;
                  const isActive = iconCategoryFilter === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setIconCategoryFilter(cat)}
                      className={`px-2.5 py-1 rounded-md transition font-semibold flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-graphite-teal-deep text-renewal-green shadow-xs'
                          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                    >
                      <span>{cat === 'todos' ? 'Todas as Categorias' : cat}</span>
                      <span className={`text-[10px] px-1 py-0.2 rounded-full ${isActive ? 'bg-renewal-green/20 text-renewal-green' : 'bg-outline-variant/50 text-outline'}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Documented Icons Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredLinks.map((item) => (
                <div
                  key={item.id}
                  className="bg-pure-white rounded-xl border border-outline-variant p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2.5">
                    {/* Header: Category Badge + Validation */}
                    <div className="flex items-center justify-between text-[10px] font-technical-code">
                      <span className="px-2 py-0.5 rounded bg-surface-container font-bold uppercase text-graphite-teal-deep border border-outline-variant/60">
                        {item.category}
                      </span>
                      <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 flex items-center gap-1 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Homologado
                      </span>
                    </div>

                    {/* Visual Comparison: Normal State vs Active Tactical State */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {/* Normal Inactive State */}
                      <div className="p-2.5 rounded-lg bg-surface-container-low border border-outline-variant flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg text-outline">
                          {item.icon}
                        </span>
                        <div className="min-w-0">
                          <span className="text-[10px] text-outline font-technical-code block">Inativo</span>
                          <span className="text-xs font-semibold text-on-surface truncate block">{item.title}</span>
                        </div>
                      </div>

                      {/* Active Tactical State */}
                      <div className="p-2.5 rounded-lg bg-graphite-teal-deep border border-graphite-teal-deep text-pure-white flex items-center gap-2 shadow-xs">
                        <span className="material-symbols-outlined text-lg text-renewal-green">
                          {item.icon}
                        </span>
                        <div className="min-w-0">
                          <span className="text-[10px] text-renewal-green font-technical-code block">Ativo</span>
                          <span className="text-xs font-bold text-white truncate block">{item.title}</span>
                        </div>
                      </div>
                    </div>

                    {/* Semantic Rationale & Content Alignment */}
                    <div className="space-y-1 pt-1">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-graphite-teal-deep uppercase font-technical-code">
                        <span className="material-symbols-outlined text-xs text-renewal-green-dark">psychology</span>
                        <span>Racional Semântico x Texto:</span>
                      </div>
                      <p className="text-xs text-on-surface-variant font-sans leading-relaxed bg-surface-container-low/70 p-2.5 rounded-lg border border-outline-variant/60">
                        {item.iconRationale || 'Ícone oficial selecionado para representar visualmente o conteúdo institucional.'}
                      </p>
                    </div>
                  </div>

                  {/* Footer: Icon Token Copy & Twig Snippet */}
                  <div className="pt-2 border-t border-outline-variant/60 flex items-center justify-between text-xs font-technical-code">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] text-outline">Glifo:</span>
                      <code className="bg-surface-container px-1.5 py-0.5 rounded font-bold text-graphite-teal-deep border border-outline-variant/60 text-[11px]">
                        {item.icon}
                      </code>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => copyToClipboard(item.icon)}
                        className="px-2 py-1 rounded bg-surface-container hover:bg-graphite-teal-deep hover:text-pure-white transition text-[11px] flex items-center gap-1 text-on-surface font-semibold"
                        title="Copiar nome do ícone"
                      >
                        <span className="material-symbols-outlined text-xs">
                          {copiedIcon === item.icon ? 'check' : 'content_copy'}
                        </span>
                        <span>{copiedIcon === item.icon ? 'Copiado!' : 'Copiar'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Template Drupal Twig Documentation */}
            <section className="bg-pure-white rounded-xl p-6 border border-outline-variant shadow-sm space-y-4 font-technical-code text-xs">
              <div className="flex items-center gap-2 pb-3 border-b border-outline-variant">
                <span className="material-symbols-outlined text-graphite-teal-deep text-lg">code</span>
                <h3 className="font-title-md text-graphite-teal-deep font-bold uppercase">
                  Padrão de Renderização no Tema Drupal 10 (Twig + Tailwind)
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-graphite-teal-deep text-pure-white space-y-2">
                <div className="flex justify-between items-center text-renewal-green text-[11px] font-bold">
                  <span>templates/navigation/menu--sidebar.html.twig</span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `{# menu--sidebar.html.twig #}\n<ul class="space-y-0.5">\n  {% for item in items %}\n    <li>\n      <a href="{{ item.url }}" class="flex items-center gap-2 px-3 py-1.5 rounded transition {% if item.in_active_trail %}bg-graphite-teal-deep text-white font-bold{% else %}text-on-surface-variant hover:bg-surface-container{% endif %}">\n        <span class="material-symbols-outlined text-sm shrink-0 {% if item.in_active_trail %}text-renewal-green{% else %}text-outline{% endif %}">\n          {{ item.icon }}\n        </span>\n        <span class="truncate">{{ item.title }}</span>\n      </a>\n    </li>\n  {% endfor %}\n</ul>`
                      )
                    }
                    className="hover:underline flex items-center gap-1 text-xs"
                  >
                    <span className="material-symbols-outlined text-xs">content_copy</span>
                    <span>Copiar Template Twig</span>
                  </button>
                </div>
                <pre className="text-slate-300 text-[11px] overflow-x-auto leading-relaxed p-2 bg-black/30 rounded">
{`{# menu--sidebar.html.twig #}
<ul class="space-y-0.5">
  {% for item in items %}
    <li>
      <a href="{{ item.url }}" class="flex items-center gap-2 px-3 py-1.5 rounded transition {% if item.in_active_trail %}bg-graphite-teal-deep text-white font-bold{% else %}text-on-surface-variant hover:bg-surface-container{% endif %}">
        <span class="material-symbols-outlined text-sm shrink-0 {% if item.in_active_trail %}text-renewal-green{% else %}text-outline{% endif %}">
          {{ item.icon }}
        </span>
        <span class="truncate">{{ item.title }}</span>
      </a>
    </li>
  {% endfor %}
</ul>`}
                </pre>
              </div>
            </section>
          </div>
        );
      })()}

      {/* TAB 5: Drupal Architecture */}
      {activeTab === 'drupal' && (
        <div className="space-y-6">
          <section className="bg-pure-white rounded-xl p-6 border border-outline-variant shadow-sm space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-outline-variant font-technical-code text-xs">
              <h2 className="text-sm font-bold text-graphite-teal-deep uppercase">
                Arquitetura de Integração CMS Drupal 10/11 &amp; Twig
              </h2>
              <span className="text-outline">Tema: ctddcfn_theme</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-technical-code text-xs">
              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant space-y-2">
                <span className="text-[10px] font-bold uppercase text-graphite-teal-deep">
                  Mapeamento de Templates Twig
                </span>
                <ul className="space-y-1 text-on-surface-variant text-[11px]">
                  <li>• <code className="bg-pure-white px-1 py-0.5 rounded border border-outline-variant">templates/layout/html.html.twig</code> — Base HTML5 + Fontes</li>
                  <li>• <code className="bg-pure-white px-1 py-0.5 rounded border border-outline-variant">templates/layout/page.html.twig</code> — Shell com Header + Sidebar</li>
                  <li>• <code className="bg-pure-white px-1 py-0.5 rounded border border-outline-variant">templates/content/node--flash-doutrinario.html.twig</code> — Flash Doutrinário</li>
                  <li>• <code className="bg-pure-white px-1 py-0.5 rounded border border-outline-variant">templates/content/node--deusa-minerva.html.twig</code> — Deusa Minerva</li>
                  <li>• <code className="bg-pure-white px-1 py-0.5 rounded border border-outline-variant">templates/content/node--podcast.html.twig</code> — Podcast Áudio</li>
                  <li>• <code className="bg-pure-white px-1 py-0.5 rounded border border-outline-variant">templates/navigation/menu--sidebar.html.twig</code> — Menu Lateral Dinâmico</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant space-y-2">
                <span className="text-[10px] font-bold uppercase text-graphite-teal-deep">
                  Armazenamento de Arquivos no Drupal
                </span>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Os arquivos do Flash Doutrinário utilizam o esquema gerenciado nativo do Drupal:
                </p>
                <div className="p-2 rounded bg-graphite-teal-deep text-renewal-green font-technical-code text-[11px]">
                  public://flash_doutrinario/YYYY-MM/arquivo.pdf
                </div>
                <p className="text-[10px] text-outline">
                  Total compatibilidade com a tabela <code>file_managed</code> e a API de Streaming HTTP do Drupal Core.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
