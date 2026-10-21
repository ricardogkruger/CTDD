import React from 'react';
import { PageItem } from '../types';

interface CustomPageViewProps {
  page: PageItem;
  onDelete?: (id: string) => void;
  onOpenCreateModal?: () => void;
}

export const CustomPageView: React.FC<CustomPageViewProps> = ({ page, onDelete }) => {
  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Top Breadcrumb & Metadata Strip (Stitch Spec) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-xs">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-technical-code text-label-sm uppercase tracking-wider text-on-surface-variant">
          <span className="flex items-center gap-1 hover:text-graphite-teal-deep transition-colors">
            <span className="material-symbols-outlined text-sm">home</span>
            Início
          </span>
          <span className="text-outline-variant">/</span>
          <span className="hover:text-graphite-teal-deep transition-colors">{page.category}</span>
          <span className="text-outline-variant">/</span>
          <span className="text-graphite-teal-deep font-bold">{page.title}</span>
        </nav>
        <div className="flex items-center gap-space-sm">
          <span className="px-2.5 py-1 bg-surface-container-high text-graphite-teal-deep font-technical-code text-xs uppercase rounded">
            DRUPAL NODE
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary-fixed/20 text-on-secondary-fixed font-technical-code text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-renewal-green"></span>
            {(page.status || 'publicado').toUpperCase()}
          </span>
        </div>
      </div>

      {/* Editorial Header Block (Stitch Spec) */}
      <section className="relative bg-pure-white p-6 sm:p-8 rounded-xl shadow-sm border border-outline-variant overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-graphite-teal-deep via-graphite-teal-surface to-renewal-green"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="space-y-space-xs max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-surface-container text-graphite-teal-deep font-label-sm text-label-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm text-graphite-teal-surface">description</span>
              {page.category} • Content Type: {page.contentType}
            </div>
            <h1 className="font-headline-lg text-headline-lg text-graphite-teal-deep tracking-tight font-extrabold uppercase mt-1">
              {page.title}
            </h1>
            {page.subtitle ? (
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {page.subtitle}
              </p>
            ) : (
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {page.description || 'Página personalizada criada no painel administrativo do CTDDCFN Drupal 10 Theme Studio.'}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {page.isCustom && onDelete && (
              <button
                onClick={() => {
                  if (confirm(`Deseja realmente remover a página "${page.title}"?`)) {
                    onDelete(page.id);
                  }
                }}
                className="px-3.5 py-2 bg-status-critical-bg hover:bg-red-100 border border-status-critical/30 text-status-critical text-xs font-technical-code font-bold rounded transition flex items-center gap-1.5 shadow-xs"
              >
                <span className="material-symbols-outlined text-sm">delete</span>
                EXCLUIR PÁGINA
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Drupal CMS Technical Mapping Bar */}
      <div className="p-3 bg-surface-container-low border border-outline-variant rounded-xl flex flex-wrap items-center justify-between gap-2 text-xs font-technical-code text-on-surface-variant">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-secondary">database</span>
          <span>Rota Drupal: <strong className="text-graphite-industrial">/node/{page.slug}</strong></span>
        </div>
        <div className="flex items-center gap-4">
          <span>Twig: <code className="bg-pure-white px-1.5 py-0.5 rounded border border-outline-variant text-graphite-industrial font-semibold">node--{page.contentType}.html.twig</code></span>
          <span>Autor: <strong className="text-graphite-industrial">{page.author || 'Operador CTDDCFN'}</strong></span>
          <span>Criado em: <strong className="text-graphite-industrial">{page.createdAt || '2026-10-21'}</strong></span>
        </div>
      </div>

      {/* Main Body Content */}
      <article className="bg-pure-white border border-outline-variant rounded-xl p-6 sm:p-8 shadow-sm">
        <div className="max-w-none text-on-surface leading-relaxed space-y-4">
          {page.content ? (
            <div className="whitespace-pre-line font-body text-base leading-relaxed text-on-surface">
              {page.content}
            </div>
          ) : (
            <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/60 text-center">
              <span className="material-symbols-outlined text-3xl text-outline mb-1">edit_note</span>
              <p className="text-on-surface-variant font-technical-code text-xs">
                Nenhum corpo de texto adicional fornecido para este nó do Drupal. O conteúdo pode ser editado pelo CMS.
              </p>
            </div>
          )}
        </div>
      </article>

      {/* Interactive Simulation of Drupal Blocks (Stitch Bento) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-pure-white border border-outline-variant rounded-xl shadow-xs space-y-2">
          <div className="w-9 h-9 rounded bg-surface-container text-graphite-teal-deep flex items-center justify-center">
            <span className="material-symbols-outlined text-xl">folder_shared</span>
          </div>
          <h4 className="font-title-md text-sm font-bold text-graphite-teal-deep uppercase">
            Documentos Relacionados
          </h4>
          <p className="font-body-sm text-xs text-on-surface-variant">
            Bloco renderizado via Views Drupal: field_documentos_anexos
          </p>
          <div className="pt-1">
            <span className="text-[11px] font-technical-code text-secondary bg-surface-container-low px-2 py-1 rounded block truncate border border-outline-variant/60">
              public://docs/{page.slug}/anexo_01.pdf
            </span>
          </div>
        </div>

        <div className="p-5 bg-pure-white border border-outline-variant rounded-xl shadow-xs space-y-2">
          <div className="w-9 h-9 rounded bg-surface-container text-graphite-teal-deep flex items-center justify-center">
            <span className="material-symbols-outlined text-xl">account_tree</span>
          </div>
          <h4 className="font-title-md text-sm font-bold text-graphite-teal-deep uppercase">
            Taxonomia &amp; Setor
          </h4>
          <p className="font-body-sm text-xs text-on-surface-variant">
            Vocabulário institucional: Marinha do Brasil &middot; CFN &middot; CTDDCFN
          </p>
          <div className="pt-1">
            <span className="text-[11px] font-technical-code text-graphite-industrial bg-surface-container-low px-2 py-1 rounded block truncate border border-outline-variant/60">
              tid: 402 &middot; Term: {page.category}
            </span>
          </div>
        </div>

        <div className="p-5 bg-pure-white border border-outline-variant rounded-xl shadow-xs space-y-2">
          <div className="w-9 h-9 rounded bg-surface-container text-graphite-teal-deep flex items-center justify-center">
            <span className="material-symbols-outlined text-xl">security</span>
          </div>
          <h4 className="font-title-md text-sm font-bold text-graphite-teal-deep uppercase">
            Controle de Acesso
          </h4>
          <p className="font-body-sm text-xs text-on-surface-variant">
            Permissões RBAC Drupal: Papel Administrador &amp; Editor
          </p>
          <div className="pt-1">
            <span className="text-[11px] font-technical-code text-renewal-green-dark bg-renewal-green/10 px-2 py-1 rounded block truncate border border-renewal-green/30 font-bold">
              PERMISSÃO: VIEW PUBLISHED CONTENT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
