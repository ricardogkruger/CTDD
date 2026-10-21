import React, { useState } from 'react';
import { MenuLinkItem, updateMenuLinkUrl } from '../data/menuLinksConfig';

interface DrupalLinkedPageViewProps {
  menuItem: MenuLinkItem;
  onOpenCreateModal: (title: string, slug: string, category: string) => void;
  onUrlUpdated: (updatedItem: MenuLinkItem) => void;
}

export const DrupalLinkedPageView: React.FC<DrupalLinkedPageViewProps> = ({
  menuItem,
  onOpenCreateModal,
  onUrlUpdated,
}) => {
  const [editingUrl, setEditingUrl] = useState(menuItem.drupalUrl);
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUrl.trim()) return;
    const updated = updateMenuLinkUrl(menuItem.id, editingUrl.trim());
    const refreshed = updated.find((m) => m.id === menuItem.id) || menuItem;
    onUrlUpdated(refreshed);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const isHttp = menuItem.drupalUrl.startsWith('http://') || menuItem.drupalUrl.startsWith('https://');

  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Top Breadcrumb & Status Bar (Stitch Spec) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-xs">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-technical-code text-label-sm uppercase tracking-wider text-on-surface-variant">
          <span className="flex items-center gap-1 hover:text-graphite-teal-deep transition-colors">
            <span className="material-symbols-outlined text-sm">home</span>
            Início
          </span>
          <span className="text-outline-variant">/</span>
          <span className="hover:text-graphite-teal-deep transition-colors">{menuItem.category}</span>
          <span className="text-outline-variant">/</span>
          <span className="text-graphite-teal-deep font-bold">{menuItem.title}</span>
        </nav>
        <div className="flex items-center gap-space-sm">
          <span className="px-2.5 py-1 bg-surface-container-high text-graphite-teal-deep font-technical-code text-xs uppercase rounded">
            ROTA DRUPAL 10
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary-fixed/20 text-on-secondary-fixed font-technical-code text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-renewal-green"></span>
            CONFIGURÁVEL
          </span>
        </div>
      </div>

      {/* Editorial Header Block (Stitch Spec) */}
      <section className="relative bg-pure-white p-6 sm:p-8 rounded-xl shadow-sm border border-outline-variant overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-graphite-teal-deep via-graphite-teal-surface to-renewal-green"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="space-y-space-xs max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-surface-container text-graphite-teal-deep font-label-sm text-label-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm text-graphite-teal-surface">{menuItem.icon}</span>
              {menuItem.category} • Link de Menu do Drupal 10
            </div>
            <h1 className="font-headline-lg text-headline-lg text-graphite-teal-deep tracking-tight font-extrabold uppercase mt-1">
              {menuItem.title}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {menuItem.description}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <span className="px-3 py-1.5 bg-surface-container text-graphite-teal-deep border border-outline-variant font-technical-code text-xs font-bold rounded">
              LINK EXTERNO / DRUPAL
            </span>
          </div>
        </div>
      </section>

      {/* Main Configuration Card */}
      <section className="bg-pure-white rounded-xl border border-outline-variant shadow-sm p-6 sm:p-8 space-y-6 text-on-surface">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-outline-variant">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-graphite-teal-deep text-renewal-green flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-2xl">{menuItem.icon}</span>
            </div>
            <div>
              <div className="flex items-center gap-2 font-technical-code text-xs">
                <span className="font-bold text-graphite-teal-deep uppercase">Menu Link Machine ID:</span>
                <code className="px-2 py-0.5 rounded bg-surface-container text-graphite-industrial font-bold border border-outline-variant">
                  {menuItem.id}
                </code>
              </div>
              <h2 className="font-title-md text-lg font-bold text-graphite-teal-deep mt-1">
                URL de Destino Vinculada no Menu
              </h2>
              <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed max-w-2xl">
                Este item do menu lateral está configurado para apontar para a URL definida abaixo. Você pode ajustar este endereço a qualquer momento aqui no Studio ou diretamente no painel administrativo do Drupal 10 (<code className="text-graphite-teal-deep font-technical-code">/admin/structure/menu</code>).
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col gap-2 shrink-0 font-technical-code text-xs w-full sm:w-auto">
            {isHttp ? (
              <a
                href={menuItem.drupalUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-graphite-teal-deep hover:bg-graphite-teal-surface text-pure-white rounded font-bold flex items-center justify-center gap-2 shadow-xs transition"
              >
                <span>Abrir URL Externa</span>
                <span className="material-symbols-outlined text-sm text-renewal-green">open_in_new</span>
              </a>
            ) : (
              <button
                onClick={() => alert(`Esta rota interna (${menuItem.drupalUrl}) é processada pelo roteador do Drupal 10.`)}
                className="px-4 py-2 bg-graphite-teal-deep hover:bg-graphite-teal-surface text-pure-white rounded font-bold flex items-center justify-center gap-2 shadow-xs transition"
              >
                <span>Testar Rota Drupal</span>
                <span className="material-symbols-outlined text-sm text-renewal-green">hub</span>
              </button>
            )}

            <button
              onClick={() => onOpenCreateModal(menuItem.title, menuItem.slug, menuItem.category)}
              className="px-4 py-2 bg-renewal-green hover:bg-renewal-green-dark text-graphite-industrial hover:text-white rounded font-bold flex items-center justify-center gap-1.5 transition shadow-xs"
            >
              <span className="material-symbols-outlined text-sm">add_circle</span>
              <span>Criar Página Dedicada</span>
            </button>
          </div>
        </div>

        {/* Form para Atualizar a URL */}
        <form onSubmit={handleSaveUrl} className="space-y-4 pt-2">
          <div>
            <label className="block font-label-sm text-xs uppercase font-bold text-graphite-teal-deep mb-1">
              Endereço da URL no Drupal 10 (Interna ou Externa):
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-base">
                  link
                </span>
                <input
                  type="text"
                  value={editingUrl}
                  onChange={(e) => setEditingUrl(e.target.value)}
                  placeholder="Ex: https://intranet.mb/sistema ou internal:/meu-caminho"
                  className="w-full pl-9 pr-3 py-2 text-sm bg-pure-white text-on-surface border border-outline-variant rounded focus:border-graphite-teal-deep focus:ring-1 focus:ring-graphite-teal-deep outline-none font-technical-code transition"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2 bg-graphite-teal-deep hover:bg-graphite-teal-surface text-pure-white font-technical-code font-bold text-xs uppercase tracking-wider rounded transition flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span className="material-symbols-outlined text-sm">save</span>
                <span>Salvar URL no Drupal</span>
              </button>
            </div>
            <p className="font-technical-code text-[11px] text-outline mt-1.5">
              Rotas internas Drupal devem iniciar com <code className="bg-surface-container px-1 rounded">internal:/</code> ou caminhos relativos como <code className="bg-surface-container px-1 rounded">/admin/...</code>. Para links externos, informe o endereço completo (<code className="bg-surface-container px-1 rounded">https://...</code>).
            </p>
          </div>

          {isSaved && (
            <div className="p-3 bg-renewal-green/20 border border-renewal-green-dark text-graphite-teal-deep rounded flex items-center gap-2 font-technical-code text-xs font-bold animate-fadeIn">
              <span className="material-symbols-outlined text-base text-renewal-green-dark">check_circle</span>
              <span>URL do link de menu atualizada com sucesso no banco de dados do tema Drupal 10!</span>
            </div>
          )}
        </form>

        {/* Drupal 10 YAML Architecture Representation */}
        <div className="pt-4 border-t border-outline-variant">
          <div className="flex items-center justify-between mb-2">
            <span className="font-label-sm text-xs uppercase font-bold text-graphite-teal-deep">
              Configuração Exportada no Pacote do Tema (ctddcfn_theme.links.menu.yml)
            </span>
            <span className="font-technical-code text-[11px] text-outline">YAML Drupal Core</span>
          </div>

          <pre className="p-4 bg-graphite-teal-deep text-renewal-green rounded font-technical-code text-xs leading-relaxed overflow-x-auto border border-teal-900">
{`ctddcfn_theme.${menuItem.id}:
  title: '${menuItem.title}'
  description: '${menuItem.description}'
  url: '${menuItem.drupalUrl}'
  menu_name: sidebar-navigation
  weight: 10
  options:
    attributes:
      class: ['ctddcfn-menu-item', 'nav-${menuItem.category.toLowerCase().replace(/\\s+/g, '-')}' ]`}
          </pre>
        </div>
      </section>
    </div>
  );
};
