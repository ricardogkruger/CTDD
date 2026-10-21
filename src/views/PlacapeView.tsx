import React, { useState } from 'react';

export const PlacapeView: React.FC = () => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const triggerDownload = () => {
    setDownloadNotice('Download do documento PLACAPE-CFN-2025/2026.pdf iniciado.');
    setTimeout(() => setDownloadNotice(null), 3000);
  };

  const scheduleCourses = [
    {
      code: 'C-ESP-OP-01',
      name: 'Estágio de Planejamento de Fogos de Apoio',
      target: 'Capitães-Tenentes e Primeiros-Tenentes (FN)',
      period: '03 FEV - 28 FEV 2025',
      status: 'ABERTO',
      statusColor: 'bg-emerald-100 text-emerald-800',
    },
    {
      code: 'C-ESP-TAC-14',
      name: 'Curso de Operador de Comunicações Táticas Digitais',
      target: 'Sargentos e Cabos (FN-IF/COM)',
      period: '10 MAR - 04 ABR 2025',
      status: 'PREVISTO',
      statusColor: 'bg-slate-100 text-slate-700',
    },
    {
      code: 'C-DOC-MET-03',
      name: 'Formação de Instrutor Militar e Elaboração de Planos de Aula',
      target: 'Oficiais e Praças designados para Escolas/CI',
      period: '17 MAR - 11 ABR 2025',
      status: 'ABERTO',
      statusColor: 'bg-emerald-100 text-emerald-800',
    },
    {
      code: 'C-INT-AMIG-02',
      name: 'Intercâmbio Doutrinário de Operações Fluviais (Nações Amigas)',
      target: 'Oficiais Superiores e Capitães (FN)',
      period: 'Encerrado em 10/JAN',
      status: 'HOMOLOGANDO',
      statusColor: 'bg-amber-100 text-amber-800',
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

      {/* Breadcrumb & Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
        <div className="flex items-center gap-1.5 uppercase text-slate-500">
          <span>ENSINO &amp; TREINAMENTO</span>
          <span>/</span>
          <span className="text-[#002E32] font-bold">PLACAPE</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          <span>DOC-REF: PLACAPE-CFN-2025/2026</span>
        </div>
      </div>

      {/* Main Editorial Header */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#002E32]"></div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1 max-w-3xl">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded">
              DIRETORIA DE ENSINO &amp; DOUTRINA • CICLO BIENAL
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#002E32] tracking-tight uppercase">
              Plano de Capacitação de Pessoal - PLACAPE
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mt-1">
              O Plano de Capacitação de Pessoal consolida as diretrizes normativas, matrizes de qualificação e os módulos de instrução destinados a manter a pronta resposta operacional e o primor doutrinário dos combatentes anfíbios.
            </p>
          </div>

          <button
            onClick={triggerDownload}
            className="flex items-center gap-2 bg-[#002E32] hover:bg-[#00383D] text-white px-4 py-2.5 rounded-lg font-mono text-xs font-bold transition shadow-xs shrink-0"
          >
            <span className="material-symbols-outlined text-sm text-[#BAD435]">download</span>
            Baixar Arquivo
          </button>
        </div>
      </div>

      {/* 4 Eixos Estratégicos */}
      <div className="space-y-3">
        <h2 className="text-base font-bold text-[#002E32] font-serif uppercase flex items-center gap-2">
          <span className="material-symbols-outlined text-[#BAD435]">military_tech</span>
          Eixos Estratégicos de Capacitação
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-2">
            <div>
              <span className="font-mono text-[10px] text-slate-400 font-bold block">01 • QUALIFICAÇÃO</span>
              <h3 className="font-bold text-xs text-[#002E32] font-serif uppercase mt-1">Aperfeiçoamento Técnico</h3>
              <p className="text-xs text-slate-600 font-sans mt-1">
                Especialização continuada de Oficiais e Praças em sistemas de armas, comunicações e logística.
              </p>
            </div>
            <span className="text-[11px] font-mono text-emerald-700 font-bold block pt-2 border-t border-slate-100">
              18 Módulos Técnicos
            </span>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-2">
            <div>
              <span className="font-mono text-[10px] text-slate-400 font-bold block">02 • PRONTIDÃO</span>
              <h3 className="font-bold text-xs text-[#002E32] font-serif uppercase mt-1">Instruções Táticas</h3>
              <p className="text-xs text-slate-600 font-sans mt-1">
                Operações expedicionárias, tiro tático, combate ribeirinho e Guerra Eletrônica intensiva.
              </p>
            </div>
            <span className="text-[11px] font-mono text-emerald-700 font-bold block pt-2 border-t border-slate-100">
              Exercícios de Campo
            </span>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-2">
            <div>
              <span className="font-mono text-[10px] text-slate-400 font-bold block">03 • PEDAGOGIA</span>
              <h3 className="font-bold text-xs text-[#002E32] font-serif uppercase mt-1">Capacitação Docente</h3>
              <p className="text-xs text-slate-600 font-sans mt-1">
                Aprimoramento pedagógico e metodológico para o Corpo de Instrutores e Monitores.
              </p>
            </div>
            <span className="text-[11px] font-mono text-emerald-700 font-bold block pt-2 border-t border-slate-100">
              Metodologias Ativas
            </span>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-2">
            <div>
              <span className="font-mono text-[10px] text-slate-400 font-bold block">04 • COOPERAÇÃO</span>
              <h3 className="font-bold text-xs text-[#002E32] font-serif uppercase mt-1">Intercâmbios Doutrinários</h3>
              <p className="text-xs text-slate-600 font-sans mt-1">
                Parcerias internacionais com Marinhas e Fuzileiros de Nações Amigas.
              </p>
            </div>
            <span className="text-[11px] font-mono text-emerald-700 font-bold block pt-2 border-t border-slate-100">
              Forças Singulares
            </span>
          </div>
        </div>
      </div>

      {/* 3 Photos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative rounded-xl overflow-hidden shadow-xs h-40">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpxQP2Q46ZEPYurFhJqA8O8gDhq3UZSEZ6rogIbLd4Nf1wtx4mz-_CTD7bGIwYyXWpLEC0h7jsDUXxYmgUfS12nnQvBMOTe0Zn0JIoMQKDpRZKCruFvf82xTrrer8tJRbnalCA87pYD9QqalbOQ_5Ka0f3idLXCzVCKywPh7NJsgKXxJkHsSZTFpS1uK74farM4vOkRk__aGCLz0kYFqJefExrtBJOtA8-u6dG5QAKl9ViezM6itKB"
            alt="Instrução Anfíbia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3 text-white font-mono">
            <span className="text-[10px] text-[#BAD435] font-bold">ESTÁGIO OPERACIONAL</span>
            <span className="text-xs font-bold font-serif">Instrução Anfíbia Avançada</span>
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-xs h-40">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFyw98HnyXh9I4dnd6_KtoXUGOCQSiHikNBCcy6RnzM_lmHho1wXgOTEJJ8f3inYGMWaVbLodfOZol2qRy-304gzNyQ-A2XigVWi524iuH6aBOQT1sKm9RFU87kbDUXMKkhBpHshLjws3mI44NDfMZP4kge-PaiRf0lj4rgEG60h-RLD02N7aL95CNt5_3foYZ83DBHfIuU023A2Up1UhyZKBqczoj97M5vgD99sBfnGMVAWUdd8gy"
            alt="Simuladores e Jogos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3 text-white font-mono">
            <span className="text-[10px] text-[#BAD435] font-bold">CAPACITAÇÃO DOCENTE</span>
            <span className="text-xs font-bold font-serif">Simuladores &amp; Jogos de Guerra</span>
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-xs h-40">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCydW6Ts2RP3LZf3v94CXn8DCxJyCoN2yc8T3sNCFzzbOD97T4UiHobCLGI3rdTyS9ibMdbbWh6S3FYfObAwQ1L2rrErYamOMrka5botBQVxTCdIjZhCtFKl6V8hkftaMN_rCoQJcn11Mobsxkjn-j4oNa7HefOTIYdLpV42LxBWdVYEOiOeJK_f3_JbvogVAooXyp4J8RApx0ZU077RW4z5LEUj1BwfWK9XG2ak3xNXdz3PUmTiVKW"
            alt="Doutrina Internacional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3 text-white font-mono">
            <span className="text-[10px] text-[#BAD435] font-bold">INTERCÂMBIO</span>
            <span className="text-xs font-bold font-serif">Doutrina Internacional Conjunta</span>
          </div>
        </div>
      </div>

      {/* Calendário de Inscrições Table */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3 font-mono">
          <div>
            <span className="text-[10px] uppercase font-bold text-emerald-800">PROGRAMAÇÃO REGULAMENTADA</span>
            <h2 className="text-sm font-bold text-[#002E32] font-serif uppercase">
              Calendário de Inscrições e Ciclos de Instrução
            </h2>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="bg-[#002E32] text-white font-mono text-[11px] uppercase">
                <th className="py-2.5 px-4">Cód. Curso</th>
                <th className="py-2.5 px-4">Denominação do Módulo</th>
                <th className="py-2.5 px-4">Público-Alvo</th>
                <th className="py-2.5 px-4">Período de Inscrição</th>
                <th className="py-2.5 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {scheduleCourses.map((c) => (
                <tr key={c.code} className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-mono font-bold text-[#002E32]">{c.code}</td>
                  <td className="py-3 px-4 font-semibold text-slate-800">{c.name}</td>
                  <td className="py-3 px-4 text-slate-600">{c.target}</td>
                  <td className="py-3 px-4 font-mono text-slate-700">{c.period}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded-full font-mono text-[10px] font-bold ${c.statusColor}`}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Callout */}
      <div className="bg-[#1C1C1C] text-white rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#BAD435]/20 text-[#BAD435] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-xl">campaign</span>
          </div>
          <div>
            <h4 className="font-bold text-white uppercase">Instrução Normativa aos Comandantes de OM</h4>
            <p className="text-[11px] text-slate-300 font-sans">
              As indicações deverão ser encaminhadas pelo Sistema de Movimentação e Ensino (SISENS) até às 23h59 da data-limite de cada módulo.
            </p>
          </div>
        </div>
        <button
          onClick={() => alert('Manual do SISENS acionado.')}
          className="shrink-0 px-4 py-2 bg-[#BAD435] hover:bg-[#8fa619] text-[#002E32] font-bold rounded"
        >
          Manual do Operador SISENS
        </button>
      </div>
    </div>
  );
};
