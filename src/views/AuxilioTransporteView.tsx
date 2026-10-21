import React, { useState } from 'react';

export const AuxilioTransporteView: React.FC = () => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const triggerDownload = (fileName: string) => {
    setDownloadNotice(`Download iniciado: ${fileName}`);
    setTimeout(() => setDownloadNotice(null), 3000);
  };

  const docs = [
    {
      id: 'req-inicial',
      title: 'Formulário de Requerimento Inicial de Auxílio Transporte',
      desc: 'Modelo padrão para primeira solicitação ou recadastramento • PDF (420 KB)',
      format: 'PDF',
      formatColor: 'bg-red-50 text-red-600',
      icon: 'picture_as_pdf',
    },
    {
      id: 'decl-residencia',
      title: 'Declaração de Residência e Trajeto Habitual',
      desc: 'Formulário editável para detalhamento de linhas e itinerário • DOCX (180 KB)',
      format: 'DOCX',
      formatColor: 'bg-blue-50 text-blue-600',
      icon: 'description',
    },
    {
      id: 'tab-tarifas',
      title: 'Tabela de Tarifas Intermunicipais e Municipais (RJ)',
      desc: 'Valores máximos de referência homologados pelo Governo do Estado • XLSX (310 KB)',
      format: 'XLSX',
      formatColor: 'bg-emerald-50 text-emerald-700',
      icon: 'table_view',
    },
    {
      id: 'dir-mb344',
      title: 'Diretriz Regulamentar MB-344 (Concessão e Fiscalização)',
      desc: 'Portaria normativa sobre cálculos, descontos e penalidades legais • PDF (1.2 MB)',
      format: 'PDF',
      formatColor: 'bg-red-50 text-red-600',
      icon: 'policy',
    },
  ];

  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Toast de Download */}
      {downloadNotice && (
        <div className="fixed top-6 right-6 z-50 bg-[#002E32] border border-[#BAD435] text-white px-4 py-3 rounded-lg shadow-xl font-mono text-xs flex items-center gap-2">
          <span className="material-symbols-outlined text-[#BAD435] text-base">check_circle</span>
          <span>{downloadNotice}</span>
        </div>
      )}

      {/* Card Principal: Auxílio Transporte Header */}
      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-10 bg-[#BAD435] rounded-full hidden sm:block"></div>
            <div>
              <div className="flex items-center gap-2 font-mono">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Benefício ao Pessoal</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800">Vigência 2024 / MB</span>
              </div>
              <h1 className="text-2xl font-extrabold text-[#002E32] font-serif tracking-tight uppercase">
                Auxílio Transporte
              </h1>
            </div>
          </div>

          <button
            onClick={() => triggerDownload('Pacote_Completo_Auxilio_Transporte.zip')}
            className="inline-flex items-center justify-center gap-2 bg-[#002E32] hover:bg-[#003d42] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow font-mono transition"
          >
            <span className="material-symbols-outlined text-[#BAD435] text-sm">folder_zip</span>
            Baixar Todos os Arquivos (ZIP)
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="bg-slate-50 border-l-4 border-[#002E32] p-4 rounded-r-lg">
            <p className="text-sm text-slate-700 leading-relaxed font-sans">
              Os arquivos relacionados ao <strong className="text-slate-900 font-semibold">Auxílio Transporte</strong> estão disponíveis para consulta e download. O Auxílio Transporte é um benefício trabalhista destinado a custear o deslocamento dos colaboradores entre sua residência e o local de trabalho, conforme estabelecido pela legislação brasileira e normas regulamentares da Marinha do Brasil. Os documentos incluem formulários, regulamentações e informações necessárias para a gestão adequada deste benefício obrigatório.
            </p>
          </div>

          {/* Grid de Métricas / Diretrizes Básicas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="border border-slate-200 rounded-lg p-4 bg-white flex items-start gap-3.5 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#002E32] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">route</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 font-mono uppercase">Deslocamento Regular</h4>
                <p className="text-[11px] text-slate-600 mt-1">Concessão baseada estritamente no trajeto habitual de residência-trabalho e vice-versa.</p>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-4 bg-white flex items-start gap-3.5 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">update</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 font-mono uppercase">Atualização Anual</h4>
                <p className="text-[11px] text-slate-600 mt-1">Obrigatória a renovação do requerimento a cada 12 meses ou em caso de mudança de residência.</p>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-4 bg-white flex items-start gap-3.5 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">gavel</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 font-mono uppercase">Legislação e Auditoria</h4>
                <p className="text-[11px] text-slate-600 mt-1">Sujeito à comprovação tarifária pelo SIP-MB e fiscalização interna da OM.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Documentos Oficiais para Download */}
      <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2 font-mono">
          <div>
            <h2 className="text-base font-bold text-[#002E32] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#BAD435]">folder_open</span>
              Documentos &amp; Formulários Oficiais para Download
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Faça o download do modelo correspondente, preencha e protocole na Seção de Pessoal.</p>
          </div>
          <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded font-medium">4 arquivos disponíveis</span>
        </div>

        <div className="divide-y divide-slate-100">
          {docs.map((doc) => (
            <div key={doc.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/80 px-2 rounded-lg transition">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded ${doc.formatColor} flex items-center justify-center shrink-0`}>
                  <span className="material-symbols-outlined text-xl">{doc.icon}</span>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 font-sans">{doc.title}</h3>
                  <p className="text-[11px] text-slate-500 font-mono">{doc.desc}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono">
                <button
                  onClick={() => alert(`Visualização preliminar do arquivo: ${doc.title}`)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition"
                >
                  <span className="material-symbols-outlined text-sm">visibility</span>
                  Visualizar
                </button>
                <button
                  onClick={() => triggerDownload(doc.title)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#002E32] hover:bg-[#003d42] text-white text-xs font-bold rounded transition shadow-xs"
                >
                  <span className="material-symbols-outlined text-sm text-[#BAD435]">download</span>
                  Baixar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instrução Normativa da Seção de Pessoal */}
      <section className="bg-gradient-to-r from-slate-900 to-[#002E32] text-white rounded-xl p-6 shadow-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono">
          <div className="space-y-1">
            <span className="text-[#BAD435] text-xs font-bold tracking-wider uppercase flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">info</span>
              Instrução Normativa da Seção de Pessoal
            </span>
            <h3 className="text-base font-bold font-serif">Prazos e Tramitação no CTDDCFN</h3>
            <p className="text-xs text-slate-300 max-w-2xl font-sans">
              As solicitações protocoladas até o <strong>dia 10 de cada mês</strong> serão processadas na folha de pagamento do mês subsequente. Dúvidas devem ser direcionadas ao Encarregado da Seção de Pessoal ou via SISCRECIM.
            </p>
          </div>
          <button
            onClick={() => alert('Mensagem enviada para a Seção de Pessoal / CTDDCFN.')}
            className="shrink-0 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            Contatar Seção de Pessoal
          </button>
        </div>
      </section>
    </div>
  );
};
