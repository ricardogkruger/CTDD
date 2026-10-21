import React, { useState } from 'react';

interface FileUploadHistory {
  id: string;
  filename: string;
  size: string;
  uploadedAt: string;
  uploader: string;
  drupalFid: number;
  status: 'Ativo' | 'Histórico';
}

export const SegProtAutView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'visualizacao' | 'baremas' | 'drupal'>('visualizacao');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadNotice, setUploadNotice] = useState<string | null>(null);

  // Drupal file history state
  const [currentFile, setCurrentFile] = useState<FileUploadHistory>({
    id: 'f-2026-01',
    filename: 'TABELA INDICES SegProt.pdf',
    size: '842.6 KB',
    uploadedAt: '12/02/2026 10:45',
    uploader: '1º Ten (FN) Oficial de Ensino',
    drupalFid: 1420,
    status: 'Ativo',
  });

  const [history, setHistory] = useState<FileUploadHistory[]>([
    {
      id: 'f-2025-02',
      filename: 'TABELA INDICES SegProt 2025_v2.pdf',
      size: '810.1 KB',
      uploadedAt: '15/01/2025 14:20',
      uploader: 'Cap (FN) Encarregado da Divisão',
      drupalFid: 1104,
      status: 'Histórico',
    },
    {
      id: 'f-2024-01',
      filename: 'TABELA INDICES SegProt 2024.pdf',
      size: '795.4 KB',
      uploadedAt: '03/02/2024 09:12',
      uploader: 'SO-FN Encarregado de Cursos',
      drupalFid: 872,
      status: 'Histórico',
    },
  ]);

  // Handle PDF Download
  const handleDownloadPdf = () => {
    // Generate clean text-based mock PDF payload or triggering browser download
    const content = `MARINHA DO BRASIL
COMANDO DO TREINAMENTO E DO DESENVOLVIMENTO DOUTRINÁRIO DO CORPO DE FUZILEIROS NAVAIS (CTDDCFN)
DIVISÃO DE ENSINO - CURSO ESPECIAL DE SEGURANÇA E PROTEÇÃO DE AUTORIDADES (C-Esp-SegProtAut)

================================================================================
TABELA DE ÍNDICES DE ADMISSIBILIDADE E AVALIAÇÃO OPERACIONAL - CICLO 2026
Documento Oficial expedido em conformidade com as diretrizes do Comando-Geral do CFN
================================================================================

1. TESTE DE APTIDÃO FÍSICA ESPECIAL (TAF-Esp)
--------------------------------------------------------------------------------
Item | Prova Física                         | Índice Padrão A | Índice Padrão B (Mínimo)
1.1  | Corrida de 3.200 metros               | <= 13 min 30 s  | <= 14 min 15 s
1.2  | Natação Utilitária 200m (fardado)     | <= 4 min 10 s   | <= 4 min 45 s
1.3  | Flutuação Vertical fardado            | 25 minutos      | 20 minutos (ininterruptos)
1.4  | Flexão de Braço na Barra Fixa         | >= 12 reps      | >= 10 reps (estritas)
1.5  | Abdominal Militar (1 minuto)          | >= 55 reps      | >= 50 reps
1.6  | Salto de Plataforma 5m c/ desengraz.  | Aprovado        | Aprovado

2. BAREMAS DE TIRO DE COMBATE E SOBREVIVÊNCIA (TCS)
--------------------------------------------------------------------------------
2.1  | Precisão Geral sob Estresse Físico:   | Mínimo 85% de acertos em zona mortal
2.2  | Saque Rápido + Tiro Duplo (7 metros): | Tempo máximo de 1.8 segundos
2.3  | Transição de Armamento (Fuzil -> Pistola): | Tempo máximo de 2.2 segundos
2.4  | Tiro Noturno com Lanterna Tática:     | Mínimo 80% de precisão

3. MÓDULOS DE FORMAÇÃO EM SEGURANÇA DE AUTORIDADES
--------------------------------------------------------------------------------
- Doutrina de Escolta a Pé (Formações: Diamante, Caixa, Cunha, Linha)
- Condução Defensiva e Evasiva de Viaturas Blindadas (Manobras J-Turn / Bootlegger)
- Varredura de Itinerários e Locais de Pouso de Helicóptero
- Primeiros Socorros Táticos e Atendimento Pré-Hospitalar em Combate (TC3 / APH)

Publicado via CMS Drupal 10 - CTDDCFN.
Autenticação Eletrônica: CTDDCFN-SEGPROT-2026-AUT-${Date.now()}
`;

    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = currentFile.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4500);
  };

  // Handle Drupal File Upload simulation
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadNotice(null);

    setTimeout(() => {
      const oldActive = { ...currentFile, status: 'Histórico' as const };
      const newActive: FileUploadHistory = {
        id: `f-${Date.now()}`,
        filename: file.name.endsWith('.pdf') ? file.name : `${file.name}.pdf`,
        size: `${(file.size / 1024).toFixed(1)} KB`,
        uploadedAt: new Date().toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        uploader: 'Operador Drupal (Sessão Ativa)',
        drupalFid: currentFile.drupalFid + 1,
        status: 'Ativo',
      };

      setCurrentFile(newActive);
      setHistory((prev) => [oldActive, ...prev]);
      setIsUploading(false);
      setUploadNotice(`Arquivo "${newActive.filename}" enviado com sucesso ao Drupal 10 (FID: ${newActive.drupalFid})!`);
      setTimeout(() => setUploadNotice(null), 5000);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full space-y-6 animate-fadeIn">
      {/* Breadcrumb & Navigation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-200">
        <div className="flex items-center gap-2 text-xs text-gray-500 font-sans">
          <span>Início</span>
          <span>/</span>
          <span className="text-gray-700 font-medium">ENSINO</span>
          <span>/</span>
          <span className="text-[#002e32] font-bold">C-Esp-SegProtAut</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-[#ebeeed] text-[#002e32] text-xs font-mono font-bold rounded border border-gray-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            DRUPAL 10: PUBLICADO
          </span>
          <span className="px-2.5 py-1 bg-amber-50 text-amber-900 text-xs font-mono font-bold rounded border border-amber-200">
            CICLO 2026
          </span>
        </div>
      </div>

      {/* =========================================================================
          AUTHENTIC SCREENSHOT BOX (Exact replica of original CTDDCFN Drupal page)
          Matches Seg_Prot_-_CTDDCFN_-__ctddcfn.mb__361e5152.png
         ========================================================================= */}
      <section
        aria-label="Conteúdo Principal C-Esp-SegProtAut"
        className="bg-white rounded-xl border border-gray-200/90 shadow-sm p-6 sm:p-8"
      >
        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-bold text-[#181c1c] tracking-tight font-headline">
          Índices C-Esp-SegProtAut/2026
        </h1>

        {/* Horizontal rule below title */}
        <div className="w-full border-b border-gray-200 mt-2 mb-5"></div>

        {/* Explanatory text */}
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 font-sans">
          O arquivo abaixo está disponível para consulta e download. Ele contém os índices atualizados relacionados ao Curso Especial de Segurança e Proteção de Autoridades para o ano de 2026.
        </p>

        {/* Design System Tactical Download Button */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={handleDownloadPdf}
            type="button"
            className="bg-graphite-teal-deep hover:bg-graphite-teal-surface active:bg-primary text-white font-headline font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-lg shadow-xs transition-colors cursor-pointer inline-flex items-center gap-2.5 group"
            title="Clique para baixar a Tabela de Índices atualizada"
          >
            <span className="material-symbols-outlined text-base text-renewal-green group-hover:scale-110 transition-transform">
              description
            </span>
            <span>{currentFile.filename}</span>
            <span className="material-symbols-outlined text-sm ml-1 text-renewal-green opacity-90">
              download
            </span>
          </button>

          <button
            onClick={() => setActiveTab('baremas')}
            type="button"
            className="text-xs sm:text-sm font-semibold text-graphite-teal-deep hover:text-graphite-teal-surface hover:underline flex items-center gap-1.5 px-3 py-2"
          >
            <span className="material-symbols-outlined text-base text-renewal-green-dark">table_chart</span>
            <span>Ver Tabela de Índices na Tela</span>
          </button>
        </div>

        {/* Download Success Banner */}
        {downloadSuccess && (
          <div className="mt-4 p-3.5 bg-emerald-50 border border-emerald-300 rounded-lg text-emerald-900 text-xs font-medium flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-700 text-lg">check_circle</span>
              <span>
                Download iniciado com sucesso! Arquivo: <strong>{currentFile.filename}</strong> ({currentFile.size})
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-700">SHA-256 OK</span>
          </div>
        )}
      </section>

      {/* =========================================================================
          INTERACTIVE TABS: VISUALIZAÇÃO DOS ÍNDICES / UPLOAD DRUPAL / BAREMAS
         ========================================================================= */}
      <div className="bg-white rounded-xl border border-gray-200/90 shadow-sm overflow-hidden">
        {/* Tab Headers */}
        <div className="flex border-b border-gray-200 bg-gray-50/60 px-4 sm:px-6 pt-3 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('visualizacao')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'visualizacao'
                ? 'border-[#002e32] text-[#002e32]'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <span className="material-symbols-outlined text-base">visibility</span>
            <span>Visualização do Documento</span>
          </button>

          <button
            onClick={() => setActiveTab('baremas')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'baremas'
                ? 'border-[#002e32] text-[#002e32]'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <span className="material-symbols-outlined text-base">military_tech</span>
            <span>Baremas & Índices Físicos/Tiro</span>
          </button>

          <button
            onClick={() => setActiveTab('drupal')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'drupal'
                ? 'border-[#bad435] text-[#002e32] bg-white rounded-t-lg shadow-2xs'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <span className="material-symbols-outlined text-base text-[#566500]">cloud_upload</span>
            <span>Gestão Drupal (Upload de Arquivo)</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-mono font-bold px-1.5 py-0.2 rounded">
              CMS
            </span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {/* TAB 1: VISUALIZAÇÃO DO DOCUMENTO */}
          {activeTab === 'visualizacao' && (
            <div className="space-y-6">
              {/* Document Metadata Card */}
              <div className="bg-[#f7faf9] border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#374438] text-white flex items-center justify-center font-bold text-sm">
                    PDF
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{currentFile.filename}</h3>
                    <p className="text-xs text-gray-500">
                      Tamanho: {currentFile.size} • Atualizado em: {currentFile.uploadedAt} • Drupal FID: #{currentFile.drupalFid}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start md:self-auto">
                  <button
                    onClick={handleDownloadPdf}
                    className="px-3 py-1.5 bg-[#002e32] hover:bg-[#00383d] text-white text-xs font-bold rounded flex items-center gap-1.5 transition"
                  >
                    <span className="material-symbols-outlined text-sm">download</span>
                    Baixar PDF
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="px-3 py-1.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-bold rounded flex items-center gap-1.5 transition"
                  >
                    <span className="material-symbols-outlined text-sm">print</span>
                    Imprimir
                  </button>
                </div>
              </div>

              {/* Document Preview Sheet */}
              <div className="border border-gray-300 rounded-lg bg-white shadow-xs p-6 md:p-8 font-sans space-y-6">
                <div className="text-center pb-6 border-b border-gray-200">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 font-mono">
                    MARINHA DO BRASIL • COMANDO-GERAL DO CORPO DE FUZILEIROS NAVAIS
                  </p>
                  <h2 className="text-lg md:text-xl font-extrabold text-[#002e32] mt-1 font-headline">
                    COMANDO DO TREINAMENTO E DO DESENVOLVIMENTO DOUTRINÁRIO
                  </h2>
                  <p className="text-xs font-semibold text-gray-600 mt-1">
                    CURSO ESPECIAL DE SEGURANÇA E PROTEÇÃO DE AUTORIDADES (C-Esp-SegProtAut)
                  </p>
                  <div className="inline-block mt-3 px-3 py-1 bg-gray-100 text-gray-800 text-xs font-mono font-bold rounded border border-gray-300">
                    TABELA DE ÍNDICES ATUALIZADA — CICLO 2026
                  </div>
                </div>

                {/* Resumo do Curso */}
                <div className="space-y-3 text-xs md:text-sm text-gray-700 leading-relaxed">
                  <p>
                    <strong>Finalidade do Curso:</strong> Capacitar Oficiais e Praças do Corpo de Fuzileiros Navais e de outras Forças Singulares para o planejamento, coordenação e execução de ações táticas de segurança e proteção de dignitários, chefes de Estado, autoridades civis e militares nacionais e estrangeiras, em ambiente urbano, rural ou de operações expedicionárias.
                  </p>
                  <p>
                    <strong>Regime de Dedicação:</strong> Tempo Integral, com regime de internato e exercícios práticos diurnos e noturnos de tiro defensivo, comboio blindado e combate em recinto confinado (CQB).
                  </p>
                </div>

                {/* Quick Summary Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded text-center">
                    <span className="text-[10px] uppercase font-mono text-gray-500 block">Duração Estimada</span>
                    <span className="text-sm font-bold text-[#002e32]">08 Semanas (320h)</span>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded text-center">
                    <span className="text-[10px] uppercase font-mono text-gray-500 block">Grau de Sigilo</span>
                    <span className="text-sm font-bold text-[#002e32]">Ostensivo (Índices)</span>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded text-center">
                    <span className="text-[10px] uppercase font-mono text-gray-500 block">Homologação</span>
                    <span className="text-sm font-bold text-[#002e32]">Portaria COMIMSUP Nº 42/26</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: BAREMAS & ÍNDICES OFICIAIS 2026 */}
          {activeTab === 'baremas' && (
            <div className="space-y-6">
              {/* TAF-Esp */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#002e32] uppercase tracking-wide flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#566500]">fitness_center</span>
                    1. Teste de Aptidão Física Especial (TAF-Esp 2026)
                  </h3>
                  <span className="text-xs font-mono text-gray-500">Eliminatório & Classificatório</span>
                </div>

                <div className="overflow-x-auto border border-gray-200 rounded-lg">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#002e32] text-white font-mono uppercase text-[11px]">
                      <tr>
                        <th className="py-2.5 px-3">Item</th>
                        <th className="py-2.5 px-3">Modalidade / Prova</th>
                        <th className="py-2.5 px-3">Padrão A (Excelente)</th>
                        <th className="py-2.5 px-3">Padrão B (Mínimo Admissível)</th>
                        <th className="py-2.5 px-3">Uniforme</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 font-sans">
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-3 font-mono font-bold text-gray-600">1.1</td>
                        <td className="py-2 px-3 font-semibold text-gray-900">Corrida Rústica de 3.200m</td>
                        <td className="py-2 px-3 text-emerald-800 font-bold">&le; 13 min 30 s</td>
                        <td className="py-2 px-3 text-gray-700">&le; 14 min 15 s</td>
                        <td className="py-2 px-3 text-gray-500">Camuflado s/ coturno</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-3 font-mono font-bold text-gray-600">1.2</td>
                        <td className="py-2 px-3 font-semibold text-gray-900">Natação Utilitária 200m</td>
                        <td className="py-2 px-3 text-emerald-800 font-bold">&le; 4 min 10 s</td>
                        <td className="py-2 px-3 text-gray-700">&le; 4 min 45 s</td>
                        <td className="py-2 px-3 text-gray-500">Calça camuflada</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-3 font-mono font-bold text-gray-600">1.3</td>
                        <td className="py-2 px-3 font-semibold text-gray-900">Flutuação Vertical Fardado</td>
                        <td className="py-2 px-3 text-emerald-800 font-bold">&ge; 25 minutos</td>
                        <td className="py-2 px-3 text-gray-700">&ge; 20 min ininterruptos</td>
                        <td className="py-2 px-3 text-gray-500">Uniforme camuflado completo</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-3 font-mono font-bold text-gray-600">1.4</td>
                        <td className="py-2 px-3 font-semibold text-gray-900">Flexão na Barra Fixa</td>
                        <td className="py-2 px-3 text-emerald-800 font-bold">&ge; 14 reps</td>
                        <td className="py-2 px-3 text-gray-700">&ge; 10 reps estritas</td>
                        <td className="py-2 px-3 text-gray-500">Camuflado</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-3 font-mono font-bold text-gray-600">1.5</td>
                        <td className="py-2 px-3 font-semibold text-gray-900">Abdominal Militar (1 min)</td>
                        <td className="py-2 px-3 text-emerald-800 font-bold">&ge; 58 reps</td>
                        <td className="py-2 px-3 text-gray-700">&ge; 50 reps</td>
                        <td className="py-2 px-3 text-gray-500">Camuflado</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-3 font-mono font-bold text-gray-600">1.6</td>
                        <td className="py-2 px-3 font-semibold text-gray-900">Salto da Plataforma 5m</td>
                        <td className="py-2 px-3 text-emerald-800 font-bold">Aprovado s/ hesitação</td>
                        <td className="py-2 px-3 text-gray-700">Aprovado</td>
                        <td className="py-2 px-3 text-gray-500">Fardado c/ mochila</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Baremas de Tiro */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#002e32] uppercase tracking-wide flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#566500]">target</span>
                    2. Barema de Tiro de Combate e Sobrevivência (TCS)
                  </h3>
                  <span className="text-xs font-mono text-gray-500">Avaliação Contínua</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg space-y-1">
                    <div className="flex items-center justify-between font-bold text-gray-900">
                      <span>Saque Rápido & Double-Tap (7m)</span>
                      <span className="font-mono text-emerald-700">&le; 1.8 segundos</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Dois disparos no tronco de silhueta humanoide a partir do coldre velado, simulando reação a agressão letal contra a autoridade.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg space-y-1">
                    <div className="flex items-center justify-between font-bold text-gray-900">
                      <span>Transição de Armamento (15m)</span>
                      <span className="font-mono text-emerald-700">&le; 2.2 segundos</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Pane simulada em fuzil 5.56mm com transição obrigatória para pistola 9mm e três disparos em alvo com 100% de precisão.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg space-y-1">
                    <div className="flex items-center justify-between font-bold text-gray-900">
                      <span>Tiro em Movimento c/ Escolta</span>
                      <span className="font-mono text-emerald-700">&ge; 85% Precisão</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Deslocamento em formação caixa/diamante, disparo com uma mão livre enquanto a outra conduz e protege o VIP em direção à cápsula.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg space-y-1">
                    <div className="flex items-center justify-between font-bold text-gray-900">
                      <span>Tiro em Baixa Luminosidade (Noite)</span>
                      <span className="font-mono text-emerald-700">&ge; 80% Precisão</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Identificação positiva de alvos com auxílio de lanterna tática (técnica Harries / Chapman) em ambiente escuro com múltiplos estímulos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GESTÃO DRUPAL 10 (UPLOAD DE ARQUIVOS) */}
          {activeTab === 'drupal' && (
            <div className="space-y-6">
              <div className="bg-[#002e32] text-white p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#bad435]">folder_managed</span>
                    <h3 className="text-sm font-bold tracking-wide uppercase font-headline">
                      Drupal 10 Core: File Upload System
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300">
                    Gerenciamento do campo <code>field_arquivo_pdf</code> no tipo de conteúdo <code>node--curso</code>.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#bad435]">
                  <span>Módulo: file.module</span>
                  <span>•</span>
                  <span>URI: public://ensino/segprotaut/</span>
                </div>
              </div>

              {/* Upload Notification Banner */}
              {uploadNotice && (
                <div className="p-3.5 bg-emerald-50 border border-emerald-300 rounded-lg text-emerald-900 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
                  <span className="material-symbols-outlined text-emerald-700">check_circle</span>
                  <span>{uploadNotice}</span>
                </div>
              )}

              {/* Drupal Upload Dropzone */}
              <div className="border-2 border-dashed border-gray-300 hover:border-[#002e32] rounded-xl p-8 text-center bg-gray-50/50 transition-colors">
                <div className="max-w-md mx-auto space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#ebeeed] text-[#002e32] flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-2xl">
                      {isUploading ? 'progress_activity' : 'cloud_upload'}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      {isUploading ? 'Enviando arquivo para o Drupal...' : 'Substituir ou Enviar Novo Arquivo'}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Arquivos permitidos: PDF, DOCX, ODT. Tamanho máximo configurado: 32 MB.
                    </p>
                  </div>

                  <div className="pt-2">
                    <label className="inline-flex items-center gap-2 px-4 py-2 bg-[#002e32] hover:bg-[#00383d] text-white text-xs font-bold rounded cursor-pointer transition shadow-xs">
                      <span className="material-symbols-outlined text-base">upload_file</span>
                      <span>Selecionar Arquivo no Computador</span>
                      <input
                        type="file"
                        accept=".pdf,.docx,.odt"
                        onChange={handleFileUpload}
                        disabled={isUploading}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* History / File Revisions in Drupal */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 font-mono">
                  Histórico de Versões no Repositório Drupal (File Managed)
                </h4>

                <div className="overflow-x-auto border border-gray-200 rounded-lg">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-gray-100 text-gray-700 font-mono text-[11px]">
                      <tr>
                        <th className="py-2 px-3">FID</th>
                        <th className="py-2 px-3">Nome do Arquivo</th>
                        <th className="py-2 px-3">Tamanho</th>
                        <th className="py-2 px-3">Data do Upload</th>
                        <th className="py-2 px-3">Operador / Autor</th>
                        <th className="py-2 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 font-sans">
                      <tr className="bg-emerald-50/60 font-medium">
                        <td className="py-2 px-3 font-mono font-bold text-[#002e32]">#{currentFile.drupalFid}</td>
                        <td className="py-2 px-3 text-gray-900 font-bold flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-sm text-emerald-700">task_alt</span>
                          {currentFile.filename}
                        </td>
                        <td className="py-2 px-3 text-gray-600 font-mono">{currentFile.size}</td>
                        <td className="py-2 px-3 text-gray-600">{currentFile.uploadedAt}</td>
                        <td className="py-2 px-3 text-gray-700">{currentFile.uploader}</td>
                        <td className="py-2 px-3">
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">
                            ATIVO NO PORTAL
                          </span>
                        </td>
                      </tr>
                      {history.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50 text-gray-600">
                          <td className="py-2 px-3 font-mono">#{item.drupalFid}</td>
                          <td className="py-2 px-3 font-medium text-gray-800">{item.filename}</td>
                          <td className="py-2 px-3 font-mono">{item.size}</td>
                          <td className="py-2 px-3">{item.uploadedAt}</td>
                          <td className="py-2 px-3">{item.uploader}</td>
                          <td className="py-2 px-3">
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-medium rounded">
                              ARQUIVADO
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
