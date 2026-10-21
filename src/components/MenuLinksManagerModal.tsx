import React, { useState } from 'react';
import { MenuLinkItem, resetMenuLinksToDefault, updateMenuLinkUrl } from '../data/menuLinksConfig';

interface MenuLinksManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  menuLinks: MenuLinkItem[];
  onLinksUpdated: (newLinks: MenuLinkItem[]) => void;
  onNavigateToSlug: (slug: string) => void;
}

export const MenuLinksManagerModal: React.FC<MenuLinksManagerModalProps> = ({
  isOpen,
  onClose,
  menuLinks,
  onLinksUpdated,
  onNavigateToSlug,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingUrls, setEditingUrls] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    menuLinks.forEach((m) => {
      initial[m.id] = m.drupalUrl;
    });
    return initial;
  });
  const [savedSuccessId, setSavedSuccessId] = useState<string | null>(null);

  if (!isOpen) return null;

  const categories = [
    'todos',
    'Institucional',
    'Produtos Doutrinários',
    'Comunicação Social e Estratégica',
    'SECOM',
    'Ensino',
    'Navegação / Administração',
    'Divisão de Informática',
  ];

  const filteredLinks = menuLinks.filter((item) => {
    const matchCategory = selectedCategory === 'todos' || item.category === selectedCategory;
    const matchSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.drupalUrl.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.slug.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleUrlChange = (id: string, value: string) => {
    setEditingUrls((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSaveIndividual = (item: MenuLinkItem) => {
    const newUrl = editingUrls[item.id] || item.drupalUrl;
    const updated = updateMenuLinkUrl(item.id, newUrl);
    onLinksUpdated(updated);
    setSavedSuccessId(item.id);
    setTimeout(() => setSavedSuccessId(null), 2000);
  };

  const handleResetDefaults = () => {
    if (confirm('Deseja redefinir todas as URLs de menu para os padrões originais?')) {
      const reset = resetMenuLinksToDefault();
      onLinksUpdated(reset);
      const initial: Record<string, string> = {};
      reset.forEach((m) => {
        initial[m.id] = m.drupalUrl;
      });
      setEditingUrls(initial);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#002e32] border-2 border-[#bad435]/50 rounded-xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#001f22] rounded-t-xl font-mono">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#bad435]/20 border border-[#bad435]/40 flex items-center justify-center text-[#bad435]">
              <span className="material-symbols-outlined text-2xl">link</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-white uppercase font-mono">
                  Gerenciador de URLs do Menu Drupal 10
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#bad435] text-[#002e32] font-extrabold">
                  MENU_LINK_CONTENT
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans">
                Configure os links da barra lateral esquerda que apontam para URLs personalizadas no painel do Drupal.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetDefaults}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-mono rounded transition"
            >
              Restaurar Padrões
            </button>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-2 rounded hover:bg-white/10 transition"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Toolbar */}
        <div className="p-4 bg-[#00262a] border-b border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded transition whitespace-nowrap text-[11px] ${
                  selectedCategory === cat
                    ? 'bg-[#bad435] text-[#002e32] font-bold'
                    : 'bg-black/30 text-slate-300 hover:text-white'
                }`}
              >
                {cat === 'todos' ? 'TODOS' : cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-base">
              search
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar link ou URL..."
              className="w-full bg-[#001f22] border border-white/15 rounded pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#bad435]"
            />
          </div>
        </div>

        {/* List of Links */}
        <div className="p-4 overflow-y-auto max-h-[62vh] space-y-3 font-mono text-xs">
          <div className="text-[11px] text-slate-400 flex items-center justify-between px-1">
            <span>Exibindo {filteredLinks.length} links de menu</span>
            <span className="text-[#bad435]">Clique no botão "Salvar" ao alterar qualquer URL</span>
          </div>

          <div className="divide-y divide-white/10 bg-[#001f22] rounded-xl border border-white/10 overflow-hidden">
            {filteredLinks.map((item) => {
              const currentVal = editingUrls[item.id] !== undefined ? editingUrls[item.id] : item.drupalUrl;
              const isSaved = savedSuccessId === item.id;
              return (
                <div key={item.id} className="p-3.5 flex flex-col lg:flex-row lg:items-center justify-between gap-3 hover:bg-white/5 transition">
                  <div className="flex items-center gap-3 min-w-[220px]">
                    <div className="w-8 h-8 rounded bg-[#00383d] text-[#bad435] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-base">{item.icon}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white font-sans text-xs sm:text-sm">{item.title}</span>
                        {item.hasBuiltInPage ? (
                          <span className="px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-400 text-[9px] font-bold border border-emerald-500/30">
                            PÁGINA PRONTA
                          </span>
                        ) : (
                          <span className="px-1.5 py-0.2 rounded bg-amber-950 text-amber-400 text-[9px] font-bold border border-amber-500/30">
                            URL DRUPAL
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400 block truncate">{item.category} • {item.description}</span>
                    </div>
                  </div>

                  {/* URL Input & Actions */}
                  <div className="flex items-center gap-2 flex-1 max-w-xl">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        value={currentVal}
                        onChange={(e) => handleUrlChange(item.id, e.target.value)}
                        placeholder="Ex: https://... ou internal:/node/..."
                        className="w-full bg-[#001618] border border-white/15 rounded px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#bad435] font-mono"
                      />
                    </div>

                    <button
                      onClick={() => handleSaveIndividual(item)}
                      className={`px-3 py-1.5 rounded font-bold text-xs flex items-center gap-1 transition shrink-0 ${
                        isSaved
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#bad435] hover:bg-[#8fa619] text-[#002e32]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-xs">
                        {isSaved ? 'check' : 'save'}
                      </span>
                      <span>{isSaved ? 'Salvo!' : 'Salvar'}</span>
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        onNavigateToSlug(item.slug);
                      }}
                      className="px-2.5 py-1.5 bg-white/10 hover:bg-white/20 text-slate-200 rounded text-xs flex items-center gap-1 shrink-0"
                      title="Abrir prévia no portal"
                    >
                      <span className="material-symbols-outlined text-xs">visibility</span>
                      <span className="hidden sm:inline">Ver</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#001f22] border-t border-white/10 flex items-center justify-between text-xs font-mono rounded-b-xl text-slate-400">
          <span>Configuração de links do menu Drupal 10 (menu_link_content).</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
