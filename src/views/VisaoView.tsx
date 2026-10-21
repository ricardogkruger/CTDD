import React from 'react';

interface VisaoViewProps {
  onNavigate: (slug: string) => void;
}

export const VisaoView: React.FC<VisaoViewProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Top Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-technical-code text-slate-500">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 font-semibold text-slate-700">
            <span className="material-symbols-outlined text-[16px]">home</span>
            <span>Início</span>
          </span>
          <span className="material-symbols-outlined text-[14px] text-slate-400">chevron_right</span>
          <span>Institucional</span>
          <span className="material-symbols-outlined text-[14px] text-slate-400">chevron_right</span>
          <span className="text-[#002e32] font-bold">Visão Institucional</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 font-bold uppercase">
            DIRETRIZ DO COMANDO-GERAL
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#bad435]/25 text-[#374500] font-bold uppercase">
            VIGÊNCIA: 2024-2027
          </span>
        </div>
      </div>

      {/* Main Hero Card: Visão de Futuro */}
      <div className="relative overflow-hidden bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 flex flex-col gap-6">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#002e32] via-[#00383d] to-[#bad435]"></div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#002e32] text-[#bad435] flex items-center justify-center shadow-md shrink-0">
              <span className="material-symbols-outlined text-3xl">visibility</span>
            </div>
            <div>
              <span className="font-technical-code text-xs uppercase font-bold text-[#566500] tracking-wider block">
                DIRETRIZ ESTRATÉGICA CFN • DOC-ESTR-01/2024
              </span>
              <h1 className="font-headline text-2xl sm:text-3xl font-bold text-[#002e32] tracking-tight">
                Visão de Futuro
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#002e32] text-white px-4 py-2.5 rounded-lg shadow-sm border-l-4 border-[#bad435] shrink-0">
            <span className="material-symbols-outlined text-[#bad435] text-2xl">event_available</span>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-teal-200">Horizonte Estratégico</span>
              <span className="font-headline text-base font-bold text-[#bad435] leading-none">META 2027</span>
            </div>
          </div>
        </div>

        {/* Texto Doutrinário Oficial */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-technical-code text-xs font-bold uppercase tracking-wider text-[#002e32] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-[#566500]">format_quote</span>
              Texto Doutrinário Oficial Integral
            </span>
            <span className="font-technical-code text-xs text-slate-500">ESTADO-MAIOR DA ARMADA / CFN</span>
          </div>

          <blockquote className="text-sm md:text-base text-slate-800 leading-relaxed text-justify font-medium">
            “Ser uma referência, até 2027, na produção e gestão do conhecimento profissional das Forças Armadas, acompanhando a evolução de assuntos militares no Brasil e no exterior e contribuindo com o desenvolvimento de novas concepções, conceitos, táticas, técnicas e procedimentos para o emprego do Corpo de Fuzileiros Navais em proveito da Marinha do Brasil, de maneira a assessorar o Setor Operativo sobre todas as áreas de conhecimentos que envolvam o emprego de Fuzileiros Navais e a prover o Comandante-Geral do Corpo de Fuzileiros Navais toda fundamentação doutrinária para o desenvolvimento e direção da gestão estratégica do pessoal e material do CFN.”
          </blockquote>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-500 font-technical-code">
            <span>Aprovado em Reunião de Doutrina Militar Naval</span>
            <span className="text-[#002e32] font-semibold">Publicação Ostensiva Institucional</span>
          </div>
        </div>
      </div>

      {/* 3 Pilares da Projeção Doutrinária */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-5 rounded bg-[#bad435]"></span>
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#002e32]">
              Pilares da Projeção Doutrinária
            </h2>
          </div>
          <span className="font-technical-code text-xs text-slate-500 uppercase">
            Desdobramento Tático-Operacional
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Pilar 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between gap-4 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#002e32]"></div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[#002e32]">
                  <span className="material-symbols-outlined text-2xl">psychology</span>
                </div>
                <span className="font-technical-code text-xs font-bold text-[#566500] bg-slate-100 px-2 py-0.5 rounded">
                  PILAR 01
                </span>
              </div>
              <h3 className="font-headline text-base font-bold text-[#002e32]">
                Produção &amp; Gestão do Conhecimento
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monitorar sistematicamente a vanguarda dos conflitos contemporâneos e inovações militares globais, sistematizando lições aprendidas, manuais operacionais e notas técnicas de prontidão.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#002e32] font-semibold">
              <span>Capacitação Contínua</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between gap-4 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#bad435]"></div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#bad435]/20 flex items-center justify-center text-[#374500]">
                  <span className="material-symbols-outlined text-2xl">shield</span>
                </div>
                <span className="font-technical-code text-xs font-bold text-[#002e32] bg-slate-100 px-2 py-0.5 rounded">
                  PILAR 02
                </span>
              </div>
              <h3 className="font-headline text-base font-bold text-[#002e32]">
                Assessoria ao Setor Operativo
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fornecer suporte técnico direto e fundamentado a todas as Forças de Emprego Rápido, Batalhões e Destacamentos Anfíbios, garantindo convergência em táticas, técnicas e procedimentos (TTP).
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#002e32] font-semibold">
              <span>Prontidão Operativa</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between gap-4 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#00383d]"></div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[#002e32]">
                  <span className="material-symbols-outlined text-2xl">military_tech</span>
                </div>
                <span className="font-technical-code text-xs font-bold text-[#566500] bg-slate-100 px-2 py-0.5 rounded">
                  PILAR 03
                </span>
              </div>
              <h3 className="font-headline text-base font-bold text-[#002e32]">
                Gestão Estratégica do CFN
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prover substrato doutrinário irrefutável para a tomada de decisões de alto nível pelo Comandante-Geral, orientando investimentos em novos armamentos, sistemas de comando e quadros de pessoal.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#002e32] font-semibold">
              <span>Decisão &amp; Modernização</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>

      {/* Linha de Ação Estratégica & Contexto de Campo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-5 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div className="relative h-56 w-full overflow-hidden bg-[#002e32]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5H6-PtnEXDkl175fHU9ZDjlGMekun72q1U379gWB88JVNf-FJwsJ0Klrg63z6RsqqbDx5sfQBM1NanDuKz6tXgKsVeg7IGHhSO2iD7f-fR9Hp0InvfsB2GMwCIdmjxMcI3JoqJ6y5WrxtAjI3e-4fs_5ZAtOXRWRiZDwVca1-VeQAAGlNT4IHYyXPpeLsh807HM5nRuSqi15Lhd6wRy54_H4dGP4IdDhW4dlekd19QmD_sDPZzcQ5"
              alt="Fuzileiros Navais em treinamento"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002e32] via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
              <div>
                <span className="font-technical-code text-[11px] uppercase font-bold text-[#bad435]">Treinamento em Campo</span>
                <p className="font-headline text-base font-bold">Corpo de Fuzileiros Navais</p>
              </div>
              <span className="material-symbols-outlined text-2xl text-white">sailing</span>
            </div>
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between text-xs text-slate-600">
            <p className="leading-relaxed">
              O desenvolvimento doutrinário contínuo alicerça as operações anfíbias mais complexas da América Latina, unindo tradição de combate e tecnologia expedicionária de ponta.
            </p>
            <div className="flex items-center justify-between pt-2 border-t font-technical-code text-[11px] text-slate-400">
              <span>LOCALIDADE: CIAMPA / CADIM</span>
              <span>PRONTO EMPREGO</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-headline text-sm font-bold uppercase text-[#002e32] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">timeline</span>
                Linha de Ação Estratégica
              </span>
              <span className="font-technical-code text-xs text-[#566500] font-bold uppercase">Plano de Metas</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div className="w-7 h-7 rounded-full bg-[#002e32] text-[#bad435] flex items-center justify-center font-bold text-xs shrink-0">1</div>
                <div>
                  <span className="font-bold text-[#002e32] block">Atualização dos Manuais Doutrinários (2024 - 2025)</span>
                  <span className="text-slate-600">Revisão e publicação das matrizes de operações anfíbias e emprego de SARP.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div className="w-7 h-7 rounded-full bg-[#002e32] text-[#bad435] flex items-center justify-center font-bold text-xs shrink-0">2</div>
                <div>
                  <span className="font-bold text-[#002e32] block">Digitalização &amp; Simuladores Integrados (2025 - 2026)</span>
                  <span className="text-slate-600">Expansão do ambiente sintético para tomada de decisão em Grupo de Combate e Estado-Maior.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div className="w-7 h-7 rounded-full bg-[#bad435] text-[#002e32] flex items-center justify-center font-bold text-xs shrink-0">3</div>
                <div>
                  <span className="font-bold text-[#002e32] block">Consolidação como Polo de Excelência (2027)</span>
                  <span className="text-slate-600">Reconhecimento pleno como centro de referência de doutrina militar conjunta nacional e interoperabilidade.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => onNavigate('missao')}
              className="text-xs font-bold text-[#002e32] hover:underline flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">shield</span>
              Consultar Missão Institucional
            </button>
            <button
              onClick={() => onNavigate('curriculos')}
              className="px-3.5 py-1.5 bg-[#002e32] hover:bg-teal-900 text-white rounded text-xs font-semibold flex items-center gap-1 shadow-sm"
            >
              <span className="material-symbols-outlined text-sm text-[#bad435]">menu_book</span>
              Acessar Catálogo de Cursos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
