import React, { useState } from 'react';

export const CtddMarinstView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const triggerDownload = (code: string) => {
    setDownloadNotice(`Baixando instrução normativa CTDDMARINST ${code}...`);
    setTimeout(() => setDownloadNotice(null), 3000);
  };

  const ensinoDocs = [
    {
      num: '20-1',
      title: 'Normas para condução de cursos e estágios sob controle do CTDDCFN.',
      meta: 'Formato: PDF Assinado • Vigente',
    },
    {
      num: '20-2',
      title: 'Atividades administrativo-pedagógicas desenvolvidas no âmbito do CFN.',
      meta: 'Formato: PDF Assinado • Vigente',
    },
    {
      num: '20-3',
      title: 'Periodicidade dos cursos realizados pelo pessoal FN.',
      meta: 'Formato: PDF Assinado • Vigente',
    },
    {
      num: '20-4',
      title: 'Periodicidade de realização dos Cursos Extra-MB destinados ao pessoal FN.',
      meta: 'Formato: PDF Assinado • Vigente',
    },
    {
      num: '20-5',
      title: 'Organização e Funcionamento do Banco de Temas do Curso de Aperfeiçoamento Avançado do Corpo de Fuzileiros Navais (C-APA-CFN).',
      meta: 'Formato: PDF Assinado • Vigente',
    },
  ];

  const treinamentoDocs = [
    {
      num: '30-1',
      title: 'Programa de Treinamento de Tiro de Combate do Corpo de Fuzileiros Navais (PTTC-CFN).',
      meta: 'Formato: PDF Assinado • Categoria Restrita',
    },
  ];

  const filteredEnsino = ensinoDocs.filter(
    (d) =>
      d.num.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTreinamento = treinamentoDocs.filter(
    (d) =>
      d.num.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Toast de Download */}
      {downloadNotice && (
        <div className="fixed top-6 right-6 z-50 bg-[#002E32] border border-[#BAD435] text-white px-4 py-3 rounded-lg shadow-xl font-mono text-xs flex items-center gap-2">
          <span className="material-symbols-outlined text-[#BAD435] text-base">check_circle</span>
          <span>{downloadNotice}</span>
        </div>
      )}

      {/* Banner / Cabeçalho da Seção */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#002E32] via-[#004D40] to-[#BAD435]"></div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1 font-mono">
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                SECOM / Normas Internas
              </span>
              <span className="text-xs text-slate-400">• Atualizado recentemente</span>
            </div>
            <h1 className="font-serif font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight uppercase">
              CTDDMARINST
            </h1>
            <p className="text-slate-600 text-sm mt-1 font-sans">
              Instruções normativas do CTDDCFN, organizadas por departamento.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto font-mono">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#002E32] text-white hover:bg-[#00383D] flex items-center gap-2 transition-colors shadow-xs"
            >
              <span className="material-symbols-outlined text-sm">print</span> Imprimir Relação
            </button>
          </div>
        </div>

        {/* Barra de Busca Rápida na Página */}
        <div className="mt-6 pt-6 border-t border-slate-100">
          <div className="relative w-full max-w-xl">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
              search
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs font-mono bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002E32]/20 focus:border-[#002E32] placeholder-slate-400"
              placeholder="Filtrar por número da instrução ou palavra-chave (ex: 20-1, PTTC-CFN)..."
            />
          </div>
        </div>
      </div>

      {/* Grupo 1: 20 - Departamento de Ensino */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-[#002E32]/10 text-[#002E32] font-mono font-bold flex items-center justify-center text-sm">
              20
            </span>
            <div>
              <h2 className="font-serif font-bold text-base text-slate-800">
                Departamento de Ensino
              </h2>
              <p className="text-xs text-slate-500 font-sans">Diretrizes acadêmicas, cursos, estágios e bancos de pesquisa</p>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
            {filteredEnsino.length} Documentos Ativos
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100/60 text-slate-600 text-xs uppercase tracking-wider font-mono border-b border-slate-200">
                <th className="py-3 px-6 font-bold w-24">Nº</th>
                <th className="py-3 px-6 font-bold">Descrição da Instrução Normativa</th>
                <th className="py-3 px-6 font-bold text-right w-44">Documento</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredEnsino.map((doc) => (
                <tr key={doc.num} className="hover:bg-slate-50/70 transition-colors group">
                  <td className="py-4 px-6 font-mono font-bold text-[#002E32] text-xs">
                    <span className="inline-block px-2 py-1 rounded bg-slate-100 group-hover:bg-emerald-50 group-hover:text-emerald-800 transition-colors">
                      {doc.num}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-medium text-slate-900 group-hover:text-[#002E32] transition-colors font-sans text-xs sm:text-sm">
                      {doc.title}
                    </p>
                    <span className="text-[11px] font-mono text-slate-400 mt-0.5 inline-block">{doc.meta}</span>
                  </td>
                  <td className="py-4 px-6 text-right font-mono">
                    <button
                      onClick={() => triggerDownload(doc.num)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-[#002E32] text-white text-xs font-semibold rounded-md shadow-xs transition"
                    >
                      <span className="material-symbols-outlined text-sm">download</span> Baixar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grupo 2: 30 - Departamento de Treinamento */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-700/10 text-emerald-800 font-mono font-bold flex items-center justify-center text-sm">
              30
            </span>
            <div>
              <h2 className="font-serif font-bold text-base text-slate-800">
                Departamento de Treinamento
              </h2>
              <p className="text-xs text-slate-500 font-sans">Programas de tiro de combate, adestramento e capacitação operacional</p>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
            {filteredTreinamento.length} Documento Ativo
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100/60 text-slate-600 text-xs uppercase tracking-wider font-mono border-b border-slate-200">
                <th className="py-3 px-6 font-bold w-24">Nº</th>
                <th className="py-3 px-6 font-bold">Descrição da Instrução Normativa</th>
                <th className="py-3 px-6 font-bold text-right w-44">Documento</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredTreinamento.map((doc) => (
                <tr key={doc.num} className="hover:bg-slate-50/70 transition-colors group">
                  <td className="py-4 px-6 font-mono font-bold text-[#002E32] text-xs">
                    <span className="inline-block px-2 py-1 rounded bg-slate-100 group-hover:bg-emerald-50 group-hover:text-emerald-800 transition-colors">
                      {doc.num}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-medium text-slate-900 group-hover:text-[#002E32] transition-colors font-sans text-xs sm:text-sm">
                      {doc.title}
                    </p>
                    <span className="text-[11px] font-mono text-slate-400 mt-0.5 inline-block">{doc.meta}</span>
                  </td>
                  <td className="py-4 px-6 text-right font-mono">
                    <button
                      onClick={() => triggerDownload(doc.num)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-[#002E32] text-white text-xs font-semibold rounded-md shadow-xs transition"
                    >
                      <span className="material-symbols-outlined text-sm">download</span> Baixar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Card de Informações Técnicas e Procedimentos */}
      <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-5 flex items-start gap-4 text-xs text-amber-900">
        <span className="material-symbols-outlined text-2xl text-amber-600 shrink-0 mt-0.5">info</span>
        <div>
          <h4 className="font-bold text-amber-950 font-mono text-sm mb-1 uppercase">Aviso sobre o cumprimento das Instruções Normativas</h4>
          <p className="leading-relaxed font-sans">
            As instruções normativas aqui listadas possuem caráter cogente para as unidades subordinadas ao CTDDCFN. Em caso de dúvidas na aplicação prática, os militares designados deverão formalizar consulta direta à Secretaria de Comunicação Social (SECOM) ou ao Departamento gestor através do SISCRECIM.
          </p>
        </div>
      </div>
    </div>
  );
};
