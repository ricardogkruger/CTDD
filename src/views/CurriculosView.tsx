import React, { useState, useMemo } from 'react';
import { CURRICULOS_TABS, CurriculoTabId, CurriculoItem } from '../data/curriculosData';

export const CurriculosView: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<CurriculoTabId>('carreira');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);
  const [isDrupalModalOpen, setIsDrupalModalOpen] = useState(false);
  const [selectedCourseForUpload, setSelectedCourseForUpload] = useState<CurriculoItem | null>(null);
  const [uploadNotice, setUploadNotice] = useState<string | null>(null);

  // Get active tab configuration
  const activeTabConfig = useMemo(() => {
    return CURRICULOS_TABS.find((t) => t.id === activeTabId) || CURRICULOS_TABS[0];
  }, [activeTabId]);

  // Filter items in active tab by search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return activeTabConfig.items;
    const q = searchQuery.toLowerCase();
    return activeTabConfig.items.filter(
      (item) => item.name.toLowerCase().includes(q) || (item.code && item.code.toLowerCase().includes(q))
    );
  }, [activeTabConfig, searchQuery]);

  // Total count across all categories
  const totalCurriculos = useMemo(() => {
    return CURRICULOS_TABS.reduce((acc, tab) => acc + tab.items.length, 0);
  }, []);

  // Handle Download Action using official Design System
  const handleDownloadCurriculo = (item: CurriculoItem) => {
    const filename = `Curriculo_${item.code || item.number}.pdf`;
    const content = `MARINHA DO BRASIL
COMANDO DO TREINAMENTO E DO DESENVOLVIMENTO DOUTRINÁRIO DO CFN (CTDDCFN)
DIVISÃO DE ENSINO - DEPARTAMENTO DE DOUTRINA E ENSINO

================================================================================
EMENTA E MATRIZ CURRICULAR HOMOLOGADA
${item.name.toUpperCase()}
Código / Sigla: ${item.code || item.number}
Categoria: ${activeTabConfig.label}
================================================================================

1. FINALIDADE E OBJETIVO
Capacitar o pessoal militar do Corpo de Fuzileiros Navais de acordo com os
padrões doutrinários em vigor, atendendo aos requisitos operacionais da
Força de Fuzileiros da Esquadra (FFE) e dos Comandos de Distritos Navais.

2. CARGA HORÁRIA E REGIME
- Carga horária total: Conforme especificado na Diretriz Geral de Ensino
- Regime: Presencial / Semi-presencial / EAD com instruções práticas
- Unidade de Ensino: CTDDCFN / CIASC / CIAMPA

3. CRITÉRIOS DE AVALIAÇÃO E CERTIFICAÇÃO
- Frequência mínima obrigatória: 90%
- Média de aproveitamento mínimo: 7,0 (Escala 0 a 10)
- Exame de aptidão física e operacional homologado

Documento oficial homologado pelo Comando-Geral do CFN.
Arquivo gerado via CMS Drupal 10 - Repositório CTDDCFN.
Autenticação Eletrônica: MB-CTDDCFN-CURR-${Date.now()}
`;

    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadNotice(`Download iniciado: ${filename}`);
    setTimeout(() => setDownloadNotice(null), 4000);
  };

  // Handle upload action simulation
  const handleSimulateUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourseForUpload) return;
    setUploadNotice(`Novo arquivo anexado ao Drupal para "${selectedCourseForUpload.name}" com sucesso!`);
    setTimeout(() => {
      setUploadNotice(null);
      setIsDrupalModalOpen(false);
      setSelectedCourseForUpload(null);
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full space-y-6 animate-fadeIn font-sans text-on-surface">
      {/* Breadcrumb & Navigation Bar (Stitch Design System) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-outline-variant/60">
        <div className="flex items-center gap-2 text-xs font-mono text-outline">
          <span>INÍCIO</span>
          <span>/</span>
          <span className="text-on-surface-variant font-bold">ENSINO</span>
          <span>/</span>
          <span className="text-graphite-teal-deep font-extrabold">CURRÍCULOS DOS CURSOS</span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-2.5 py-1 bg-surface-container text-graphite-teal-deep font-bold rounded border border-outline-variant flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-renewal-green-dark"></span>
            135 HOMOLOGADOS
          </span>
          <button
            onClick={() => setIsDrupalModalOpen(true)}
            className="px-2.5 py-1 bg-graphite-teal-deep hover:bg-graphite-teal-surface text-white font-bold rounded flex items-center gap-1.5 shadow-2xs transition"
            title="Gerenciamento de arquivos no Drupal"
          >
            <span className="material-symbols-outlined text-sm text-renewal-green">cloud_upload</span>
            <span>Upload Drupal</span>
          </button>
        </div>
      </div>

      {/* Main Container following the internal page design logic of the site */}
      <section
        aria-label="Currículos dos Cursos"
        className="bg-surface-container-lowest rounded-xl border border-outline-variant/70 shadow-xs p-6 md:p-8 space-y-6"
      >
        {/* Header with Stitch left accent indicator */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-outline-variant/40">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-renewal-green rounded-full shrink-0"></div>
            <div>
              <span className="text-[10px] font-mono font-bold text-outline uppercase tracking-wider block">
                Divisão de Ensino e Avaliação • CFN
              </span>
              <h1 className="text-xl md:text-2xl font-extrabold text-graphite-teal-deep tracking-tight font-headline uppercase">
                Currículos dos Cursos
              </h1>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low border border-outline-variant/60 font-mono text-xs text-graphite-teal-deep">
            <span className="material-symbols-outlined text-sm text-renewal-green-dark">verified</span>
            <span>DIRETRIZ GERAL DE ENSINO MB</span>
          </div>
        </div>

        {/* Tab Navigation styled strictly with Design System Tokens */}
        <div className="flex flex-wrap items-center gap-2 border-b border-outline-variant/60 pb-3">
          {CURRICULOS_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTabId(tab.id);
                  setSearchQuery('');
                }}
                className={`px-4 py-2 text-xs md:text-sm font-headline uppercase tracking-wide rounded-lg transition-all cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-graphite-teal-deep text-white border-graphite-teal-deep font-extrabold shadow-xs'
                    : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant border-outline-variant/50 font-semibold'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${
                  isActive ? 'bg-renewal-green text-graphite-teal-deep' : 'bg-surface-container text-outline'
                }`}>
                  {tab.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Controls: Search & Counter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-sm">
              search
            </span>
            <input
              type="text"
              placeholder={`Filtrar ${activeTabConfig.label.toLowerCase()} por nome ou sigla...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-surface-container-low border border-outline-variant/70 rounded-lg focus:bg-white focus:border-graphite-teal-deep focus:ring-1 focus:ring-graphite-teal-deep focus:outline-none transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-outline hover:text-on-surface text-xs"
              >
                ✕
              </button>
            )}
          </div>

          <div className="text-xs text-on-surface-variant font-mono">
            Exibindo <strong>{filteredItems.length}</strong> de <strong>{activeTabConfig.items.length}</strong> {activeTabConfig.tableHeader.toLowerCase()}s
          </div>
        </div>

        {/* Download notification toast */}
        {downloadNotice && (
          <div className="p-3 bg-surface-container text-graphite-teal-deep border border-renewal-green rounded-lg text-xs font-mono font-semibold flex items-center justify-between animate-fadeIn shadow-xs">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-renewal-green-dark text-base">check_circle</span>
              <span>{downloadNotice}</span>
            </div>
            <span className="text-[10px] bg-renewal-green/20 text-graphite-teal-deep px-2 py-0.5 rounded font-bold">
              PDF • OSTENSIVO
            </span>
          </div>
        )}

        {/* The Table Styled strictly with Stitch Design System Tokens */}
        <div className="overflow-x-auto border border-outline-variant/70 rounded-lg shadow-2xs">
          <table className="w-full text-left text-xs md:text-sm border-collapse">
            <thead>
              <tr className="bg-graphite-teal-deep text-white font-bold text-xs uppercase font-mono tracking-wider">
                <th className="py-3 px-4 w-16 border-r border-white/10 text-center">
                  Nº
                </th>
                <th className="py-3 px-4 border-r border-white/10">
                  {activeTabConfig.tableHeader}
                </th>
                <th className="py-3 px-4 w-36 text-center">
                  Arquivo
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/40 font-sans">
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={3} className="py-8 text-center text-on-surface-variant italic font-sans">
                    Nenhum curso ou estágio encontrado para a pesquisa "{searchQuery}".
                  </td>
                </tr>
              ) : (
                filteredItems.map((item, idx) => (
                  <tr
                    key={item.number + item.name}
                    className={`hover:bg-surface-container-low transition-colors ${
                      idx % 2 === 1 ? 'bg-surface/60' : 'bg-surface-container-lowest'
                    }`}
                  >
                    {/* Nº */}
                    <td className="py-2.5 px-4 border-r border-outline-variant/30 font-mono font-bold text-outline text-center whitespace-nowrap">
                      {item.number}
                    </td>

                    {/* Curso / Estágio Name */}
                    <td className="py-2.5 px-4 border-r border-outline-variant/30 text-on-surface font-medium leading-snug">
                      <div className="flex items-center justify-between gap-3">
                        <span>{item.name}</span>
                        {item.code && (
                          <span className="hidden sm:inline-block text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-surface-container text-on-surface-variant border border-outline-variant/40 shrink-0">
                            {item.code}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Download Button using Design System Tokens (Graphite-Teal + Renewal-Green accent) */}
                    <td className="py-2.5 px-4 text-center whitespace-nowrap">
                      <button
                        onClick={() => handleDownloadCurriculo(item)}
                        type="button"
                        className="bg-graphite-teal-deep hover:bg-graphite-teal-surface active:bg-primary text-white text-xs font-headline font-bold uppercase tracking-wider px-3.5 py-1.5 rounded transition shadow-2xs cursor-pointer inline-flex items-center gap-1.5 group"
                        title={`Baixar currículo oficial em PDF: ${item.name}`}
                      >
                        <span className="material-symbols-outlined text-sm text-renewal-green group-hover:scale-110 transition-transform">
                          download
                        </span>
                        <span>Download</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Statistics Banner using Design System Tokens */}
        <div className="pt-4 border-t border-outline-variant/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-on-surface-variant font-mono">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-graphite-teal-deep text-sm">verified_user</span>
            <span>
              Catálogo Oficial do CTDDCFN • Total de <strong>{totalCurriculos}</strong> matrizes homologadas.
            </span>
          </div>

          <div className="flex items-center gap-2 font-bold text-outline text-[11px]">
            <span>Carreira (26)</span>
            <span>•</span>
            <span>Especiais (33)</span>
            <span>•</span>
            <span>Expeditos (10)</span>
            <span>•</span>
            <span>Aperfeiçoamento (8)</span>
            <span>•</span>
            <span>Estágios (58)</span>
          </div>
        </div>
      </section>

      {/* Drupal Upload Modal */}
      {isDrupalModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant max-w-lg w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-outline-variant/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-renewal-green-dark">cloud_upload</span>
                <h3 className="text-base font-bold text-graphite-teal-deep font-headline uppercase">
                  Upload de Currículo no Drupal 10
                </h3>
              </div>
              <button
                onClick={() => setIsDrupalModalOpen(false)}
                className="text-outline hover:text-on-surface text-lg leading-none"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-on-surface-variant leading-relaxed font-sans">
              No Drupal 10, cada currículo é associado a um nó do tipo <code>node--curriculo</code> através do campo de arquivo gerenciado (<code>field_arquivo_curriculo</code>).
            </p>

            {uploadNotice && (
              <div className="p-3 bg-surface-container border border-renewal-green rounded text-graphite-teal-deep text-xs font-mono font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-renewal-green-dark">check_circle</span>
                <span>{uploadNotice}</span>
              </div>
            )}

            <form onSubmit={handleSimulateUpload} className="space-y-4 text-xs font-sans">
              <div>
                <label className="block font-bold text-on-surface mb-1">
                  Selecione o Curso / Estágio:
                </label>
                <select
                  value={selectedCourseForUpload?.name || ''}
                  onChange={(e) => {
                    const found = activeTabConfig.items.find((item) => item.name === e.target.value);
                    setSelectedCourseForUpload(found || null);
                  }}
                  className="w-full p-2 bg-surface-container-low border border-outline-variant rounded focus:bg-white focus:outline-none"
                >
                  <option value="">Selecione um curso na aba atual...</option>
                  {activeTabConfig.items.map((item) => (
                    <option key={item.number} value={item.name}>
                      {item.number} - {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-on-surface mb-1">
                  Arquivo PDF do Currículo:
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  className="w-full p-2 bg-surface-container-low border border-outline-variant rounded cursor-pointer"
                />
                <span className="text-[10px] text-outline mt-0.5 block font-mono">
                  Formatos permitidos: PDF. Limite: 32 MB.
                </span>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-outline-variant/60 font-mono">
                <button
                  type="button"
                  onClick={() => setIsDrupalModalOpen(false)}
                  className="px-4 py-2 border border-outline-variant text-on-surface rounded hover:bg-surface-container font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={!selectedCourseForUpload}
                  className="px-4 py-2 bg-graphite-teal-deep hover:bg-graphite-teal-surface text-white rounded font-bold disabled:opacity-50 transition"
                >
                  Salvar no Drupal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
