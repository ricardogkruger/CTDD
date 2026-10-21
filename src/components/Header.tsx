import React from 'react';
import { DeviceMode, PageItem } from '../types';

interface HeaderProps {
  activePage: PageItem;
  onNavigate: (slug: string) => void;
  onOpenCreatePage: () => void;
  onOpenDrupalExport: () => void;
  onOpenTwigInspector: () => void;
  deviceMode?: DeviceMode;
  onChangeDeviceMode?: (mode: DeviceMode) => void;
  setDeviceMode?: (mode: DeviceMode) => void;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  customPagesCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  onOpenCreatePage,
  onOpenDrupalExport,
  onOpenTwigInspector,
  deviceMode = 'desktop',
  onChangeDeviceMode,
  setDeviceMode,
  searchQuery = '',
  setSearchQuery,
  customPagesCount = 0,
}) => {
  const handleSetDeviceMode = (mode: DeviceMode) => {
    if (onChangeDeviceMode) onChangeDeviceMode(mode);
    if (setDeviceMode) setDeviceMode(mode);
  };

  return (
    <header className="w-full bg-white border-b border-[#e6e9e8] shadow-[0_2px_12px_rgba(0,46,50,0.06)] z-30 sticky top-0">
      {/* Top Studio Control Strip for Drupal 10/11 */}
      <div className="bg-[#00181a] text-white px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-teal-950 font-technical-code">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-bold text-[#bad435] uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm font-bold">layers</span>
            DRUPAL 10 &amp; 11 THEME STUDIO
          </span>
          <span className="text-teal-700 hidden sm:inline">|</span>
          <span className="text-slate-300 hidden sm:inline">
            Tema: <strong className="text-white font-semibold">ctddcfn_theme</strong>
          </span>
          <span className="bg-teal-900/80 text-teal-200 px-2 py-0.5 rounded text-[10px] uppercase font-bold">
            Tailwind + Twig
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Device Preview Switcher */}
          <div className="flex items-center bg-black/40 rounded p-0.5 border border-teal-900/60">
            <button
              onClick={() => handleSetDeviceMode('desktop')}
              title="Visualização Desktop (1440px)"
              className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${
                deviceMode === 'desktop' ? 'bg-[#bad435] text-[#002e32] font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">desktop_windows</span>
              <span className="hidden md:inline">Desktop</span>
            </button>
            <button
              onClick={() => handleSetDeviceMode('tablet')}
              title="Visualização Tablet (768px)"
              className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${
                deviceMode === 'tablet' ? 'bg-[#bad435] text-[#002e32] font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">tablet_mac</span>
              <span className="hidden md:inline">Tablet</span>
            </button>
            <button
              onClick={() => handleSetDeviceMode('mobile')}
              title="Visualização Mobile (390px)"
              className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${
                deviceMode === 'mobile' ? 'bg-[#bad435] text-[#002e32] font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">smartphone</span>
              <span className="hidden md:inline">Mobile</span>
            </button>
          </div>

          {/* Twig Inspector Button */}
          <button
            onClick={onOpenTwigInspector}
            className="px-2.5 py-1 bg-teal-900/70 hover:bg-teal-800 text-teal-200 hover:text-white rounded border border-teal-700/50 transition-colors flex items-center gap-1.5"
            title="Inspecionar template Twig desta página"
          >
            <span className="material-symbols-outlined text-[15px] text-[#bad435]">code</span>
            <span className="hidden sm:inline">Ver Twig</span>
          </button>

          {/* New Page Button */}
          <button
            onClick={onOpenCreatePage}
            className="px-3 py-1 bg-[#bad435] hover:bg-[#a8c428] text-[#002e32] font-bold rounded transition-colors flex items-center gap-1.5 shadow-sm active:scale-95"
            title="Criar nova página no Drupal"
          >
            <span className="material-symbols-outlined text-[16px] font-extrabold">add_circle</span>
            <span>+ Nova Página</span>
            {customPagesCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 bg-[#002e32] text-white rounded-full text-[10px]">
                {customPagesCount}
              </span>
            )}
          </button>

          {/* Export Drupal Theme Package */}
          <button
            onClick={onOpenDrupalExport}
            className="px-3 py-1 bg-[#00383D] hover:bg-teal-700 text-white font-semibold rounded border border-[#bad435]/40 transition-colors flex items-center gap-1.5 shadow-sm active:scale-95"
            title="Exportar pacote completo de tema Drupal 10/11 (.zip)"
          >
            <span className="material-symbols-outlined text-[16px] text-[#bad435]">folder_zip</span>
            <span className="hidden sm:inline">Exportar Tema (.zip)</span>
          </button>
        </div>
      </div>

      {/* Main Naval Institutional Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 py-3.5">
        {/* Brasão Oficial e Identidade Formal */}
        <div
          onClick={() => onNavigate('inicio')}
          className="flex items-center gap-3.5 shrink-0 cursor-pointer group"
          title="Ir para o Início"
        >
          <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 flex items-center justify-center p-1 rounded-lg bg-slate-50 border border-slate-200/80 group-hover:border-[#bad435] transition-colors shadow-sm">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDWfgWb8vqVQwcqXR7WC3-t6QoxGakcDktp6ccYYlQ45yHz1IkE2MiiKQzYmeZ1UoPUDZ3NkcUlge9Ja30eevMYeyiH3vHu5-tXf-eC4PaxpAqsbQMRj_9QTQ_kV7D4CMq-TKCfzUz_OPdwchz8pLNnth2iGcpmrdUOplO1qVBor-UHtVQLGm2NYLfWpHEyL-8kfOUnTJ8Yb3x4t7UQQZnkCB55lEQzZfe7TG8jfTPCTBpOoCLhsyLJo3mR6zrTmhsKA"
              alt="Brasão Oficial CTDDCFN"
              className="w-full h-full object-contain drop-shadow"
            />
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="font-headline text-xl md:text-2xl font-bold tracking-tight text-[#002e32] leading-none group-hover:text-teal-900 transition-colors">
                CTDDCFN
              </span>
              <span className="bg-[#bad435]/25 text-[#374500] border border-[#bad435]/50 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider font-technical-code">
                MARINHA DO BRASIL
              </span>
            </div>
            <span className="text-[11px] md:text-xs font-bold text-slate-700 tracking-tight uppercase leading-snug line-clamp-1 max-w-[550px] mt-0.5">
              Comando do Treinamento e do Desenvolvimento Doutrinário do CFN
            </span>
            <span className="text-[10px] font-extrabold text-[#566500] uppercase tracking-widest leading-none mt-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bad435]"></span>
              A PRONTIDÃO COMEÇA AQUI!
            </span>
          </div>
        </div>

        {/* Central Search Bar (Bússola Tática Rápida) */}
        <div className="flex-1 max-w-xl mx-4 hidden md:block">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-lg pointer-events-none">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
              placeholder="Pesquisar doutrinas, portarias, cursos, diretrizes e páginas..."
              className="w-full pl-10 pr-9 py-2 bg-slate-50 hover:bg-slate-100 text-slate-900 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-[#002e32] focus:ring-1 focus:ring-[#002e32] transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery && setSearchQuery('')}
                className="absolute right-3 text-slate-400 hover:text-slate-600"
                title="Limpar pesquisa"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            )}
          </div>
        </div>

        {/* User Operator Status Profile */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigate('inicio')}
            className="relative p-2 text-slate-600 hover:text-[#002e32] hover:bg-slate-100 transition-colors rounded-lg"
            title="Avisos Operacionais do Comando"
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#bad435] ring-2 ring-white"></span>
          </button>

          <button
            onClick={onOpenCreatePage}
            className="p-2 text-slate-600 hover:text-[#002e32] hover:bg-slate-100 transition-colors rounded-lg flex items-center gap-1"
            title="Adicionar Nova Página"
          >
            <span className="material-symbols-outlined text-[22px]">note_add</span>
          </button>

          <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>

          <div className="flex items-center gap-2 pl-1">
            <div className="w-9 h-9 rounded-full border border-[#002e32]/20 p-0.5 bg-slate-100 shrink-0 overflow-hidden flex items-center justify-center text-teal-900">
              <span className="material-symbols-outlined text-lg">shield_person</span>
            </div>
            <div className="hidden lg:flex flex-col text-left">
              <span className="text-xs font-bold text-slate-900 leading-tight">1º SG-FN</span>
              <span className="text-[10px] text-slate-500 font-technical-code leading-none">OPERADOR CMS</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
