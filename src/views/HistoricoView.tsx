import React, { useState } from 'react';

export const HistoricoView: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(4);

  const milestones = [
    {
      year: '1957',
      title: 'Criação do Núcleo de Doutrina Anfíbia',
      period: 'Fase Fundacional',
      summary: 'Estruturação inicial da doutrina técnica de desembarque helitransportado e operações de praia após a Segunda Guerra Mundial.',
      details: 'Após o término dos conflitos globais e a evolução do emprego das tropas anfíbias americanas e britânicas, o Corpo de Fuzileiros Navais do Brasil estabeleceu sua primeira comissão permanente destinada à elaboração e tradução de manuais de desembarque de forças anfíbias na Ilha do Governador.',
      badge: 'FUNDAÇÃO DOUTRINÁRIA',
    },
    {
      year: '1971',
      title: 'Formalização do Centro de Instrução',
      period: 'Expansão Institucional',
      summary: 'Centralização de cursos de especialização de oficiais e praças em operações anfíbias no complexo militar do Bananal.',
      details: 'Com a expansão do efetivo do CFN e a aquisição de novas viaturas blindadas de transporte de tropas e meios de desembarque, fez-se mandatória a criação de uma unidade dedicada exclusivamente à padronização dos currículos táticos e da conduta de pelotões anfíbios.',
      badge: 'CONSOLIDAÇÃO DE CURSOS',
    },
    {
      year: '1996',
      title: 'Modernização e Doutrina Expedicionária',
      period: 'Era Moderna',
      summary: 'Reformulação doutrinária voltada para Operações de Paz da ONU (UNAVEM, MINUSTAH) e emprego conjunto.',
      details: 'Adaptação das táticas operacionais para operações de manutenção de paz das Nações Unidas em Angola e futuramente no Haiti, gerando a necessidade de novos manuais de engajamento urbano, proteção de civis e logística expedicionária de longo alcance.',
      badge: 'MISSÕES DE PAZ ONU',
    },
    {
      year: '2008',
      title: 'Estratégia Nacional de Defesa (END)',
      period: 'Reformulação Estratégica',
      summary: 'Reconhecimento do Corpo de Fuzileiros Navais como força expedicionária de pronto emprego da Marinha do Brasil.',
      details: 'A publicação da Estratégia Nacional de Defesa consolidou o papel do CFN na defesa da Amazônia Azul, das bacias fluviais amazônicas e do arquipélago nacional, demandando a atualização completa da matriz de manuais de campanha e procedimentos operacionais padronizados (POPs).',
      badge: 'DIRETRIZ ESTRATÉGICA',
    },
    {
      year: '2021 - Presente',
      title: 'Instituição do CTDDCFN e Era Tecnológica',
      period: 'Fase Tecnológica e Cibernética',
      summary: 'Unificação do Centro de Doutrina e Desenvolvimento Tecnológico com foco em inteligência artificial, guerra eletrônica e drones.',
      details: 'Consolidação do Centro Tecnológico e de Doutrina do Corpo de Fuzileiros Navais (CTDDCFN). Integração entre pesquisa científica militar, validação doutrinária em exercícios de tiro real e formulação de diretrizes para emprego de sistemas aéreos não-tripulados (SANT), guerra cibernética e comunicações seguras por satélite.',
      badge: 'HORIZONTE 2027+',
    },
  ];

  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Top Breadcrumb */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#bad435] uppercase tracking-wider mb-1">
            <span>INSTITUCIONAL</span>
            <span>/</span>
            <span>MEMÓRIA & EVOLUÇÃO</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide uppercase font-serif">
            Histórico & Evolução Doutrinária
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Trajetória histórica desde a fundação da doutrina anfíbia moderna até a integração tecnológica de ponta.
          </p>
        </div>

        <span className="px-3 py-1 bg-[#00383d] border border-[#bad435]/40 text-[#bad435] text-xs font-mono rounded self-start md:self-auto">
          REGISTRO HISTÓRICO HOMOLOGADO
        </span>
      </div>

      {/* Interactive Timeline Rail */}
      <div className="bg-[#002e32] border border-white/10 rounded-lg p-6">
        <div className="flex items-center justify-between overflow-x-auto gap-4 pb-4 border-b border-white/10">
          {milestones.map((m, index) => {
            const isSelected = selectedMilestone === index;
            return (
              <button
                key={m.year}
                onClick={() => setSelectedMilestone(index)}
                className={`flex-1 min-w-[140px] text-left p-3 rounded-lg border transition ${
                  isSelected
                    ? 'bg-[#00383d] border-[#bad435] text-white shadow-lg'
                    : 'bg-black/20 border-white/10 text-slate-400 hover:text-white hover:border-white/30'
                }`}
              >
                <div className={`text-base font-extrabold font-mono ${isSelected ? 'text-[#bad435]' : 'text-slate-300'}`}>
                  {m.year}
                </div>
                <div className="text-[11px] font-mono truncate">{m.period}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Milestone Detail */}
        {milestones[selectedMilestone] && (
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#bad435]/20 text-[#bad435] border border-[#bad435]/40 text-xs font-mono rounded">
                  {milestones[selectedMilestone].badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  MARCO Nº {selectedMilestone + 1} DE {milestones.length}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white font-serif">
                {milestones[selectedMilestone].title}
              </h2>

              <p className="text-sm font-medium text-[#bad435]/90 leading-relaxed">
                {milestones[selectedMilestone].summary}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed bg-black/20 p-4 rounded border border-white/5">
                {milestones[selectedMilestone].details}
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#001f22] border border-white/10 p-5 rounded-lg flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#bad435]/10 border border-[#bad435]/30 flex items-center justify-center text-[#bad435] mb-3">
                <span className="material-symbols-outlined text-3xl">auto_stories</span>
              </div>
              <h4 className="text-sm font-bold text-white uppercase font-mono">Doutrina em Arquivo</h4>
              <p className="text-xs text-slate-400 mt-1">
                Boletins e ordens de serviço correspondentes a este período estão catalogados na Seção de Comunicação Social e Doutrina.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 w-full text-[11px] font-mono text-slate-500">
                ARQUIVO GERAL CTDDCFN // SEC-HIST
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Grid of Historical Milestones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 bg-[#002e32] border border-white/10 rounded-lg">
          <span className="material-symbols-outlined text-3xl text-[#bad435] mb-2">military_tech</span>
          <h3 className="text-base font-bold text-white uppercase font-mono">Tradição Anfíbia Centenária</h3>
          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            Herdeiros dos Fuzileiros da Brigada Real de Portugal chegados ao Brasil em 1808 com a Família Real, mantendo o espírito indômito de combate.
          </p>
        </div>

        <div className="p-5 bg-[#002e32] border border-white/10 rounded-lg">
          <span className="material-symbols-outlined text-3xl text-[#bad435] mb-2">menu_book</span>
          <h3 className="text-base font-bold text-white uppercase font-mono">Mais de 120 Manuais Ativos</h3>
          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            Revisão contínua em ciclos quadrienais de todas as publicações doutrinárias e diretrizes de combate conjunto das Forças Armadas.
          </p>
        </div>

        <div className="p-5 bg-[#002e32] border border-white/10 rounded-lg">
          <span className="material-symbols-outlined text-3xl text-[#bad435] mb-2">precision_manufacturing</span>
          <h3 className="text-base font-bold text-white uppercase font-mono">P&D com Universidades</h3>
          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            Parcerias estratégicas com o IME, ITA e COPPE/UFRJ para desenvolvimento de novas tecnologias aplicadas ao combate expedicionário.
          </p>
        </div>
      </div>
    </div>
  );
};
