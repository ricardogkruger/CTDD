import React from 'react';

export const ComandanteView: React.FC = () => {
  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Top Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-technical-code text-slate-500">
        <span className="flex items-center gap-1 font-semibold text-slate-700">
          <span className="material-symbols-outlined text-[16px]">home</span>
          <span>Início</span>
        </span>
        <span className="material-symbols-outlined text-[14px] text-slate-400">chevron_right</span>
        <span>Institucional</span>
        <span className="material-symbols-outlined text-[14px] text-slate-400">chevron_right</span>
        <span className="text-[#002e32] font-bold">Comandante</span>
      </div>

      {/* Hero Card do Comandante */}
      <article className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-start">
          {/* Retrato Oficial */}
          <div className="w-full md:w-52 lg:w-60 shrink-0">
            <div className="rounded-lg overflow-hidden border-2 border-slate-200 shadow bg-slate-100 aspect-[3/4] relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-9hxoPINlkjxobvxtgVV7bp-BZNu6UIJNcPAMtU89dmWPeSe1qLYH5QS23eZz7NVEtaxUqTyjdvjYshxsLFaXYVImlb8rW_Smoq2Pm5mlyNZ2MYnTdFyiTN8U3Out0nvADGkznfJxyYTHAb4B4sD6vMFSuBajd5tatj4Ex_PwADtzbXW43-x_0XTKEV0zpfDCkBGvXDN7BmQGH7qmwVcVQxubF1JScnu6cofbNzbQpddXWHNZZ9xV"
                alt="Vice-Almirante (FN) Cláudio Lopes de Araujo Leite"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#002e32]/90 via-[#002e32]/40 to-transparent p-2 text-center">
                <span className="text-[10px] text-white tracking-widest uppercase font-semibold">Corpo de Fuzileiros Navais</span>
              </div>
            </div>
          </div>

          {/* Dados & Títulos */}
          <div className="flex-1 space-y-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-1.5 w-6 bg-[#bad435] rounded-full"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-slate-500 font-technical-code">Curriculum Vitae</span>
              </div>
              <h1 className="font-headline text-2xl sm:text-3xl font-bold text-[#002e32] leading-tight">
                Vice-Almirante (FN) Cláudio Lopes de Araujo Leite
              </h1>
              <p className="text-sm sm:text-base font-semibold text-teal-800 mt-2">
                Comandante do Treinamento e do Desenvolvimento Doutrinário do Corpo de Fuzileiros Navais
              </p>
            </div>

            {/* Badges Rápidos */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <div className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-slate-700">
                <span className="font-bold text-[#002e32]">Promoção a Vice-Almirante:</span>
                <span>31 MAR 2026</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-slate-700">
                <span className="font-bold text-[#002e32]">Naturalidade:</span>
                <span>Rio de Janeiro</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-slate-700">
                <span className="font-bold text-[#002e32]">Esposa:</span>
                <span>Taíssa Clemente de Araujo Leite</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-slate-700">
                <span className="font-bold text-[#002e32]">Filha:</span>
                <span>Catarina Clemente de Araujo Leite</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Seção 1: Dados Pessoais */}
      <article className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h2 className="font-headline text-lg font-bold text-[#002e32] border-b pb-2 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#bad435] rounded-sm"></span>
          Dados Pessoais
        </h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs sm:text-sm">
          <div className="flex border-b border-slate-100 py-1.5">
            <dt className="w-36 font-semibold text-slate-500">Nascimento</dt>
            <dd className="text-slate-800 font-medium">13/06/1969</dd>
          </div>
          <div className="flex border-b border-slate-100 py-1.5">
            <dt className="w-36 font-semibold text-slate-500">Naturalidade</dt>
            <dd className="text-slate-800 font-medium">Rio de Janeiro</dd>
          </div>
          <div className="flex border-b border-slate-100 py-1.5 sm:col-span-2">
            <dt className="w-36 font-semibold text-slate-500">Estado civil</dt>
            <dd className="text-slate-800 font-medium">Casado</dd>
          </div>
        </dl>
      </article>

      {/* Seção 2: Carreira Militar */}
      <article className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h2 className="font-headline text-lg font-bold text-[#002e32] border-b pb-2 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#bad435] rounded-sm"></span>
          Carreira
        </h2>
        <div className="relative pl-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
          <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
            <li className="relative pl-3 before:absolute before:-left-[1.3rem] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#002e32]">
              <span className="font-bold text-[#002e32]">Guarda-Marinha</span> – 13 DEZ 1990
            </li>
            <li className="relative pl-3 before:absolute before:-left-[1.3rem] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#002e32]">
              <span className="font-bold text-[#002e32]">Segundo-Tenente</span> – 08 OUT 1991
            </li>
            <li className="relative pl-3 before:absolute before:-left-[1.3rem] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#002e32]">
              <span className="font-bold text-[#002e32]">Primeiro-Tenente</span> – 25 DEZ 1993
            </li>
            <li className="relative pl-3 before:absolute before:-left-[1.3rem] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#002e32]">
              <span className="font-bold text-[#002e32]">Capitão-Tenente</span> – 25 DEZ 1996
            </li>
            <li className="relative pl-3 before:absolute before:-left-[1.3rem] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#002e32]">
              <span className="font-bold text-[#002e32]">Capitão de Corveta</span> – 25 DEZ 2002
            </li>
            <li className="relative pl-3 before:absolute before:-left-[1.3rem] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#002e32]">
              <span className="font-bold text-[#002e32]">Capitão de Fragata</span> – 31 AGO 2008
            </li>
            <li className="relative pl-3 before:absolute before:-left-[1.3rem] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#002e32]">
              <span className="font-bold text-[#002e32]">Capitão de Mar e Guerra</span> – 25 DEZ 2013
            </li>
            <li className="relative pl-3 before:absolute before:-left-[1.3rem] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#002e32]">
              <span className="font-bold text-[#002e32]">Contra-Almirante</span> – 31 MAR 2020
            </li>
            <li className="relative pl-3 before:absolute before:-left-[1.3rem] before:top-2 before:w-2.5 before:h-2.5 before:rounded-full before:bg-[#bad435] before:ring-2 before:ring-[#002e32]">
              <span className="font-bold text-[#002e32]">Vice-Almirante</span> – 31 MAR 2026
            </li>
          </ul>
        </div>
      </article>

      {/* Seção 3: Comandos e Funções */}
      <article className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h2 className="font-headline text-lg font-bold text-[#002e32] border-b pb-2 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#bad435] rounded-sm"></span>
          Comandos e Funções
        </h2>
        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
          {[
            'Comandante do Treinamento e do Desenvolvimento Doutrinário do Corpo de Fuzileiros Navais',
            'Comandante do Material de Fuzileiros Navais',
            'Comandante do Centro de Educação Física Almirante Adalberto Nunes e Presidente da Comissão de Desportos da Marinha',
            'Subchefe de Organização do Estado-Maior da Armada',
            'Comandante do Centro de Instrução Almirante Sylvio de Camargo',
            'Imediato do Comando do Pessoal de Fuzileiros Navais',
            'Comandante do Centro de Avaliação da Ilha da Marambaia',
            'Chefe do Departamento de Doutrina do Comando-Geral do Corpo de Fuzileiros Navais',
            'Comandante do Batalhão de Comando e Controle',
            'Imediato do 2º Batalhão de Infantaria de Fuzileiros Navais',
            'Instrutor do CAOCFN'
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-[#bad435] font-black mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>

      {/* Seção 4: Cursos */}
      <article className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h2 className="font-headline text-lg font-bold text-[#002e32] border-b pb-2 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#bad435] rounded-sm"></span>
          Cursos
        </h2>
        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
          <li className="flex items-start gap-2.5">
            <span className="text-[#bad435] font-black mt-0.5">•</span>
            <span>Escola Naval – 1990</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-[#bad435] font-black mt-0.5">•</span>
            <span>Curso de Aperfeiçoamento de Oficiais do Corpo de Fuzileiros Navais – 1997</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-[#bad435] font-black mt-0.5">•</span>
            <span>Curso de Estado-Maior para Oficiais Superiores (CEMOS – EGN) – 2007</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-[#bad435] font-black mt-0.5">•</span>
            <span>Curso de Altos Estudos de Política e Estratégia (CAEPE – ESG) – 2018</span>
          </li>
        </ul>
      </article>

      {/* Seção 5: Condecorações */}
      <article className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h2 className="font-headline text-lg font-bold text-[#002e32] border-b pb-2 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#bad435] rounded-sm"></span>
          Condecorações
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm text-slate-700">
          {[
            'Ordem do Mérito da Defesa (Grau de Comendador)',
            'Ordem do Mérito Naval (Grau de Comendador)',
            'Ordem do Mérito Militar (Grau de Comendador)',
            'Ordem do Mérito Ministério Público Militar',
            'Medalha Mérito Desportivo Militar',
            'Medalha da Vitória',
            'Medalha Militar de Ouro com Passador de Platina',
            'Medalha Mérito Tamandaré',
            'Medalha do Pacificador',
            'Medalha Mérito Santos-Dumont',
            'Medalha-Prêmio Escola de Guerra Naval',
            'Medalha Mérito Anfíbio (duas âncoras)',
            'Medalha Tiradentes',
            'Medalha da Missão da ONU para a Estabilização do Haiti',
            'Medalha da Organização Brasileira dos Veteranos das Nações Unidas'
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[#bad435] font-black">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>

      {/* Bloco de Assinatura Oficial */}
      <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm text-right">
        <p className="text-xs sm:text-sm text-slate-500 mb-6 font-technical-code">
          Rio de Janeiro, 27 de março de 2026.
        </p>
        <div className="inline-block text-center border-t border-slate-300 pt-3 px-8">
          <h3 className="font-headline font-extrabold text-[#002e32] text-sm sm:text-base tracking-wider uppercase">
            Cláudio Lopes de Araujo Leite
          </h3>
          <p className="text-xs text-slate-600 font-medium font-technical-code">
            Vice-Almirante (FN)
          </p>
        </div>
      </div>
    </div>
  );
};
