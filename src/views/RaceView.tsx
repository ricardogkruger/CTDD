import React from 'react';

export const RaceView: React.FC = () => {
  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Breadcrumb & Header */}
      <div className="flex flex-col gap-2 font-mono text-xs">
        <div className="flex items-center gap-1.5 uppercase text-slate-500">
          <span>ENSINO</span>
          <span>/</span>
          <span className="text-[#002E32] font-bold">RACE</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-1">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                DIVISÃO DE ENSINO E AVALIAÇÃO
              </span>
              <span className="text-slate-400 text-[11px]">REF: MB-EMA-143/F</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#002E32] font-serif uppercase tracking-tight">
              Relatório de Análise de Conclusão de Curso e Estágio — RACE
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-3xl mt-1">
              Instrumento doutrinário compulsório para consolidação do feedback pedagógico, rendimento do corpo discente e aprimoramento contínuo das matrizes curriculares do CFN.
            </p>
          </div>

          <div className="px-3.5 py-2 rounded-lg bg-slate-100 flex items-center gap-2 shrink-0 border border-slate-200">
            <span className="material-symbols-outlined text-lg text-[#002E32]">verified_user</span>
            <div>
              <span className="block text-[10px] font-bold text-slate-400 uppercase">Validade Normativa</span>
              <span className="text-xs font-bold text-emerald-700">CICLO ATIVO 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#002E32]"></div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 text-[#002E32]">
                <span className="material-symbols-outlined text-2xl">description</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">Documentação Padronizada</span>
                <h2 className="text-base font-bold text-[#002E32] font-serif uppercase">
                  Diretrizes Oficiais e Artefatos Homologados
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  O arquivo abaixo está disponível para consulta e download. Ele contém informações detalhadas referentes ao documento oficial do <strong className="text-slate-900 font-semibold">Relatório de análise de conclusão de curso e estágio - RACE</strong>, aplicável a todas as Organizações Militares vinculadas ao comando doutrinário.
                </p>
              </div>
            </div>

            {/* 2 Download Action Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-700 block">Norma Reguladora</span>
                  <h3 className="text-sm font-bold text-[#002E32] mt-0.5">EMA-143 (Anexo F)</h3>
                  <span className="text-[10px] text-slate-400 block mt-1">PDF • 2.4 MB • Rev. 2024</span>
                  <p className="text-xs text-slate-600 font-sans mt-2">
                    Parâmetros formais, critérios de pontuação e instruções gerais emitidas pelo Estado-Maior da Armada.
                  </p>
                </div>
                <button
                  onClick={() => alert('Download do documento EMA-143 (Anexo F) iniciado.')}
                  className="w-full py-2 bg-[#002E32] hover:bg-[#00383D] text-white rounded font-bold flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span className="material-symbols-outlined text-sm text-[#BAD435]">download</span>
                  EMA-143 (Anexo F)
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-700 block">Modelo de Formulário</span>
                  <h3 className="text-sm font-bold text-[#002E32] mt-0.5">Baixar Modelo RACE</h3>
                  <span className="text-[10px] text-slate-400 block mt-1">DOCX • 680 KB • Template Vigente</span>
                  <p className="text-xs text-slate-600 font-sans mt-2">
                    Gabarito estruturado para preenchimento compulsório por Coordenadores Pedagógicos e Chefes de Curso.
                  </p>
                </div>
                <button
                  onClick={() => alert('Download do modelo editável (.DOCX) iniciado.')}
                  className="w-full py-2 bg-[#002E32] hover:bg-[#00383D] text-white rounded font-bold flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span className="material-symbols-outlined text-sm text-[#BAD435]">file_download</span>
                  Baixar Modelo (.DOCX)
                </button>
              </div>
            </div>
          </div>

          {/* 3 Phases */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-mono">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#002E32]">schema</span>
                <h3 className="text-sm font-bold text-[#002E32] uppercase">Fluxo de Tramitação e Homologação</h3>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-bold uppercase">
                3 Fases Obrigatórias
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="w-5 h-5 rounded-full bg-[#002E32] text-[#BAD435] flex items-center justify-center font-bold text-[10px]">1</span>
                  <span className="text-[10px] text-emerald-700 font-bold uppercase">OM Executor</span>
                </div>
                <h4 className="font-bold text-[#002E32]">Elaboração Inicial</h4>
                <p className="text-xs text-slate-600 font-sans">
                  Instrutoria compila dados quantitativos de tiro, evasão, aproveitamento e considerações logísticas.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="w-5 h-5 rounded-full bg-[#002E32] text-white flex items-center justify-center font-bold text-[10px]">2</span>
                  <span className="text-[10px] text-emerald-700 font-bold uppercase">Comando de OM</span>
                </div>
                <h4 className="font-bold text-[#002E32]">Despacho &amp; Parecer</h4>
                <p className="text-xs text-slate-600 font-sans">
                  Comandante avaliza observações críticas e anexa relatório circunstanciado via RITMAR/SIGDEM.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="w-5 h-5 rounded-full bg-[#BAD435] text-[#002E32] flex items-center justify-center font-bold text-[10px]">3</span>
                  <span className="text-[10px] text-emerald-700 font-bold uppercase">CTDDCFN</span>
                </div>
                <h4 className="font-bold text-[#002E32]">Arquivo Doutrinário</h4>
                <p className="text-xs text-slate-600 font-sans">
                  Inserção no Banco Geral de Lições Aprendidas e indexação permanente na Doutrina CFN.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols) */}
        <div className="lg:col-span-4 space-y-4 font-mono text-xs">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-3">
            <h3 className="font-bold text-[#002E32] uppercase pb-2 border-b border-slate-100 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">event_available</span>
              Prazos Regulamentares
            </h3>
            <div className="space-y-2">
              <div className="p-2.5 bg-slate-50 rounded">
                <div className="flex justify-between font-bold text-[#002E32]">
                  <span>Cursos Ordinários</span>
                  <span className="px-1.5 py-0.2 bg-[#BAD435]/20 text-[#002E32] rounded">Até 15 dias</span>
                </div>
                <span className="text-[10px] text-slate-500 font-sans block mt-0.5">Após a formatura formal de encerramento.</span>
              </div>

              <div className="p-2.5 bg-slate-50 rounded">
                <div className="flex justify-between font-bold text-[#002E32]">
                  <span>Estágios Breves</span>
                  <span className="px-1.5 py-0.2 bg-slate-200 text-slate-700 rounded">Até 08 dias</span>
                </div>
                <span className="text-[10px] text-slate-500 font-sans block mt-0.5">Com submissão sumária das fichas de qualificação.</span>
              </div>

              <div className="p-2.5 bg-red-50 text-red-900 rounded">
                <div className="flex justify-between font-bold">
                  <span>Incidentes / Acidentes</span>
                  <span className="text-red-700">Imediato (48h)</span>
                </div>
                <span className="text-[10px] text-red-700 font-sans block mt-0.5">Anexo circunstanciado em separado via SIGDEM.</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-3">
            <h3 className="font-bold text-[#002E32] uppercase pb-2 border-b border-slate-100 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">forward_to_inbox</span>
              Canais de Homologação
            </h3>
            <div className="space-y-2">
              <div className="p-2 bg-slate-50 rounded">
                <span className="text-[10px] text-slate-400 uppercase block">Endereçamento SIGDEM</span>
                <span className="font-bold text-[#002E32]">CTDDCFN-50 (DIVISÃO DE ENSINO)</span>
              </div>
              <div className="p-2 bg-slate-50 rounded">
                <span className="text-[10px] text-slate-400 uppercase block">Correio Operacional</span>
                <span className="font-bold text-[#002E32]">ensino.race@marinha.mil.br</span>
              </div>
              <div className="p-2 bg-slate-50 rounded">
                <span className="text-[10px] text-slate-400 uppercase block">Ramal RITMAR</span>
                <span className="font-bold text-[#002E32]">8399 / 8345</span>
              </div>
            </div>
          </div>

          <div className="bg-[#002E32] text-white rounded-xl p-5 shadow-sm space-y-2">
            <span className="text-[10px] uppercase text-[#BAD435] font-bold tracking-wider">Conformidade Geral</span>
            <div className="text-2xl font-bold font-serif">94.8%</div>
            <p className="text-[11px] text-slate-300 font-sans">
              RACEs protocolados estritamente dentro do prazo regulamentar pelas Unidades do CFN.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
