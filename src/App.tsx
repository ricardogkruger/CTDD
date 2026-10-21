/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { DeviceMode, PageCategory, PageItem } from './types';
import { INITIAL_PAGES, loadSavedCustomPages, saveCustomPages } from './data/initialPages';
import { Header } from './components/Header';
import { PrimaryNav } from './components/PrimaryNav';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { CreatePageModal } from './components/CreatePageModal';
import { DrupalExportModal } from './components/DrupalExportModal';
import { TwigInspectorDrawer } from './components/TwigInspectorDrawer';
import { MenuLinksManagerModal } from './components/MenuLinksManagerModal';

// Menu Links State
import { loadMenuLinks, MenuLinkItem } from './data/menuLinksConfig';

// Views
import { HomeNoticiasView } from './views/HomeNoticiasView';
import { ComandanteView } from './views/ComandanteView';
import { SuboficialMorView } from './views/SuboficialMorView';
import { MissaoView } from './views/MissaoView';
import { VisaoView } from './views/VisaoView';
import { HeraldicaView } from './views/HeraldicaView';
import { HistoricoView } from './views/HistoricoView';
import { CurriculosView } from './views/CurriculosView';
import { FlashDoutrinarioView } from './views/FlashDoutrinarioView';
import { FronteirasTecnologiaView } from './views/FronteirasTecnologiaView';
import { SegProtAutView } from './views/SegProtAutView';
import { CustomPageView } from './views/CustomPageView';

// Novas Páginas Integradas
import { ExComandantesView } from './views/ExComandantesView';
import { AuxilioTransporteView } from './views/AuxilioTransporteView';
import { BancoTemasTccView } from './views/BancoTemasTccView';
import { CtddMarinstView } from './views/CtddMarinstView';
import { AgataAmazoniaView } from './views/AgataAmazoniaView';
import { OrdemInternaView } from './views/OrdemInternaView';
import { Vagas2027View } from './views/Vagas2027View';
import { PodcastDoutrinarioView } from './views/PodcastDoutrinarioView';
import { RaceView } from './views/RaceView';
import { PlacapeView } from './views/PlacapeView';
import { DesignSystemView } from './views/DesignSystemView';
import { MatrizNavegacaoView } from './views/MatrizNavegacaoView';
import { DrupalLinkedPageView } from './views/DrupalLinkedPageView';
import { DeusaMinervaView } from './views/DeusaMinervaView';
import { IdentidadeVisualView } from './views/IdentidadeVisualView';
import { ComSocialMediaView } from './views/ComSocialMediaView';

export default function App() {
  const [customPages, setCustomPages] = useState<PageItem[]>(() => loadSavedCustomPages());
  const [menuLinks, setMenuLinks] = useState<MenuLinkItem[]>(() => loadMenuLinks());
  const [currentSlug, setCurrentSlug] = useState<string>('inicio');
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals & Drawers
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [createInitialData, setCreateInitialData] = useState<{
    title?: string;
    slug?: string;
    category?: PageCategory;
  } | undefined>(undefined);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isTwigOpen, setIsTwigOpen] = useState(false);
  const [isMenuLinksModalOpen, setIsMenuLinksModalOpen] = useState(false);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Combine initial pages with custom ones
  const allPages = useMemo(() => {
    return [...INITIAL_PAGES, ...customPages];
  }, [customPages]);

  // Find active page
  const activePage = useMemo(() => {
    return allPages.find((p) => p.slug === currentSlug) || INITIAL_PAGES[0];
  }, [allPages, currentSlug]);

  const handleNavigate = (slug: string) => {
    setCurrentSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBussolaSearch = (term: string) => {
    const termLower = term.toLowerCase();
    const found = allPages.find(
      (p) =>
        p.title.toLowerCase().includes(termLower) ||
        p.slug.toLowerCase().includes(termLower) ||
        p.tags?.some((t) => t.toLowerCase().includes(termLower))
    );
    if (found) {
      handleNavigate(found.slug);
      showToast(`Resultado encontrado: ${found.title}`);
    } else {
      const foundLink = menuLinks.find(
        (m) =>
          m.title.toLowerCase().includes(termLower) ||
          m.slug.toLowerCase().includes(termLower) ||
          m.drupalUrl.toLowerCase().includes(termLower)
      );
      if (foundLink) {
        handleNavigate(foundLink.slug);
        showToast(`Item do menu localizado: ${foundLink.title}`);
      } else {
        showToast(`Buscando por: "${term}" no acervo do CTDD.`);
      }
    }
  };

  const handleSaveNewPage = (newPage: PageItem) => {
    const updated = [newPage, ...customPages];
    setCustomPages(updated);
    saveCustomPages(updated);
    setIsCreateOpen(false);
    setCreateInitialData(undefined);
    setCurrentSlug(newPage.slug);
    showToast(`Página "${newPage.title}" criada e adicionada ao tema Drupal 10!`);
  };

  const handleDeleteCustomPage = (id: string) => {
    const updated = customPages.filter((p) => p.id !== id);
    setCustomPages(updated);
    saveCustomPages(updated);
    setCurrentSlug('inicio');
    showToast('Página removida com sucesso.');
  };

  const handleOpenCreateModalWithData = (title: string, slug: string, category: string) => {
    setCreateInitialData({
      title,
      slug,
      category: (category as PageCategory) || 'produtos-doutrinarios',
    });
    setIsCreateOpen(true);
  };

  const handleUrlUpdated = (updatedItem: MenuLinkItem) => {
    const updatedList = menuLinks.map((m) => (m.id === updatedItem.id ? updatedItem : m));
    setMenuLinks(updatedList);
    showToast(`URL do menu Drupal atualizada: ${updatedItem.drupalUrl}`);
  };

  // Render view depending on activePage / currentSlug
  const renderCurrentView = () => {
    switch (currentSlug) {
      case 'inicio':
        return <HomeNoticiasView onNavigate={handleNavigate} />;
      case 'comandante':
        return <ComandanteView />;
      case 'suboficial-mor':
        return <SuboficialMorView />;
      case 'ex-comandantes':
        return <ExComandantesView />;
      case 'missao':
        return <MissaoView />;
      case 'visao':
        return <VisaoView onNavigate={handleNavigate} />;
      case 'deusa-minerva':
        return <DeusaMinervaView />;
      case 'heraldica':
        return <HeraldicaView />;
      case 'historico':
        return <HistoricoView />;
      case 'curriculos':
      case 'curriculos-e-cursos':
      case 'curriculos-cursos':
      case 'curriculo':
        return <CurriculosView />;
      case 'flash-doutrinario':
        return <FlashDoutrinarioView />;
      case 'fronteiras-tecnologia':
      case 'fronteira-tecnologia':
        return <FronteirasTecnologiaView />;
      case 'seg-prot-aut':
      case 'c-esp-segprotaut':
      case 'c-esp_segprotaut':
      case 'segprotaut':
        return <SegProtAutView />;
      case 'auxilio-transporte':
        return <AuxilioTransporteView />;
      case 'temas-tcc':
        return <BancoTemasTccView />;
      case 'ctddmarinst':
        return <CtddMarinstView />;
      case 'agata-amazonia':
        return <AgataAmazoniaView />;
      case 'ordem-interna':
        return <OrdemInternaView />;
      case 'vagas-2027':
      case 'solicitacao-de-vagas':
      case 'solicitacao-vagas':
      case 'vagas':
        return <Vagas2027View />;
      case 'podcast-doutrinario':
      case 'podcast':
      case 'podcasts':
      case 'momento-doutrinario':
      case 'podcast-momento-doutrinario':
        return <PodcastDoutrinarioView />;
      case 'race':
        return <RaceView />;
      case 'placape':
        return <PlacapeView />;
      case 'design-system':
        return <DesignSystemView />;
      case 'matriz-navegacao':
        return <MatrizNavegacaoView onNavigate={handleNavigate} />;
      case 'identidade-visual':
        return <IdentidadeVisualView />;
      case 'spotify-podcast-momento-doutrinario':
      case 'spotify-manuais':
      case 'spotify-audiobook':
      case 'youtube-pamm-cfn':
      case 'youtube-videos-doutrinarios':
      case 'youtube-podcast-momento-doutrinario':
      case 'youtube-podcast-leitura-profissional':
        return <ComSocialMediaView currentChannelId={currentSlug} onNavigate={handleNavigate} />;
      default: {
        // Check if currentSlug corresponds to a MenuLinkItem configured in Drupal
        const linkedMenuItem = menuLinks.find((m) => m.slug === currentSlug);
        if (linkedMenuItem && !linkedMenuItem.hasBuiltInPage) {
          return (
            <DrupalLinkedPageView
              menuItem={linkedMenuItem}
              onOpenCreateModal={handleOpenCreateModalWithData}
              onUrlUpdated={handleUrlUpdated}
            />
          );
        }

        // Custom user-created page
        return (
          <CustomPageView
            page={activePage}
            onDelete={handleDeleteCustomPage}
            onOpenCreateModal={() => setIsCreateOpen(true)}
          />
        );
      }
    }
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col font-sans selection:bg-renewal-green selection:text-graphite-teal-deep">
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-renewal-green text-graphite-industrial px-4 py-2.5 rounded-lg font-technical-code text-xs font-bold shadow-2xl flex items-center gap-2 border border-white/20 animate-bounce">
          <span className="material-symbols-outlined text-base">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenCreatePage={() => {
          setCreateInitialData(undefined);
          setIsCreateOpen(true);
        }}
        onOpenDrupalExport={() => setIsExportOpen(true)}
        onOpenTwigInspector={() => setIsTwigOpen(true)}
        deviceMode={deviceMode}
        onChangeDeviceMode={setDeviceMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        customPagesCount={customPages.length}
      />

      {/* Primary Horizontal Nav */}
      <PrimaryNav
        currentSlug={currentSlug}
        onNavigate={handleNavigate}
        onOpenCreatePage={() => {
          setCreateInitialData(undefined);
          setIsCreateOpen(true);
        }}
      />

      {/* Main Body with Device Frame Simulation */}
      <div className="flex-1 w-full bg-surface">
        <div
          className={`transition-all duration-300 mx-auto ${
            deviceMode === 'desktop'
              ? 'max-w-[1720px] px-4 sm:px-6 lg:px-8 py-6'
              : deviceMode === 'tablet'
              ? 'max-w-3xl px-4 py-8 bg-surface-container-low my-6 rounded-2xl border-4 border-outline-variant shadow-2xl'
              : 'max-w-sm px-3 py-6 bg-surface-container-low my-6 rounded-3xl border-8 border-graphite-industrial shadow-2xl'
          }`}
        >
          {deviceMode !== 'desktop' && (
            <div className="text-center pb-4 border-b border-outline-variant mb-6 flex items-center justify-between text-xs font-technical-code text-graphite-teal-deep">
              <span>MODO DE PREVIEW: {deviceMode.toUpperCase()}</span>
              <button
                onClick={() => setDeviceMode('desktop')}
                className="hover:underline text-on-surface-variant font-bold"
              >
                Voltar ao Desktop
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Column */}
            <div className="lg:col-span-3">
              <Sidebar
                currentSlug={currentSlug}
                onNavigate={handleNavigate}
                customPages={customPages}
                onOpenCreatePage={() => {
                  setCreateInitialData(undefined);
                  setIsCreateOpen(true);
                }}
                onDeleteCustomPage={handleDeleteCustomPage}
                onBussolaSearch={handleBussolaSearch}
                menuLinks={menuLinks}
                onOpenMenuLinksManager={() => setIsMenuLinksModalOpen(true)}
              />
            </div>

            {/* Main Content Area */}
            <main className="lg:col-span-9 min-h-[600px] flex flex-col">
              {renderCurrentView()}
            </main>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer
        onOpenExport={() => setIsExportOpen(true)}
        onOpenCreate={() => {
          setCreateInitialData(undefined);
          setIsCreateOpen(true);
        }}
      />

      {/* Modals & Drawers */}
      <CreatePageModal
        isOpen={isCreateOpen}
        onClose={() => {
          setIsCreateOpen(false);
          setCreateInitialData(undefined);
        }}
        onSave={handleSaveNewPage}
        initialData={createInitialData}
      />

      <DrupalExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        customPages={customPages}
      />

      <TwigInspectorDrawer
        isOpen={isTwigOpen}
        onClose={() => setIsTwigOpen(false)}
        activePage={activePage}
        customPages={customPages}
      />

      <MenuLinksManagerModal
        isOpen={isMenuLinksModalOpen}
        onClose={() => setIsMenuLinksModalOpen(false)}
        menuLinks={menuLinks}
        onLinksUpdated={setMenuLinks}
        onNavigateToSlug={handleNavigate}
      />
    </div>
  );
}
