import React, { useState } from 'react';

export const BancoTemasTccView: React.FC = () => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const triggerDownload = (fileName: string) => {
    setDownloadNotice(`Download iniciado: ${fileName}`);
    setTimeout(() => setDownloadNotice(null), 3000);
  };

  const themes = [
    {
      fileName: 'Banco de Temas C-ApA-CFN-2024.xlsx',
      badge: 'XLSX',
      badgeColor: 'bg-slate-200 text-slate-700',
      desc: 'Planilha de Dados Microsoft Excel • Atualizado em: 15/01/2024',
      size: '142 KB',
      icon: 'table_view',
      isRecommended: false,
    },
    {
      fileName: 'Banco de Temas C-ApA-CFN-2025.ods',
      badge: 'ODS',
      badgeColor: 'bg-slate-200 text-slate-700',
      desc: 'Planilha Aberta OpenDocument (LibreOffice / Calc) • Atualizado em: 10/01/2025',
      size: '158 KB',
      icon: 'description',
      isRecommended: false,
    },
    {
      fileName: 'Banco de Temas C-ApA-CFN-2026.ods',
      badge: 'ODS • 2026',
      badgeColor: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
      desc: 'Planilha Aberta Homologada pela Divisão de Ensino • Atualizado em: 20/02/2026',
      size: '185 KB',
      icon: 'verified_user',
      isRecommended: true,
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

      {/* Cartão Principal */}
      <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 relative overflow-hidden">
        {/* Faixa superior */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100 font-mono">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-7 bg-[#BAD435] rounded-full"></div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                Divisão de Ensino e Aperfeiçoamento
              </span>
              <h1 className="text-xl sm:text-2xl font-serif font-extrabold text-slate-900 tracking-tight uppercase">
                Banco de Temas de TCC do C-ApA-CFN
              </h1>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
            Ciclo 2024–2026 Vigente
          </span>
        </div>

        {/* Texto explicativo institucional */}
        <div className="mt-5 text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100 font-sans">
          <p>
            Os arquivos abaixo estão disponíveis para consulta e download acadêmico. Eles contêm a relação oficial de temas homologados para trabalhos de conclusão de curso do <strong className="text-slate-800 font-semibold">Curso de Aperfeiçoamento Avançado de Fuzileiros Navais (C-ApA-CFN)</strong> para os anos letivos de 2024 a 2026.
          </p>
        </div>

        {/* Lista de Downloads Estruturados */}
        <div className="mt-8 space-y-4 font-mono">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold uppercase tracking-wider pb-1">
            <span>Arquivos Homologados para Download</span>
            <span>Formato &amp; Status</span>
          </div>

          {themes.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-4 sm:p-5 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative ${
                item.isRecommended
                  ? 'border-2 border-[#002E32]/40 bg-gradient-to-r from-emerald-50/40 via-white to-white shadow-sm'
                  : 'border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/70 shadow-xs'
              }`}
            >
              {item.isRecommended && (
                <span className="absolute -top-2.5 right-4 bg-[#BAD435] text-[#002E32] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-xs">
                  Recomendado / Ano Vigente
                </span>
              )}

              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                    item.isRecommended
                      ? 'bg-[#002E32] text-[#BAD435]'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>

                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-sm sm:text-base font-bold text-slate-900 font-serif">
                      {item.fileName}
                    </h2>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-1.5 flex-wrap">
                    <span>{item.desc}</span>
                    <span>•</span>
                    <span className="font-bold text-slate-700">{item.size}</span>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-auto flex items-center justify-end">
                <button
                  onClick={() => triggerDownload(item.fileName)}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition shadow-sm ${
                    item.isRecommended
                      ? 'bg-[#BAD435] hover:bg-[#a9c42c] text-[#002E32]'
                      : 'bg-[#002E32] hover:bg-[#002225] text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  <span>{item.isRecommended ? 'Baixar Versão 2026' : 'Baixar Arquivo'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Diretrizes e Orientações para Alunos e Docentes */}
        <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2 mb-2 font-mono">
              <span className="material-symbols-outlined text-emerald-600 text-base">info</span>
              Instruções aos Alunos
            </h3>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside font-sans">
              <li>A escolha do tema deverá estar alinhada com as Linhas de Pesquisa Doutrinária do CFN.</li>
              <li>O formulário de vinculação de orientador deve ser remetido via Sistema de Ensino até o prazo fixado em Ordem Interna.</li>
              <li>Temas convergentes com Operações Anfíbias e Defesa de Área têm prioridade de fomento.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2 mb-2 font-mono">
              <span className="material-symbols-outlined text-emerald-600 text-base">contact_support</span>
              Suporte do Departamento de Ensino
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-2 font-sans">
              Em caso de dúvidas na seleção de temas, propostas de novos títulos ou designação de orientadores doutrinários:
            </p>
            <div className="text-xs text-slate-700 font-mono space-y-0.5">
              <div>Ramal RITM: <span className="font-bold">8110-4322 / 4325</span></div>
              <div>E-mail: <span className="font-bold text-[#002E32]">ensino.ctddcfn@marinha.mil.br</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
