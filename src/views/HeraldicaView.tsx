import React from 'react';

export const HeraldicaView: React.FC = () => {
  const elements = [
    {
      num: '01',
      title: 'Âncora com Dois Fuzis Cruzados',
      sub: 'Heráldica Principal do Corpo de Fuzileiros Navais',
      desc: 'Simboliza a união inquebrantável entre a tradição marinheira e o combate terrestre anfíbio expedicionário. A âncora representa a autoridade naval e o pertencimento à Marinha do Brasil, enquanto os fuzis Mauser cruzados evocam a prontidão permanente e o poder de fogo dos combatentes anfíbios.',
      tag: 'ORIGEM TRADICIONAL',
    },
    {
      num: '02',
      title: 'Livro Aberto & Facho da Sabedoria',
      sub: 'Centro de Instrução e Doutrina',
      desc: 'O livro aberto no coração do brasão corporifica a missão prioritária do CTDDCFN: a custódia, pesquisa, desenvolvimento e disseminação da Doutrina de Operações Anfíbias e a excelência educacional. O facho em chamas simboliza a luz do conhecimento técnico-militar iluminando os horizontes operacionais.',
      tag: 'ENSINO & DOUTRINA',
    },
    {
      num: '03',
      title: 'Elmo de Armadura Medieval com Plumas',
      sub: 'Resiliência, Honra e Proteção',
      desc: 'Representa a nobreza de espírito, a coragem invicta e a firmeza tática dos combatentes de elite. As plumas nas cores heráldicas denotam distinção hierárquica e obediência fiel às diretrizes do Comando Geral do CFN.',
      tag: 'LEALDADE MILITAR',
    },
    {
      num: '04',
      title: 'Lema Histórico "AD SUMUS"',
      sub: 'Aqui Estamos - Prontidão Eterna',
      desc: 'A divisa em latim do Corpo de Fuzileiros Navais resume a alma do combatente anfíbio: prontidão imediata para agir a qualquer hora e sob quaisquer circunstâncias, em prol da soberania da Pátria e da segurança da Amazônia Azul.',
      tag: 'DIVISA OFICIAL',
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
            <span>SÍMBOLOS & IDENTIDADE</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide uppercase font-serif">
            Heráldica & Distintivo do CTDDCFN
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Composição heráldica, simbolismo histórico e descrição do Brasão d'Armas aprovado pela Portaria MB.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-[#00383d] border border-[#bad435]/40 text-[#bad435] text-xs font-mono rounded">
            PORTARIA Nº 142/MB/2021
          </span>
        </div>
      </div>

      {/* Main Heraldry Hero Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#002e32] border border-white/10 p-6 md:p-8 rounded-lg relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-[360px] text-white">shield</span>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-[#001f22] border border-[#bad435]/20 rounded-lg text-center relative group">
          <div className="relative mb-6">
            <div className="w-48 h-56 rounded-xl border-2 border-[#bad435]/60 bg-gradient-to-b from-[#00383d] via-[#002e32] to-[#001f22] p-4 flex flex-col items-center justify-center shadow-2xl shadow-black/80">
              <span className="material-symbols-outlined text-8xl text-[#bad435] drop-shadow-[0_0_15px_rgba(186,212,53,0.4)]">
                shield_with_house
              </span>
              <div className="mt-2 text-center">
                <span className="block text-xs font-mono text-[#bad435] tracking-widest font-bold">CTDDCFN</span>
                <span className="block text-[10px] text-slate-300 font-mono">MARINHA DO BRASIL</span>
              </div>
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#bad435] text-[#002e32] text-xs font-bold font-mono tracking-widest rounded-full uppercase shadow">
              AD SUMUS
            </div>
          </div>

          <h3 className="text-lg font-bold text-white mt-2">Distintivo de Organização Militar</h3>
          <p className="text-xs text-slate-300 font-mono mt-1">Homologado pelo Serviço de Documentação da Marinha</p>
          <div className="mt-4 pt-4 border-t border-white/10 w-full flex justify-around text-xs font-mono text-slate-400">
            <div>
              <span className="text-slate-500 block text-[10px]">Cores Oficiais</span>
              <span className="text-white font-bold">Verde-Oliva, Ouro, Prata</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">Escudo</span>
              <span className="text-white font-bold">Peninsular Ibérico</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded w-fit text-xs font-mono text-[#bad435]">
            <span className="material-symbols-outlined text-sm">history_edu</span>
            <span>MEMORIAL DESCRITIVO HERÁLDICO</span>
          </div>

          <h2 className="text-2xl font-bold text-white font-serif">
            Escudo redondo boleado sob coroa mural de quatro torres com porta principal aberta.
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            Em campo de jalde (ouro) com bordadura de sinopla (verde), assentam-se em abismo os fuzis passados em aspa encimando 
            a âncora de prata com cabo de ouro, encimado por livro aberto de prata filetado de sable, iluminado por facho 
            aceso de goles e ouro. No listel inferior de sinopla, com letras de ouro, a divisa <strong className="text-[#bad435]">"AD SUMUS"</strong>.
          </p>

          <div className="p-4 bg-white/5 border-l-4 border-[#bad435] rounded-r text-xs text-slate-300 font-mono space-y-1">
            <p className="font-bold text-white uppercase">Interpretação Simbólica:</p>
            <p>
              "O Centro encerra a síntese do intelecto combativo naval: o livro instrui, o facho orienta a doutrina 
              e os fuzis ancorados garantem a prontidão combativa em solo e mar."
            </p>
          </div>
        </div>
      </div>

      {/* 4 Quadrants of Symbology */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {elements.map((el) => (
          <div key={el.num} className="p-6 bg-[#002e32] border border-white/10 rounded-lg hover:border-[#bad435]/40 transition group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-extrabold text-[#bad435] font-mono">{el.num}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 text-slate-300 rounded uppercase">
                {el.tag}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#bad435] transition">{el.title}</h3>
            <div className="text-xs font-mono text-slate-400 mb-3">{el.sub}</div>
            <p className="text-xs text-slate-300 leading-relaxed">{el.desc}</p>
          </div>
        ))}
      </div>

      {/* Directives for Drupal Theming */}
      <div className="p-5 bg-[#00383d] border border-[#bad435]/30 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-3xl text-[#bad435]">palette</span>
          <div>
            <h4 className="text-sm font-bold text-white uppercase font-mono">Padrão de Cores no Tema Drupal 10</h4>
            <p className="text-xs text-slate-300">
              O tema utiliza as variáveis CSS <code className="text-[#bad435]">--color-graphite-teal</code> (#002e32) e <code className="text-[#bad435]">--color-renewal-green</code> (#bad435) em consonância com a identidade oficial.
            </p>
          </div>
        </div>
        <span className="text-xs font-mono text-[#bad435] bg-black/40 px-3 py-1.5 rounded border border-[#bad435]/30 whitespace-nowrap">
          SISTEMA IDENTIDADE MARINHA
        </span>
      </div>
    </div>
  );
};
