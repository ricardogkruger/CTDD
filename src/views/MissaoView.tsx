import React, { useState } from 'react';

export const MissaoView: React.FC = () => {
  const [activeCluster, setActiveCluster] = useState<'all' | 'doutrina' | 'ensino' | 'licoes' | 'gestao'>('all');

  const tasks = [
    { num: 'I', title: 'Gestão do Conhecimento', cat: 'doutrina', desc: 'Contribuir para o desenvolvimento do Sistema de Gestão do Conhecimento do Corpo de Fuzileiros Navais (SGC-CFN);', ref: 'REG-ART-01', icon: 'hub' },
    { num: 'II', title: 'Plataformas Digitais', cat: 'doutrina', desc: 'Gerenciar o Portal do Conhecimento do CTDDCFN;', ref: 'REG-ART-02', icon: 'language' },
    { num: 'III', title: 'Interoperabilidade', cat: 'doutrina', desc: 'Participar do desenvolvimento doutrinário referente ao emprego das Forças Armadas, integrando o desenvolvimento doutrinário da MB e do CFN;', ref: 'REG-ART-03', icon: 'military_tech' },
    { num: 'IV', title: 'Pesquisa Internacional', cat: 'doutrina', desc: 'Pesquisar e acompanhar o desenvolvimento doutrinário de outras Forças Armadas, nacionais e estrangeiras;', ref: 'REG-ART-04', icon: 'public' },
    { num: 'V', title: 'Manuais e Publicações', cat: 'doutrina', desc: 'Desenvolver e formular o detalhamento doutrinário referente ao emprego das Forças Armadas de acordo com a demanda do setor operativo e de ensino;', ref: 'REG-ART-05', icon: 'menu_book' },
    { num: 'VI', title: 'Análise de Conflitos', cat: 'doutrina', desc: 'Acompanhar e analisar conflitos armados, identificando tendências e extraindo conclusões em prol do aperfeiçoamento doutrinário do CFN;', ref: 'REG-ART-06', icon: 'troubleshoot' },
    { num: 'VII', title: 'Debates & Eventos', cat: 'doutrina', desc: 'Realizar mesas redondas, workshops, jornadas e seminários a fim de discutir novos conceitos e assuntos de interesse do desenvolvimento doutrinário do CFN;', ref: 'REG-ART-07', icon: 'forum' },
    { num: 'VIII', title: 'Experimentação Tática', cat: 'doutrina', desc: 'Conduzir experimentos doutrinários para a validação de novas técnicas, táticas e procedimentos, bem como dos conceitos em desenvolvimento, utilizando-se de simuladores, jogos de guerra e de exercícios operativos;', ref: 'REG-ART-08', icon: 'science' },
    { num: 'IX', title: 'Difusão Doutrinária', cat: 'doutrina', desc: 'Disseminar a doutrina do CFN e os demais conhecimentos de interesse dos Fuzileiros Navais;', ref: 'REG-ART-09', icon: 'campaign' },
    { num: 'X', title: 'Leitura Profissional', cat: 'ensino', desc: 'Conduzir o Programa de Leitura Profissional do Corpo de Fuzileiros Navais (CFN);', ref: 'REG-ART-10', icon: 'auto_stories' },
    { num: 'XI', title: 'Assessoria Operativa', cat: 'doutrina', desc: 'Prestar assessoria doutrinária nos exercícios e adestramentos das unidades operativas do CFN;', ref: 'REG-ART-11', icon: 'support' },
    { num: 'XII', title: 'Controle Operativo', cat: 'doutrina', desc: 'Apoiar o controle dos exercícios e adestramentos das unidades operativas do CFN;', ref: 'REG-ART-12', icon: 'track_changes' },
    { num: 'XIII', title: 'Supervisão Pedagógica', cat: 'ensino', desc: 'Planejar, administrar, controlar e conduzir a supervisão técnica, pedagógica e doutrinária das atividades de ensino desenvolvidas no âmbito do CFN, observando as normas da Diretoria de Ensino da Marinha (DEnsM);', ref: 'REG-ART-13', icon: 'school' },
    { num: 'XIV', title: 'Pós-Graduação', cat: 'ensino', desc: 'Gerenciar um programa que coordene as pós-graduações de interesse do CFN;', ref: 'REG-ART-14', icon: 'workspace_premium' },
    { num: 'XV', title: 'Parcerias Acadêmicas', cat: 'ensino', desc: 'Estabelecer parcerias com a Academia em proveito dos cursos de carreira de interesse do CFN;', ref: 'REG-ART-15', icon: 'handshake' },
    { num: 'XVI', title: 'Currículos Atualizados', cat: 'ensino', desc: 'Manter os itinerários formativos e os currículos dos cursos do CFN atualizados em relação aos desenvolvimentos doutrinários e aderentes às tarefas do CFN;', ref: 'REG-ART-16', icon: 'update' },
    { num: 'XVII', title: 'EaD & Acesso', cat: 'ensino', desc: 'Facilitar o acesso ao conhecimento de interesse do CFN a todos os militares por meio de ferramentas de ensino a distância;', ref: 'REG-ART-17', icon: 'devices' },
    { num: 'XVIII', title: 'Cultura de Aprendizagem', cat: 'ensino', desc: 'Desenvolver uma cultura de aprendizagem contínua no CFN;', ref: 'REG-ART-18', icon: 'psychology' },
    { num: 'XIX', title: 'Programas de Treinamento', cat: 'ensino', desc: 'Apoiar as unidades operativas do CFN por meio do estabelecimento de Programas de Treinamento;', ref: 'REG-ART-19', icon: 'fitness_center' },
    { num: 'XX', title: 'Prontidão Operativa', cat: 'doutrina', desc: 'Contribuir para o aprimoramento do preparo das unidades do CFN por meio do acompanhamento de suas atividades operativas, apoiando as mesmas no que diz respeito à avaliação, com o estabelecimento de listas de tarefas, a fim de alcançar o estado de prontidão desejado;', ref: 'REG-ART-20', icon: 'checklist' },
    { num: 'XXI', title: 'Simulação Avançada', cat: 'doutrina', desc: 'Aplicar métodos de simulação a fim de desenvolver e ampliar os programas de treinamento a cargo do CTDDCFN;', ref: 'REG-ART-21', icon: 'sports_esports' },
    { num: 'XXII', title: 'Gestão de Lições', cat: 'licoes', desc: 'Gerenciar o Sistema de Lições Aprendidas do CFN por meio de um Programa de Lições Aprendidas que consolide experiências adquiridas em operações, exercícios, intercâmbios, simpósios e cursos;', ref: 'REG-ART-22', icon: 'history_edu' },
    { num: 'XXIII', title: 'Coleta Operativa', cat: 'licoes', desc: 'Coletar Observações por meio do acompanhamento de operações, exercícios, intercâmbios, simpósios e cursos;', ref: 'REG-ART-23', icon: 'visibility' },
    { num: 'XXIV', title: 'Pesquisa Acadêmica MB', cat: 'licoes', desc: 'Coletar Observações decorrentes das conclusões alcançadas nos trabalhos acadêmicos dos cursos de carreira (Curso de Aperfeiçoamento Avançado do Corpo de Fuzileiros Navais – C-ApA-CFN, Curso de Estado-Maior para Oficiais Superiores – C-EMOS e Curso de Política e Estratégia Marítimas – C-PEM);', ref: 'REG-ART-24', icon: 'import_contacts' },
    { num: 'XXV', title: 'Validação de Tendências', cat: 'licoes', desc: 'Analisar e validar as Observações obtidas na fase de coleta a fim de identificar Lições e Tendências operativas de interesse do CFN;', ref: 'REG-ART-25', icon: 'analytics' },
    { num: 'XXVI', title: 'Boas Práticas', cat: 'licoes', desc: 'Contribuir com a integração e implementação das Boas Práticas identificadas e das soluções concebidas convertidas em Lições Aprendidas;', ref: 'REG-ART-26', icon: 'recommend' },
    { num: 'XXVII', title: 'Monitoramento Contínuo', cat: 'licoes', desc: 'Monitorar a adoção das Boas Práticas e Lições Aprendidas no âmbito do CFN;', ref: 'REG-ART-27', icon: 'monitoring' },
    { num: 'XXVIII', title: 'Disseminação de Lições', cat: 'licoes', desc: 'Disseminar as Observações, Lições, Tendências, Boas Práticas e Lições Aprendidas de interesse do CFN por meio do Sistema de Lições Aprendidas;', ref: 'REG-ART-28', icon: 'share' },
    { num: 'XXIX', title: 'Supervisão de OM', cat: 'gestao', desc: 'Supervisionar as atividades e os serviços administrativos e técnicos executados pelas OM subordinadas;', ref: 'REG-ART-29', icon: 'corporate_fare' },
    { num: 'XXX', title: 'Gestão & Logística', cat: 'gestao', desc: 'Executar tarefas administrativas, gestão de pessoal, controle financeiro, gestão dos recursos de Tecnologia da Informação, logística e serviços gerais, com o apoio do CIASC.', ref: 'REG-ART-30', icon: 'admin_panel_settings' },
  ];

  const filteredTasks = tasks.filter(t => activeCluster === 'all' || t.cat === activeCluster);

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
          <span className="text-[#002e32] font-bold">Missão Institucional</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700 font-semibold uppercase">
            DIRETRIZ GERAL VIGENTE
          </span>
          <span className="px-2 py-0.5 bg-[#002e32] text-white rounded font-bold uppercase">
            DOC-ESTR-01
          </span>
        </div>
      </div>

      {/* Banner de Título */}
      <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#002e32] via-[#00383d] to-[#bad435]"></div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-1 max-w-3xl">
            <span className="font-technical-code text-xs text-[#566500] uppercase font-bold tracking-widest flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">shield</span>
              Marinha do Brasil • CFN
            </span>
            <h1 className="font-headline text-2xl sm:text-3xl font-bold text-[#002e32] tracking-tight">
              Missão Institucional
            </h1>
            <p className="text-sm md:text-base text-slate-600">
              Propósito e Atribuições Estratégicas do Comando do Treinamento e do Desenvolvimento Doutrinário
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-technical-code text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-base">print</span>
              <span>IMPRIMIR</span>
            </button>
            <button
              onClick={() => alert('Diretriz Institucional de Missão do CTDDCFN exportada com sucesso.')}
              className="px-3.5 py-2 bg-[#002e32] hover:bg-teal-900 text-white rounded font-technical-code text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span className="material-symbols-outlined text-[#bad435] text-base">download</span>
              <span>EXPORTAR DIRETRIZ</span>
            </button>
          </div>
        </div>
      </section>

      {/* Propósito Principal - Card de Destaque */}
      <section className="bg-[#002E32] text-white rounded-xl shadow-md p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-[#bad435]">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <div>
              <span className="font-technical-code text-xs text-[#bad435] uppercase tracking-wider block font-bold">
                PROPÓSITO SUPERIOR
              </span>
              <span className="font-technical-code text-xs text-teal-200">ESTADO-MAIOR DA ARMADA • CFN</span>
            </div>
          </div>

          <blockquote className="font-headline text-base sm:text-lg text-white leading-relaxed max-w-4xl tracking-normal">
            “O CTDDCFN tem o propósito de contribuir para o desenvolvimento da doutrina dos Fuzileiros Navais em um contexto doutrinário mais amplo, estabelecido pelo Estado-Maior da Armada e para o treinamento dos Fuzileiros Navais, abarcando a instrução e o adestramento dos recursos humanos, visando ao seu emprego nas operações e ações de guerra naval, de emprego limitado da força e nas atividades benignas da Marinha.”
          </blockquote>

          <div className="pt-2 flex flex-wrap items-center gap-3 font-technical-code text-xs text-teal-200">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#bad435]"></span>
              GUERRA NAVAL
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#bad435]"></span>
              EMPREGO LIMITADO DA FORÇA
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#bad435]"></span>
              ATIVIDADES BENIGNAS
            </span>
          </div>
        </div>
      </section>

      {/* Seção das 30 Tarefas com Filtros */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#002e32]">format_list_numbered</span>
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#002e32] uppercase">
              Tarefas Principais do CTDDCFN
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            Para a consecução do seu propósito, cabe ao CTDDCFN as 30 tarefas regimentais categorizadas abaixo:
          </p>
        </div>

        {/* Botoes de Cluster */}
        <div className="flex items-center gap-1 flex-wrap p-1 bg-slate-100 rounded-lg text-xs font-technical-code">
          {[
            { key: 'all', label: 'TODAS (30)' },
            { key: 'doutrina', label: 'DOUTRINA & SGC' },
            { key: 'ensino', label: 'ENSINO & FORMAÇÃO' },
            { key: 'licoes', label: 'LIÇÕES APRENDIDAS' },
            { key: 'gestao', label: 'GESTÃO & SUPORTE' }
          ].map(b => (
            <button
              key={b.key}
              onClick={() => setActiveCluster(b.key as any)}
              className={`px-2.5 py-1 rounded transition-colors uppercase font-bold ${
                activeCluster === b.key
                  ? 'bg-[#002e32] text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Tarefas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTasks.map(t => (
          <div
            key={t.num}
            className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded bg-[#002e32] text-[#bad435] font-headline text-sm flex items-center justify-center font-bold">
                  {t.num}
                </span>
                <span className="px-2 py-0.5 bg-slate-100 font-technical-code text-[11px] text-[#566500] rounded uppercase font-semibold">
                  {t.title}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {t.desc}
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-slate-400 font-technical-code text-xs">
              <span>REF: {t.ref}</span>
              <span className="material-symbols-outlined text-[#002e32] text-base">{t.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bloco Final Extraordinário */}
      <section className="bg-slate-100 rounded-xl p-5 border border-slate-200 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-10 h-10 rounded bg-[#002e32] text-[#bad435] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-2xl">emergency</span>
          </div>
          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-2">
              <span className="font-technical-code text-xs uppercase font-bold text-[#002e32]">
                Disposição Tática Extraordinária
              </span>
              <span className="px-2 py-0.5 bg-red-100 text-red-800 font-technical-code text-[10px] font-bold uppercase rounded">
                Prontidão Especial
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Em situação de mobilização, conflito, estado de defesa, estado de sítio, intervenção federal e em regimes especiais, ao CTDDCFN cabem as tarefas que lhe forem atribuídas pelas Normas e Diretrizes referentes à Mobilização Marítima e as emanadas pelo Comandante-Geral do Corpo de Fuzileiros Navais (ComGerCFN).
            </p>
          </div>
          <div className="text-right hidden sm:block font-technical-code text-xs text-slate-500 shrink-0">
            <p>AUTORIDADE EMANADORA</p>
            <p className="text-[#002e32] font-bold">ComGerCFN / MB</p>
          </div>
        </div>
      </section>
    </div>
  );
};
