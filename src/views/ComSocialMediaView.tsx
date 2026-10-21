import React, { useState, useEffect } from 'react';

export type ComSocialChannelId =
  | 'spotify-podcast-momento-doutrinario'
  | 'spotify-manuais'
  | 'spotify-audiobook'
  | 'youtube-pamm-cfn'
  | 'youtube-videos-doutrinarios'
  | 'youtube-podcast-momento-doutrinario'
  | 'youtube-podcast-leitura-profissional';

interface ComSocialMediaViewProps {
  currentChannelId?: string;
  onNavigate?: (slug: string) => void;
}

interface MediaItem {
  id: string;
  title: string;
  channel: 'Spotify' | 'YouTube';
  categoryTitle: string;
  duration: string;
  date: string;
  description: string;
  externalUrl: string;
  author: string;
  viewsOrListens: string;
}

export const ComSocialMediaView: React.FC<ComSocialMediaViewProps> = ({
  currentChannelId = 'spotify-podcast-momento-doutrinario',
  onNavigate,
}) => {
  const [activeChannel, setActiveChannel] = useState<ComSocialChannelId>(
    (currentChannelId as ComSocialChannelId) || 'spotify-podcast-momento-doutrinario'
  );
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  useEffect(() => {
    if (currentChannelId) {
      setActiveChannel(currentChannelId as ComSocialChannelId);
    }
  }, [currentChannelId]);

  const channelsConfig: Record<
    ComSocialChannelId,
    {
      title: string;
      platform: 'Spotify' | 'YouTube';
      icon: string;
      platformBadge: string;
      url: string;
      description: string;
      stats: string;
      items: MediaItem[];
    }
  > = {
    'spotify-podcast-momento-doutrinario': {
      title: 'Podcast Momento Doutrinário',
      platform: 'Spotify',
      icon: 'podcasts',
      platformBadge: 'SPOTIFY AUDIO',
      url: 'https://open.spotify.com/show/ctddcfn-momento-doutrinario',
      description: 'Canal oficial em áudio dedicado à disseminação de conceitos táticos, manobras anfíbias e entrevistas com pesquisadores militares do CFN.',
      stats: '24 Episódios • Atualizado semanalmente',
      items: [
        {
          id: 's-md-24',
          title: 'Episódio 24: Operações Aeromóveis e Zonas de Pouso de Helicópteros (ZPH)',
          channel: 'Spotify',
          categoryTitle: 'Operações Anfíbias',
          duration: '32 min',
          date: '15/10/2026',
          description: 'Análise aprofundada dos parâmetros táticos de emprego conjunto de aeronaves da Força Aeronaval e Fuzileiros Navais.',
          externalUrl: 'https://open.spotify.com/episode/ctddcfn-24',
          author: 'Divisão de Doutrina • CTDDCFN',
          viewsOrListens: '1.420 reproduções',
        },
        {
          id: 's-md-23',
          title: 'Episódio 23: Zonas de Reunião (ZReu) e Marcha para o Combate',
          channel: 'Spotify',
          categoryTitle: 'Tática Terrestre',
          duration: '28 min',
          date: '28/09/2026',
          description: 'Comandantes de Unidade discutem a organização de marchas terrestres e medidas de segurança em área de operações hostil.',
          externalUrl: 'https://open.spotify.com/episode/ctddcfn-23',
          author: 'Divisão de Doutrina • CTDDCFN',
          viewsOrListens: '2.100 reproduções',
        },
        {
          id: 's-md-22',
          title: 'Episódio 22: Desembarque Anfíbio e Conquista de Cabeça de Praia',
          channel: 'Spotify',
          categoryTitle: 'Doutrina Central',
          duration: '41 min',
          date: '10/09/2026',
          description: 'Evolução histórica e procedimentos modernos do Movimento Navio-para-Objetivo (MNO) com blindados anfíbios.',
          externalUrl: 'https://open.spotify.com/episode/ctddcfn-22',
          author: 'Comando do CTDDCFN',
          viewsOrListens: '3.450 reproduções',
        },
      ],
    },
    'spotify-manuais': {
      title: 'Manuais em Áudio',
      platform: 'Spotify',
      icon: 'menu_book',
      platformBadge: 'SPOTIFY NARRADO',
      url: 'https://open.spotify.com/show/ctddcfn-manuais-audio',
      description: 'Versões narradas e comentadas dos manuais fundamentais do CFN para estudo e aprimoramento contínuo dos militares.',
      stats: '14 Manuais • Capítulos completos',
      items: [
        {
          id: 's-man-01',
          title: 'Manual de Campanha: O Grupo de Combate de Fuzileiros Navais (CGCFN-1)',
          channel: 'Spotify',
          categoryTitle: 'Manuais Táticos',
          duration: '45 min',
          date: '2026',
          description: 'Capítulo 1 e 2: Organização, atribuições dos combatentes, formações de patrulha e sinais convencionais de combate.',
          externalUrl: 'https://open.spotify.com/show/ctddcfn-manuais-audio',
          author: 'Divisão de Ensino',
          viewsOrListens: '980 reproduções',
        },
        {
          id: 's-man-02',
          title: 'Manual de Operações Ribeirinhas e Pantanal (CGCFN-3)',
          channel: 'Spotify',
          categoryTitle: 'Operações em Ambientes Especiais',
          duration: '52 min',
          date: '2026',
          description: 'Normas de navegação tática em lanchas de ação rápida, assaltos em margens de rio e técnicas de sobrevivência na selva.',
          externalUrl: 'https://open.spotify.com/show/ctddcfn-manuais-audio',
          author: 'BtlOpRib',
          viewsOrListens: '1.230 reproduções',
        },
      ],
    },
    'spotify-audiobook': {
      title: 'Audiobooks Doutrinários',
      platform: 'Spotify',
      icon: 'headphones',
      platformBadge: 'SPOTIFY AUDIOBOOK',
      url: 'https://open.spotify.com/show/ctddcfn-audiobooks',
      description: 'Acervo de audiobooks de história militar brasileira, ensaios de estratégia naval e memórias de veteranos fuzileiros navais.',
      stats: '8 Obras Completas • Narração profissional',
      items: [
        {
          id: 's-ab-01',
          title: 'Audiobook: A História das Operações Anfíbias da Marinha do Brasil',
          channel: 'Spotify',
          categoryTitle: 'Memória Histórica',
          duration: '1h 15 min',
          date: '2026',
          description: 'Da Brigada Real da Marinha de 1808 às modernas operações de paz sob a égide da ONU no Haiti e Líbano.',
          externalUrl: 'https://open.spotify.com/show/ctddcfn-audiobooks',
          author: 'Seção de Memória Histórica',
          viewsOrListens: '2.840 reproduções',
        },
        {
          id: 's-ab-02',
          title: 'Audiobook: Lições de Guerra de Manobra Aplicada ao Combate Moderno',
          channel: 'Spotify',
          categoryTitle: 'Pensamento Militar',
          duration: '58 min',
          date: '2026',
          description: 'Conceitos de John Boyd (Ciclo OODA), velocidade de decisão tática e desestabilização do centro de gravidade inimigo.',
          externalUrl: 'https://open.spotify.com/show/ctddcfn-audiobooks',
          author: 'Pesquisa Estratégica CFN',
          viewsOrListens: '1.670 reproduções',
        },
      ],
    },
    'youtube-pamm-cfn': {
      title: 'PAMM-CFN no YouTube',
      platform: 'YouTube',
      icon: 'video_library',
      platformBadge: 'YOUTUBE VÍDEO',
      url: 'https://www.youtube.com/@marinhaoficial/pamm-cfn',
      description: 'Programa de Acompanhamento e Manutenção da Marinha: cobertura técnica, prontidão logística e sustentação de meios de combate do CFN.',
      stats: '36 Vídeos Oficiais • Alta Resolução 4K',
      items: [
        {
          id: 'y-pamm-01',
          title: 'PAMM-CFN: Manutenção e Prontidão Operativa das Viaturas Blindadas Piranha IIIC',
          channel: 'YouTube',
          categoryTitle: 'Logística & Material',
          duration: '18:42',
          date: 'Out 2026',
          description: 'Inspeção técnica de segundo e terceiro escalão no Batalhão de Blindados, revisão de propulsão e teste em pista de provas.',
          externalUrl: 'https://www.youtube.com/@marinhaoficial/pamm-cfn',
          author: 'Divisão de Comunicação Social • CTDDCFN',
          viewsOrListens: '14.200 visualizações',
        },
        {
          id: 'y-pamm-02',
          title: 'PAMM-CFN: Sistema ASTROS e a Artilharia de Saturação de Área',
          channel: 'YouTube',
          categoryTitle: 'Sistemas de Armas',
          duration: '14:15',
          date: 'Set 2026',
          description: 'Acompanhamento do ciclo de vida dos lançadores de foguetes, calibração de computadores de tiro e testes balísticos.',
          externalUrl: 'https://www.youtube.com/@marinhaoficial/pamm-cfn',
          author: 'BtlArtFuzNav',
          viewsOrListens: '28.900 visualizações',
        },
      ],
    },
    'youtube-videos-doutrinarios': {
      title: 'Vídeos Doutrinários',
      platform: 'YouTube',
      icon: 'smart_display',
      platformBadge: 'YOUTUBE VÍDEO',
      url: 'https://www.youtube.com/@marinhaoficial/videos-doutrinarios',
      description: 'Instruções táticas oficiais em vídeo, filmagens de exercícios da Força de Fuzileiros da Esquadra e procedimentos operacionais padronizados.',
      stats: '42 Instruções • Aulas em Vídeo',
      items: [
        {
          id: 'y-vd-01',
          title: 'Instrução em Vídeo: Técnicas de Combate em Recinto Confinado (CQB)',
          channel: 'YouTube',
          categoryTitle: 'Instrução Tática',
          duration: '22:10',
          date: '2026',
          description: 'Entrada dinâmica, fatiamento de portas, varredura de cômodos e disciplina de cano em operações urbanas.',
          externalUrl: 'https://www.youtube.com/@marinhaoficial/videos-doutrinarios',
          author: 'BtlOpEspFuzNav',
          viewsOrListens: '35.400 visualizações',
        },
        {
          id: 'y-vd-02',
          title: 'Instrução em Vídeo: Emprego e Tiro de Combate com o Fuzil Colt 5.56mm',
          channel: 'YouTube',
          categoryTitle: 'Armamento & Tiro',
          duration: '16:50',
          date: '2026',
          description: 'Posições fundamentais de tiro, transições rápidas, resolução de panes e tiro sob estresse físico.',
          externalUrl: 'https://www.youtube.com/@marinhaoficial/videos-doutrinarios',
          author: 'Divisão de Treinamento',
          viewsOrListens: '42.100 visualizações',
        },
      ],
    },
    'youtube-podcast-momento-doutrinario': {
      title: 'Podcast Momento Doutrinário (Vídeo)',
      platform: 'YouTube',
      icon: 'play_circle',
      platformBadge: 'YOUTUBE VIDEOCAST',
      url: 'https://www.youtube.com/@marinhaoficial/podcasts',
      description: 'Gravações em estúdio e transmissão em vídeo do Podcast Momento Doutrinário, com exibição de gráficos, fotos de exercícios e mapas táticos.',
      stats: '24 Episódios em Vídeo • Estúdio Naval',
      items: [
        {
          id: 'y-pmd-01',
          title: 'Momento Doutrinário em Vídeo: Operação Ágata Amazônia e Lições Aprendidas',
          channel: 'YouTube',
          categoryTitle: 'Debate em Estúdio',
          duration: '38:40',
          date: '2026',
          description: 'Mesa-redonda com os oficiais que lideraram as frações na Amazônia Ocidental, analisando logística fluvial e apoio aeronaval.',
          externalUrl: 'https://www.youtube.com/@marinhaoficial/podcasts',
          author: 'SECOM / CTDDCFN',
          viewsOrListens: '18.700 visualizações',
        },
        {
          id: 'y-pmd-02',
          title: 'Momento Doutrinário em Vídeo: Ciberdefesa e Guerra Eletrônica no Cenário Atual',
          channel: 'YouTube',
          categoryTitle: 'Tecnologia Militar',
          duration: '42:15',
          date: '2026',
          description: 'Especialistas em comunicações analisam os desafios de redes MANET e criptografia sob interferência eletromagnética.',
          externalUrl: 'https://www.youtube.com/@marinhaoficial/podcasts',
          author: 'SECOM / CTDDCFN',
          viewsOrListens: '22.300 visualizações',
        },
      ],
    },
    'youtube-podcast-leitura-profissional': {
      title: 'Podcast Leitura Profissional do CFN',
      platform: 'YouTube',
      icon: 'auto_stories',
      platformBadge: 'YOUTUBE LEITURA',
      url: 'https://www.youtube.com/@marinhaoficial/leitura-profissional',
      description: 'Resenhas críticas, análises de literatura militar clássica e discussões sobre os livros obrigatórios e recomendados da carreira do CFN.',
      stats: '16 Programas • Guia Literário Militar',
      items: [
        {
          id: 'y-plp-01',
          title: 'Leitura Profissional: "Da Guerra" (Carl von Clausewitz) e a Trindade Notável',
          channel: 'YouTube',
          categoryTitle: 'Filosofia Militar',
          duration: '31:25',
          date: '2026',
          description: 'Aplicação dos princípios de atrito, névoa da guerra e ponto culminante nas campanhas contemporâneas.',
          externalUrl: 'https://www.youtube.com/@marinhaoficial/leitura-profissional',
          author: 'Divisão de Doutrina',
          viewsOrListens: '12.800 visualizações',
        },
        {
          id: 'y-plp-02',
          title: 'Leitura Profissional: "Guerra de Manobra" (William S. Lind)',
          channel: 'YouTube',
          categoryTitle: 'Doutrina Anfíbia',
          duration: '27:10',
          date: '2026',
          description: 'Como a doutrina dos Fuzileiros Navais brasileiros adotou o estilo de manobra em contraposição à guerra de desgaste.',
          externalUrl: 'https://www.youtube.com/@marinhaoficial/leitura-profissional',
          author: 'Divisão de Doutrina',
          viewsOrListens: '16.400 visualizações',
        },
      ],
    },
  };

  const currentConfig = channelsConfig[activeChannel] || channelsConfig['spotify-podcast-momento-doutrinario'];

  return (
    <div className="flex flex-col w-full space-y-6 animate-fadeIn font-sans text-on-surface">
      {/* Top Breadcrumb & Status Bar (RACE / Stitch Pattern) */}
      <div className="flex flex-col gap-2 font-mono text-xs">
        <div className="flex items-center gap-1.5 uppercase text-outline">
          <span>COMUNICAÇÃO SOCIAL E ESTRATÉGICA</span>
          <span>/</span>
          <span className="text-graphite-teal-deep font-bold">{currentConfig.platform.toUpperCase()}</span>
          <span>/</span>
          <span className="text-graphite-teal-deep font-extrabold">{currentConfig.title}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-1">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-graphite-teal-deep text-[10px] font-bold uppercase border border-outline-variant/60">
                {currentConfig.platformBadge}
              </span>
              <span className="text-outline text-[11px]">{currentConfig.stats}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-graphite-teal-deep font-headline uppercase tracking-tight">
              {currentConfig.title}
            </h1>
            <p className="text-xs sm:text-sm text-on-surface-variant font-sans max-w-3xl mt-1 leading-relaxed">
              {currentConfig.description}
            </p>
          </div>

          <a
            href={currentConfig.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-graphite-teal-deep hover:bg-graphite-teal-surface active:bg-primary text-white font-headline font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xs transition shrink-0"
          >
            <span className="material-symbols-outlined text-sm text-renewal-green">open_in_new</span>
            <span>Acessar no {currentConfig.platform}</span>
          </a>
        </div>
      </div>

      {/* Channel Switcher Pills (Material Design 3 Filter Chips) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-outline-variant/50 font-mono text-xs">
        {(Object.keys(channelsConfig) as ComSocialChannelId[]).map((chId) => {
          const cfg = channelsConfig[chId];
          const isAct = activeChannel === chId;
          return (
            <button
              key={chId}
              onClick={() => {
                setActiveChannel(chId);
                setIsPlaying(null);
              }}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition border cursor-pointer flex items-center gap-1.5 ${
                isAct
                  ? 'bg-graphite-teal-deep text-white font-bold border-graphite-teal-deep shadow-2xs'
                  : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant border-outline-variant/50'
              }`}
            >
              <span className={`material-symbols-outlined text-sm ${isAct ? 'text-renewal-green' : 'text-outline'}`}>
                {cfg.icon}
              </span>
              <span>{cfg.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (8 cols): Interactive Player & Episode List */}
        <div className="lg:col-span-8 space-y-6">
          {/* Featured Player Card */}
          <div className="bg-surface-container-lowest rounded-xl shadow-xs border border-outline-variant/70 p-6 relative overflow-hidden space-y-4">
            <div className="absolute top-0 left-0 right-0 h-1 bg-graphite-teal-deep"></div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline-variant/40">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-graphite-teal-deep text-renewal-green flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-2xl">{currentConfig.icon}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-outline uppercase block">
                    Reprodução Integrada
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-graphite-teal-deep font-headline">
                    {isPlaying
                      ? currentConfig.items.find((i) => i.id === isPlaying)?.title
                      : currentConfig.items[0]?.title}
                  </h3>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded bg-surface-container text-graphite-teal-deep font-mono text-[10px] font-bold uppercase self-start sm:self-auto">
                {currentConfig.platform} Embed
              </span>
            </div>

            {/* Simulated Audio/Video Wave & Controls */}
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/50 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-outline text-[11px]">
                <span>00:00</span>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-renewal-green-dark animate-pulse"></span>
                  <span className="font-bold text-graphite-teal-deep">ÁUDIO/VÍDEO OFICIAL CTDDCFN</span>
                </div>
                <span>
                  {isPlaying
                    ? currentConfig.items.find((i) => i.id === isPlaying)?.duration
                    : currentConfig.items[0]?.duration}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden relative">
                <div
                  className={`h-full bg-graphite-teal-deep rounded-full transition-all duration-300 ${
                    isPlaying ? 'w-2/5' : 'w-0'
                  }`}
                ></div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(isPlaying ? null : currentConfig.items[0]?.id)}
                    className="px-4 py-1.5 bg-graphite-teal-deep hover:bg-graphite-teal-surface text-white rounded-lg font-bold flex items-center gap-1.5 transition shadow-2xs cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm text-renewal-green">
                      {isPlaying ? 'pause' : 'play_arrow'}
                    </span>
                    <span>{isPlaying ? 'Pausar' : 'Reproduzir'}</span>
                  </button>
                  <span className="text-[11px] text-outline">
                    {isPlaying ? 'Reproduzindo episódio selecionado...' : 'Pronto para reprodução'}
                  </span>
                </div>

                <a
                  href={currentConfig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-graphite-teal-deep font-bold hover:underline flex items-center gap-1 text-xs"
                >
                  <span>Abrir aplicativo</span>
                  <span className="material-symbols-outlined text-xs">launch</span>
                </a>
              </div>
            </div>
          </div>

          {/* Episode / Video List */}
          <div className="bg-surface-container-lowest rounded-xl shadow-xs border border-outline-variant/70 p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/40">
              <h3 className="text-sm font-bold text-graphite-teal-deep font-headline uppercase tracking-wide flex items-center gap-2">
                <span className="material-symbols-outlined text-graphite-teal-deep text-base">format_list_bulleted</span>
                Conteúdos & Episódios Disponíveis
              </h3>
              <span className="text-xs font-mono text-outline">{currentConfig.items.length} Itens</span>
            </div>

            <div className="space-y-3">
              {currentConfig.items.map((item) => {
                const isSelected = isPlaying === item.id;
                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-surface-container border-graphite-teal-deep shadow-xs'
                        : 'bg-surface-container-low hover:bg-surface-container/70 border-outline-variant/50'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 font-mono text-[10px]">
                          <span className="px-2 py-0.5 rounded bg-surface-container text-graphite-teal-deep font-bold border border-outline-variant/40">
                            {item.categoryTitle}
                          </span>
                          <span className="text-outline">{item.date}</span>
                          <span>•</span>
                          <span className="text-outline">{item.duration}</span>
                        </div>
                        <h4 className="text-sm font-bold text-graphite-teal-deep font-headline">
                          {item.title}
                        </h4>
                        <p className="text-xs text-on-surface-variant font-sans leading-relaxed">
                          {item.description}
                        </p>
                        <div className="text-[10px] font-mono text-outline pt-1">
                          Autor: <strong>{item.author}</strong> • {item.viewsOrListens}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 self-start sm:self-center font-mono text-xs">
                        <button
                          onClick={() => setIsPlaying(isSelected ? null : item.id)}
                          className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 transition shadow-2xs ${
                            isSelected
                              ? 'bg-graphite-teal-deep text-white'
                              : 'bg-white hover:bg-graphite-teal-deep hover:text-white text-graphite-teal-deep border border-outline-variant'
                          }`}
                        >
                          <span className="material-symbols-outlined text-sm text-renewal-green">
                            {isSelected ? 'pause' : 'play_arrow'}
                          </span>
                          <span>{isSelected ? 'Pausando' : 'Ouvir / Ver'}</span>
                        </button>

                        <a
                          href={item.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white hover:bg-surface-container text-outline hover:text-graphite-teal-deep border border-outline-variant transition"
                          title="Acessar na plataforma de streaming"
                        >
                          <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): Information & Links to all 7 media channels */}
        <div className="lg:col-span-4 space-y-6">
          {/* Card 1: Sobre o Canal */}
          <div className="bg-surface-container-lowest rounded-xl shadow-xs border border-outline-variant/70 p-5 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-outline-variant/40">
              <span className="material-symbols-outlined text-graphite-teal-deep text-lg">info</span>
              <h3 className="text-xs font-bold text-graphite-teal-deep uppercase font-headline tracking-wider">
                Sobre este Canal
              </h3>
            </div>

            <div className="space-y-3 font-sans text-xs">
              <p className="text-on-surface-variant leading-relaxed">
                Produzido pela <strong>Divisão de Comunicação Social e Estratégica</strong> em coordenação com a <strong>Divisão de Doutrina</strong> do CTDDCFN.
              </p>

              <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/40 space-y-1 font-mono text-[11px]">
                <div className="flex justify-between">
                  <span className="text-outline">Plataforma:</span>
                  <span className="font-bold text-graphite-teal-deep">{currentConfig.platform}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">Acesso:</span>
                  <span className="font-bold text-emerald-700">Público / Ostensivo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">Periodicidade:</span>
                  <span className="font-bold text-graphite-teal-deep">Semanal / Mensal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Todos os Canais de Comunicação Social */}
          <div className="bg-surface-container-lowest rounded-xl shadow-xs border border-outline-variant/70 p-5 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-outline-variant/40">
              <span className="material-symbols-outlined text-graphite-teal-deep text-lg">hub</span>
              <h3 className="text-xs font-bold text-graphite-teal-deep uppercase font-headline tracking-wider">
                Canais de Mídia do CTDDCFN
              </h3>
            </div>

            <div className="space-y-1.5 font-sans text-xs">
              {(Object.keys(channelsConfig) as ComSocialChannelId[]).map((chId) => {
                const cfg = channelsConfig[chId];
                const isCurrent = activeChannel === chId;
                return (
                  <button
                    key={chId}
                    onClick={() => {
                      setActiveChannel(chId);
                      setIsPlaying(null);
                    }}
                    className={`w-full text-left p-2.5 rounded-lg transition flex items-center justify-between border ${
                      isCurrent
                        ? 'bg-graphite-teal-deep text-white font-bold border-graphite-teal-deep'
                        : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant border-outline-variant/40'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={`material-symbols-outlined text-sm ${isCurrent ? 'text-renewal-green' : 'text-outline'}`}>
                        {cfg.icon}
                      </span>
                      <span className="truncate text-xs">{cfg.title}</span>
                    </div>
                    <span className="material-symbols-outlined text-xs opacity-60">chevron_right</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
