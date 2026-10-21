import React, { useState, useEffect, useRef } from 'react';

export interface FlashEdition {
  id: string;
  editionNumber: string; // e.g. "Edição 24"
  issueCode: string; // e.g. "Ano 2023 - Nº 24"
  title: string;
  author: string;
  date: string;
  fileSize: string;
  drupalUri: string; // e.g. "public://flash_doutrinario/2023-11/edicao_24.pdf"
  drupalFid: number;
  drupalUuid: string;
  badgeColor: string; // e.g. "#f6caa0"
  tagTextColor?: string;
  cardImage: string;
  docImage: string;
  summary: string;
  isCustom?: boolean;
  uploadedPdfBlobUrl?: string;
  fileName?: string;
}

const DEFAULT_EDITIONS: FlashEdition[] = [
  {
    id: 'ed-24',
    editionNumber: 'Edição 24',
    issueCode: 'Ano 2023 - Nº 24',
    title: 'Principais Medidas de Coordenação e Controle nas Operações Aeromóveis',
    author: 'CTD (IM-FN) Joel Emílio de Oliveira Rodrigues e demais pesquisadores',
    date: 'NOV 2023',
    fileSize: '2.4 MB',
    drupalUri: 'public://flash_doutrinario/2023-11/flash_doutrinario_ed_24.pdf',
    drupalFid: 1024,
    drupalUuid: 'a89c20f1-447a-4291-b3de-c4a009e88d01',
    badgeColor: '#f6caa0',
    cardImage: '/assets/flash/card_24.png',
    docImage: '/assets/flash/doc_24.png',
    summary: 'Sistematização das medidas de coordenação e controle (MCC) nas operações aeromóveis com helicópteros da Força de Fuzileiros da Esquadra (FFE), pontos de controle, zonas de pouso de helicópteros (ZPH) e corredores aéreos táticos.',
  },
  {
    id: 'ed-23',
    editionNumber: 'Edição 23',
    issueCode: 'Ano 2022 - Nº 23',
    title: 'Zona de Reunião (ZReu), Objetivo de Marcha, Região de Destino, Alto e Alto Guardado',
    author: 'CMG (FN) Samy e pesquisadores da Divisão Doutrinária',
    date: 'SET 2022',
    fileSize: '1.9 MB',
    drupalUri: 'public://flash_doutrinario/2022-09/flash_doutrinario_ed_23.pdf',
    drupalFid: 1023,
    drupalUuid: 'b71239cd-90bc-4389-94af-3bca9821ef22',
    badgeColor: '#88c084',
    cardImage: '/assets/flash/card_23.png',
    docImage: '/assets/flash/doc_23.png',
    summary: 'Conceituação doutrinária e padronização operacional de Zona de Reunião (ZReu), Objetivo de Marcha, Região de Destino e disciplina de segurança durante deslocamentos terrestres motorizados e a pé.',
  },
  {
    id: 'ed-22',
    editionNumber: 'Edição 22',
    issueCode: 'Ano 2019 - Nº 22',
    title: 'EMBARQUE E DESEMBARQUE (PARTE II)',
    author: 'CMG (FN) Joaquim Eduardo Dias Neto (DIAS_NETO@MARINHA.MIL.BR)',
    date: 'JUN 2019',
    fileSize: '3.1 MB',
    drupalUri: 'public://flash_doutrinario/2019-06/flash_doutrinario_ed_22.pdf',
    drupalFid: 1022,
    drupalUuid: 'c1998f44-1234-45aa-8910-def098761234',
    badgeColor: '#a9ba56',
    cardImage: '/assets/flash/card_22.png',
    docImage: '/assets/flash/doc_22.png',
    summary: 'Rotinas de estiva tática, amarração de viaturas blindadas CLANF e Unimog em convoo e dique de navios anfíbios, e controle de fluxo durante a fase de desembarque por superfície.',
  },
  {
    id: 'ed-21',
    editionNumber: 'Edição 21',
    issueCode: 'Ano 2018 - Nº 21',
    title: 'EMBARQUE E DESEMBARQUE (PARTE I)',
    author: 'CMG (FN) Joaquim Eduardo Dias Neto',
    date: 'DEZ 2018',
    fileSize: '2.8 MB',
    drupalUri: 'public://flash_doutrinario/2018-12/flash_doutrinario_ed_21.pdf',
    drupalFid: 1021,
    drupalUuid: 'd5678abc-8899-4321-9988-aabbccddeeff',
    badgeColor: '#f5b800',
    cardImage: '/assets/flash/card_21.png',
    docImage: '/assets/flash/doc_21.png',
    summary: 'Organização prévia e cálculo de capacidade de transporte para tropas expedicionárias de Fuzileiros Navais, distribuição de pessoal e material por embarcações de desembarque.',
  },
  {
    id: 'ed-20',
    editionNumber: 'Edição 20',
    issueCode: 'Ano 2017 - Nº 20',
    title: 'PLANO DE BUSCA',
    author: 'CMG (FN) José Carlos Linares Bastos e CMG (FN) Samuel Leal',
    date: 'AGO 2017',
    fileSize: '2.2 MB',
    drupalUri: 'public://flash_doutrinario/2017-08/flash_doutrinario_ed_20.pdf',
    drupalFid: 1020,
    drupalUuid: 'e0123456-789a-bcde-f012-3456789abcde',
    badgeColor: '#ea6d20',
    cardImage: '/assets/flash/card_20.png',
    docImage: '/assets/flash/doc_20.png',
    summary: 'Elaboração e execução do Plano de Busca no ciclo de inteligência operacional de combate em apoio à Força de Desembarque Anfíbia.',
  },
  {
    id: 'ed-19',
    editionNumber: 'Edição 19',
    issueCode: 'Ano 2017 - Nº 19',
    title: 'DISTINÇÃO ENTRE LIGAÇÃO E JUNÇÃO',
    author: 'CC (FN) Rodrigo Ramos Ferreira',
    date: 'MAI 2017',
    fileSize: '1.8 MB',
    drupalUri: 'public://flash_doutrinario/2017-05/flash_doutrinario_ed_19.pdf',
    drupalFid: 1019,
    drupalUuid: 'f9876543-210f-edcb-a987-654321fedcba',
    badgeColor: '#7d8d9b',
    cardImage: '/assets/flash/card_19.png',
    docImage: '/assets/flash/doc_19.png',
    summary: 'Conceituação técnica e diferenças fundamentais entre operações de Ligação tática entre elementos adjacentes e operação de Junção (Link-up) em área de operações anfíbias.',
  },
  {
    id: 'ed-18',
    editionNumber: 'Edição 18',
    issueCode: 'Ano 2017 - Nº 18',
    title: 'PLANO DE DESEMBARQUE',
    author: 'CMG (FN) Flávio Xavier Guasque',
    date: 'MAR 2017',
    fileSize: '3.0 MB',
    drupalUri: 'public://flash_doutrinario/2017-03/flash_doutrinario_ed_18.pdf',
    drupalFid: 1018,
    drupalUuid: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
    badgeColor: '#f0b310',
    cardImage: '/assets/flash/card_18.png',
    docImage: '/assets/flash/doc_18.png',
    summary: 'Diretrizes formais e anexos para elaboração do Plano de Desembarque em Operações Anfíbias, cronograma de vagas de assalto e apoio de fogo naval preparatório.',
  },
  {
    id: 'ed-17',
    editionNumber: 'Edição 17',
    issueCode: 'Ano 2016 - Nº 17',
    title: 'O GRUPO TÁTICO-LOGÍSTICO',
    author: 'CC (FN) André Ricardo de Souza Pinto',
    date: 'NOV 2016',
    fileSize: '2.6 MB',
    drupalUri: 'public://flash_doutrinario/2016-11/flash_doutrinario_ed_17.pdf',
    drupalFid: 1017,
    drupalUuid: 'b2c3d4e5-f6a7-8901-2345-678901bcdefa',
    badgeColor: '#2c5da9',
    cardImage: '/assets/flash/card_17.png',
    docImage: '/assets/flash/doc_17.png',
    summary: 'Organização, tarefas e composição do Grupo Tático-Logístico (GTL) em apoio imediato ao Batalhão de Infantaria de Fuzileiros Navais desdobrado em cabeça de praia.',
  },
];

const STORAGE_KEY = 'ctddcfn_flash_doutrinario_editions_v2';

export const FlashDoutrinarioView: React.FC = () => {
  const [editions, setEditions] = useState<FlashEdition[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // fallback
    }
    return DEFAULT_EDITIONS;
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEdition, setSelectedEdition] = useState<FlashEdition | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isDrupalArchitectureOpen, setIsDrupalArchitectureOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form State for Drupal File Upload
  const [uploadNumber, setUploadNumber] = useState('25');
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadAuthor, setUploadAuthor] = useState('');
  const [uploadDate, setUploadDate] = useState('OUT 2026');
  const [uploadBadgeColor, setUploadBadgeColor] = useState('#bad435');
  const [uploadSummary, setUploadSummary] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(editions));
    } catch {
      // ignore
    }
  }, [editions]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const filteredEditions = editions.filter((ed) => {
    const q = searchTerm.toLowerCase();
    return (
      ed.editionNumber.toLowerCase().includes(q) ||
      ed.title.toLowerCase().includes(q) ||
      ed.author.toLowerCase().includes(q) ||
      ed.issueCode.toLowerCase().includes(q)
    );
  });

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    const objectUrl = URL.createObjectURL(file);
    setFilePreviewUrl(objectUrl);
    if (!uploadTitle) {
      const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/_/g, ' ');
      setUploadTitle(cleanName);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleSaveUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadTitle.trim()) {
      alert('Por favor, informe o título da edição doutrinária.');
      return;
    }

    const currentYear = new Date().getFullYear();
    const edNum = uploadNumber.replace(/\D/g, '') || '25';
    const cleanFileName = selectedFile
      ? selectedFile.name.replace(/\s+/g, '_').toLowerCase()
      : `flash_doutrinario_ed_${edNum}.pdf`;
    const fileSizeStr = selectedFile
      ? `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`
      : '2.5 MB';

    const newEdition: FlashEdition = {
      id: `custom-ed-${Date.now()}`,
      editionNumber: `Edição ${edNum}`,
      issueCode: `Ano ${currentYear} - Nº ${edNum}`,
      title: uploadTitle.trim(),
      author: uploadAuthor.trim() || 'Divisão de Doutrina Tecnológica / CTDDCFN',
      date: uploadDate.trim() || 'OUT 2026',
      fileSize: fileSizeStr,
      drupalUri: `public://flash_doutrinario/${currentYear}-10/${cleanFileName}`,
      drupalFid: Math.floor(1000 + Math.random() * 9000),
      drupalUuid: crypto.randomUUID ? crypto.randomUUID() : `uuid-${Date.now()}`,
      badgeColor: uploadBadgeColor,
      cardImage: filePreviewUrl || '/assets/flash/card_24.png',
      docImage: filePreviewUrl || '/assets/flash/doc_24.png',
      summary: uploadSummary.trim() || 'Documento doutrinário expedicionário cadastrado no Drupal 10.',
      isCustom: true,
      uploadedPdfBlobUrl: filePreviewUrl || undefined,
      fileName: cleanFileName,
    };

    const updated = [newEdition, ...editions];
    setEditions(updated);
    setIsUploadModalOpen(false);
    resetForm();
    showToast(`Arquivo "${cleanFileName}" salvo no Drupal e adicionado à visão dos usuários!`);
  };

  const resetForm = () => {
    setUploadNumber(String(Number(editions[0]?.editionNumber.replace(/\D/g, '') || 24) + 1));
    setUploadTitle('');
    setUploadAuthor('');
    setUploadSummary('');
    setSelectedFile(null);
    setFilePreviewUrl(null);
  };

  const handleDeleteCustom = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Deseja excluir este arquivo do Flash Doutrinário no Drupal?')) {
      const updated = editions.filter((ed) => ed.id !== id);
      setEditions(updated);
      showToast('Arquivo excluído com sucesso.');
      if (selectedEdition?.id === id) {
        setSelectedEdition(null);
      }
    }
  };

  const handleDownload = (edition: FlashEdition, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (edition.uploadedPdfBlobUrl) {
      const a = document.createElement('a');
      a.href = edition.uploadedPdfBlobUrl;
      a.download = edition.fileName || `Flash_Doutrinario_${edition.editionNumber.replace(/\s+/g, '_')}.pdf`;
      a.click();
      showToast(`Baixando arquivo ${a.download}`);
      return;
    }

    // Authentic fallback download simulation
    const fakeContent = `%PDF-1.4\n% MARINHA DO BRASIL - CTDDCFN\n% FLASH DOUTRINÁRIO - ${edition.editionNumber}\n% Título: ${edition.title}\n% Autor: ${edition.author}\n% URI Drupal: ${edition.drupalUri}\n% Status: Homologado`;
    const blob = new Blob([fakeContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Flash_Doutrinario_${edition.editionNumber.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Download iniciado: Flash_Doutrinario_${edition.editionNumber.replace(/\s+/g, '_')}.pdf`);
  };

  const handleResetToDefaults = () => {
    if (confirm('Restaurar o acervo padrão original das Edições 24 a 17?')) {
      setEditions(DEFAULT_EDITIONS);
      localStorage.removeItem(STORAGE_KEY);
      showToast('Acervo padrão do Flash Doutrinário restaurado.');
    }
  };

  return (
    <div className="w-full flex flex-col space-y-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-[#bad435] text-[#002e32] px-4 py-3 rounded-xl font-mono text-xs font-bold shadow-2xl flex items-center gap-2 border border-white/20 animate-fade-in">
          <span className="material-symbols-outlined text-base">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Breadcrumb & Status Bar (Stitch Spec) */}
      <div className="flex flex-wrap items-center justify-between gap-space-sm bg-pure-white px-space-md py-2.5 rounded-xl border border-outline-variant shadow-sm">
        <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
          <span className="hover:text-graphite-teal-deep transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">home</span>
            Início
          </span>
          <span className="text-outline-variant">/</span>
          <span className="text-on-surface-variant">Produtos Doutrinários</span>
          <span className="text-outline-variant">/</span>
          <span className="text-graphite-teal-deep font-bold">Flash Doutrinário</span>
        </div>
        <div className="flex items-center gap-space-sm">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-low text-graphite-teal-deep font-technical-code text-technical-code rounded border border-outline-variant/60">
            <span className="w-1.5 h-1.5 rounded-full bg-renewal-green animate-pulse"></span>
            {filteredEditions.length} EDIÇÕES NO CATÁLOGO
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container text-on-surface-variant font-technical-code text-technical-code rounded">
            <span className="material-symbols-outlined text-xs">verified</span>
            DIV-DOUT / CTDDCFN
          </span>
        </div>
      </div>

      {/* Header & Tactical Operations Banner (Stitch Spec) */}
      <div className="relative bg-pure-white rounded-xl p-space-lg shadow-sm border border-outline-variant overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-graphite-teal-deep via-graphite-teal-surface to-renewal-green"></div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-space-xs">
              <span className="px-2 py-0.5 bg-primary-container text-renewal-green font-technical-code text-technical-code uppercase tracking-wider rounded font-bold">
                Publicações Rápidas
              </span>
              <span className="text-on-surface-variant font-technical-code text-technical-code">
                SERIE OFICIAL FD-CFN • ARQUIVOS DRUPAL 10
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-graphite-teal-deep uppercase tracking-tight font-extrabold">
              Flash Doutrinário
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Informativos Técnicos Rápidos sobre Operações, Táticas e Procedimentos Anfíbios. Documentos síntese para pronto emprego do Corpo de Fuzileiros Navais gerenciados pelo upload de arquivos no CMS Drupal 10.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
            <button
              onClick={() => {
                resetForm();
                setIsUploadModalOpen(true);
              }}
              className="flex-1 lg:flex-initial px-4 py-2.5 bg-renewal-green hover:bg-renewal-green-dark text-graphite-industrial hover:text-white rounded font-bold font-technical-code text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-sm active:scale-95"
            >
              <span className="material-symbols-outlined text-base">upload_file</span>
              <span>+ UPLOAD DE NOVO ARQUIVO (DRUPAL)</span>
            </button>

            <button
              onClick={() => setIsDrupalArchitectureOpen(true)}
              className="px-3 py-2.5 bg-graphite-teal-deep hover:bg-graphite-teal-surface text-pure-white rounded font-technical-code text-xs uppercase tracking-wider transition flex items-center gap-1.5 shadow-sm"
              title="Ver arquitetura técnica de arquivos do Drupal 10"
            >
              <span className="material-symbols-outlined text-base text-renewal-green">settings_suggest</span>
              <span className="hidden sm:inline">Arquitetura Drupal</span>
            </button>

            <button
              onClick={handleResetToDefaults}
              className="p-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface-variant rounded font-technical-code text-xs transition flex items-center justify-center border border-outline-variant"
              title="Restaurar edições padrão"
            >
              <span className="material-symbols-outlined text-base">restart_alt</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Toolbar (Stitch Spec) */}
        <div className="mt-space-md pt-space-md border-t border-outline-variant bg-surface-container-low p-space-md rounded flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="relative w-full md:max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-graphite-teal-deep text-lg">
              search
            </span>
            <input
              type="text"
              placeholder="Pesquisar por tema, palavra-chave ou nº da edição..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-pure-white text-on-surface placeholder:text-outline font-body-sm text-body-sm rounded shadow-xs outline-none border border-outline-variant focus:border-graphite-teal-deep focus:ring-1 focus:ring-graphite-teal-deep transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs font-technical-code text-on-surface-variant self-end md:self-auto">
            <span className="w-2 h-2 rounded-full bg-renewal-green animate-pulse"></span>
            <span>
              {filteredEditions.length} de {editions.length} edições disponíveis na visão do usuário
            </span>
          </div>
        </div>
      </div>

      {/* Authentic White Paper Container Matching Official CTDDCFN Screenshot */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-6 md:p-10 transition-all">
        {/* Title Section Exactly Matching Screenshot */}
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-2xl md:text-3xl font-medium text-[#2f4229] font-serif tracking-normal text-center">
            Flash Doutrinário
          </h1>
          {/* Subtle Olive / Dark Green Underline Bar from Screenshot */}
          <div className="w-full max-w-4xl h-[1.5px] bg-[#5c6e26] mt-4 opacity-80" />
        </div>

        {/* 4-Column Grid of Document Cards (Matching 4x2 Authentic Grid) */}
        {filteredEditions.length === 0 ? (
          <div className="py-16 text-center text-slate-500">
            <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">find_in_page</span>
            <p className="font-sans text-sm">Nenhum Flash Doutrinário encontrado para "{searchTerm}".</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-3 text-xs text-[#5c6e26] font-bold underline"
            >
              Limpar filtro de pesquisa
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-7">
            {filteredEditions.map((edition) => (
              <div
                key={edition.id}
                onClick={() => setSelectedEdition(edition)}
                className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer transform hover:-translate-y-1"
              >
                {/* Custom Edition Badge (if uploaded via Drupal) */}
                {edition.isCustom && (
                  <div className="absolute top-2 left-2 z-20 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#bad435] text-[#002e32] text-[10px] font-mono font-bold shadow">
                    <span className="material-symbols-outlined text-xs">cloud_done</span>
                    <span>DRUPAL UPLOAD</span>
                  </div>
                )}

                {/* Delete button for custom uploaded items */}
                {edition.isCustom && (
                  <button
                    onClick={(e) => handleDeleteCustom(edition.id, e)}
                    className="absolute top-2 right-2 z-20 w-7 h-7 rounded-full bg-red-600/90 hover:bg-red-700 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow"
                    title="Excluir arquivo do Drupal"
                  >
                    <span className="material-symbols-outlined text-sm">delete</span>
                  </button>
                )}

                {/* Document Sheet Thumbnail Container */}
                <div className="p-3 pb-1 flex items-center justify-center bg-slate-50/60 group-hover:bg-slate-100/60 transition relative">
                  <div className="w-full aspect-[1/1.4] max-h-[290px] rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-white flex items-center justify-center relative">
                    <img
                      src={edition.cardImage}
                      alt={edition.title}
                      className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Hover Overlay with Action Buttons */}
                    <div className="absolute inset-0 bg-[#002e32]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-3 gap-2 text-center text-white backdrop-blur-[2px]">
                      <span className="text-[11px] font-bold font-serif line-clamp-3 px-1">
                        {edition.title}
                      </span>
                      <span className="text-[10px] font-mono text-[#bad435]">
                        {edition.fileSize} • {edition.date}
                      </span>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedEdition(edition);
                          }}
                          className="px-2.5 py-1 bg-white text-[#002e32] text-[11px] font-bold rounded-lg shadow hover:bg-[#bad435] transition flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-xs">visibility</span>
                          <span>Ler</span>
                        </button>
                        <button
                          onClick={(e) => handleDownload(edition, e)}
                          className="px-2.5 py-1 bg-[#bad435] text-[#002e32] text-[11px] font-bold rounded-lg shadow hover:bg-white transition flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-xs">download</span>
                          <span>PDF</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Edition Label Matching Authentic Style */}
                <div className="p-4 pt-3 flex flex-col items-center justify-center text-center">
                  <h3 className="text-lg md:text-xl font-normal text-[#2a5035] font-serif tracking-normal">
                    {edition.editionNumber}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-sans line-clamp-1 mt-0.5 max-w-[200px]" title={edition.title}>
                    {edition.title}
                  </p>
                </div>

                {/* Bottom Color Stripe Matching Authentic Document Color Coding */}
                <div
                  className="h-1.5 w-full mt-auto"
                  style={{ backgroundColor: edition.badgeColor }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Bottom Authentic Action Button: "Edições anteriores estão disponíveis no Portal do Conhecimento" */}
        <div className="flex justify-center mt-12 pt-6 border-t border-slate-100">
          <a
            href="https://conhecimento.marinha.mil.br"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3.5 bg-white hover:bg-slate-50 text-[#3f572a] hover:text-[#253915] font-medium font-serif text-sm md:text-base rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex items-center gap-2.5"
          >
            <span>Edições anteriores estão disponíveis no Portal do Conhecimento</span>
            <span className="material-symbols-outlined text-base opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition">
              open_in_new
            </span>
          </a>
        </div>
      </div>

      {/* Interactive Drupal 10 Technical Architecture Note */}
      <div className="bg-[#00282b] border border-white/10 rounded-2xl p-5 text-slate-300 text-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#bad435]">folder_zip</span>
            <span className="font-mono font-bold text-white uppercase">
              Integração com Drupal 10 / 11 — Managed File & Stream Wrapper
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded bg-[#001f22] text-[#bad435] font-mono text-[11px] border border-[#bad435]/30">
            URI Scheme: public://flash_doutrinario/
          </span>
        </div>
        <p className="text-slate-300 leading-relaxed font-sans mb-3">
          Na arquitetura oficial do CTDDCFN em Drupal, cada edição do <strong>Flash Doutrinário</strong> é uma entidade de conteúdo (<code>node.type.flash_doutrinario</code>) com upload gerenciado pelo campo de arquivo <code>field_arquivo_pdf</code>. Os arquivos físicos são salvos com segurança no storage do servidor em <code>sites/default/files/flash_doutrinario/YYYY-MM/</code> com controle de hash, mimetype e tabela <code>file_managed</code>.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsDrupalArchitectureOpen(true)}
            className="text-[#bad435] hover:text-white font-mono text-[11px] underline flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-xs">code</span>
            Ver definições YAML e template Twig (node--flash-doutrinario.html.twig)
          </button>
          <span className="text-slate-500">•</span>
          <span className="font-mono text-slate-400 text-[11px]">
            Tamanho máximo homologado: 50 MB / Extensões permitidas: pdf
          </span>
        </div>
      </div>

      {/* MODAL 1: Upload de Nova Edição no Drupal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#00282b] border border-[#bad435]/40 rounded-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col">
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#001f22] rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#bad435]/20 border border-[#bad435]/50 flex items-center justify-center text-[#bad435]">
                  <span className="material-symbols-outlined text-xl">upload_file</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-serif">
                    Upload de Flash Doutrinário no Drupal
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400">
                    Drupal 10 Managed File API • Entidade node:flash_doutrinario
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSaveUpload} className="p-6 space-y-4">
              {/* File Dropzone */}
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition flex flex-col items-center justify-center gap-2 ${
                  isDragging
                    ? 'border-[#bad435] bg-[#bad435]/10'
                    : selectedFile
                    ? 'border-[#bad435]/70 bg-[#001f22]'
                    : 'border-white/20 hover:border-white/40 bg-[#001f22]/70'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,image/png,image/jpeg"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileSelect(e.target.files[0]);
                    }
                  }}
                />

                <span className="material-symbols-outlined text-4xl text-[#bad435]">
                  {selectedFile ? 'picture_as_pdf' : 'cloud_upload'}
                </span>

                {selectedFile ? (
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-white">{selectedFile.name}</p>
                    <p className="text-xs font-mono text-[#bad435]">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • {selectedFile.type || 'application/pdf'}
                    </p>
                    <p className="text-[10px] text-slate-400 font-mono">
                      URI: public://flash_doutrinario/{new Date().getFullYear()}-10/{selectedFile.name}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm font-medium text-white">
                      Arraste e solte o arquivo PDF aqui ou clique para selecionar
                    </p>
                    <p className="text-xs text-slate-400 font-mono mt-1">
                      Formatos aceitos: PDF, PNG, JPG (Máximo 50 MB)
                    </p>
                  </div>
                )}
              </div>

              {/* Grid Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Número da Edição *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: 25"
                    value={uploadNumber}
                    onChange={(e) => setUploadNumber(e.target.value)}
                    className="w-full bg-[#001f22] text-xs text-white px-3 py-2.5 rounded-lg border border-white/10 focus:border-[#bad435] focus:outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Data de Publicação *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: OUT 2026"
                    value={uploadDate}
                    onChange={(e) => setUploadDate(e.target.value)}
                    className="w-full bg-[#001f22] text-xs text-white px-3 py-2.5 rounded-lg border border-white/10 focus:border-[#bad435] focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Título da Publicação Doutrinária *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Emprego de Drones FPV em Operações Anfíbias de Reconhecimento"
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  className="w-full bg-[#001f22] text-xs text-white px-3 py-2.5 rounded-lg border border-white/10 focus:border-[#bad435] focus:outline-none font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Autor / Pesquisador Doutrinário
                </label>
                <input
                  type="text"
                  placeholder="Ex: CMG (FN) Nome do Oficial / Divisão de Doutrina Tecnológica"
                  value={uploadAuthor}
                  onChange={(e) => setUploadAuthor(e.target.value)}
                  className="w-full bg-[#001f22] text-xs text-white px-3 py-2.5 rounded-lg border border-white/10 focus:border-[#bad435] focus:outline-none font-sans"
                />
              </div>

              {/* Color Stripe Selection */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Cor da Faixa Temática da Edição
                </label>
                <div className="flex items-center gap-3">
                  {[
                    { color: '#bad435', name: 'Verde CTDD' },
                    { color: '#f6caa0', name: 'Pêssego' },
                    { color: '#88c084', name: 'Verde Tático' },
                    { color: '#a9ba56', name: 'Oliva' },
                    { color: '#f5b800', name: 'Amarelo' },
                    { color: '#ea6d20', name: 'Laranja' },
                    { color: '#7d8d9b', name: 'Cinza' },
                    { color: '#2c5da9', name: 'Azul' },
                  ].map((c) => (
                    <button
                      key={c.color}
                      type="button"
                      onClick={() => setUploadBadgeColor(c.color)}
                      style={{ backgroundColor: c.color }}
                      className={`w-7 h-7 rounded-full transition transform ${
                        uploadBadgeColor === c.color
                          ? 'ring-2 ring-white scale-110 shadow-lg'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                      title={c.name}
                    />
                  ))}
                  <input
                    type="color"
                    value={uploadBadgeColor}
                    onChange={(e) => setUploadBadgeColor(e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer bg-transparent border-0"
                    title="Cor personalizada"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Resumo Doutrinário / Ementa
                </label>
                <textarea
                  rows={3}
                  placeholder="Breve descrição dos principais procedimentos e lições aprendidas abordados nesta edição..."
                  value={uploadSummary}
                  onChange={(e) => setUploadSummary(e.target.value)}
                  className="w-full bg-[#001f22] text-xs text-white px-3 py-2 rounded-lg border border-white/10 focus:border-[#bad435] focus:outline-none font-sans"
                />
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsUploadModalOpen(false)}
                  className="px-4 py-2 bg-transparent hover:bg-white/5 text-slate-300 text-xs font-mono rounded-lg transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#bad435] hover:bg-[#8fa619] text-[#002e32] font-mono text-xs font-bold rounded-xl transition flex items-center gap-2 shadow-lg"
                >
                  <span className="material-symbols-outlined text-base">cloud_upload</span>
                  <span>Salvar Arquivo no Drupal</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: Full Document Reader / Viewer Modal */}
      {selectedEdition && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#00282b] border border-[#bad435]/40 rounded-2xl w-full max-w-4xl max-h-[95vh] overflow-y-auto shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="p-4 md:p-5 border-b border-white/10 flex items-center justify-between bg-[#001f22] rounded-t-2xl sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-[#002e32] font-mono text-xs shadow"
                  style={{ backgroundColor: selectedEdition.badgeColor }}
                >
                  {selectedEdition.editionNumber.replace('Edição ', '')}
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#bad435]">
                    <span>{selectedEdition.issueCode}</span>
                    <span>•</span>
                    <span>{selectedEdition.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-white font-serif line-clamp-1">
                    {selectedEdition.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownload(selectedEdition)}
                  className="px-3 py-1.5 bg-[#bad435] hover:bg-[#8fa619] text-[#002e32] text-xs font-mono font-bold rounded-lg transition flex items-center gap-1 shadow"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  <span className="hidden sm:inline">Baixar PDF</span>
                </button>
                <button
                  onClick={() => setSelectedEdition(null)}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center"
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Document Overview & Drupal File Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-3">
                  <div className="bg-[#001f22] p-4 rounded-xl border border-white/10">
                    <span className="text-[11px] font-mono text-[#bad435] uppercase block mb-1">
                      Assunto / Ementa Operacional
                    </span>
                    <h4 className="text-sm font-bold text-white mb-2">{selectedEdition.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {selectedEdition.summary}
                    </p>
                    <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Pesquisador: {selectedEdition.author}</span>
                    </div>
                  </div>
                </div>

                {/* Drupal Metadata Card */}
                <div className="bg-[#001f22] p-4 rounded-xl border border-white/10 space-y-2 text-xs font-mono">
                  <span className="text-[11px] text-[#bad435] font-bold uppercase block">
                    Metadados no Drupal 10
                  </span>
                  <div className="space-y-1.5 text-slate-300 text-[11px]">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-slate-400">Tipo de Nó:</span>
                      <span className="text-white">flash_doutrinario</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-slate-400">File ID (fid):</span>
                      <span className="text-[#bad435]">{selectedEdition.drupalFid}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-slate-400">Tamanho:</span>
                      <span className="text-white">{selectedEdition.fileSize}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-slate-400">MIME:</span>
                      <span className="text-white">application/pdf</span>
                    </div>
                    <div className="pt-1">
                      <span className="text-slate-400 block mb-0.5">Stream URI:</span>
                      <span className="text-[10px] text-[#bad435] break-all bg-black/40 p-1 rounded block">
                        {selectedEdition.drupalUri}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* High-Resolution Document Reader View */}
              <div className="flex flex-col items-center bg-slate-900/60 p-4 rounded-xl border border-white/10">
                <div className="flex items-center justify-between w-full mb-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-[#bad435]">menu_book</span>
                    Visualização da Publicação Doutrinária Oficial (1ª Página)
                  </span>
                  <span>Escala 1:1 • Arquivo Homologado</span>
                </div>

                <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl p-2 border border-slate-300 overflow-hidden flex items-center justify-center">
                  <img
                    src={selectedEdition.docImage || selectedEdition.cardImage}
                    alt={selectedEdition.title}
                    className="w-full h-auto object-contain rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-[#001f22] flex flex-wrap items-center justify-between gap-3 rounded-b-2xl">
              <span className="text-[11px] font-mono text-slate-400">
                Marinha do Brasil • Comando do Treinamento e do Desenvolvimento Doutrinário do CFN
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono rounded-lg transition flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">print</span>
                  <span>Imprimir</span>
                </button>
                <button
                  onClick={() => handleDownload(selectedEdition)}
                  className="px-4 py-1.5 bg-[#bad435] hover:bg-[#8fa619] text-[#002e32] text-xs font-mono font-bold rounded-lg transition flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  <span>Baixar Arquivo Completo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: Drupal Architecture & Schema Inspector */}
      {isDrupalArchitectureOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#00282b] border border-[#bad435]/40 rounded-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col">
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#001f22] rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#bad435]/20 border border-[#bad435]/50 flex items-center justify-center text-[#bad435]">
                  <span className="material-symbols-outlined text-xl">account_tree</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-serif">
                    Estrutura de Armazenamento de Arquivos no Drupal 10
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400">
                    Definições YAML de Content Type, Field Storage e Twig
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsDrupalArchitectureOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <div className="p-6 space-y-6 text-xs font-mono">
              <div>
                <h4 className="text-xs text-[#bad435] uppercase font-bold mb-2 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">description</span>
                  1. Content Type: config/install/node.type.flash_doutrinario.yml
                </h4>
                <pre className="bg-[#001f22] p-4 rounded-xl border border-white/10 text-slate-300 overflow-x-auto text-[11px] leading-relaxed">
{`langcode: pt-br
status: true
dependencies:
  enforced:
    module:
      - ctddcfn_doutrina
name: 'Flash Doutrinário'
type: flash_doutrinario
description: 'Boletins periódicos de atualização tática imediata com arquivo PDF gerenciado.'
help: 'Faça o upload do documento PDF do Flash Doutrinário e preencha os metadados da edição.'
new_revision: true
preview_mode: 1
display_submitted: true`}
                </pre>
              </div>

              <div>
                <h4 className="text-xs text-[#bad435] uppercase font-bold mb-2 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">attach_file</span>
                  2. Field Storage: config/install/field.storage.node.field_arquivo_pdf.yml
                </h4>
                <pre className="bg-[#001f22] p-4 rounded-xl border border-white/10 text-slate-300 overflow-x-auto text-[11px] leading-relaxed">
{`langcode: pt-br
status: true
id: node.field_arquivo_pdf
field_name: field_arquivo_pdf
entity_type: node
type: file
settings:
  target_type: file
  display_field: false
  display_default: false
  uri_scheme: public
module: file
locked: false
cardinality: 1
translatable: false`}
                </pre>
              </div>

              <div>
                <h4 className="text-xs text-[#bad435] uppercase font-bold mb-2 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">rule</span>
                  3. Field Instance: config/install/field.field.node.flash_doutrinario.field_arquivo_pdf.yml
                </h4>
                <pre className="bg-[#001f22] p-4 rounded-xl border border-white/10 text-slate-300 overflow-x-auto text-[11px] leading-relaxed">
{`langcode: pt-br
status: true
id: node.flash_doutrinario.field_arquivo_pdf
field_name: field_arquivo_pdf
entity_type: node
bundle: flash_doutrinario
label: 'Arquivo PDF do Boletim'
description: 'Selecione o arquivo oficial em PDF para armazenamento seguro no Drupal.'
required: true
settings:
  file_directory: 'flash_doutrinario/[date:custom:Y]-[date:custom:m]'
  file_extensions: 'pdf'
  max_filesize: '50 MB'
  description_field: true`}
                </pre>
              </div>

              <div>
                <h4 className="text-xs text-[#bad435] uppercase font-bold mb-2 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">code</span>
                  4. Twig Template: templates/content/node--flash-doutrinario.html.twig
                </h4>
                <pre className="bg-[#001f22] p-4 rounded-xl border border-white/10 text-slate-300 overflow-x-auto text-[11px] leading-relaxed">
{`{# Template do Flash Doutrinário com grid e download gerenciado #}
<article{{ attributes.addClass('flash-doutrinario-card bg-white rounded-2xl shadow-sm p-4 border border-slate-200') }}>
  <div class="flash-cover-wrapper aspect-[1/1.4] overflow-hidden rounded-lg bg-slate-100">
    {% if content.field_arquivo_pdf %}
      {{ content.field_arquivo_pdf }}
    {% endif %}
  </div>
  
  <div class="flash-edition-title py-3 text-center">
    <h3 class="text-xl font-serif text-[#2a5035]">{{ node.field_numero_edicao.value }}</h3>
    <p class="text-xs text-slate-500">{{ label }}</p>
  </div>

  <div class="flash-download-action mt-2">
    <a href="{{ file_url(node.field_arquivo_pdf.entity.uri.value) }}" class="btn-download block text-center py-2 bg-[#bad435] text-[#002e32] font-bold rounded-lg" download>
      Baixar PDF ({{ node.field_arquivo_pdf.entity.filesize.value|format_size }})
    </a>
  </div>
</article>`}
                </pre>
              </div>
            </div>

            <div className="p-4 border-t border-white/10 bg-[#001f22] flex justify-end rounded-b-2xl">
              <button
                onClick={() => setIsDrupalArchitectureOpen(false)}
                className="px-4 py-2 bg-[#bad435] text-[#002e32] font-mono text-xs font-bold rounded-xl"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
