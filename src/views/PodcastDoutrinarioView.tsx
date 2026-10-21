import React, { useState } from 'react';

export const PodcastDoutrinarioView: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeEp, setActiveEp] = useState({
    num: 12,
    title: 'Guerra Eletrônica em Teatros de Operações Anfíbios',
    meta: 'Painel Tático • Duração: 48min • Classificação: Ostensivo',
    duration: '48:15',
    progress: 32,
  });
  const [speed, setSpeed] = useState(1.0);

  const episodes = [
    {
      num: 12,
      title: 'Guerra Eletrônica em Teatros de Operações Anfíbios',
      desc: 'Debate sobre medidas de apoio à guerra eletrônica, supressão de sensores hostis e proteção do Grupo-Tarefa Anfíbio.',
      meta: 'Painel Tático • Duração: 48min • Classificação: Ostensivo',
      duration: '48:15',
      date: '15 Outubro 2026',
    },
    {
      num: 11,
      title: 'Doutrina Operacional de Drones e Sistemas Remotamente Pilotados (SARP)',
      desc: 'Emprego de veículos não-tripulados táticos na vanguarda do Elemento de Reconhecimento dos Fuzileiros Navais.',
      meta: 'Estudo Especializado • Duração: 52min • Ostensivo',
      duration: '52:40',
      date: '01 Outubro 2026',
    },
    {
      num: 10,
      title: 'Inteligência Tática e Reconhecimento em Operações Ribeirinhas',
      desc: 'Particularidades do combate ribeirinho amazônico e a integração dos pelotões de operações especiais dos FN.',
      meta: 'Mesa Redonda • Duração: 41min • Ostensivo',
      duration: '41:18',
      date: '18 Setembro 2026',
    },
    {
      num: 9,
      title: 'Lições Aprendidas nos Conflitos Armados Contemporâneos',
      desc: 'A vulnerabilidade de blindados frente a mísseis guiados anticarro (ATGM) e a readequação doutrinária anfíbia.',
      meta: 'Análise Geopolítica • Duração: 59min • Ostensivo',
      duration: '59:02',
      date: '04 Setembro 2026',
    },
    {
      num: 8,
      title: 'Liderança Sob Fogo e Fator Humano nas Forças de Fuzileiros Navais',
      desc: 'Resiliência psicológica, tomada de decisão rápida e a coesão de frações em ambientes operacionais de alta intensidade.',
      meta: 'Doutrina Humana • Duração: 45min • Ostensivo',
      duration: '45:30',
      date: '20 Agosto 2026',
    },
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const cycleSpeed = () => {
    if (speed === 1.0) setSpeed(1.25);
    else if (speed === 1.25) setSpeed(1.5);
    else if (speed === 1.5) setSpeed(2.0);
    else setSpeed(1.0);
  };

  return (
    <div className="w-full flex flex-col space-y-6">
      {/* Top Breadcrumb & Status (Stitch Spec) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-xs">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-technical-code text-label-sm uppercase tracking-wider text-on-surface-variant">
          <span className="flex items-center gap-1 hover:text-graphite-teal-deep transition-colors">
            <span className="material-symbols-outlined text-sm">home</span>
            Início
          </span>
          <span className="text-outline-variant">/</span>
          <span className="hover:text-graphite-teal-deep transition-colors">Produtos Doutrinários</span>
          <span className="text-outline-variant">/</span>
          <span className="text-graphite-teal-deep font-bold">Podcast Momento Doutrinário</span>
        </nav>
        <div className="flex items-center gap-space-sm">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary-fixed/20 text-on-secondary-fixed font-technical-code text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-renewal-green animate-pulse"></span>
            CANAL DE ÁUDIO OFICIAL
          </span>
          <span className="px-2.5 py-1 bg-surface-container-high text-graphite-teal-deep font-technical-code text-xs uppercase rounded">
            OSTENSIVO
          </span>
        </div>
      </div>

      {/* Editorial Header (Stitch Spec) */}
      <section className="relative bg-pure-white p-6 sm:p-8 rounded-xl shadow-sm border border-outline-variant overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-graphite-teal-deep via-graphite-teal-surface to-renewal-green"></div>
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div className="space-y-space-xs max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-surface-container text-graphite-teal-deep font-label-sm text-label-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm text-graphite-teal-surface">podcasts</span>
              Disseminação Oral do Conhecimento Militar
            </div>
            <h1 className="font-headline-lg text-headline-lg text-graphite-teal-deep tracking-tight font-extrabold uppercase mt-1">
              Podcast Momento Doutrinário
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Debates aprofundados com comandantes, veteranos e pesquisadores militares sobre táticas contemporâneas, lições operacionais e inovação anfíbia.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-graphite-teal-deep text-renewal-green flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">radio</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm uppercase text-graphite-industrial font-bold leading-tight">
                  12 EPISÓDIOS
                </p>
                <p className="font-technical-code text-technical-code text-secondary leading-tight mt-0.5">
                  TEMPORADA 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Player Container (Stitch Spec) */}
      <section className="bg-pure-white rounded-xl shadow-sm border border-outline-variant p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Cover & Indicator */}
          <div className="lg:col-span-3 flex flex-col items-center">
            <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-graphite-teal-deep to-[#00181a] p-4 flex flex-col justify-between text-pure-white shadow-md relative overflow-hidden border border-teal-900">
              <div className="flex items-center justify-between text-[11px] font-technical-code text-renewal-green">
                <span className="font-bold">MB • CTDDCFN</span>
                <span className="px-1.5 py-0.5 bg-black/40 rounded">EP #{activeEp.num}</span>
              </div>
              <div className="text-center my-auto">
                <span className="material-symbols-outlined text-5xl text-renewal-green drop-shadow-md">
                  podcasts
                </span>
                <p className="font-headline text-xs font-bold uppercase tracking-wider text-pure-white mt-1">
                  MOMENTO DOUTRINÁRIO
                </p>
              </div>
              <div className="text-[10px] text-slate-300 font-technical-code text-center">
                {activeEp.duration}
              </div>
            </div>
          </div>

          {/* Player Controls & Progress */}
          <div className="lg:col-span-9 space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded bg-renewal-green/20 text-graphite-teal-deep font-technical-code text-xs font-bold">
                  REPRODUZINDO AGORA
                </span>
                <span className="text-outline font-technical-code text-xs">
                  {activeEp.meta}
                </span>
              </div>
              <h2 className="font-headline-md text-xl sm:text-2xl font-bold text-graphite-teal-deep">
                {activeEp.title}
              </h2>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1">
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden cursor-pointer">
                <div
                  className="h-full bg-renewal-green rounded-full transition-all duration-300"
                  style={{ width: `${activeEp.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between font-technical-code text-xs text-on-surface-variant">
                <span>15:20</span>
                <span>{activeEp.duration}</span>
              </div>
            </div>

            {/* Playback Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-outline-variant">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-xl bg-graphite-teal-deep hover:bg-graphite-teal-surface text-renewal-green flex items-center justify-center shadow-md transition active:scale-95"
                  title={isPlaying ? 'Pausar' : 'Reproduzir'}
                >
                  <span className="material-symbols-outlined text-2xl font-bold">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>

                <button
                  onClick={cycleSpeed}
                  className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-graphite-industrial font-technical-code text-xs font-bold rounded transition"
                  title="Alterar velocidade de reprodução"
                >
                  {speed.toFixed(2)}x
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => alert(`Baixando áudio MP3 oficial do Episódio ${activeEp.num}`)}
                  className="px-3 py-2 bg-surface-container hover:bg-surface-container-high text-graphite-industrial font-label-md text-xs uppercase rounded transition flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-base">download</span>
                  <span>Baixar MP3</span>
                </button>
                <button
                  onClick={() => alert('Link do episódio copiado para a área de transferência.')}
                  className="px-3 py-2 bg-graphite-teal-deep hover:bg-graphite-teal-surface text-pure-white font-label-md text-xs uppercase rounded transition flex items-center gap-1.5 shadow-sm"
                >
                  <span className="material-symbols-outlined text-base">share</span>
                  <span>Compartilhar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Catalog List */}
      <section className="space-y-3">
        <div className="flex items-center justify-between pb-1">
          <h3 className="font-label-sm text-label-sm uppercase text-graphite-teal-deep font-bold tracking-wider">
            Episódios Disponíveis no Catálogo
          </h3>
          <span className="font-technical-code text-technical-code text-secondary font-bold">
            ACERVO COMPLETO
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {episodes.map((ep) => {
            const isCurrent = activeEp.num === ep.num;
            return (
              <div
                key={ep.num}
                onClick={() => {
                  setActiveEp({
                    num: ep.num,
                    title: ep.title,
                    meta: ep.meta,
                    duration: ep.duration,
                    progress: 0,
                  });
                  setIsPlaying(true);
                }}
                className={`p-4 rounded-xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer ${
                  isCurrent
                    ? 'bg-surface-container-low border-graphite-teal-deep shadow-sm'
                    : 'bg-pure-white border-outline-variant hover:border-graphite-teal-deep hover:shadow-xs'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-technical-code font-bold text-sm shrink-0 ${
                      isCurrent
                        ? 'bg-graphite-teal-deep text-renewal-green'
                        : 'bg-surface-container text-graphite-teal-deep'
                    }`}
                  >
                    #{ep.num}
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-technical-code text-on-surface-variant">
                        {ep.date} • {ep.duration}
                      </span>
                      {isCurrent && (
                        <span className="px-1.5 py-0.2 rounded bg-renewal-green text-graphite-industrial text-[10px] font-bold">
                          SELECIONADO
                        </span>
                      )}
                    </div>
                    <h4 className="font-title-md text-base font-bold text-graphite-teal-deep">
                      {ep.title}
                    </h4>
                    <p className="font-body-sm text-xs text-on-surface-variant max-w-2xl">
                      {ep.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                  <button
                    className={`px-3 py-1.5 rounded font-label-md text-xs uppercase flex items-center gap-1.5 transition ${
                      isCurrent
                        ? 'bg-graphite-teal-deep text-renewal-green font-bold'
                        : 'bg-surface-container hover:bg-surface-container-high text-graphite-industrial'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">
                      {isCurrent && isPlaying ? 'pause' : 'play_arrow'}
                    </span>
                    <span>{isCurrent && isPlaying ? 'Pausar' : 'Ouvir'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Drupal 10 Node Architecture Info */}
      <div className="bg-surface-container-low p-space-md rounded-xl border border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-space-md">
        <div className="space-y-1">
          <span className="font-label-sm text-label-sm uppercase font-bold text-graphite-teal-deep flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-secondary">database</span>
            Estrutura Drupal 10 (Audio Node)
          </span>
          <p className="font-technical-code text-xs text-on-surface-variant">
            Rota Drupal: <strong className="text-graphite-industrial">internal:/node/podcast-doutrinario</strong> • Content Type: <strong className="text-graphite-industrial">audio_podcast</strong>
          </p>
          <p className="font-technical-code text-[11px] text-outline">
            Template Twig: <code className="bg-pure-white px-1.5 py-0.5 rounded border border-outline-variant">templates/content/node--podcast-doutrinario.html.twig</code>
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="px-2.5 py-1 bg-pure-white border border-outline-variant text-graphite-teal-deep font-technical-code text-xs rounded font-bold">
            RSS / ITUNES COMPATÍVEL
          </span>
        </div>
      </div>
    </div>
  );
};
