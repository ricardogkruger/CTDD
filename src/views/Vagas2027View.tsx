import React, { useState, useMemo } from 'react';

interface VagaCursoRow {
  sigla: string;
  turma: string;
  periodo: string;
  local: string;
  vagas: number;
  publico: 'CFN' | 'Geral';
  categoria: 'Oficiais' | 'Praças' | 'Misto';
}

interface TableGroup {
  id: string;
  title: string;
  publico: 'CFN' | 'Geral';
  categoria: 'Oficiais' | 'Praças' | 'Misto';
  rows: VagaCursoRow[];
}

export const Vagas2027View: React.FC = () => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'CFN' | 'Geral'>('all');
  const [categoriaFilter, setCategoriaFilter] = useState<'all' | 'Oficiais' | 'Praças' | 'Misto'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tableGroups: TableGroup[] = [
    {
      id: 'cfn-oficiais',
      title: 'A) Exclusivos para militares do CFN — Oficiais',
      publico: 'CFN',
      categoria: 'Oficiais',
      rows: [
        { sigla: 'C-Esp-OfCom', turma: 'ÚNICA', periodo: '19/10/2027 até 26/11/2027', local: 'CIASC', vagas: 20, publico: 'CFN', categoria: 'Oficiais' },
        { sigla: 'E-QTEsp-Art-OF', turma: 'ÚNICA', periodo: '05/04/2027 até 30/06/2027', local: 'BtlArtFuzNav', vagas: 10, publico: 'CFN', categoria: 'Oficiais' },
        { sigla: 'C-Esp-EngComb-Of', turma: 'ÚNICA', periodo: '26/04/2027 até 13/08/2027', local: 'BtlEngFuzNav', vagas: 10, publico: 'CFN', categoria: 'Oficiais' },
      ],
    },
    {
      id: 'cfn-pracas',
      title: 'A) Exclusivos para militares do CFN — Praças',
      publico: 'CFN',
      categoria: 'Praças',
      rows: [
        { sigla: 'C-Esp-ComFCLAnf', turma: 'ÚNICA', periodo: '11/06/2027 até 09/07/2027', local: 'BtlVtrAnf', vagas: 17, publico: 'CFN', categoria: 'Praças' },
        { sigla: 'C-Esp-Op-ASTROS', turma: 'ÚNICA', periodo: '28/09/2027 até 03/12/2027', local: 'BtlArtFuzNav', vagas: 15, publico: 'CFN', categoria: 'Praças' },
        { sigla: 'C-Esp-MntRepLG', turma: 'ÚNICA', periodo: '19/04/2027 até 03/06/2027', local: 'BtlArtFuzNav', vagas: 10, publico: 'CFN', categoria: 'Praças' },
        { sigla: 'C-Esp-OpCLAnf', turma: 'ÚNICA', periodo: '05/03/2027 até 08/06/2027', local: 'BtlVtrAnf', vagas: 20, publico: 'CFN', categoria: 'Praças' },
        { sigla: 'E-QTEsp-PMC', turma: '01/2027', periodo: '08/02/2027 até 08/03/2027', local: 'CIASC', vagas: 5, publico: 'CFN', categoria: 'Praças' },
        { sigla: 'E-QTEsp-PMC', turma: '02/2027', periodo: '11/03/2027 até 12/04/2027', local: 'CIASC', vagas: 5, publico: 'CFN', categoria: 'Praças' },
        { sigla: 'E-QTEsp-PMC', turma: '03/2027', periodo: '15/04/2027 até 17/05/2027', local: 'CIASC', vagas: 5, publico: 'CFN', categoria: 'Praças' },
        { sigla: 'E-QTEsp-PMC', turma: '04/2027', periodo: '20/05/2027 até 21/06/2027', local: 'CIASC', vagas: 5, publico: 'CFN', categoria: 'Praças' },
      ],
    },
    {
      id: 'cfn-misto',
      title: 'A) Exclusivos para militares do CFN — Oficiais e Praças',
      publico: 'CFN',
      categoria: 'Misto',
      rows: [
        { sigla: 'E-IA-FN', turma: 'ÚNICA', periodo: '10/06/2027 até 28/07/2027', local: 'CIAMPA', vagas: 40, publico: 'CFN', categoria: 'Misto' },
        { sigla: 'E-QTEsp-Caçador-OpEsp', turma: 'ÚNICA', periodo: 'ASD/05/2027 até ASD/06/2027', local: 'BtlOpEspFuzNav', vagas: 10, publico: 'CFN', categoria: 'Misto' },
        { sigla: 'E-QTEsp-PelPtr', turma: 'ÚNICA', periodo: '31/05/2027 até 07/07/2027', local: 'CIASC', vagas: 40, publico: 'CFN', categoria: 'Misto' },
        { sigla: 'E-QTEsp-PelMrt81mm', turma: 'ÚNICA', periodo: '31/05/2027 até 07/07/2027', local: 'CIASC', vagas: 40, publico: 'CFN', categoria: 'Misto' },
        { sigla: 'E-QTEsp-OpMntVtrBldM113 MB1', turma: 'ÚNICA', periodo: '05/03/2027 até 20/05/2027', local: 'BtlBldFuzNav', vagas: 20, publico: 'CFN', categoria: 'Misto' },
        { sigla: 'C-Esp-OPCC', turma: 'ÚNICA', periodo: '24/09/2027 até 09/12/2027', local: 'BtlBldFuzNav', vagas: 12, publico: 'CFN', categoria: 'Misto' },
        { sigla: 'E-QTEsp-MoMil', turma: '01/2027', periodo: '04/05/2027 até 10/06/2027', local: 'CIASC', vagas: 40, publico: 'CFN', categoria: 'Misto' },
        { sigla: 'C-EspGE-FN', turma: 'ÚNICA', periodo: '03/04/2027 até 03/06/2027', local: 'CIASC', vagas: 40, publico: 'CFN', categoria: 'Misto' },
      ],
    },
    {
      id: 'geral-oficiais',
      title: 'B) Público em geral — Oficiais',
      publico: 'Geral',
      categoria: 'Oficiais',
      rows: [
        { sigla: 'C-Esp-NECONREF', turma: 'ÚNICA', periodo: '15/10/2027 até 30/11/2027', local: 'CIASC', vagas: 30, publico: 'Geral', categoria: 'Oficiais' },
      ],
    },
    {
      id: 'geral-pracas',
      title: 'B) Público em geral — Praças',
      publico: 'Geral',
      categoria: 'Praças',
      rows: [
        { sigla: 'C-Esp-MecAL', turma: 'ÚNICA', periodo: '01/07/2027 até 08/10/2027', local: 'CIASC', vagas: 33, publico: 'Geral', categoria: 'Praças' },
        { sigla: 'C-Esp-MecAP', turma: 'ÚNICA', periodo: '01/04/2027 até 25/06/2027', local: 'CIASC', vagas: 33, publico: 'Geral', categoria: 'Praças' },
        { sigla: 'C-Esp-DPqD', turma: '01/2027', periodo: 'ASD/03/2027 até ASD/05/2027', local: 'BtlOpEspFuzNav', vagas: 12, publico: 'Geral', categoria: 'Praças' },
        { sigla: 'C-Esp-SAI-PR', turma: 'ÚNICA', periodo: '01/03/2027 até 21/03/2027', local: 'BtlPolFuzNav', vagas: 30, publico: 'Geral', categoria: 'Praças' },
        { sigla: 'E-AtuCTFN', turma: 'ÚNICA', periodo: '08/10/2027 até 29/10/2027', local: 'CIASC', vagas: 15, publico: 'Geral', categoria: 'Praças' },
      ],
    },
    {
      id: 'geral-misto',
      title: 'B) Público em geral — Oficiais e Praças',
      publico: 'Geral',
      categoria: 'Misto',
      rows: [
        { sigla: 'C-Esp-SaL', turma: 'ÚNICA', periodo: 'ASD10/2027 até ASD/11/2027', local: 'BtlOpEspFuzNav', vagas: 20, publico: 'Geral', categoria: 'Misto' },
        { sigla: 'C-Exp-TE-OF/PR', turma: '01/2027', periodo: '12/03/2027 até 19/04/2027', local: 'CIASC', vagas: 30, publico: 'Geral', categoria: 'Misto' },
        { sigla: 'C-Esp-DAAe', turma: 'ÚNICA', periodo: '14/05/2027 até 02/08/2027', local: 'BtlCmbAe', vagas: 25, publico: 'Geral', categoria: 'Misto' },
        { sigla: 'E-Prep-HCVA', turma: '01/2027', periodo: '08/01/2027 até 30/04/2027', local: 'CIAMPA', vagas: 20, publico: 'Geral', categoria: 'Misto' },
        { sigla: 'E-QTEsp-Lid', turma: 'ÚNICA', periodo: '11/06/2027 até 30/07/2027', local: 'CIASC', vagas: 40, publico: 'Geral', categoria: 'Misto' },
        { sigla: 'E-QTEsp-OpCaat', turma: 'ÚNICA', periodo: '01/10/2027 até 25/10/2027', local: '3ºBtlOpLitFN', vagas: 50, publico: 'Geral', categoria: 'Misto' },
        { sigla: 'C-Exp-OPant', turma: 'ÚNICA', periodo: '07/06/2027 até 14/07/2027', local: '3ºBtlOpRib', vagas: 64, publico: 'Geral', categoria: 'Misto' },
        { sigla: 'C-Exp-OpRib', turma: 'ÚNICA', periodo: '05/07/2027 até 13/08/2027', local: '1ºBtlOpRib', vagas: 60, publico: 'Geral', categoria: 'Misto' },
        { sigla: 'C-Esp-AdestFaro', turma: 'ÚNICA', periodo: '08/09/2027 até 03/12/2027', local: '2ºBtlProtDefNBQR', vagas: 20, publico: 'Geral', categoria: 'Misto' },
        { sigla: 'E-QTEsp-AtivPol', turma: 'ÚNICA', periodo: '05/07/2027 até 06/08/2027', local: '2ºBtlProtDefNBQR', vagas: 20, publico: 'Geral', categoria: 'Misto' },
      ],
    },
  ];

  // Filter groups
  const filteredGroups = useMemo(() => {
    return tableGroups
      .filter((g) => (activeFilter === 'all' ? true : g.publico === activeFilter))
      .filter((g) => (categoriaFilter === 'all' ? true : g.categoria === categoriaFilter))
      .map((g) => {
        if (!searchQuery.trim()) return g;
        const q = searchQuery.toLowerCase();
        return {
          ...g,
          rows: g.rows.filter(
            (r) =>
              r.sigla.toLowerCase().includes(q) ||
              r.local.toLowerCase().includes(q) ||
              r.periodo.toLowerCase().includes(q)
          ),
        };
      })
      .filter((g) => g.rows.length > 0);
  }, [tableGroups, activeFilter, categoriaFilter, searchQuery]);

  const totalVagas = useMemo(() => {
    return tableGroups.reduce((acc, g) => acc + g.rows.reduce((sum, r) => sum + r.vagas, 0), 0);
  }, [tableGroups]);

  // Handle PDF Download
  const handleDownloadPdf = () => {
    const content = `MARINHA DO BRASIL
COMANDO DO TREINAMENTO E DO DESENVOLVIMENTO DOUTRINÁRIO DO CFN (CTDDCFN)
DIVISÃO DE ENSINO

================================================================================
PROCEDIMENTOS PARA SOLICITAÇÃO DE VAGAS EM CURSOS ESPECIAIS, EXPEDITOS E
ESTÁGIOS PREVISTOS PARA 2027
================================================================================

1. PROCEDIMENTOS E PRAZOS
As OM interessadas em obter vagas para os cursos que serão realizados nas OM
do CFN em 2027 deverão enviar suas necessidades até 22JUL2026, por mensagem via
COMIMSUP, utilizando o cabeçalho "CURSOS ESPECIAIS, EXPEDITOS E ESTÁGIOS - 2027",
especificando os cursos, as turmas e as vagas desejadas.
Com o propósito de otimizar a coordenação do processo de distribuição de vagas,
solicita-se que as necessidades sejam centralizadas pelos COMIMSUP das OM solicitantes.

2. PLANEJAMENTO E CANCELAMENTOS
De modo a permitir a distribuição com maior eficácia, solicita-se as OM avaliarem
sua realidade orçamentária e sua disponibilidade de pessoal de forma a evitar
pedidos de cursos que ensejarão futuros cancelamentos de vagas. Salienta-se que o
cancelamento das vagas pode ocasionar prejuízos para outras OM interessadas, e que
tenham efetivas condições de participar dos cursos/estágios oferecidos pelas OM do CFN.

3. INSCRIÇÕES EXCEPCIONAIS
A critério do CTDDCFN, militares de outros Corpos e Quadros, de outras FA ou das
Forças Auxiliares poderão, em caráter excepcional, serem inscritos nos seguintes cursos/estágios:
- C-Esp-MecAL;
- E-QTEsp-PMC; e
- C-Esp-AdestCães.

4. MAIS INFORMAÇÕES
Os requisitos para os Cursos Especiais, Expeditos e Estágios oferecidos estão
disponíveis nas páginas da intranet do CTDDCFN (http://ctddcfn.mb/drupal/curriculos).
Outras informações poderão ser obtidas por intermédio do telefone: (21) 99672-4765
ou pelo e-mail: rodrigues.vitor@marinha.mil.br.

================================================================================
RELAÇÃO COMPLETA DOS CURSOS E ESTÁGIOS PREVISTOS PARA 2027
================================================================================
${tableGroups
  .map(
    (g) => `
${g.title.toUpperCase()}
--------------------------------------------------------------------------------
SIGLA DO CURSO       | TURMA  | PERÍODO                      | LOCAL           | VAGAS
${g.rows
  .map(
    (r) =>
      `${r.sigla.padEnd(20)} | ${r.turma.padEnd(6)} | ${r.periodo.padEnd(28)} | ${r.local.padEnd(15)} | ${r.vagas}`
  )
  .join('\n')}
`
  )
  .join('\n')}

Total Geral de Vagas Previstas: ${totalVagas}
Autenticação Eletrônica: MB-CTDDCFN-VAGAS-2027-${Date.now()}
`;

    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'SOLICITACAO_DE_VAGAS_CURSOS_ESTAGIOS_2027.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadNotice('Download iniciado: SOLICITACAO_DE_VAGAS_CURSOS_ESTAGIOS_2027.pdf');
    setTimeout(() => setDownloadNotice(null), 4000);
  };

  return (
    <div className="flex flex-col w-full space-y-6 animate-fadeIn font-sans text-on-surface">
      {/* Top Breadcrumb & Metadata Header (RACE pattern from user screenshot) */}
      <div className="flex flex-col gap-2 font-mono text-xs">
        <div className="flex items-center gap-1.5 uppercase text-outline">
          <span>ENSINO</span>
          <span>/</span>
          <span className="text-graphite-teal-deep font-bold">SOLICITAÇÃO DE VAGAS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-1">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-graphite-teal-deep text-[10px] font-bold uppercase border border-outline-variant/60">
                DIVISÃO DE ENSINO E AVALIAÇÃO
              </span>
              <span className="text-outline text-[11px]">REF: MB-COMIMSUP-2027</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-graphite-teal-deep font-headline uppercase tracking-tight">
              Procedimentos para Solicitação de Vagas — 2027
            </h1>
            <p className="text-xs sm:text-sm text-on-surface-variant font-sans max-w-3xl mt-1 leading-relaxed">
              Diretriz compulsória para levantamento de necessidades e alocação de vagas em Cursos Especiais, Expeditos e Estágios Previstos para 2027 nas OM do CFN.
            </p>
          </div>

          <div className="px-3.5 py-2 rounded-xl bg-surface-container-low flex items-center gap-2 shrink-0 border border-outline-variant/60">
            <span className="material-symbols-outlined text-lg text-graphite-teal-deep">verified_user</span>
            <div>
              <span className="block text-[10px] font-bold text-outline uppercase">Validade Normativa</span>
              <span className="text-xs font-bold text-graphite-teal-deep">CICLO ATIVO 2027</span>
            </div>
          </div>
        </div>
      </div>

      {/* Download notice toast */}
      {downloadNotice && (
        <div className="p-3 bg-surface-container text-graphite-teal-deep border border-renewal-green rounded-lg text-xs font-mono font-semibold flex items-center justify-between animate-fadeIn shadow-xs">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-renewal-green-dark text-base">check_circle</span>
            <span>{downloadNotice}</span>
          </div>
          <span className="text-[10px] bg-renewal-green/20 text-graphite-teal-deep px-2 py-0.5 rounded font-bold">
            PDF OFICIAL CFN
          </span>
        </div>
      )}

      {/* Two-Column Responsive Grid Architecture (Exact RACE card logic) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* =========================================================================
            LEFT COLUMN (8 cols): Guidelines, Inner Cards & 6 Tables
           ========================================================================= */}
        <div className="lg:col-span-8 space-y-6">
          {/* Card 1: Diretrizes Oficiais e Artefatos Homologados */}
          <div className="bg-surface-container-lowest rounded-xl shadow-xs border border-outline-variant/70 p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-graphite-teal-deep"></div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center shrink-0 text-graphite-teal-deep border border-outline-variant/40">
                <span className="material-symbols-outlined text-2xl">description</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono text-outline font-bold">
                  Documentação Padronizada
                </span>
                <h2 className="text-base sm:text-lg font-bold text-graphite-teal-deep font-headline uppercase">
                  Diretrizes Oficiais e Procedimentos Homologados
                </h2>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-sans">
                  As Organizações Militares interessadas em obter vagas para os cursos e estágios a serem realizados nas OM do CFN em 2027 deverão observar os procedimentos e critérios a seguir.
                </p>
              </div>
            </div>

            {/* Inner Cards for Procedimentos & Planejamento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/60 flex flex-col justify-between space-y-2">
                <div>
                  <span className="text-[10px] font-mono font-bold text-outline uppercase block">Prazo Improrrogável</span>
                  <h3 className="text-sm font-bold text-graphite-teal-deep font-headline mt-1">
                    Envio até 22JUL2026
                  </h3>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    Via mensagem <strong>COMIMSUP</strong> com o cabeçalho padronizado: <code>"CURSOS ESPECIAIS, EXPEDITOS E ESTÁGIOS - 2027"</code>.
                  </p>
                </div>
                <div className="text-[10px] font-mono text-outline font-bold pt-2 border-t border-outline-variant/40">
                  Centralizado pelas OM solicitantes
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/60 flex flex-col justify-between space-y-2">
                <div>
                  <span className="text-[10px] font-mono font-bold text-outline uppercase block">Planejamento Operativo</span>
                  <h3 className="text-sm font-bold text-graphite-teal-deep font-headline mt-1">
                    Orçamento & Pessoal
                  </h3>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    As OM devem avaliar rigorosamente a disponibilidade orçamentária e a escala para evitar cancelamentos que prejudiquem outras unidades.
                  </p>
                </div>
                <div className="text-[10px] font-mono text-outline font-bold pt-2 border-t border-outline-variant/40">
                  Prevenção de cancelamentos tardios
                </div>
              </div>
            </div>

            {/* Download Button in Left Card */}
            <div className="pt-2">
              <button
                onClick={handleDownloadPdf}
                type="button"
                className="w-full sm:w-auto px-6 py-3 bg-graphite-teal-deep hover:bg-graphite-teal-surface active:bg-primary text-white font-headline font-bold text-xs uppercase tracking-wider rounded-lg shadow-xs transition flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm text-renewal-green group-hover:scale-110 transition-transform">
                  download
                </span>
                <span>Baixar Documento Completo de Vagas (PDF)</span>
              </button>
            </div>
          </div>

          {/* Card 2: Inscrições Excepcionais */}
          <div className="bg-surface-container-lowest rounded-xl shadow-xs border border-outline-variant/70 p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/40">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-graphite-teal-deep text-lg">verified</span>
                <h3 className="text-sm font-bold text-graphite-teal-deep font-headline uppercase tracking-wide">
                  Inscrições Excepcionais (Outros Corpos / FA / Forças Auxiliares)
                </h3>
              </div>
              <span className="text-[10px] font-mono bg-surface-container px-2 py-0.5 rounded font-bold text-outline">
                CRITÉRIO CTDDCFN
              </span>
            </div>

            <p className="text-xs text-on-surface-variant leading-relaxed">
              A critério exclusivo do CTDDCFN, militares de outros Corpos e Quadros da MB, de outras Forças Armadas ou das Forças Auxiliares poderão, em caráter excepcional, ser inscritos nos seguintes cursos/estágios:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/50 text-center">
                <strong className="text-graphite-teal-deep block text-sm">C-Esp-MecAL</strong>
                <span className="text-[10px] text-outline">Mecânico de Armamento Leve</span>
              </div>
              <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/50 text-center">
                <strong className="text-graphite-teal-deep block text-sm">E-QTEsp-PMC</strong>
                <span className="text-[10px] text-outline">Mudança de Categoria</span>
              </div>
              <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/50 text-center">
                <strong className="text-graphite-teal-deep block text-sm">C-Esp-AdestCães</strong>
                <span className="text-[10px] text-outline">Adestramento de Cães de Guerra</span>
              </div>
            </div>
          </div>

          {/* Card 3: Relação dos Cursos e Estágios Previstos para 2027 (All 6 Tables) */}
          <div className="bg-surface-container-lowest rounded-xl shadow-xs border border-outline-variant/70 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline-variant/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-6 bg-graphite-teal-deep rounded-full"></div>
                <div>
                  <h2 className="text-base sm:text-lg font-extrabold text-graphite-teal-deep font-headline uppercase tracking-tight">
                    Relação dos Cursos e Estágios Previstos para 2027
                  </h2>
                  <span className="text-[10px] font-mono text-outline">
                    Total de 35 turmas homologadas • 556 vagas totais
                  </span>
                </div>
              </div>
            </div>

            {/* Filter Chips & Search Bar */}
            <div className="flex flex-col gap-3 font-mono text-xs">
              {/* Public filter */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] text-outline uppercase font-bold mr-1">Público:</span>
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 py-1 rounded-lg transition border cursor-pointer ${
                    activeFilter === 'all'
                      ? 'bg-graphite-teal-deep text-white font-bold border-graphite-teal-deep'
                      : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant border-outline-variant/50'
                  }`}
                >
                  TODOS (35)
                </button>
                <button
                  onClick={() => setActiveFilter('CFN')}
                  className={`px-3 py-1 rounded-lg transition border cursor-pointer ${
                    activeFilter === 'CFN'
                      ? 'bg-graphite-teal-deep text-white font-bold border-graphite-teal-deep'
                      : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant border-outline-variant/50'
                  }`}
                >
                  EXCLUSIVOS CFN (19)
                </button>
                <button
                  onClick={() => setActiveFilter('Geral')}
                  className={`px-3 py-1 rounded-lg transition border cursor-pointer ${
                    activeFilter === 'Geral'
                      ? 'bg-graphite-teal-deep text-white font-bold border-graphite-teal-deep'
                      : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant border-outline-variant/50'
                  }`}
                >
                  PÚBLICO EM GERAL (16)
                </button>
              </div>

              {/* Category filter */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] text-outline uppercase font-bold mr-1">Posto/Graduação:</span>
                {(['all', 'Oficiais', 'Praças', 'Misto'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoriaFilter(cat)}
                    className={`px-2.5 py-1 rounded text-[11px] transition border cursor-pointer ${
                      categoriaFilter === cat
                        ? 'bg-graphite-teal-deep text-white font-bold border-graphite-teal-deep'
                        : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant border-outline-variant/50'
                    }`}
                  >
                    {cat === 'all' ? 'Todos os Postos' : cat === 'Misto' ? 'Oficiais e Praças' : cat}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative pt-1">
                <span className="material-symbols-outlined absolute left-3 top-3.5 text-outline text-sm">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Buscar curso por sigla, local (ex: CIASC, CIAMPA) ou período..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-surface-container-low border border-outline-variant/70 rounded-lg focus:bg-white focus:border-graphite-teal-deep focus:outline-none transition font-sans"
                />
              </div>
            </div>

            {/* Tables */}
            <div className="space-y-6 pt-2">
              {filteredGroups.length === 0 ? (
                <div className="p-8 text-center text-on-surface-variant italic font-sans border border-outline-variant/50 rounded-lg bg-surface-container-low">
                  Nenhum curso encontrado para os filtros selecionados.
                </div>
              ) : (
                filteredGroups.map((group) => (
                  <div key={group.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs sm:text-sm font-bold text-graphite-teal-deep font-headline">
                        {group.title}
                      </h3>
                      <span className="text-[10px] font-mono text-outline font-bold">
                        {group.rows.length} {group.rows.length === 1 ? 'Turma' : 'Turmas'}
                      </span>
                    </div>

                    <div className="overflow-x-auto border border-outline-variant/70 rounded-lg shadow-2xs">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-graphite-teal-deep text-white font-mono uppercase text-[11px] tracking-wider">
                            <th className="py-2.5 px-3.5 border-r border-white/10">SIGLA DO CURSO</th>
                            <th className="py-2.5 px-3 border-r border-white/10 text-center w-20">TURMA</th>
                            <th className="py-2.5 px-3.5 border-r border-white/10">PERÍODO</th>
                            <th className="py-2.5 px-3.5 border-r border-white/10">LOCAL</th>
                            <th className="py-2.5 px-3 text-center w-20">VAGAS</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/40 font-sans">
                          {group.rows.map((row, idx) => (
                            <tr
                              key={row.sigla + row.turma + idx}
                              className={`hover:bg-surface-container-low transition-colors ${
                                idx % 2 === 1 ? 'bg-surface/50' : 'bg-surface-container-lowest'
                              }`}
                            >
                              <td className="py-2.5 px-3.5 border-r border-outline-variant/30 font-mono font-bold text-graphite-teal-deep whitespace-nowrap">
                                {row.sigla}
                              </td>
                              <td className="py-2.5 px-3 border-r border-outline-variant/30 text-center font-mono text-outline whitespace-nowrap">
                                {row.turma}
                              </td>
                              <td className="py-2.5 px-3.5 border-r border-outline-variant/30 text-on-surface whitespace-nowrap">
                                {row.periodo}
                              </td>
                              <td className="py-2.5 px-3.5 border-r border-outline-variant/30 text-on-surface font-semibold whitespace-nowrap">
                                {row.local}
                              </td>
                              <td className="py-2.5 px-3 text-center font-mono font-bold text-graphite-teal-deep">
                                {row.vagas}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN (4 cols): Information Cards, Deadlines, and Contacts
           ========================================================================= */}
        <div className="lg:col-span-4 space-y-6">
          {/* Card 1: Prazos Regulamentares (Exact RACE card logic) */}
          <div className="bg-surface-container-lowest rounded-xl shadow-xs border border-outline-variant/70 p-5 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-outline-variant/40">
              <span className="material-symbols-outlined text-graphite-teal-deep text-lg">event_available</span>
              <h3 className="text-xs font-bold text-graphite-teal-deep uppercase font-headline tracking-wider">
                Prazos Regulamentares
              </h3>
            </div>

            <div className="space-y-3 font-sans text-xs">
              <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/40 flex items-center justify-between">
                <div>
                  <span className="font-bold text-graphite-teal-deep block">Prazo Improrrogável</span>
                  <span className="text-[10px] text-outline">Envio via COMIMSUP</span>
                </div>
                <span className="px-2 py-1 rounded bg-graphite-teal-deep text-renewal-green font-mono font-bold text-xs">
                  22JUL2026
                </span>
              </div>

              <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/40 flex items-center justify-between">
                <div>
                  <span className="font-bold text-graphite-teal-deep block">Consolidação</span>
                  <span className="text-[10px] text-outline">Análise da Divisão de Ensino</span>
                </div>
                <span className="px-2 py-1 rounded bg-surface-container text-on-surface font-mono font-semibold text-xs">
                  Até 30SET2026
                </span>
              </div>

              <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/40 flex items-center justify-between">
                <div>
                  <span className="font-bold text-graphite-teal-deep block">Publicação de Vagas</span>
                  <span className="text-[10px] text-outline">Calendário Geral de Cursos</span>
                </div>
                <span className="px-2 py-1 rounded bg-surface-container text-on-surface font-mono font-semibold text-xs">
                  DEZ/2026
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Contatos & Canal Técnico */}
          <div className="bg-surface-container-lowest rounded-xl shadow-xs border border-outline-variant/70 p-5 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-outline-variant/40">
              <span className="material-symbols-outlined text-graphite-teal-deep text-lg">contact_phone</span>
              <h3 className="text-xs font-bold text-graphite-teal-deep uppercase font-headline tracking-wider">
                Canais de Informação & Contato
              </h3>
            </div>

            <div className="space-y-2.5 font-sans text-xs">
              <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/40 space-y-1">
                <span className="text-[10px] font-mono font-bold text-outline uppercase block">Oficial Responsável</span>
                <p className="font-bold text-graphite-teal-deep">Capitão-Tenente (FN) Rodrigues</p>
                <p className="text-[11px] text-outline font-mono">Encarregado da Seção de Vagas e Cursos</p>
              </div>

              <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/40 space-y-1 font-mono text-xs">
                <span className="text-[10px] font-bold text-outline uppercase block">Telefone Operacional</span>
                <p className="font-bold text-graphite-teal-deep">(21) 99672-4765</p>
                <p className="text-[10px] text-outline">Ramal: 8399 (CTDDCFN)</p>
              </div>

              <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/40 space-y-1 font-mono text-xs">
                <span className="text-[10px] font-bold text-outline uppercase block">E-mail Institucional</span>
                <p className="font-bold text-graphite-teal-deep break-all">rodrigues.vitor@marinha.mil.br</p>
              </div>

              <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/40 space-y-1 text-xs">
                <span className="text-[10px] font-mono font-bold text-outline uppercase block">Intranet do CTDDCFN</span>
                <p className="font-mono text-graphite-teal-deep text-[11px] underline">
                  http://ctddcfn.mb/drupal/curriculos
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Estatísticas do Ciclo 2027 */}
          <div className="bg-surface-container-lowest rounded-xl shadow-xs border border-outline-variant/70 p-5 space-y-4 font-mono text-xs">
            <div className="flex items-center gap-2 pb-2 border-b border-outline-variant/40">
              <span className="material-symbols-outlined text-graphite-teal-deep text-lg">analytics</span>
              <h3 className="text-xs font-bold text-graphite-teal-deep uppercase font-headline tracking-wider">
                Estatísticas do Ciclo 2027
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-3 rounded bg-surface-container-low border border-outline-variant/40">
                <span className="text-xl font-bold text-graphite-teal-deep block">{totalVagas}</span>
                <span className="text-[10px] text-outline uppercase">Vagas Previstas</span>
              </div>
              <div className="p-3 rounded bg-surface-container-low border border-outline-variant/40">
                <span className="text-xl font-bold text-graphite-teal-deep block">35</span>
                <span className="text-[10px] text-outline uppercase">Turmas Homologadas</span>
              </div>
              <div className="p-3 rounded bg-surface-container-low border border-outline-variant/40">
                <span className="text-xl font-bold text-graphite-teal-deep block">19</span>
                <span className="text-[10px] text-outline uppercase">Turmas CFN</span>
              </div>
              <div className="p-3 rounded bg-surface-container-low border border-outline-variant/40">
                <span className="text-xl font-bold text-graphite-teal-deep block">16</span>
                <span className="text-[10px] text-outline uppercase">Público Geral</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
