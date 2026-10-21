import React from 'react';

interface MatrizNavegacaoViewProps {
  onNavigate: (slug: string) => void;
}

export const MatrizNavegacaoView: React.FC<MatrizNavegacaoViewProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#002E32] to-[#064045] rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BAD435]/20 text-[#BAD435] text-xs font-semibold mb-2">
            <span className="material-symbols-outlined text-sm">hub</span> MATRIZ OFICIAL DE NAVEGAÇÃO &amp; TAXONOMIA
          </div>
          <h1 className="text-2xl font-bold tracking-tight font-serif uppercase">
            Arquitetura Completa de Menus do Portal CTDDCFN
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl font-sans leading-relaxed">
            Visualização panorâmica de todas as seções e subníveis requeridos pelo Comando. Clique em qualquer departamento, divisão ou sistema para navegar imediatamente.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-[#001f22]/70 px-4 py-3 rounded-xl border border-white/10 shrink-0">
          <div className="text-center px-2">
            <div className="text-2xl font-black text-[#BAD435]">6</div>
            <div className="text-[10px] uppercase font-bold text-slate-300">Departamentos</div>
          </div>
          <div className="w-px h-8 bg-white/15"></div>
          <div className="text-center px-2">
            <div className="text-2xl font-black text-white">20+</div>
            <div className="text-[10px] uppercase font-bold text-slate-300">Divisões</div>
          </div>
          <div className="w-px h-8 bg-white/15"></div>
          <div className="text-center px-2">
            <div className="text-2xl font-black text-[#BAD435]">13</div>
            <div className="text-[10px] uppercase font-bold text-slate-300">Sistemas</div>
          </div>
        </div>
      </div>

      {/* 6 Departamentos Grid */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#002E32]">corporate_fare</span>
            <h3 className="text-sm font-bold text-[#002E32] uppercase">Menu: Departamentos &amp; Divisões</h3>
          </div>
          <span className="text-slate-400">Clique para acessar</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
          {/* Gabinete & Assessorias */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <h4 className="font-bold text-[#002E32] uppercase pb-2 border-b border-slate-200 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">shield</span>
              Gabinete &amp; Assessorias
            </h4>
            <div className="space-y-1">
              {['03 Gabinete (GAB)', '04 Ass Comunicação Estratégica (SECOM)', '05 Ass Relações Institucionais (ARIN)', '06 Ass Inteligência (INTEL)', '07 Ass Justiça e Disciplina (AJUD)'].map((item, i) => (
                <div
                  key={i}
                  onClick={() => onNavigate('inicio')}
                  className="p-2 bg-white rounded border border-slate-200 hover:border-[#002E32] cursor-pointer flex justify-between items-center transition"
                >
                  <span className="text-slate-800 font-semibold">{item}</span>
                  <span className="material-symbols-outlined text-xs text-slate-400">chevron_right</span>
                </div>
              ))}
            </div>
          </div>

          {/* 10 CDDFN */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <h4 className="font-bold text-[#002E32] uppercase pb-2 border-b border-slate-200 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">menu_book</span>
              10 CDDFN (Doutrina)
            </h4>
            <div className="space-y-1">
              {[
                { name: '11 Div Integração Doutrinária (DID)', slug: 'flash-doutrinario' },
                { name: '12 Div Pesquisa e Desenvolvimento (DPD)', slug: 'fronteiras-tecnologia' },
                { name: '13 Div Formação Doutrinária (DFD)', slug: 'ordem-interna' },
                { name: '14 Div Gestão do Conhecimento (DGCD)', slug: 'ctddmarinst' },
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={() => onNavigate(item.slug)}
                  className="p-2 bg-white rounded border border-slate-200 hover:border-[#002E32] cursor-pointer flex justify-between items-center transition"
                >
                  <span className="text-slate-800 font-semibold">{item.name}</span>
                  <span className="material-symbols-outlined text-xs text-slate-400">chevron_right</span>
                </div>
              ))}
            </div>
          </div>

          {/* 20 Dept Ensino */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <h4 className="font-bold text-[#002E32] uppercase pb-2 border-b border-slate-200 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">school</span>
              20 Dept Ensino
            </h4>
            <div className="space-y-1">
              {[
                { name: '21 Div Sup Pedagógica (DSP)', slug: 'race' },
                { name: '22 Div Sup Doutrinária (DSD)', slug: 'placape' },
                { name: '23 Div Adm de Cursos (DAC)', slug: 'curriculos' },
                { name: '24 Div Planejamento (DPLAN)', slug: 'vagas-2027' },
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={() => onNavigate(item.slug)}
                  className="p-2 bg-white rounded border border-slate-200 hover:border-[#002E32] cursor-pointer flex justify-between items-center transition"
                >
                  <span className="text-slate-800 font-semibold">{item.name}</span>
                  <span className="material-symbols-outlined text-xs text-slate-400">chevron_right</span>
                </div>
              ))}
            </div>
          </div>

          {/* 30 Dept Treinamento */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <h4 className="font-bold text-[#002E32] uppercase pb-2 border-b border-slate-200 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">military_tech</span>
              30 Dept Treinamento
            </h4>
            <div className="space-y-1">
              {[
                { name: '31 Div Prontidão (DPRON)', slug: 'agata-amazonia' },
                { name: '32 Div Ap Adestramento (DAAD)', slug: 'curriculos' },
                { name: '33 Div Programas Treinamento (DPT)', slug: 'ctddmarinst' },
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={() => onNavigate(item.slug)}
                  className="p-2 bg-white rounded border border-slate-200 hover:border-[#002E32] cursor-pointer flex justify-between items-center transition"
                >
                  <span className="text-slate-800 font-semibold">{item.name}</span>
                  <span className="material-symbols-outlined text-xs text-slate-400">chevron_right</span>
                </div>
              ))}
            </div>
          </div>

          {/* 40 Dept Lições Aprendidas */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <h4 className="font-bold text-[#002E32] uppercase pb-2 border-b border-slate-200 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">psychology</span>
              40 Dept Lições Aprendidas
            </h4>
            <div className="space-y-1">
              {[
                { name: '41 Div Coleta (DCOL)', slug: 'agata-amazonia' },
                { name: '42 Div Análise (DANL)', slug: 'podcast-doutrinario' },
                { name: '43 Div Monitoramento (DMON)', slug: 'flash-doutrinario' },
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={() => onNavigate(item.slug)}
                  className="p-2 bg-white rounded border border-slate-200 hover:border-[#002E32] cursor-pointer flex justify-between items-center transition"
                >
                  <span className="text-slate-800 font-semibold">{item.name}</span>
                  <span className="material-symbols-outlined text-xs text-slate-400">chevron_right</span>
                </div>
              ))}
            </div>
          </div>

          {/* 50 Dept Administração */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <h4 className="font-bold text-[#002E32] uppercase pb-2 border-b border-slate-200 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">settings_suggest</span>
              50 Dept Administração
            </h4>
            <div className="space-y-1">
              {[
                { name: '51 Div Finanças (DFIN)', slug: 'auxilio-transporte' },
                { name: '52 Div Pessoal (DPES)', slug: 'auxilio-transporte' },
                { name: '53 Div Serviços Gerais (DSG)', slug: 'inicio' },
                { name: '54 Div Logística (DLOG)', slug: 'seg-prot-aut' },
                { name: '55 Div Informática (DINF)', slug: 'seg-prot-aut' },
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={() => onNavigate(item.slug)}
                  className="p-2 bg-white rounded border border-slate-200 hover:border-[#002E32] cursor-pointer flex justify-between items-center transition"
                >
                  <span className="text-slate-800 font-semibold">{item.name}</span>
                  <span className="material-symbols-outlined text-xs text-slate-400">chevron_right</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 13 Sistemas Grid */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#002E32]">terminal</span>
            <h3 className="text-sm font-bold text-[#002E32] uppercase">Menu: 13 Sistemas Computacionais Integrados</h3>
          </div>
          <span className="text-slate-400">Plataformas em Rede</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[
            { code: 'SIGeP', desc: 'Gestão de Pessoal' },
            { code: 'SiGDEM', desc: 'Doc. Eletrônicos' },
            { code: 'SIGAD-MB', desc: 'Arquivo Digital MB' },
            { code: 'Zimbra', desc: 'Webmail Militar' },
            { code: 'SisPes', desc: 'Pesquisas Navais' },
            { code: 'SisBol', desc: 'Boletins da Força' },
            { code: 'SisCOp', desc: 'Controle Operacional' },
            { code: 'Boletim CFN', desc: 'Publicações do Corpo' },
            { code: 'DMF SisBens', desc: 'Gestão Patrimonial' },
            { code: 'SisNetuno', desc: 'Inteligência Tática' },
            { code: 'Quaestor', desc: 'Auditoria & Custos' },
            { code: 'Rede Serpro', desc: 'Acesso Federal' },
            { code: 'SAFin', desc: 'Admin. Financeira' },
          ].map((sys, idx) => (
            <div
              key={idx}
              onClick={() => alert(`Acesso seguro ao sistema ${sys.code} (Autenticação MB requisitada).`)}
              className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-[#002E32] cursor-pointer flex flex-col justify-between transition shadow-2xs"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-slate-900">{sys.code}</span>
                <span className="w-2 h-2 rounded-full bg-[#BAD435]"></span>
              </div>
              <span className="text-[10px] text-slate-500 font-sans">{sys.desc}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
