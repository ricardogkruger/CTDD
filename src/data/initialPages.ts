import { PageItem } from '../types';

export const INITIAL_PAGES: PageItem[] = [
  {
    id: 'inicio',
    title: 'Notícias & Comunicação Doutrinária',
    slug: 'inicio',
    category: 'institucional',
    contentType: 'noticia',
    icon: 'newspaper',
    summary: 'Boletins informativos, diretrizes operacionais, eventos navais e lições aprendidas em combate anfíbio.',
    date: '01 Setembro, 2026',
    author: 'SECOM / CTDDCFN',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBordcRhJV881KyBjCc8gKfK-Qe2MmDNHQ7-g_AMxwl4XUDiUfBmGPgOKE6dNp5xMJXu6j8lkvTF-FkR5EzpfgFCMQmcEg4yCItL0WYgcOqOXWPCzuen9uVCNQA0KEdbaLO_3DV0v2_cQIadYQIcOi8PCVq_HYbFQOJq3KuZ01mERs5o_txgybT8-xdtA1MOqYGF4EYRPxY8MDKUvPTp2g3OzW0jp3ji2SaWa2t1rLnfLy_Y2JpmZ02',
    tags: ['Doutrina', 'Amazônia Azul', 'Ajuda Humanitária', 'Interoperabilidade'],
    isCustom: false
  },
  {
    id: 'comandante',
    title: 'Comandante',
    slug: 'comandante',
    category: 'institucional',
    contentType: 'biografia',
    icon: 'military_tech',
    summary: 'Vice-Almirante (FN) Cláudio Lopes de Araujo Leite — Comandante do CTDDCFN.',
    date: '31 Março, 2026',
    author: 'Gabinete do Comandante',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-9hxoPINlkjxobvxtgVV7bp-BZNu6UIJNcPAMtU89dmWPeSe1qLYH5QS23eZz7NVEtaxUqTyjdvjYshxsLFaXYVImlb8rW_Smoq2Pm5mlyNZ2MYnTdFyiTN8U3Out0nvADGkznfJxyYTHAb4B4sD6vMFSuBajd5tatj4Ex_PwADtzbXW43-x_0XTKEV0zpfDCkBGvXDN7BmQGH7qmwVcVQxubF1JScnu6cofbNzbQpddXWHNZZ9xV',
    tags: ['Comando', 'Curriculum Vitae', 'Oficial-General'],
    isCustom: false
  },
  {
    id: 'suboficial-mor',
    title: 'Suboficial-Mor',
    slug: 'suboficial-mor',
    category: 'institucional',
    contentType: 'biografia',
    icon: 'shield_person',
    summary: 'SO-FN-IF Claudio de Oliveira — Suboficial-Mor do Comando do Treinamento e do Desenvolvimento Doutrinário.',
    date: '2025 - Atual',
    author: 'Gabinete Suboficial-Mor',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-w1cQniqgfHLMf-RvP1zSJoG68NMiWBgMPUifRpmdkIaCmOjFaa2YiwCHzv23m8LcllstIKZSsKK_1M77JN3C-QsSmKH6Z4WvSM_OqcVzyVB_Lrj28So6T9rthkJDO001bihEeXRa6MxZtgHegraZU0ZwWy--MiJ3MQWr3m6e4_QJhjcb1jzljtKKPegZdQjEkzbxdzDYFik_l8ds0BcJv16p84616OKsbvihRB7ub_Ot7ajH4l5U',
    tags: ['Praça Mais Graduada', '39 Anos de Serviço', 'Infantaria'],
    isCustom: false
  },
  {
    id: 'missao',
    title: 'Missão & 30 Tarefas Regimentais',
    slug: 'missao',
    category: 'institucional',
    contentType: 'diretriz',
    icon: 'flag',
    summary: 'Propósito superior estabelecido pelo Estado-Maior da Armada e catálogo das 30 atribuições tático-operativas.',
    date: 'Diretriz Geral Vigente',
    author: 'Estado-Maior da Armada / CFN',
    tags: ['Regulamento', 'Doutrina', 'Ensino', 'Lições Aprendidas'],
    isCustom: false
  },
  {
    id: 'visao',
    title: 'Visão de Futuro (Meta 2027)',
    slug: 'visao',
    category: 'institucional',
    contentType: 'diretriz',
    icon: 'visibility',
    summary: 'Diretriz estratégica de longo prazo para tornar o CTDDCFN referência até 2027 em gestão de conhecimento militar.',
    date: '2024 - 2027',
    author: 'Comando-Geral do CFN',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5H6-PtnEXDkl175fHU9ZDjlGMekun72q1U379gWB88JVNf-FJwsJ0Klrg63z6RsqqbDx5sfQBM1NanDuKz6tXgKsVeg7IGHhSO2iD7f-fR9Hp0InvfsB2GMwCIdmjxMcI3JoqJ6y5WrxtAjI3e-4fs_5ZAtOXRWRiZDwVca1-VeQAAGlNT4IHYyXPpeLsh807HM5nRuSqi15Lhd6wRy54_H4dGP4IdDhW4dlekd19QmD_sDPZzcQ5',
    tags: ['Estratégia 2027', 'Pilares', 'Modernização'],
    isCustom: false
  },
  {
    id: 'heraldica',
    title: 'Heráldica & Brasão de Armas',
    slug: 'heraldica',
    category: 'institucional',
    contentType: 'diretriz',
    icon: 'workspace_premium',
    summary: 'Significado heráldico do distintivo de Organização Militar, descrição das armas, esmaltes e metais.',
    date: 'Registro Oficial MB',
    author: 'Serviço de Heráldica Naval',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDWfgWb8vqVQwcqXR7WC3-t6QoxGakcDktp6ccYYlQ45yHz1IkE2MiiKQzYmeZ1UoPUDZ3NkcUlge9Ja30eevMYeyiH3vHu5-tXf-eC4PaxpAqsbQMRj_9QTQ_kV7D4CMq-TKCfzUz_OPdwchz8pLNnth2iGcpmrdUOplO1qVBor-UHtVQLGm2NYLfWpHEyL-8kfOUnTJ8Yb3x4t7UQQZnkCB55lEQzZfe7TG8jfTPCTBpOoCLhsyLJo3mR6zrTmhsKA',
    tags: ['Armas Navais', 'Atenas / Minerva', 'Símbolo'],
    isCustom: false
  },
  {
    id: 'historico',
    title: 'Histórico Institucional',
    slug: 'historico',
    category: 'institucional',
    contentType: 'diretriz',
    icon: 'history_edu',
    summary: 'Evolução cronológica de 2012 a 2025: criação em Mangaratiba, transferência para a Ilha do Governador e unificação do ensino.',
    date: '2012 - 2025',
    author: 'Seção de Memória Histórica',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOn4g0T9FE-HK9VNIC32xYSoC5NSZVUt3HF9P5tVJUJcBcIfr_xLRdNd_4iaBhOQ85_Jd48N5Aaqt5SniTknMYPA_c-2Hs4loehdUCQVZIAQelJ5hpXBmg3BmvJd7nQbWeJ3ccDobGyTRMllJ_cstUcPaQjLBzwSZ8d8Fzmr3hcFNKJOgYBlVL91xZrQf9CBnPToub8gjCrB3JMDQg2kKK323xOWBpLf8_I3mUYRlheEVssL2Ia61u',
    tags: ['Linha do Tempo', 'Itacuruçá', 'CNIG', 'Portarias'],
    isCustom: false
  },
  {
    id: 'curriculos',
    title: 'Currículos dos Cursos do CFN',
    slug: 'curriculos',
    category: 'ensino',
    contentType: 'curriculo',
    icon: 'school',
    summary: 'Catálogo de 135 matrizes curriculares homologadas: Carreira, Especiais, Expeditos, Aperfeiçoamento Avançado e Estágios.',
    date: 'Ciclo Letivo 2026',
    author: 'Divisão de Ensino / CTDDCFN',
    tags: ['PLACAPE', '135 Cursos', 'Ementas', 'Downloads'],
    isCustom: false
  },
  {
    id: 'flash-doutrinario',
    title: 'Flash Doutrinário',
    slug: 'flash-doutrinario',
    category: 'produtos-doutrinarios',
    contentType: 'noticia',
    icon: 'flash_on',
    summary: 'Informativos técnicos rápidos sobre operações e procedimentos de combate anfíbio (Edições 17 a 24).',
    date: 'Série Oficial FD-CFN',
    author: 'Divisão de Doutrina',
    tags: ['Táticas', 'ZReu', 'Desembarque', 'CSAR'],
    isCustom: false
  },
  {
    id: 'fronteira-tecnologia',
    title: 'Fronteiras da Tecnologia - JID',
    slug: 'fronteira-tecnologia',
    category: 'produtos-doutrinarios',
    contentType: 'noticia',
    icon: 'biotech',
    summary: 'Ciclo de Debates sobre Computação Pós-Quântica, Inteligência Artificial e Defesa com a Junta Interamericana de Defesa.',
    date: 'Conferência Hemisférica 2024',
    author: 'JID / CTDDCFN',
    tags: ['Cibersegurança', 'Pós-Quântica', 'C4ISR'],
    isCustom: false
  },
  {
    id: 'c-esp-segprotaut',
    title: 'Índices C-Esp-SegProtAut/2026',
    slug: 'c-esp-segprotaut',
    category: 'ensino',
    contentType: 'curriculo',
    icon: 'security',
    summary: 'Critérios de Admissibilidade e baremas de avaliação operacional do Curso Especial de Segurança e Proteção de Autoridades.',
    date: 'Ano Letivo 2026',
    author: 'Divisão de Ensino',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLTl2yV19-Hr8LB7TLh-1PrX_X5o_5MiXmpNzDFH_VRI2Tffn9kemxtRbDPiEHFH9aMgDBTTwZkOX-ZXtB58IVYB594RcHvA7YnHnJBD5Asil8Sp8EEWCyW_0UWjGmbiG-04Xfik_vrec4ZHNjsPRVYOCgGYfUFlt6jZwC_2BMcvBFd20PGXZInVzxIEog8X2fqSbMMYd9BuQ9tIcZNmfrnTiIjnRXHpiHzV9npwiu-l-Fkf-FBsiK',
    tags: ['SegProtAut', 'Baremas', 'Tiro Defensivo', 'VIP'],
    isCustom: false
  },
  {
    id: 'ex-comandantes',
    title: 'Antigos Comandantes',
    subtitle: 'Galeria Histórica de Oficiais-Generais CDD-CFN e CTDDCFN',
    slug: 'ex-comandantes',
    category: 'institucional',
    contentType: 'biografia',
    icon: 'groups',
    summary: 'Registro histórico das lideranças e Oficiais-Generais que conduziram o desenvolvimento doutrinário e a prontidão operativa.',
    date: 'Historiografia Naval',
    author: 'SECOM / CTDDCFN',
    tags: ['Ex-Comandantes', 'Historiografia', 'Oficiais-Generais', 'CDD-CFN'],
    isCustom: false
  },
  {
    id: 'auxilio-transporte',
    title: 'Auxílio Transporte',
    subtitle: 'Benefício ao Pessoal - Vigência 2024 / MB',
    slug: 'auxilio-transporte',
    category: 'navegacao',
    contentType: 'page',
    icon: 'directions_bus',
    summary: 'Requerimentos, tabela tarifária RJ, declaração de residência e Diretriz Regulamentar MB-344.',
    date: 'Seção de Pessoal',
    author: 'Divisão de Administração',
    tags: ['Auxílio Transporte', 'Formulários', 'Tarifas', 'Pessoal'],
    isCustom: false
  },
  {
    id: 'temas-tcc',
    title: 'Banco de Temas de TCC do C-ApA-CFN',
    subtitle: 'Divisão de Ensino e Aperfeiçoamento - Ciclo 2024-2026 Vigente',
    slug: 'temas-tcc',
    category: 'ensino',
    contentType: 'curriculo',
    icon: 'school',
    summary: 'Planilhas oficiais de temas homologados em formatos XLSX e ODS para os ciclos letivos de 2024 a 2026.',
    date: 'Ciclo 2024-2026',
    author: 'Departamento de Ensino',
    tags: ['TCC', 'C-ApA-CFN', 'Ensino', 'Planilhas ODS'],
    isCustom: false
  },
  {
    id: 'ctddmarinst',
    title: 'CTDDMARINST - Instruções Normativas',
    subtitle: 'Instruções normativas do CTDDCFN organizadas por departamento',
    slug: 'ctddmarinst',
    category: 'secom',
    contentType: 'diretriz',
    icon: 'menu_book',
    summary: 'Instruções normativas 20-1 a 20-5 (Ensino) e 30-1 (Treinamento / PTTC-CFN).',
    date: 'SECOM / Normas Internas',
    author: 'SECOM / CTDDCFN',
    tags: ['CTDDMARINST', 'Normas', 'Ensino', 'Treinamento', 'PTTC'],
    isCustom: false
  },
  {
    id: 'agata-amazonia',
    title: 'Ágata Amazônia 2025 - Lições Aprendidas',
    subtitle: 'Relatório Oficial de Lições Aprendidas — Operação Ágata Amazônia 2025',
    slug: 'agata-amazonia',
    category: 'produtos-doutrinarios',
    contentType: 'diretriz',
    icon: 'sailing',
    summary: 'Sistematização de dados táticos, emprego ribeirinho, sustentação e Quadro Sintético de Lições Identificadas (QSLI).',
    date: '14/FEV/2025',
    author: 'Divisão de Avaliação Doutrinária',
    tags: ['Ágata Amazônia', 'QSLI', 'Ribeirinho', 'Lições Aprendidas'],
    isCustom: false
  },
  {
    id: 'ordem-interna',
    title: 'Ordens Internas & Diretrizes',
    subtitle: 'Ordem Interna Nº 10-1 - Normas para elaboração de Notas Doutrinárias',
    slug: 'ordem-interna',
    category: 'secom',
    contentType: 'diretriz',
    icon: 'gavel',
    summary: 'Regulamentação e protocolo de 4 passos para proposição, revisão e publicação de Notas Doutrinárias.',
    date: 'Série 10 - CDDCFN',
    author: 'SECOM / DIV-NORMAS',
    tags: ['Ordem Interna', 'Notas Doutrinárias', 'Protocolo', 'Regulamento'],
    isCustom: false
  },
  {
    id: 'vagas-2027',
    title: 'Solicitação de Vagas 2027',
    subtitle: 'Procedimentos para Solicitação de Vagas em Cursos Especiais, Expeditos e Estágios Previstos para 2027',
    slug: 'vagas-2027',
    category: 'ensino',
    contentType: 'curriculo',
    icon: 'table_view',
    summary: 'Diretrizes, prazo improrrogável 22JUL2026 e 6 tabelas completas com 31 cursos e estágios.',
    date: 'Diretriz de Ensino 2027',
    author: 'Divisão de Ensino - CTDDCFN',
    tags: ['Vagas 2027', 'Cursos Especiais', 'Estágios', 'COMIMSUP'],
    isCustom: false
  },
  {
    id: 'podcast-doutrinario',
    title: 'Podcast Momento Doutrinário',
    subtitle: 'Disseminação de Conhecimento Militar Naval em Áudio',
    slug: 'podcast-doutrinario',
    category: 'produtos-doutrinarios',
    contentType: 'noticia',
    icon: 'podcasts',
    summary: 'Canal oficial em áudio com debates táticos, tecnologia, guerra eletrônica e novidades doutrinárias no Spotify.',
    date: 'Série Quinzenal',
    author: 'Divisão de Doutrina & SECOM',
    tags: ['Podcast', 'Spotify', 'Guerra Eletrônica', 'Doutrina em Áudio'],
    isCustom: false
  },
  {
    id: 'race',
    title: 'RACE - Relatório de Análise de Conclusão de Curso',
    subtitle: 'Instrumento Doutrinário Compulsório de Feedback Pedagógico (EMA-143 Anexo F)',
    slug: 'race',
    category: 'ensino',
    contentType: 'curriculo',
    icon: 'verified',
    summary: 'Norma EMA-143, modelo editável DOCX, prazos regimentais e fluxo de homologação em 3 fases.',
    date: 'Ciclo Ativo 2025',
    author: 'Divisão de Ensino e Avaliação',
    tags: ['RACE', 'EMA-143', 'Avaliação', 'Ensino'],
    isCustom: false
  },
  {
    id: 'placape',
    title: 'PLACAPE - Plano de Capacitação de Pessoal',
    subtitle: 'Ciclo Bienal 2025/2026 - Eixos Estratégicos e Calendário de Cursos',
    slug: 'placape',
    category: 'ensino',
    contentType: 'curriculo',
    icon: 'fact_check',
    summary: '4 eixos de capacitação, 1.480 vagas previstas, cronograma de instruções e calendário de módulos.',
    date: 'Ciclo Bienal 2025-2026',
    author: 'Diretoria de Ensino & Doutrina',
    tags: ['PLACAPE', 'Capacitação', 'Cursos', 'Calendário'],
    isCustom: false
  },
  {
    id: 'design-system',
    title: 'Guia de Tipografia & Sistema de Ícones',
    subtitle: 'Design System Naval CTDDCFN - Famílias Montserrat, Inter e JetBrains Mono',
    slug: 'design-system',
    category: 'informatica',
    contentType: 'page',
    icon: 'format_shapes',
    summary: 'Anatomia, escala modular, 5 pesos homologados, matriz de contraste WCAG AAA e +50 ícones vetoriais.',
    date: 'DS-ICON-v2.5',
    author: 'Divisão de Doutrina e TI',
    tags: ['Design System', 'Tipografia', 'Ícones', 'WCAG AAA'],
    isCustom: false
  },
  {
    id: 'matriz-navegacao',
    title: 'Matriz Completa de Navegação & Menus',
    subtitle: 'Arquitetura de Navegação do Portal CTDDCFN e Mega-Menus Interativos',
    slug: 'matriz-navegacao',
    category: 'navegacao',
    contentType: 'page',
    icon: 'hub',
    summary: 'Mapeamento visual dos 6 departamentos, 20+ divisões, 13 sistemas da MB, sites, OM e BONO.',
    date: 'Arquitetura Oficial',
    author: 'Divisão de Doutrina e TI',
    tags: ['Menus', 'Taxonomia', 'Sistemas', 'Departamentos'],
    isCustom: false
  }
];

const STORAGE_KEY = 'ctddcfn_drupal_custom_pages_v1';

export function getCustomPages(): PageItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to load custom pages from localStorage', err);
    return [];
  }
}

export function saveCustomPage(page: PageItem): PageItem[] {
  const current = getCustomPages();
  const existingIndex = current.findIndex(p => p.id === page.id || p.slug === page.slug);
  
  let updated: PageItem[];
  if (existingIndex >= 0) {
    updated = [...current];
    updated[existingIndex] = { ...page, isCustom: true };
  } else {
    updated = [ { ...page, isCustom: true }, ...current ];
  }
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save custom page to localStorage', err);
  }
  return updated;
}

export function deleteCustomPage(id: string): PageItem[] {
  const current = getCustomPages();
  const filtered = current.filter(p => p.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (err) {
    console.error('Failed to delete custom page from localStorage', err);
  }
  return filtered;
}

export const loadSavedCustomPages = getCustomPages;

export function saveCustomPages(pages: PageItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pages));
  } catch (err) {
    console.error('Failed to save pages array to localStorage', err);
  }
}

