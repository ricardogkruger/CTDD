import React, { useState } from 'react';
import { exportDrupalZip, getDrupalThemeFiles } from '../data/drupalThemeFiles';
import { PageItem } from '../types';

interface DrupalExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  customPages: PageItem[];
}

export const DrupalExportModal: React.FC<DrupalExportModalProps> = ({ isOpen, onClose, customPages }) => {
  const [activeTab, setActiveTab] = useState<'files' | 'install'>('files');
  const [isExporting, setIsExporting] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const files = getDrupalThemeFiles(customPages);
  const [selectedFilePath, setSelectedFilePath] = useState<string>(files[0].path);

  if (!isOpen) return null;

  const currentFile = files.find((f) => f.path === selectedFilePath) || files[0];

  const handleDownloadZip = async () => {
    try {
      setIsExporting(true);
      await exportDrupalZip(customPages);
    } catch (err) {
      console.error('Erro ao exportar ZIP do Drupal:', err);
      alert('Falha ao gerar o arquivo ZIP do tema Drupal.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentFile.content);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#002e32] border-2 border-[#bad435]/50 rounded-xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#001f22] rounded-t-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#bad435]/20 border border-[#bad435]/40 flex items-center justify-center text-[#bad435]">
              <span className="material-symbols-outlined text-2xl">folder_zip</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-white uppercase font-mono">
                  Exportador de Tema Drupal 10 & 11
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#bad435] text-[#002e32] font-extrabold">
                  CTDDCFN-THEME v1.0.0
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Tema completo homologado com Twig, Tailwind CSS, configurações YML e suporte a {customPages.length} página(s) customizada(s).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadZip}
              disabled={isExporting}
              className="px-4 py-2 bg-[#bad435] hover:bg-[#8fa619] text-[#002e32] text-xs font-bold font-mono rounded transition flex items-center gap-2 shadow-lg disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-sm">
                {isExporting ? 'hourglass_top' : 'download'}
              </span>
              <span>{isExporting ? 'GERANDO PACOTE...' : 'BAIXAR TEMA COMPLETO (.ZIP)'}</span>
            </button>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-2 rounded hover:bg-white/10 transition"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-5 py-2 bg-[#00262a] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs font-mono">
            <button
              onClick={() => setActiveTab('files')}
              className={`py-1.5 flex items-center gap-1.5 border-b-2 transition ${
                activeTab === 'files'
                  ? 'border-[#bad435] text-[#bad435] font-bold'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-sm">inventory_2</span>
              ARQUIVOS DO TEMA ({files.length})
            </button>

            <button
              onClick={() => setActiveTab('install')}
              className={`py-1.5 flex items-center gap-1.5 border-b-2 transition ${
                activeTab === 'install'
                  ? 'border-[#bad435] text-[#bad435] font-bold'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-sm">terminal</span>
              GUIA DE INSTALAÇÃO NO DRUPAL
            </button>
          </div>

          <span className="text-[11px] font-mono text-slate-400">
            Compatibilidade: <strong>Drupal 10.x & 11.x (PHP 8.2+)</strong>
          </span>
        </div>

        {/* Content Body */}
        {activeTab === 'files' ? (
          <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden">
            {/* File List Tree */}
            <div className="md:col-span-4 border-r border-white/10 bg-[#001f22]/70 overflow-y-auto max-h-[60vh] p-3 space-y-1">
              <div className="text-[10px] font-mono text-slate-500 uppercase px-2 py-1 tracking-wider">
                Estrutura de Pastas do Tema
              </div>

              {files.map((file) => {
                const isSelected = file.path === selectedFilePath;
                const isTwig = file.path.endsWith('.twig');
                const isYml = file.path.endsWith('.yml');
                return (
                  <button
                    key={file.path}
                    onClick={() => setSelectedFilePath(file.path)}
                    className={`w-full text-left p-2 rounded text-xs font-mono transition flex items-center gap-2 ${
                      isSelected
                        ? 'bg-[#00383d] text-[#bad435] font-bold border border-[#bad435]/40'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm shrink-0">
                      {isTwig ? 'code' : isYml ? 'settings' : 'description'}
                    </span>
                    <span className="truncate flex-1">{file.path}</span>
                  </button>
                );
              })}
            </div>

            {/* Code Viewer */}
            <div className="md:col-span-8 flex flex-col bg-[#001618] overflow-hidden">
              <div className="p-3 border-b border-white/10 bg-[#001f22] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-[#bad435] font-bold">{currentFile.path}</span>
                  <span className="text-slate-400 text-[11px]">• {currentFile.description}</span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-slate-200 rounded transition flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-xs">
                    {copySuccess ? 'check' : 'content_copy'}
                  </span>
                  <span>{copySuccess ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>

              <div className="p-4 overflow-y-auto max-h-[55vh]">
                <pre className="font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap select-all">
                  {currentFile.content}
                </pre>
              </div>
            </div>
          </div>
        ) : (
          /* Installation Guide Tab */
          <div className="p-6 overflow-y-auto max-h-[65vh] space-y-6 text-xs font-mono text-slate-300">
            <div className="p-4 bg-[#001f22] border border-[#bad435]/30 rounded-lg space-y-3">
              <h3 className="text-sm font-bold text-white uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-[#bad435]">rocket_launch</span>
                Passo a Passo de Instalação no Servidor Drupal 10 ou 11
              </h3>
              <p className="text-slate-300 leading-relaxed">
                O pacote gerado é 100% aderente às normas oficiais da Drupal Association para temas de Drupal 10/11. 
                Siga os comandos abaixo no terminal do servidor ou container Docker:
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <span className="font-bold text-white uppercase">1. Descompactar o tema na pasta custom</span>
                <div className="bg-[#001618] p-3 rounded border border-white/10 text-[#bad435]">
                  <code>
                    mkdir -p web/themes/custom/ctddcfn_theme<br />
                    unzip ctddcfn_theme_drupal10.zip -d web/themes/custom/ctddcfn_theme
                  </code>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-white uppercase">2. Habilitar o tema como padrão com Drush</span>
                <div className="bg-[#001618] p-3 rounded border border-white/10 text-[#bad435]">
                  <code>
                    drush theme:enable ctddcfn_theme -y<br />
                    drush config:set system.theme default ctddcfn_theme -y
                  </code>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-white uppercase">3. Limpar todos os caches do Drupal</span>
                <div className="bg-[#001618] p-3 rounded border border-white/10 text-[#bad435]">
                  <code>
                    drush cache:rebuild # ou drush cr
                  </code>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-white uppercase">4. Configuração via Interface Web (Sem Terminal)</span>
                <p className="text-slate-300 leading-relaxed bg-[#001f22] p-3 rounded border border-white/10">
                  Acesse <strong>Administração &gt; Aparência (/admin/appearance)</strong>, localize o tema 
                  <strong>"CTDDCFN - Centro Tecnológico e de Doutrina"</strong> e clique em 
                  <span className="text-[#bad435] font-bold"> "Instalar e definir como padrão"</span>.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#00383d] border border-[#bad435]/30 rounded flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Quer baixar o pacote pronto agora?</span>
                <span className="text-slate-400 text-[11px]">
                  Gera o arquivo <code className="text-[#bad435]">ctddcfn_theme_drupal10.zip</code> com todos os templates.
                </span>
              </div>
              <button
                onClick={handleDownloadZip}
                disabled={isExporting}
                className="px-4 py-2 bg-[#bad435] hover:bg-[#8fa619] text-[#002e32] font-bold rounded flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                BAIXAR .ZIP
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
