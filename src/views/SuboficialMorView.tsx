import React from 'react';

export const SuboficialMorView: React.FC = () => {
  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Top Breadcrumb */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs font-technical-code text-slate-500">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 font-semibold text-slate-700">
            <span className="material-symbols-outlined text-[16px]">home</span>
            <span>Início</span>
          </span>
          <span className="material-symbols-outlined text-[14px] text-slate-400">chevron_right</span>
          <span>Institucional</span>
          <span className="material-symbols-outlined text-[14px] text-slate-400">chevron_right</span>
          <span className="text-[#002e32] font-bold">Suboficial-Mor</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700 font-semibold uppercase">
            REGISTRO OFICIAL MB: 86.0491.31
          </span>
        </div>
      </div>

      {/* Hero Profile Banner */}
      <section className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#002e32] via-[#00383d] to-[#bad435]"></div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 relative z-10">
          {/* Foto Militar */}
          <div className="relative shrink-0 group">
            <div className="w-44 h-56 sm:w-52 sm:h-64 rounded-lg overflow-hidden bg-slate-100 shadow-md relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-w1cQniqgfHLMf-RvP1zSJoG68NMiWBgMPUifRpmdkIaCmOjFaa2YiwCHzv23m8LcllstIKZSsKK_1M77JN3C-QsSmKH6Z4WvSM_OqcVzyVB_Lrj28So6T9rthkJDO001bihEeXRa6MxZtgHegraZU0ZwWy--MiJ3MQWr3m6e4_QJhjcb1jzljtKKPegZdQjEkzbxdzDYFik_l8ds0BcJv16p84616OKsbvihRB7ub_Ot7ajH4l5U"
                alt="SO-FN-IF Claudio de Oliveira"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-2 left-2 right-2 text-center">
                <span className="inline-block px-2 py-0.5 rounded bg-black/80 text-white font-technical-code text-[11px] font-semibold uppercase">
                  MB / CTDDCFN
                </span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-[#002e32] text-[#bad435] flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-xl">military_tech</span>
            </div>
          </div>

          {/* Dados & Atribuições */}
          <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[#002e32] font-technical-code text-xs font-bold uppercase">
                Quadro de Infantaria de Fuzileiros Navais
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#bad435]/25 text-[#374500] font-technical-code text-xs font-bold uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8fa619]"></span>
                Prontidão Operativa
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-technical-code text-xs font-bold uppercase">
                39 ANOS DE EFETIVO SERVIÇO
              </span>
            </div>

            <h1 className="font-headline text-2xl sm:text-3xl font-bold uppercase text-[#002e32] tracking-tight">
              SO-FN-IF Claudio de Oliveira
            </h1>
            <p className="text-sm sm:text-base font-semibold text-teal-900 mt-1 mb-3">
              Suboficial-Mor do Comando do Treinamento e do Desenvolvimento Doutrinário do CFN
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mb-4">
              Líder da praça naval e elo fundamental na preservação dos valores, tradições, disciplina e eficiência operacional do Corpo de Fuzileiros Navais. Assessora diretamente o Comando nas diretrizes relativas ao moral, aperfeiçoamento e bem-estar do corpo de praças na gestão doutrinária.
            </p>

            {/* Grid de Métricas */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200 text-left font-technical-code">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Graduação</span>
                <span className="text-sm font-bold text-[#002e32]">Suboficial</span>
                <span className="text-[10px] text-slate-500 block">Promovido em 2009</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Ingresso</span>
                <span className="text-sm font-bold text-[#002e32]">1986</span>
                <span className="text-[10px] text-slate-500 block">09 de Junho</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Missão ONU</span>
                <span className="text-sm font-bold text-[#002e32]">MINUSTAH</span>
                <span className="text-[10px] text-[#566500] font-bold block">Haiti</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Gabinete</span>
                <span className="text-sm font-bold text-[#002e32]">CTDDCFN</span>
                <span className="text-[10px] text-slate-500 block">Ilha do Governador</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Detalhes Curriculares */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Coluna Esquerda: Dados & Carreira */}
        <div className="lg:col-span-5 space-y-6">
          <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="font-headline text-base font-bold text-[#002e32] border-b pb-2 mb-3 flex items-center justify-between">
              <span>1. Dados Pessoais</span>
              <span className="font-technical-code text-xs text-slate-400">REG-PERS</span>
            </h2>
            <dl className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between py-1 bg-slate-50 px-2 rounded">
                <dt className="text-slate-500 font-medium">Nascimento</dt>
                <dd className="font-bold text-[#002e32]">20 JAN 1967</dd>
              </div>
              <div className="flex justify-between py-1 px-2">
                <dt className="text-slate-500 font-medium">Naturalidade</dt>
                <dd className="font-semibold text-slate-800">Rio de Janeiro - RJ</dd>
              </div>
              <div className="flex justify-between py-1 bg-slate-50 px-2 rounded">
                <dt className="text-slate-500 font-medium">Nacionalidade</dt>
                <dd className="font-semibold text-slate-800">Brasileira</dd>
              </div>
              <div className="flex justify-between py-1 px-2">
                <dt className="text-slate-500 font-medium">Estado Civil</dt>
                <dd className="font-semibold text-slate-800">Casado</dd>
              </div>
              <div className="flex flex-col py-1 bg-slate-50 px-2 rounded">
                <dt className="text-slate-500 font-medium">Cônjuge</dt>
                <dd className="font-bold text-[#002e32]">Dra. Rosa Helena da Silva de Oliveira</dd>
              </div>
            </dl>
          </section>

          <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="font-headline text-base font-bold text-[#002e32] border-b pb-2 mb-3 flex items-center justify-between">
              <span>2. Carreira Militar</span>
              <span className="font-technical-code text-xs text-[#566500] font-bold">HIERARQUIA MB</span>
            </h2>
            <div className="relative pl-6 space-y-3 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 text-xs sm:text-sm font-technical-code">
              {[
                { rank: 'Incorporação', date: '09 JUN 1986' },
                { rank: 'Soldado Fuzileiro Naval', date: '01 NOV 1986' },
                { rank: 'Cabo', date: '16 DEZ 1988' },
                { rank: 'Terceiro-Sargento', date: '28 AGO 1992' },
                { rank: 'Segundo-Sargento', date: '11 JUN 1997' },
                { rank: 'Primeiro-Sargento', date: '13 DEZ 2001' },
                { rank: 'Suboficial', date: '11 JUN 2009', highlight: true }
              ].map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between py-1">
                  <div className={`absolute -left-[1.65rem] top-2 w-2.5 h-2.5 rounded-full ${step.highlight ? 'bg-[#bad435] ring-2 ring-[#002e32]' : 'bg-[#002e32]'}`}></div>
                  <span className={`font-bold ${step.highlight ? 'text-[#002e32] text-sm' : 'text-slate-700'}`}>{step.rank}</span>
                  <span className="text-slate-500 font-medium">{step.date}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-[#002E32] text-white rounded-xl p-5 shadow-sm space-y-2">
            <span className="font-technical-code text-[11px] text-[#bad435] uppercase font-bold tracking-wider block">
              Doutrina &amp; Disciplina
            </span>
            <blockquote className="text-xs italic text-teal-100 leading-relaxed">
              "A liderança militar é exercida pelo exemplo diário no convoo e no terreno operacional. O aprimoramento contínuo das nossas praças é a garantia da letalidade e prontidão do Fuzileiro Naval."
            </blockquote>
            <p className="text-right text-[11px] font-bold text-[#bad435] font-technical-code pt-1">
              SO-FN-IF CLAUDIO DE OLIVEIRA
            </p>
          </div>
        </div>

        {/* Coluna Direita: Comissões, Cursos e Medalhas */}
        <div className="lg:col-span-7 space-y-6">
          <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="font-headline text-base font-bold text-[#002e32] border-b pb-2 mb-3 flex items-center justify-between">
              <span>3. Comissões</span>
              <span className="font-technical-code text-xs text-slate-500">9 ORGANIZAÇÕES MILITARES</span>
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 divide-y divide-slate-100">
              <li className="pt-2 flex items-start justify-between gap-2">
                <div>
                  <span className="font-bold text-[#002e32] block">Comando do Treinamento e do Desenvolvimento Doutrinário do CFN</span>
                  <span className="text-xs text-slate-500">Exercício da função de Suboficial-Mor</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#bad435]/25 text-[#374500] font-technical-code text-xs font-bold shrink-0">
                  2025 - Atual
                </span>
              </li>
              <li className="pt-2 flex items-start justify-between gap-2">
                <div>
                  <span className="font-semibold text-slate-900 block">Centro de Instrução Almirante Sylvio de Camargo (CIASC)</span>
                  <span className="text-xs text-slate-500">Divisão de Ensino e Apoio à Doutrina Anfíbia</span>
                </div>
                <span className="font-technical-code text-xs text-slate-500 shrink-0">2013 - 2025</span>
              </li>
              <li className="pt-2 flex items-start justify-between gap-2">
                <div>
                  <span className="font-semibold text-slate-900 block">Grupamento de Fuzileiros Navais de Belém (GptFNBe)</span>
                  <span className="text-xs text-slate-500">Operações Ribeirinhas na Amazônia Oriental</span>
                </div>
                <span className="font-technical-code text-xs text-slate-500 shrink-0">2009 - 2012</span>
              </li>
              <li className="pt-2 flex items-start justify-between gap-2 bg-slate-50 p-2 rounded">
                <div>
                  <span className="font-bold text-[#002e32] block">Grupamento Operativo de Fuzileiros Navais - Haiti (MINUSTAH)</span>
                  <span className="text-xs text-slate-500">Missão de Estabilização e Paz Internacional (ONU)</span>
                </div>
                <span className="font-technical-code text-xs text-slate-700 font-bold shrink-0">2008</span>
              </li>
              <li className="pt-2 flex items-start justify-between gap-2">
                <div>
                  <span className="font-semibold text-slate-900 block">1º Batalhão de Operações Ribeirinhas (Batalhão Humaitá)</span>
                  <span className="text-xs text-slate-500">Companhia de Fuzileiros de Selva</span>
                </div>
                <span className="font-technical-code text-xs text-slate-500 shrink-0">2006 - 2008</span>
              </li>
              <li className="pt-2 flex items-start justify-between gap-2">
                <div>
                  <span className="font-semibold text-slate-900 block">1º Batalhão de Infantaria de Fuzileiros Navais (Batalhão Riachuelo)</span>
                  <span className="text-xs text-slate-500">Operações de Desembarque Anfíbio</span>
                </div>
                <span className="font-technical-code text-xs text-slate-500 shrink-0">1992 - 1996</span>
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="font-headline text-base font-bold text-[#002e32] border-b pb-2 mb-3 flex items-center justify-between">
              <span>4. Cursos e Qualificações Militares</span>
              <span className="font-technical-code text-xs text-slate-400">FORMAÇÃO PROFISSIONAL</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded border border-slate-100">
                <span className="font-bold text-[#002e32] block">C-Esp-HabSO</span>
                <span className="text-slate-600">Curso Especial de Habilitação a Suboficial</span>
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-100">
                <span className="font-bold text-[#002e32] block">C-Ap-IF</span>
                <span className="text-slate-600">Curso de Aperfeiçoamento de Infantaria</span>
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-100">
                <span className="font-bold text-[#002e32] block">C-FSG-FN</span>
                <span className="text-slate-600">Curso de Formação de Sargentos Fuzileiros Navais</span>
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-100">
                <span className="font-bold text-[#002e32] block">C-Exp-TE</span>
                <span className="text-slate-600">Curso Expedito de Técnica de Ensino (MB)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-100 sm:col-span-2">
                <span className="font-bold text-[#002e32] block">C-Def-QBN (Exército Brasileiro)</span>
                <span className="text-slate-600">Defesa Química, Biológica e Nuclear - Escola de Instrução Especializada</span>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h2 className="font-headline text-base font-bold text-[#002e32] border-b pb-2 mb-3 flex items-center justify-between">
              <span>5. Condecorações &amp; Honrarias</span>
              <span className="font-technical-code text-xs text-[#566500] font-bold">DISTINÇÃO NAVAL</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-technical-code">
              <div className="p-3 bg-slate-50 rounded text-center border border-slate-100">
                <span className="material-symbols-outlined text-amber-500 text-xl block mb-1">military_tech</span>
                <span className="font-bold text-[#002e32] block">Medalha Militar de Ouro</span>
                <span className="text-[10px] text-slate-500">Passador de Ouro (30 anos)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded text-center border border-slate-100">
                <span className="material-symbols-outlined text-[#002e32] text-xl block mb-1">anchor</span>
                <span className="font-bold text-[#002e32] block">Mérito Anfíbio</span>
                <span className="text-[10px] text-slate-500">Três Âncoras</span>
              </div>
              <div className="p-3 bg-slate-50 rounded text-center border border-slate-100">
                <span className="material-symbols-outlined text-blue-600 text-xl block mb-1">public</span>
                <span className="font-bold text-[#002e32] block">Medalha da ONU</span>
                <span className="text-[10px] text-slate-500">MINUSTAH (Haiti)</span>
              </div>
            </div>
          </section>

          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm text-right">
            <div className="inline-block text-center border-t border-slate-300 pt-3 px-6">
              <h3 className="font-headline font-bold text-xs sm:text-sm uppercase text-[#002e32] tracking-wider">
                Claudio de Oliveira
              </h3>
              <p className="text-[11px] text-slate-600 font-technical-code">
                SO-FN-IF | Suboficial-Mor CTDDCFN
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
