/**
 * Configuration, semantic icon documentation, and persistence for Drupal 10 Sidebar Menu Links
 */

export interface MenuLinkItem {
  id: string;
  category: string;
  title: string;
  slug: string;
  icon: string;
  iconRationale?: string; // Documentação semântica da escolha do ícone em relação ao texto/conteúdo
  hasBuiltInPage: boolean;
  drupalUrl: string; // The URL configured for Drupal 10 (e.g., 'internal:/node/alias' or 'https://...')
  description: string;
  isExternal?: boolean;
}

const STORAGE_KEY = 'ctddcfn_drupal_menu_urls_v5';

export const INITIAL_MENU_LINKS: MenuLinkItem[] = [
  // INSTITUCIONAL
  {
    id: 'link-comandante',
    category: 'Institucional',
    title: 'Comandante',
    slug: 'comandante',
    icon: 'military_tech',
    iconRationale: 'Representa a insígnia de comando militar e oficialato superior, refletindo o perfil curricular e a autoridade da liderança do CTDDCFN.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/comandante',
    description: 'Perfil curricular do Comandante do CTDDCFN',
  },
  {
    id: 'link-ex-comandantes',
    category: 'Institucional',
    title: 'Ex-Comandantes',
    slug: 'ex-comandantes',
    icon: 'recent_actors',
    iconRationale: 'Representa a galeria histórica de retratos e registro biográfico de antigos Comandantes e Oficiais-Generais desde 1957.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/ex-comandantes',
    description: 'Galeria histórica de Oficiais-Generais CDD-CFN e CTDDCFN',
  },
  {
    id: 'link-suboficial-mor',
    category: 'Institucional',
    title: 'Suboficial-Mor',
    slug: 'suboficial-mor',
    icon: 'badge',
    iconRationale: 'Distintivo de identificação e autoridade da praça mais graduada da guarnição, elo de assessoramento direto ao Comando.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/suboficial-mor',
    description: 'Perfil e trajetória do Suboficial-Mor do CTDDCFN',
  },
  {
    id: 'link-heraldica',
    category: 'Institucional',
    title: 'Heráldica',
    slug: 'heraldica',
    icon: 'shield',
    iconRationale: 'Escudo heráldico militar e brasão d\'armas oficial do CTDDCFN, simbolizando a defesa da doutrina e o lema AD SUMUS.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/heraldica',
    description: 'Distintivo oficial, brasão d\'armas e lema AD SUMUS',
  },
  {
    id: 'link-historico',
    category: 'Institucional',
    title: 'Histórico',
    slug: 'historico',
    icon: 'history',
    iconRationale: 'Linha do tempo e evolução cronológica da doutrina expedicionária e anfíbia desde a criação do Centro em 1957.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/historico',
    description: 'Evolução histórica da doutrina anfíbia de 1957 ao presente',
  },
  {
    id: 'link-missao',
    category: 'Institucional',
    title: 'Missão e Visão',
    slug: 'missao',
    icon: 'flag',
    iconRationale: 'Pavilhão e alvo estratégico institucional, representando a missão primordial e as 30 tarefas regimentais do Centro.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/missao',
    description: 'Missão institucional e 30 tarefas regimentais',
  },
  {
    id: 'link-regulamento',
    category: 'Institucional',
    title: 'Regulamento',
    slug: 'regulamento',
    icon: 'policy',
    iconRationale: 'Normas estatutárias, conformidade institucional e regimento interno que regulam o funcionamento da Organização Militar.',
    hasBuiltInPage: false,
    drupalUrl: 'internal:/node/regulamento',
    description: 'Regimento Interno e regulamento de organização militar',
  },
  {
    id: 'link-organograma',
    category: 'Institucional',
    title: 'Organograma',
    slug: 'organograma',
    icon: 'account_tree',
    iconRationale: 'Estrutura organizacional ramificada, departamentos, divisões e cadeia de subordinação técnico-operacional.',
    hasBuiltInPage: false,
    drupalUrl: 'internal:/node/organograma',
    description: 'Estrutura organizacional e cadeia de comando do CTDDCFN',
  },
  {
    id: 'link-deusa-minerva',
    category: 'Institucional',
    title: 'Deusa Minerva',
    slug: 'deusa-minerva',
    icon: 'psychology_alt',
    iconRationale: 'Símbolo clássico da mente estratégica, patrona mitológica da sabedoria bélica, inteligência tática e das artes militares.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/deusa-minerva',
    description: 'Simbolismo de Minerva como patrona da sabedoria e estratégia',
  },
  {
    id: 'link-ctdd-internet',
    category: 'Institucional',
    title: 'CTDD na Internet',
    slug: 'ctdd-na-internet',
    icon: 'public',
    iconRationale: 'Presença pública na rede mundial (World Wide Web) e portal oficial da Marinha do Brasil (substitui o glifo não padronizado globe).',
    hasBuiltInPage: false,
    drupalUrl: 'https://www.marinha.mil.br/ctddcfn',
    description: 'Portal oficial público da Marinha do Brasil',
    isExternal: true,
  },

  // PRODUTOS DOUTRINÁRIOS
  {
    id: 'link-portfolio-produtos',
    category: 'Produtos Doutrinários',
    title: 'Portfólio de Produtos',
    slug: 'portfolio-produtos',
    icon: 'collections_bookmark',
    iconRationale: 'Coletânea e portfólio catalogado de publicações, cartilhas operacionais e manuais expedicionários publicados pelo CTDDCFN.',
    hasBuiltInPage: false,
    drupalUrl: 'internal:/node/portfolio-produtos',
    description: 'Catálogo de publicações, cartilhas e manuais expedicionários',
  },
  {
    id: 'link-portal-conhecimento',
    category: 'Produtos Doutrinários',
    title: 'Portal do Conhecimento',
    slug: 'portal-conhecimento',
    icon: 'hub',
    iconRationale: 'Nó integrador de redes de conhecimento técnico-militar e repositórios digitais interligados da Marinha do Brasil.',
    hasBuiltInPage: false,
    drupalUrl: 'https://conhecimento.marinha.mil.br',
    description: 'Repositório digital integrado da Marinha do Brasil',
    isExternal: true,
  },
  {
    id: 'link-flash-doutrinario',
    category: 'Produtos Doutrinários',
    title: 'Flash Doutrinário',
    slug: 'flash-doutrinario',
    icon: 'bolt',
    iconRationale: 'Disparo tático veloz e alerta imediato de atualização doutrinária e procedimentos em combate.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/flash-doutrinario',
    description: 'Boletins periódicos de atualização tática imediata',
  },
  {
    id: 'link-revista-ancoras-fuzis',
    category: 'Produtos Doutrinários',
    title: 'Revista Âncoras e Fuzis',
    slug: 'revista-ancoras-fuzis',
    icon: 'menu_book',
    iconRationale: 'Periódico científico-militar de doutrina com ensaios analíticos, artigos táticos e pensamento estratégico do CFN.',
    hasBuiltInPage: false,
    drupalUrl: 'internal:/node/revista-ancoras-e-fuzis',
    description: 'Periódico oficial com ensaios e artigos militares',
  },
  {
    id: 'link-decida-envie-solucao',
    category: 'Produtos Doutrinários',
    title: 'Decida | Envie sua solução',
    slug: 'decida-envie-solucao',
    icon: 'lightbulb',
    iconRationale: 'Inovação aberta, geração de ideias transformadoras e canal de proposições enviadas por militares da linha de frente.',
    hasBuiltInPage: false,
    drupalUrl: 'internal:/node/decida-envie-solucao',
    description: 'Canal de inovação aberta e proposições de combatentes',
  },
  {
    id: 'link-fronteira-tecnologia',
    category: 'Produtos Doutrinários',
    title: 'Fronteira da Tecnologia - JID',
    slug: 'fronteira-tecnologia',
    icon: 'memory',
    iconRationale: 'Tecnologias disruptivas de defesa, inteligência artificial, guerra cibernética, drones e microeletrônica militar da JID.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/fronteira-tecnologia',
    description: 'Simpósios, IA, drones e cibersegurança militar',
  },
  {
    id: 'link-licoes-aprendidas',
    category: 'Produtos Doutrinários',
    title: 'Relatórios de Lições (Ágata)',
    slug: 'agata-amazonia',
    icon: 'psychology',
    iconRationale: 'Reflexão crítica e assimilação cognitiva das lições aprendidas (RLA) e Quadro QSLI da Operação Ágata Amazônia.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/agata-amazonia',
    description: 'Relatório RLA Operação Ágata Amazônia e Quadro QSLI',
  },
  {
    id: 'link-biblioteca-digital',
    category: 'Produtos Doutrinários',
    title: 'Biblioteca Digital de Doutrina',
    slug: 'biblioteca-digital',
    icon: 'library_books',
    iconRationale: 'Acervo e prateleiras virtuais contendo compêndios doutrinários, manuais de campanha e teses históricas completas.',
    hasBuiltInPage: false,
    drupalUrl: 'internal:/node/biblioteca-digital',
    description: 'Acervo digital de teses e manuais de campanha',
  },
  {
    id: 'link-coletanea-termos-siglas',
    category: 'Produtos Doutrinários',
    title: 'Coletânea de Termos e Siglas',
    slug: 'coletanea-termos-siglas',
    icon: 'sort_by_alpha',
    iconRationale: 'Glossário e vocabulário terminológico militar organizado em ordem alfabética para siglas, termos táticos e acrônimos do CFN.',
    hasBuiltInPage: false,
    drupalUrl: 'internal:/node/coletanea-termos-siglas',
    description: 'Dicionário operacional e abreviaturas oficiais do CFN',
  },

  // COMUNICAÇÃO SOCIAL E ESTRATÉGICA
  {
    id: 'link-identidade-visual',
    category: 'Comunicação Social e Estratégica',
    title: 'Identidade visual',
    slug: 'identidade-visual',
    icon: 'palette',
    iconRationale: 'Manual de aplicação de marca, paleta cromática oficial (Graphite Teal / Renewal Green), tipografia e vetores dos brasões.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/identidade-visual',
    description: 'Manual de aplicação de marca, brasões vetoriais, paleta de cores e tipografia oficial',
  },
  {
    id: 'link-spotify-podcast-momento-doutrinario',
    category: 'Comunicação Social e Estratégica',
    title: 'Spotify - Podcast Momento Doutrinário',
    slug: 'spotify-podcast-momento-doutrinario',
    icon: 'podcasts',
    iconRationale: 'Transmissão em fluxo contínuo de episódios táticos e entrevistas em áudio pelo canal do Spotify.',
    hasBuiltInPage: true,
    drupalUrl: 'https://open.spotify.com/show/ctddcfn-momento-doutrinario',
    description: 'Canal oficial em áudio e episódios doutrinários no Spotify',
    isExternal: true,
  },
  {
    id: 'link-spotify-manuais',
    category: 'Comunicação Social e Estratégica',
    title: 'Spotify - Manuais',
    slug: 'spotify-manuais',
    icon: 'record_voice_over',
    iconRationale: 'Manuais fundamentais de doutrina narrados com locução profissional gravada para estudo sonoro das publicações navais.',
    hasBuiltInPage: true,
    drupalUrl: 'https://open.spotify.com/show/ctddcfn-manuais-audio',
    description: 'Manuais fundamentais e diretrizes doutrinárias narradas em áudio no Spotify',
    isExternal: true,
  },
  {
    id: 'link-spotify-audiobook',
    category: 'Comunicação Social e Estratégica',
    title: 'Spotify - Audiobook',
    slug: 'spotify-audiobook',
    icon: 'headphones',
    iconRationale: 'Audiolivros com audição imersiva via fones de ouvido sobre campanhas anfíbias, história militar e liderança em combate.',
    hasBuiltInPage: true,
    drupalUrl: 'https://open.spotify.com/show/ctddcfn-audiobooks',
    description: 'Audiobooks de história militar anfíbia e ensaios doutrinários no Spotify',
    isExternal: true,
  },
  {
    id: 'link-youtube-pamm-cfn',
    category: 'Comunicação Social e Estratégica',
    title: 'Youtube - PAMM-CFN',
    slug: 'youtube-pamm-cfn',
    icon: 'video_library',
    iconRationale: 'Coleção e acervo em vídeo do Programa de Acompanhamento e Manutenção da Marinha hospedado no YouTube.',
    hasBuiltInPage: true,
    drupalUrl: 'https://www.youtube.com/@marinhaoficial/pamm-cfn',
    description: 'Programa de Acompanhamento e Manutenção da Marinha no YouTube',
    isExternal: true,
  },
  {
    id: 'link-youtube-videos-doutrinarios',
    category: 'Comunicação Social e Estratégica',
    title: 'Youtube - Vídeos doutrinários',
    slug: 'youtube-videos-doutrinarios',
    icon: 'smart_display',
    iconRationale: 'Exibições audiovisuais de instrução tática, adestramentos anfíbios e exercícios da Força de Fuzileiros da Esquadra (FFE).',
    hasBuiltInPage: true,
    drupalUrl: 'https://www.youtube.com/@marinhaoficial/videos-doutrinarios',
    description: 'Instruções táticas, adestramentos anfíbios e exercícios da FFE em vídeo',
    isExternal: true,
  },
  {
    id: 'link-youtube-podcast-momento-doutrinario',
    category: 'Comunicação Social e Estratégica',
    title: 'Youtube - Posdcast Momento doutrinário',
    slug: 'youtube-podcast-momento-doutrinario',
    icon: 'play_circle',
    iconRationale: 'Videocast oficial gravado em estúdio e recortes das entrevistas com especialistas e pesquisadores militares.',
    hasBuiltInPage: true,
    drupalUrl: 'https://www.youtube.com/@marinhaoficial/podcasts',
    description: 'Transmissões em vídeo e cortes do Podcast Momento Doutrinário no YouTube',
    isExternal: true,
  },
  {
    id: 'link-youtube-podcast-leitura-profissional',
    category: 'Comunicação Social e Estratégica',
    title: 'Youtube - Posdcast Leitura Profissional do CFN',
    slug: 'youtube-podcast-leitura-profissional',
    icon: 'auto_stories',
    iconRationale: 'Análise literária e resenhas críticas em vídeo das obras selecionadas para a Leitura Profissional do CFN.',
    hasBuiltInPage: true,
    drupalUrl: 'https://www.youtube.com/@marinhaoficial/leitura-profissional',
    description: 'Resenhas, discussões e análises críticas das obras da Leitura Profissional do CFN',
    isExternal: true,
  },

  // SECOM
  {
    id: 'link-plano-do-dia',
    category: 'SECOM',
    title: 'Plano de Dia',
    slug: 'plano-do-dia',
    icon: 'event_note',
    iconRationale: 'Agenda e expediente diário da Organização Militar com as escalas de serviço, rotinas do dia e compromissos da guarnição.',
    hasBuiltInPage: false,
    drupalUrl: 'internal:/node/plano-do-dia',
    description: 'Publicações diárias de rotina e escalas da guarnição',
  },
  {
    id: 'link-ordem-interna',
    category: 'SECOM',
    title: 'Ordem Interna',
    slug: 'ordem-interna',
    icon: 'assignment',
    iconRationale: 'Atos administrativos formais e diretrizes normativas de serviço interno (Ordem Interna Nº 10-1) sancionadas pelo Comando.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/ordem-interna',
    description: 'Ordem Interna Nº 10-1 e normas para elaboração de ND',
  },
  {
    id: 'link-ctddmarinst',
    category: 'SECOM',
    title: 'CTDDMARINST',
    slug: 'ctddmarinst',
    icon: 'menu_book',
    iconRationale: 'Apostilas normativas de instrução militar e diretrizes pedagógicas internas editadas pelo CTDDCFN.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/ctddmarinst',
    description: 'Instruções normativas das divisões de Ensino e Treinamento',
  },

  // ENSINO
  {
    id: 'link-placape',
    category: 'Ensino',
    title: 'PLACAPE',
    slug: 'placape',
    icon: 'model_training',
    iconRationale: 'Plano bienal de capacitação, adestramento tático e qualificação continuada do pessoal militar (2025/2026).',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/placape',
    description: 'Plano de Capacitação de Pessoal bienal 2025/2026',
  },
  {
    id: 'link-race',
    category: 'Ensino',
    title: 'RACE',
    slug: 'race',
    icon: 'assessment',
    iconRationale: 'Relatório analítico e estatístico de avaliação de eficácia e conclusão de cursos da Diretoria de Ensino (EMA-143).',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/race',
    description: 'Relatório de Análise de Conclusão de Curso (EMA-143)',
  },
  {
    id: 'link-temas-tcc',
    category: 'Ensino',
    title: 'Banco de Temas de TCC do C-ApA-CFN',
    slug: 'temas-tcc',
    icon: 'school',
    iconRationale: 'Pesquisa acadêmico-militar e repositório de temas para Trabalhos de Conclusão do Curso de Aperfeiçoamento (C-ApA).',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/temas-tcc',
    description: 'Planilhas oficiais XLSX/ODS do C-ApA-CFN',
  },
  {
    id: 'link-c-esp-segprotaut',
    category: 'Ensino',
    title: 'C-Esp-SegProtAut',
    slug: 'c-esp-segprotaut',
    icon: 'shield_person',
    iconRationale: 'Especialização de ponta em segurança aproximada, escolta tática armada e proteção física de autoridades e dignitários.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/c-esp-segprotaut',
    description: 'Curso Especial de Segurança e Proteção de Autoridades - Índices 2026',
  },
  {
    id: 'link-curriculos',
    category: 'Ensino',
    title: 'Currículos',
    slug: 'curriculos',
    icon: 'view_timeline',
    iconRationale: 'Cronograma progressivo e matriz curricular com distribuição sequencial de disciplinas, cargas horárias e ementas.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/curriculos',
    description: 'Matrizes curriculares, cargas horárias e disciplinas',
  },
  {
    id: 'link-vagas-2027',
    category: 'Ensino',
    title: 'Solicitação de vagas',
    slug: 'vagas-2027',
    icon: 'how_to_reg',
    iconRationale: 'Processo oficial de inscrição, credenciamento e solicitação de cotas de vagas de cursos e estágios para 2027.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/vagas-2027',
    description: 'Diretriz COMIMSUP para vagas em cursos e estágios de 2027',
  },

  // NAVEGAÇÃO / ADMINISTRAÇÃO
  {
    id: 'link-auxilio-transporte',
    category: 'Navegação / Administração',
    title: 'Auxílio Transporte',
    slug: 'auxilio-transporte',
    icon: 'directions_bus',
    iconRationale: 'Administração de benefício indenizatório de deslocamento e subsídio ao transporte coletivo para a guarnição.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/auxilio-transporte',
    description: 'Benefício ao pessoal, requerimentos e tabela de tarifas',
  },
  {
    id: 'link-carta-servico',
    category: 'Navegação / Administração',
    title: 'Carta de Serviço ao Usuário',
    slug: 'carta-servico',
    icon: 'contact_page',
    iconRationale: 'Catálogo de transparência pública e compromissos institucionais prestados aos usuários militares e civis pelo CTDDCFN.',
    hasBuiltInPage: false,
    drupalUrl: 'internal:/node/carta-de-servico',
    description: 'Guia de serviços prestados pelo CTDDCFN à sociedade e militares',
  },
  {
    id: 'link-compartilhamentos-mb',
    category: 'Navegação / Administração',
    title: 'Compartilhamento de Arquivos MB',
    slug: 'compartilhamentos-mb',
    icon: 'folder_shared',
    iconRationale: 'Diretório compartilhado corporativo e pastas de rede colaborativas entre organizações militares da Força.',
    hasBuiltInPage: false,
    drupalUrl: 'https://nuvem.marinha.mil.br',
    description: 'Repositório de nuvem corporativa e arquivos da Marinha',
    isExternal: true,
  },
  {
    id: 'link-radio-marinha',
    category: 'Navegação / Administração',
    title: 'Rádio Marinha & Podcast',
    slug: 'radio-marinha',
    icon: 'radio',
    iconRationale: 'Transmissão radiofônica ao vivo e radiodifusão institucional de notícias e programas da Marinha do Brasil.',
    hasBuiltInPage: false,
    drupalUrl: 'https://radiomarinha.marinha.mil.br',
    description: 'Transmissão oficial ao vivo da emissora da Marinha',
    isExternal: true,
  },
  {
    id: 'link-pesqsatpes',
    category: 'Navegação / Administração',
    title: 'PesqSATPES & SISBENS',
    slug: 'pesqsatpes-sisbens',
    icon: 'insights',
    iconRationale: 'Indicadores analíticos de satisfação e pesquisas métricas de assistência e benefícios sociais ao pessoal militar.',
    hasBuiltInPage: false,
    drupalUrl: 'https://satpes.marinha.mil.br',
    description: 'Pesquisa de Satisfação de Pessoal e Gestão de Benefícios',
    isExternal: true,
  },
  {
    id: 'link-clima-org',
    category: 'Navegação / Administração',
    title: 'Pesquisa Clima Organizacional',
    slug: 'clima-organizacional',
    icon: 'mood',
    iconRationale: 'Avaliação de ambiência corporativa, motivação, bem-estar psicossocial e moral dos militares do Centro.',
    hasBuiltInPage: false,
    drupalUrl: 'https://clima.marinha.mil.br',
    description: 'Avaliação de ambiente interno de trabalho e bem-estar',
    isExternal: true,
  },
  {
    id: 'link-design-system',
    category: 'Navegação / Administração',
    title: 'Guia de Tipografia & Ícones',
    slug: 'design-system',
    icon: 'format_shapes',
    iconRationale: 'Catálogo de componentes visuais, padrões tipográficos e matriz de ícones do Design System Stitch.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/design-system',
    description: 'Design System Naval com +50 ícones e escalas de pesos',
  },
  {
    id: 'link-matriz-navegacao',
    category: 'Navegação / Administração',
    title: 'Matriz Completa de Menus',
    slug: 'matriz-navegacao',
    icon: 'schema',
    iconRationale: 'Mapa arquitetural global da taxonomia de navegação, roteamento de departamentos e 13 sistemas corporativos da MB.',
    hasBuiltInPage: true,
    drupalUrl: 'internal:/node/matriz-navegacao',
    description: 'Arquitetura de menus, departamentos e 13 sistemas da MB',
  },

  // DIVISÃO DE INFORMÁTICA (Exatamente 4 links conforme Drupal do CTDDCFN)
  {
    id: 'link-siscsrecim',
    category: 'Divisão de Informática',
    title: 'Abertura de Chamado (SiSCSRECIM)',
    slug: 'abertura-chamado-siscsrecim',
    icon: 'support_agent',
    iconRationale: 'Central de atendimento técnico e abertura de tíquetes de suporte em tecnologia da informação e comunicações.',
    hasBuiltInPage: false,
    drupalUrl: 'https://siscsrecim.marinha.mil.br/chamados',
    description: 'Sistema Integrado de Suporte e Chamados de TIC da Marinha do Brasil',
    isExternal: true,
  },
  {
    id: 'link-compartilhamento-arquivos-dinf',
    category: 'Divisão de Informática',
    title: 'Compartilhamento de Arquivos da MB',
    slug: 'compartilhamento-arquivos-mb',
    icon: 'cloud_sync',
    iconRationale: 'Sincronização bidirecional e repositório oficial de nuvem corporativa para trabalho em equipe na rede da Marinha.',
    hasBuiltInPage: false,
    drupalUrl: 'https://nuvem.marinha.mil.br',
    description: 'Plataforma oficial de nuvem e compartilhamento de arquivos corporativos da MB',
    isExternal: true,
  },
  {
    id: 'link-alterar-senha-internet',
    category: 'Divisão de Informática',
    title: 'Alterar senha - Internet',
    slug: 'alterar-senha-internet',
    icon: 'lock_reset',
    iconRationale: 'Portal criptográfico de autoatendimento para atualização, redefinição e gestão segura da senha de rede e internet.',
    hasBuiltInPage: false,
    drupalUrl: 'https://id.marinha.mil.br/alterar-senha',
    description: 'Portal de autoatendimento para alteração e recuperação de senha de acesso à Internet',
    isExternal: true,
  },
  {
    id: 'link-autenticacao-zimbra-manual',
    category: 'Divisão de Informática',
    title: 'Autenticação Zimbra - Manual',
    slug: 'autenticacao-zimbra-manual',
    icon: 'mail_lock',
    iconRationale: 'Guia de instruções de segurança para autenticação em dois fatores e configuração criptografada do correio Zimbra.',
    hasBuiltInPage: false,
    drupalUrl: 'https://correio.marinha.mil.br/manual-autenticacao-zimbra.pdf',
    description: 'Manual passo a passo de autenticação e configuração do correio eletrônico corporativo Zimbra',
    isExternal: true,
  },
];

/**
 * Loads menu links with any customized URLs from LocalStorage
 */
export function loadMenuLinks(): MenuLinkItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_MENU_LINKS;
    const parsed: Record<string, string> = JSON.parse(raw);
    return INITIAL_MENU_LINKS.map((item) => ({
      ...item,
      drupalUrl: parsed[item.id] || item.drupalUrl,
    }));
  } catch (err) {
    console.error('Falha ao carregar URLs personalizadas do menu:', err);
    return INITIAL_MENU_LINKS;
  }
}

/**
 * Saves a single custom URL for a menu item
 */
export function updateMenuLinkUrl(linkId: string, newUrl: string): MenuLinkItem[] {
  try {
    const currentRaw = localStorage.getItem(STORAGE_KEY);
    const map: Record<string, string> = currentRaw ? JSON.parse(currentRaw) : {};
    map[linkId] = newUrl;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch (err) {
    console.error('Falha ao salvar URL personalizada do menu:', err);
  }
  return loadMenuLinks();
}

/**
 * Resets all menu URLs back to defaults
 */
export function resetMenuLinksToDefault(): MenuLinkItem[] {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Falha ao resetar URLs do menu:', err);
  }
  return INITIAL_MENU_LINKS;
}
