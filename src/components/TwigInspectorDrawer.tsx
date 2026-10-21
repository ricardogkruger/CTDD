import React, { useState } from 'react';
import { getDrupalThemeFiles } from '../data/drupalThemeFiles';
import { PageItem } from '../types';

interface TwigInspectorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activePage: PageItem;
  customPages: PageItem[];
}

export const TwigInspectorDrawer: React.FC<TwigInspectorDrawerProps> = ({
  isOpen,
  onClose,
  activePage,
  customPages,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Find relevant Twig template for active page
  const themeFiles = getDrupalThemeFiles(customPages);

  let templatePath = 'templates/layout/page.html.twig';
  if (activePage.slug === 'inicio') {
    templatePath = 'templates/layout/page--front.html.twig';
  } else if (activePage.slug === 'vagas-2027' || activePage.slug === 'solicitacao-de-vagas') {
    templatePath = 'templates/content/node--vagas-2027.html.twig';
  } else if (activePage.slug === 'identidade-visual') {
    templatePath = 'templates/content/node--identidade-visual.html.twig';
  } else if (activePage.slug === 'flash-doutrinario') {
    templatePath = 'templates/content/node--flash-doutrinario.html.twig';
  } else if (activePage.slug === 'c-esp-segprotaut' || activePage.slug === 'seg-prot-aut') {
    templatePath = 'templates/content/node--segprotaut.html.twig';
  } else if (activePage.slug === 'race') {
    templatePath = 'templates/content/node--race.html.twig';
  } else if (activePage.slug === 'placape') {
    templatePath = 'templates/content/node--placape.html.twig';
  } else if (activePage.slug === 'podcast-doutrinario') {
    templatePath = 'templates/content/node--podcast.html.twig';
  } else if (activePage.contentType === 'noticia') {
    templatePath = 'templates/content/node--noticia.html.twig';
  } else if (activePage.contentType === 'biografia') {
    templatePath = 'templates/content/node--biografia.html.twig';
  } else if (activePage.contentType === 'curso' || activePage.contentType === 'curriculo') {
    templatePath = 'templates/content/node--curriculo.html.twig';
  } else if (activePage.contentType === 'diretriz') {
    templatePath = 'templates/content/node--diretriz.html.twig';
  } else {
    templatePath = 'templates/content/node--page.html.twig';
  }

  const currentTwigFile =
    themeFiles.find((f) => f.path === templatePath) ||
    themeFiles.find((f) => f.path.endsWith('.twig'))!;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTwigFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-[#001f22] border-l-2 border-[#bad435]/40 shadow-2xl flex flex-col">
      {/* Header */}
      <div className="p-4 bg-[#001618] border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#bad435] text-xl">code</span>
          <div>
            <h3 className="text-xs font-bold text-white uppercase font-mono">
              Inspetor de Template Twig
            </h3>
            <span className="text-[10px] text-slate-400 font-mono">
              Página ativa: <strong>{activePage.title}</strong>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white text-xs font-mono rounded flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-xs">
              {copied ? 'check' : 'content_copy'}
            </span>
            <span>{copied ? 'Copiado!' : 'Copiar Twig'}</span>
          </button>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/10"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>
      </div>

      {/* Info Pills */}
      <div className="p-3 bg-[#00262a] border-b border-white/10 flex flex-wrap gap-2 text-[11px] font-mono">
        <div className="px-2 py-0.5 bg-[#00383d] text-[#bad435] rounded border border-[#bad435]/30">
          Template: <strong>{templatePath}</strong>
        </div>
        <div className="px-2 py-0.5 bg-black/40 text-slate-300 rounded border border-white/10">
          Bundle: <strong>{activePage.contentType}</strong>
        </div>
        <div className="px-2 py-0.5 bg-black/40 text-slate-300 rounded border border-white/10">
          View Mode: <strong>full</strong>
        </div>
      </div>

      {/* Twig Code Content */}
      <div className="flex-1 overflow-y-auto p-4 bg-[#001618]">
        <pre className="font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap select-all">
          {currentTwigFile.content}
        </pre>
      </div>

      {/* Drupal Preprocess Variable Reference */}
      <div className="p-4 bg-[#00262a] border-t border-white/10 space-y-2 text-xs font-mono">
        <h4 className="text-[11px] font-bold text-[#bad435] uppercase flex items-center gap-1.5">
          <span className="material-symbols-outlined text-sm">tune</span>
          Variáveis Twig Injetadas pelo Drupal 10 Preprocess:
        </h4>
        <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300">
          <div className="p-1.5 bg-[#001f22] rounded border border-white/5">
            <code>{"{{ node.label }}"}</code>
            <span className="block text-slate-500">Título do conteúdo</span>
          </div>
          <div className="p-1.5 bg-[#001f22] rounded border border-white/5">
            <code>{"{{ content.body }}"}</code>
            <span className="block text-slate-500">Corpo formatado</span>
          </div>
          <div className="p-1.5 bg-[#001f22] rounded border border-white/5">
            <code>{"{{ author_name }}"}</code>
            <span className="block text-slate-500">Militar autor</span>
          </div>
          <div className="p-1.5 bg-[#001f22] rounded border border-white/5">
            <code>{"{{ date }}"}</code>
            <span className="block text-slate-500">Data de publicação</span>
          </div>
        </div>
      </div>
    </div>
  );
};
