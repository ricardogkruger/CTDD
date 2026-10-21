import React, { useState } from 'react';
import { PageItem } from '../types';
import { MenuLinkItem } from '../data/menuLinksConfig';

interface SidebarProps {
  currentSlug: string;
  onNavigate: (slug: string) => void;
  customPages: PageItem[];
  onOpenCreatePage: () => void;
  onDeleteCustomPage: (id: string, e?: React.MouseEvent) => void;
  onBussolaSearch?: (term: string) => void;
  menuLinks: MenuLinkItem[];
  onOpenMenuLinksManager?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentSlug,
  onNavigate,
  customPages,
  onOpenCreatePage,
  onDeleteCustomPage,
  onBussolaSearch,
  menuLinks,
  onOpenMenuLinksManager,
}) => {
  const [bussolaInput, setBussolaInput] = useState('');

  const handleBussolaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bussolaInput.trim() && onBussolaSearch) {
      onBussolaSearch(bussolaInput.trim());
    } else if (bussolaInput.trim()) {
      onNavigate(bussolaInput.trim().toLowerCase());
    }
  };

  const isCurrent = (slug: string) => currentSlug === slug;

  const getLinksByCategory = (cat: string) => {
    return menuLinks.filter((m) => m.category === cat);
  };

  const categories = [
    { name: 'Institucional', title: 'Institucional' },
    { name: 'Produtos Doutrinários', title: 'Produtos Doutrinários' },
    { name: 'Comunicação Social e Estratégica', title: 'Comunicação Social e Estratégica' },
    { name: 'SECOM', title: 'SECOM' },
    { name: 'Ensino', title: 'Ensino' },
    { name: 'Navegação / Administração', title: 'Navegação / Administração' },
    { name: 'Divisão de Informática', title: 'Divisão de Informática' },
  ];

  return (
    <aside className="w-full flex flex-col gap-6" data-purpose="standard-sidebar">
      {/* Top Banner: Gerenciador de URLs do Menu */}
      {onOpenMenuLinksManager && (
        <div className="bg-[#002E32] text-white p-3 rounded-xl border border-white/10 shadow-sm flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-[#BAD435]">tune</span>
            <span className="font-bold text-[11px] uppercase">URLs do Menu Drupal</span>
          </div>
          <button
            onClick={onOpenMenuLinksManager}
            className="px-2.5 py-1 bg-[#BAD435] hover:bg-[#a6bf2a] text-[#002E32] font-black rounded text-[10px] uppercase transition shadow-xs"
          >
            Configurar URLs
          </button>
        </div>
      )}

      {/* Container de Menus Institucionais Padronizados (Stitch Spec) */}
      <div className="bg-pure-white rounded-xl border border-outline-variant shadow-sm p-4 divide-y divide-outline-variant/60 text-on-surface font-sans">
        {categories.map((cat, idx) => {
          const links = getLinksByCategory(cat.name);
          return (
            <div key={cat.name} className={idx === 0 ? 'pb-4' : idx === categories.length - 1 ? 'pt-4' : 'py-4'}>
              <h3 className="font-label-sm text-label-sm uppercase text-graphite-teal-deep font-bold tracking-wider px-space-sm mb-space-xs flex items-center justify-between">
                <span>{cat.title}</span>
                <span className="text-[10px] font-technical-code text-outline font-normal">({links.length})</span>
              </h3>
              <ul className="space-y-0.5">
                {links.map((item) => {
                  const active = isCurrent(item.slug);
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => onNavigate(item.slug)}
                        title={
                          item.iconRationale
                            ? `${item.title} — ${item.iconRationale}`
                            : !item.hasBuiltInPage
                            ? `Aponta para a URL configurada no Drupal: ${item.drupalUrl}`
                            : item.description
                        }
                        className={`w-full flex items-center justify-between px-space-sm py-1.5 rounded text-left transition ${
                          active
                            ? 'bg-graphite-teal-deep text-pure-white font-bold rounded shadow-xs'
                            : 'text-on-surface-variant hover:bg-surface-container hover:text-graphite-industrial font-body-sm text-body-sm rounded'
                        }`}
                      >
                        <span className="flex items-center gap-2 min-w-0">
                          <span
                            className={`material-symbols-outlined text-sm shrink-0 transition-transform ${
                              active ? 'text-renewal-green scale-110' : 'text-outline group-hover:text-graphite-industrial'
                            }`}
                            title={`Ícone: ${item.icon} (${item.category})`}
                          >
                            {item.icon}
                          </span>
                          <span className="truncate">{item.title}</span>
                        </span>

                        <div className="flex items-center gap-1.5 shrink-0 font-technical-code">
                          {!item.hasBuiltInPage && (
                            <span
                              className={`text-[9px] px-1 py-0.2 rounded font-bold uppercase ${
                                active
                                  ? 'bg-renewal-green/20 text-renewal-green border border-renewal-green/40'
                                  : 'bg-amber-50 text-amber-800 border border-amber-300'
                              }`}
                              title={`URL definida no Drupal: ${item.drupalUrl}`}
                            >
                              URL
                            </span>
                          )}
                          {active && (
                            <span className="w-1.5 h-1.5 rounded-full bg-renewal-green mr-1"></span>
                          )}
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        {/* Seção 7: Páginas Criadas pelo Operador */}
        {customPages.length > 0 && (
          <div className="pt-4">
            <div className="flex items-center justify-between mb-2 font-mono">
              <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-[#002E32]">
                Páginas Criadas ({customPages.length})
              </h3>
              <button
                onClick={onOpenCreatePage}
                className="text-[10px] text-[#002E32] font-bold hover:underline flex items-center gap-0.5"
              >
                + Nova
              </button>
            </div>
            <ul className="space-y-1 text-xs font-sans">
              {customPages.map((page) => (
                <li key={page.id} className="group flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(page.slug)}
                    className={`flex-1 text-left px-2 py-1 rounded truncate transition ${
                      isCurrent(page.slug)
                        ? 'bg-[#002E32] text-white font-bold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {page.title}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm(`Excluir página "${page.title}"?`)) {
                        onDeleteCustomPage(page.id, e);
                      }
                    }}
                    title="Excluir página"
                    className="p-1 text-slate-300 hover:text-red-600 opacity-0 group-hover:opacity-100 transition"
                  >
                    <span className="material-symbols-outlined text-xs">delete</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Widget Tático Integrado: Bússola Interna */}
      <div className="bg-[#002E32] rounded-xl p-4 text-white shadow-md border border-[#003c42] font-mono text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#BAD435] animate-pulse"></span>
            <span className="font-bold tracking-wider uppercase">Bússola Interna</span>
          </div>
          <span className="text-[9px] bg-white/10 text-[#BAD435] px-1.5 py-0.5 rounded border border-white/10">
            MB-INTRANET
          </span>
        </div>

        <div className="my-3 text-center">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-white/5 border border-white/10 mb-2">
            <span className="material-symbols-outlined text-2xl text-[#BAD435]">explore</span>
          </div>
          <p className="text-[11px] text-white/70 leading-snug font-sans">
            Pesquisa rápida no acervo normativo e doutrinário do CTDD.
          </p>
        </div>

        <form onSubmit={handleBussolaSubmit} className="space-y-2">
          <div className="relative">
            <input
              type="text"
              value={bussolaInput}
              onChange={(e) => setBussolaInput(e.target.value)}
              placeholder="Digite o termo ou código..."
              className="w-full bg-[#001f22] border border-white/20 rounded-lg py-2 pl-3 pr-8 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#BAD435]"
            />
            <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-xs text-white/40 pointer-events-none">
              search
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-[#BAD435] hover:bg-[#a6bf2a] text-[#002E32] font-black text-xs py-2 rounded-lg flex items-center justify-center gap-1.5 uppercase transition shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">search</span>
            <span>Pesquisar</span>
          </button>
        </form>

        <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            REDE ATIVA
          </span>
          <span className="text-white/70">DEFCON 4 / PRONTIDÃO</span>
        </div>
      </div>
    </aside>
  );
};
