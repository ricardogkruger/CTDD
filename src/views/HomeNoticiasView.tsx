import React, { useState } from 'react';

interface HomeNoticiasViewProps {
  onNavigate: (slug: string) => void;
}

export const HomeNoticiasView: React.FC<HomeNoticiasViewProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const articles = [
    {
      id: 1,
      title: 'Visita Oficial do Cônsul-Geral do Japão às Instalações do CTDDCFN',
      category: 'Relações Internacionais',
      categorySlug: 'internacional',
      date: '30 Junho, 2026',
      readTime: '4 min',
      summary: 'Encontro fortaleceu laços de intercâmbio acadêmico e avaliou metodologias de simulação tática e resposta a desastres naturais aplicadas pelas forças de autodefesa japonesas.',
      author: 'AssImp / CTDD',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB81PkZFhH4RVU-3Ctg0cxsscyK6Ve8hedWWZ8t38yC1fm2ry18lhdCLjfJ01Ib8fqWoVgUzIVFmye_QQXiuUdwBqH6bkuIOvgYQXRD2AGDw6j5OkKq5nSomwAURO4U043yV4KxMgTjOq1SLl_cshdWldWaH4xwCP5D1bTU5aojPHR1auK7p0sc-MSZpc0cP25CM6quolXLgEO749rsIiNX6Ut4tC1ifY30Ansa27FzVJaTwrZ2rXtg',
      linkSlug: 'inicio'
    },
    {
      id: 2,
      title: '2ª Jornada de Lições Aprendidas do CFN apresenta inovações doutrinárias',
      category: 'Lições Aprendidas',
      categorySlug: 'licoes',
      date: '26 Junho, 2026',
      readTime: '6 min',
      summary: 'Debate aprofundado com oficiais de operações sobre dados colhidos em manobras expedicionárias recentes, resultando em 14 propostas de revisão para manuais táticos.',
      author: 'Div. Doutrina',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlSmfSAq1UvDsEcf0zglixLoeTjjYAiYrnsefgtHn1vrinCRQn5gEcu_U2tFat4mri6eL41ASXdPH-fPEEXtsy40-QJaAXV3trNpXUVDbOpWtD8AgGdbK7JTI8kUXM-qbFPXfEBklvAIzRrvMk71DXrg0YdfUXwf3AwC_lEz--KQQ8EFmv0JXG_I_CIvQJ22a7FwuLVWVqs1V2LJLxXYEG2ZOqwNJLuBuovIxEvNE7y7ekurNZlTh4',
      linkSlug: 'flash-doutrinario'
    },
    {
      id: 3,
      title: 'III Fórum Nacional sobre Proteção Integrada de Fronteiras e Amazônia Azul',
      category: 'Operações Anfíbias',
      categorySlug: 'anfibias',
      date: '28 Maio, 2026',
      readTime: '3 min',
      summary: 'Integração entre o Comando de Operações Navais e órgãos de segurança pública para atuação conjunta no teatro litorâneo e bacias hidrográficas estratégicas.',
      author: 'Gabinete Comandante',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaapr4aLj8QVvEnJVryJXv9FoKTjHv8IUOwB17CPRjAUvwa2WSLUzkERH75O7VrKnGTb4cMHrnyWs65-U3JGuoY2OlySZYjNM-dYPBFD8Doy_ICA3rX-Q7qSQFtsEzJ7EGWS-LPFHOsr5ZjbPa1XuuL5pTqvow8W9StbowPAQzvTPgG0gZJQ3SJhl7XBMhKeM7QMlqOZc4vmHyEQYWEJuySoaLG6CCbAKvX2HA8ZPSOO6oDTygRWmo',
      linkSlug: 'fronteira-tecnologia'
    },
    {
      id: 4,
      title: 'Passo Acertado, Vibração e Espírito de Corpo: TFM na Ilha do Governador',
      category: 'Ensino & Instrução',
      categorySlug: 'ensino',
      date: '26 Maio, 2026',
      readTime: '3 min',
      summary: 'Atividade física militar congregou todo o efetivo de oficiais e praças em circuito de marcha anfíbia, reforçando a rusticidade e a prontidão permanente da tropa.',
      author: 'Sec. Educação Física',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeCS9eV-W5nnUIxyyWxT1BwmtzESHl2S3NEGEORkrWjXtHOuwBKjLuDHaI56BU0LTiF4m2sxfYRitU-6Hw9ikukt15bVJQCMsaEz5hsO_nRviLbKFSa3P5kziWWX8xnXBkCgQw4hMULyrFtQi4vhMuCiJHOYJGMsDFwuz9BAXhO2iVTHF4Jjc0O94N5FyFLVyu-DX9tqwtSQF4pxYfaTNGoaN1zpt-RfnQOYYbUI6chEJYPhwJk7j9',
      linkSlug: 'curriculos'
    },
    {
      id: 5,
      title: 'Cerimônia Militar de Transmissão de Cargo de Direção do CTDDCFN',
      category: 'Institucional',
      categorySlug: 'institucional',
      date: '27 Março, 2026',
      readTime: '5 min',
      summary: 'Em solenidade presidida pelo Comandante-Geral do CFN, foram ressaltados os marcos de modernização da grade curricular e os novos laboratórios de simulação.',
      author: 'SECOM Central',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDDRJ_49tdvOxcIsytIP6m4N-2Wa0nQ2G6zvYL6BuhI41Mas5xrKfP2g7dytGR5zdjSxzNnnI4AKVKo-dcyeyc-hwUGj-RYfKsctfm5Jl1SG9yc6mHAWz42T1V1UUtyz1a1_X-7t7LLRiDwZ3JA1hHN8NSSMNBhIUbaiEHh2gAnHoJf89o7ISykb5RXUkaIlGFy-kMhosVZ0qFnpvvSoDPJtTJMmVPkkdJeGWEYpI9svsqRJtMi3JW',
      linkSlug: 'comandante'
    },
    {
      id: 6,
      title: 'Comitiva Estrangeira visita complexo do CIASC e centro doutrinário',
      category: 'Cooperação Técnica',
      categorySlug: 'internacional',
      date: '09 Março, 2026',
      readTime: '4 min',
      summary: 'Oficiais de nações amigas conheceram os laboratórios de Comando e Controle (C2) e os módulos de tiro simulado utilizados para instrução tática de pequenos escalões.',
      author: 'Divisão de Cooperação',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy0chkephFQ1EUFKqH9Exxcxoerp9r8vT9bsOu0fhEpZw9RnjLTcJoUY0xGZogANTi3ZUw5u0XPvk_66NeZEhsijJOLVAd3SkTV4f_JQoOcl1DGURs0frMn8nDGFv9hTpdZoPfsPcb1Jzw2dp08l77mE1Eek4p-RyNvTJdyPltXKBw28nrWeSGr8PYIiRlhs99SwH246eDffCMK-rEXxgLFjBQK-vjNXYHvZkIH07TYY4SIwl9NloE',
      linkSlug: 'historico'
    }
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesFilter =
      activeFilter === 'all' ||
      art.categorySlug === activeFilter ||
      art.category.toLowerCase().includes(activeFilter);
    const matchesSearch =
      !searchTerm ||
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setTimeout(() => setNewsletterSuccess(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="flex flex-col w-full space-y-8">
      {/* 1. CABEÇALHO DE SEÇÃO & METADADOS INSTITUCIONAIS */}
      <section className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <nav className="flex items-center gap-2 font-technical-code text-xs text-slate-500">
            <span className="flex items-center gap-1 font-semibold text-slate-700">
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>Início</span>
            </span>
            <span className="material-symbols-outlined text-[14px] text-slate-400">chevron_right</span>
            <span className="text-[#002e32] font-bold">Notícias &amp; Comunicação Doutrinária</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#bad435]/20 text-[#374500] font-technical-code text-[11px] font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#8fa619] animate-pulse"></span>
            <span>MB-SECOM / ATUALIZAÇÕES DOUTRINÁRIAS</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pt-1">
          <div className="space-y-1">
            <span className="font-technical-code text-xs text-[#566500] tracking-widest font-bold uppercase">
              Boletim Informativo e Produção de Conhecimento
            </span>
            <h1 className="font-headline text-2xl md:text-3xl font-bold text-[#002e32] tracking-tight">
              Postagens &amp; Informativos Doutrinários
            </h1>
            <p className="text-sm md:text-base text-slate-600 max-w-3xl leading-relaxed">
              Disseminação contínua de diretrizes navais, eventos operacionais, lições aprendidas em combate anfíbio e avanços na capacitação técnico-militar do Corpo de Fuzileiros Navais.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-technical-code text-xs flex items-center gap-1.5 shadow-sm border border-slate-200">
              <span className="material-symbols-outlined text-[16px] text-[#002e32]">database</span>
              <span>BD-SECOM: v4.8</span>
            </span>
            <button
              onClick={() => alert('Assinatura do feed RSS do CTDDCFN configurada.')}
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-[#002e32] border border-slate-200 text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">rss_feed</span>
              <span>Assinar RSS</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. CONTROLES: BUSCA TÁTICA E FILTROS DINÂMICOS */}
      <section className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px] pointer-events-none">
              search
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquisar postagens, portarias, eventos, termos táticos..."
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 hover:bg-slate-100/80 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#bad435] transition-all placeholder:text-slate-400 border border-slate-200"
            />
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg text-xs font-medium text-slate-700">
              <span className="material-symbols-outlined text-[18px] text-slate-500">sort</span>
              <span className="font-technical-code font-bold uppercase">Ordem:</span>
              <span className="font-technical-code font-semibold">Mais recentes primeiro</span>
            </div>
            <div className="hidden sm:flex items-center px-3 py-2 bg-[#bad435]/25 rounded-lg text-[#374500] font-technical-code text-xs font-bold border border-[#bad435]/40">
              {filteredArticles.length} de {articles.length} postagens
            </div>
          </div>
        </div>

        {/* Pílulas de Filtro Funcionais */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {[
            { label: 'Todas as Postagens', key: 'all' },
            { label: 'Operações Humanitárias', key: 'humanitaria' },
            { label: 'Exercícios Anfíbios', key: 'anfibias' },
            { label: 'Ensino & Instrução', key: 'ensino' },
            { label: 'Lições Aprendidas', key: 'licoes' },
            { label: 'Relações Internacionais', key: 'internacional' },
            { label: 'Institucional', key: 'institucional' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-3.5 py-1.5 rounded-full font-medium shrink-0 transition-all ${
                activeFilter === tab.key
                  ? 'bg-[#002e32] text-white font-bold shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. DESTAQUE PRINCIPAL (HERO POST / MANCHETE HORIZONTAL) */}
      <section className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden relative group">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#bad435] via-[#566500] to-[#002e32]"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[420px] overflow-hidden bg-[#002e32]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBordcRhJV881KyBjCc8gKfK-Qe2MmDNHQ7-g_AMxwl4XUDiUfBmGPgOKE6dNp5xMJXu6j8lkvTF-FkR5EzpfgFCMQmcEg4yCItL0WYgcOqOXWPCzuen9uVCNQA0KEdbaLO_3DV0v2_cQIadYQIcOi8PCVq_HYbFQOJq3KuZ01mERs5o_txgybT8-xdtA1MOqYGF4EYRPxY8MDKUvPTp2g3OzW0jp3ji2SaWa2t1rLnfLy_Y2JpmZ02"
              alt="Oficiais no Seminário Internacional do CFN"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#bad435] text-[#1c1c1c] font-technical-code text-xs font-extrabold uppercase shadow-sm tracking-wider">
                DESTAQUE OPERACIONAL
              </span>
              <span className="px-2.5 py-1 rounded bg-[#002e32]/90 text-white font-technical-code text-xs backdrop-blur-sm">
                COMUNICAÇÃO ESTRATÉGICA
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between bg-white">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-slate-500 font-technical-code text-xs">
                <span className="flex items-center gap-1 text-[#002e32] font-semibold">
                  <span className="material-symbols-outlined text-[16px] text-[#566500]">calendar_today</span>
                  01 Setembro, 2026
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  5 min de leitura
                </span>
                <span>•</span>
                <span className="text-[#566500] font-bold">SECOM / CTDDCFN</span>
              </div>

              <h2
                onClick={() => onNavigate('inicio')}
                className="font-headline text-xl lg:text-2xl font-bold text-[#002e32] leading-tight hover:text-teal-800 transition-colors cursor-pointer"
              >
                II Seminário Internacional de Operações Humanitárias e Resposta a Desastres consolida cooperação multinacional anfíbia
              </h2>

              <p className="text-sm md:text-base text-slate-600 leading-relaxed line-clamp-4">
                Comandantes, adidos militares e especialistas internacionais discutiram, na sede do CTDDCFN, a doutrina integrada para emprego de forças anfíbias em calamidades de grande porte na Amazônia Azul e em missões de estabilização da ONU, padronizando protocolos de interoperabilidade.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 font-technical-code text-xs">
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">#AjudaHumanitária</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">#AmazôniaAzul</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">#CooperaçãoNaval</span>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate('missao')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#002e32] hover:bg-teal-900 text-white font-semibold text-xs md:text-sm uppercase tracking-wider transition-all shadow-sm group/cta"
              >
                <span>Ler matéria completa</span>
                <span className="material-symbols-outlined text-[18px] group-hover/cta:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GRADE PRINCIPAL DE NOTÍCIAS & ARTIGOS (GRID RESPONSIVO) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#566500] text-[22px]">newspaper</span>
            <h3 className="font-headline text-xl font-bold text-[#002e32]">Publicações Recentes</h3>
          </div>
          <span className="font-technical-code text-slate-500 text-xs">Atualizado em tempo real pelo SECOM</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative h-48 bg-[#002e32] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded bg-[#002e32]/90 text-white font-technical-code text-[11px] font-bold uppercase backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-500 font-technical-code text-xs">
                    <span className="material-symbols-outlined text-[15px] text-[#566500]">event</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4
                    onClick={() => onNavigate(article.linkSlug)}
                    className="font-headline text-base font-bold text-[#002e32] group-hover:text-teal-800 transition-colors line-clamp-2 leading-snug cursor-pointer"
                  >
                    {article.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <span className="font-technical-code text-[11px] text-slate-400">Por: {article.author}</span>
                  <button
                    onClick={() => onNavigate(article.linkSlug)}
                    className="inline-flex items-center gap-1 text-xs text-[#566500] font-bold hover:text-[#002e32] transition-colors"
                  >
                    <span>Acessar</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. MÓDULOS DE APOIO: BOLETINS RÁPIDOS & MALA DIRETA DOUTRINÁRIA */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
        {/* Boletins Rápidos */}
        <div className="lg:col-span-7 bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#002e32] text-[20px]">feed</span>
                <h4 className="font-headline text-lg font-bold text-[#002e32]">Boletins &amp; Publicações Rápidas</h4>
              </div>
              <button
                onClick={() => onNavigate('flash-doutrinario')}
                className="font-technical-code text-xs text-[#566500] font-bold hover:underline"
              >
                Ver arquivo geral
              </button>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors flex items-start gap-3 border border-slate-100">
                <div className="w-8 h-8 rounded bg-[#002e32] text-[#bad435] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">menu_book</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-technical-code text-[11px] text-[#566500] font-bold uppercase">Publicação Oficial</span>
                    <span className="font-technical-code text-[11px] text-slate-400">Hoje, 09:15</span>
                  </div>
                  <p className="text-sm font-bold text-[#002e32] truncate">
                    Revista Âncoras e Fuzis nº 54 já disponível para download
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-1">
                    Edição especial focada em Guerra Eletrônica e Sistemas Aéreos Não Tripulados nas praias de desembarque.
                  </p>
                </div>
                <button
                  onClick={() => alert('Download do PDF da Revista Âncoras e Fuzis nº 54 iniciado.')}
                  className="p-1.5 text-slate-400 hover:text-[#002e32]"
                  title="Baixar PDF"
                >
                  <span className="material-symbols-outlined text-[20px]">download</span>
                </button>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors flex items-start gap-3 border border-slate-100">
                <div className="w-8 h-8 rounded bg-[#002e32] text-[#bad435] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">school</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-technical-code text-[11px] text-[#566500] font-bold uppercase">Edital Acadêmico</span>
                    <span className="font-technical-code text-[11px] text-slate-400">Ontem, 16:40</span>
                  </div>
                  <p className="text-sm font-bold text-[#002e32] truncate">
                    Abertura de Inscrições para o Banco de Temas de TCC Doutrinário
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-1">
                    Militares do quadro de aperfeiçoamento podem submeter propostas até 30 de outubro.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('curriculos')}
                  className="p-1.5 text-slate-400 hover:text-[#002e32]"
                  title="Ver Edital"
                >
                  <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                </button>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors flex items-start gap-3 border border-slate-100">
                <div className="w-8 h-8 rounded bg-[#002e32] text-[#bad435] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-technical-code text-[11px] text-[#566500] font-bold uppercase">PLACAPE 2027</span>
                    <span className="font-technical-code text-[11px] text-slate-400">28 Ago, 2026</span>
                  </div>
                  <p className="text-sm font-bold text-[#002e32] truncate">
                    Atualização do Calendário de Cursos de Especialização e Aperfeiçoamento
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-1">
                    Grade das instruções práticas de Sobrevivência e Operações em Área Urbana consolidada.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('curriculos')}
                  className="p-1.5 text-slate-400 hover:text-[#002e32]"
                  title="Acessar PLACAPE"
                >
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between font-technical-code text-slate-500 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bad435]"></span>
              Canal exclusivo para o efetivo da ativa e reserva do CFN
            </span>
          </div>
        </div>

        {/* Mala Direta Doutrinária */}
        <div className="lg:col-span-5 bg-[#002E32] text-white rounded-xl p-6 shadow-sm flex flex-col justify-between space-y-5 relative overflow-hidden">
          <div className="space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#bad435]/20 text-[#bad435] font-technical-code text-xs font-bold uppercase">
              <span className="material-symbols-outlined text-[15px]">mark_email_read</span>
              <span>MALA DIRETA TÁTICA</span>
            </div>
            <h4 className="font-headline text-xl font-bold text-white">
              Receba Informes Doutrinários no seu Zimbra / MB
            </h4>
            <p className="text-xs text-teal-100 leading-relaxed">
              Cadastre seu endereço funcional para receber semanalmente resumos de novas diretrizes, boletins da SECOM e lançamentos de revistas operacionais.
            </p>
          </div>

          <form onSubmit={handleNewsletter} className="space-y-3 relative z-10">
            <div className="space-y-1">
              <label className="font-technical-code text-[11px] text-teal-200 uppercase">
                E-mail Institucional (@marinha.mil.br)
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-teal-300 text-[18px]">
                  mail
                </span>
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="exemplo.militar@marinha.mil.br"
                  required
                  className="w-full pl-10 pr-3 py-2 bg-black/35 border border-teal-700 rounded-lg text-xs text-white placeholder-teal-400 focus:outline-none focus:border-[#bad435] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-lg bg-[#bad435] hover:bg-[#a8c428] text-[#1c1c1c] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm active:scale-98"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>Cadastrar para Notificações</span>
            </button>

            {newsletterSuccess && (
              <p className="font-technical-code text-xs text-[#bad435] font-bold text-center bg-black/40 py-1 rounded">
                Inscrição registrada no serviço SECOM/CTDDCFN com sucesso!
              </p>
            )}

            <p className="font-technical-code text-[10px] text-teal-300/80 text-center">
              Transmissão em conformidade com as normas de segurança da informação da MB.
            </p>
          </form>
        </div>
      </section>

      {/* 6. PAGINAÇÃO TÁTICA */}
      <section className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 pb-2 border-t border-slate-200">
        <div className="font-technical-code text-xs text-slate-500">
          Página <span className="font-bold text-[#002e32]">1</span> de <span className="font-bold text-[#002e32]">8</span> (Total: 48 matérias homologadas)
        </div>
        <nav className="flex items-center gap-1.5">
          <button className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-400 cursor-not-allowed font-technical-code text-xs flex items-center gap-1" disabled>
            <span className="material-symbols-outlined text-[16px]">chevron_left</span>
            <span>Anterior</span>
          </button>
          <button className="w-8 h-8 rounded-lg bg-[#002e32] text-white font-technical-code text-xs font-bold flex items-center justify-center shadow-sm">
            1
          </button>
          <button className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-technical-code text-xs font-semibold flex items-center justify-center transition-colors">
            2
          </button>
          <button className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-technical-code text-xs font-semibold flex items-center justify-center transition-colors">
            3
          </button>
          <span className="px-1 text-slate-400 font-technical-code text-xs">...</span>
          <button className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-technical-code text-xs font-semibold flex items-center gap-1 transition-colors">
            <span>Próxima</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </nav>
      </section>
    </div>
  );
};
