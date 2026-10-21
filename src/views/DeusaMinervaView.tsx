import React, { useState } from 'react';

export const DeusaMinervaView: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const officialText = `Filha de Zeus e Metis, Atena (mitologia grega) ou Minerva (mitologia romana) nasceu reunindo a mentalidade guerreira de seu pai com a astúcia de sua mãe. Considerada e amada pelos gregos como a Deusa da Guerra Estratégica, sempre lutou com inteligência e engenhosidade. Para os romanos, Minerva revela-se também a Deusa da Sabedoria e da Arte.`;

  const copyOfficialText = () => {
    navigator.clipboard.writeText(officialText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full flex flex-col space-y-6">
      {/* Top Breadcrumb & Military Metadata Strip (Stitch Spec) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-xs">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-technical-code text-label-sm uppercase tracking-wider text-on-surface-variant">
          <span className="flex items-center gap-1 hover:text-graphite-teal-deep transition-colors">
            <span className="material-symbols-outlined text-sm">home</span>
            Início
          </span>
          <span className="text-outline-variant">/</span>
          <span className="hover:text-graphite-teal-deep transition-colors">Institucional</span>
          <span className="text-outline-variant">/</span>
          <span className="text-graphite-teal-deep font-bold">Deusa Minerva / Atena</span>
        </nav>
        <div className="flex items-center gap-space-sm">
          <span className="px-2.5 py-1 bg-surface-container-high text-graphite-teal-deep font-technical-code text-xs uppercase rounded flex items-center gap-1.5 shadow-xs">
            <span className="material-symbols-outlined text-xs text-renewal-green-dark">auto_stories</span>
            CÓD: DOUTRINA-SIMB-004
          </span>
          <span className="px-2.5 py-1 bg-surface-container-low text-on-surface-variant font-technical-code text-xs uppercase rounded shadow-xs">
            OSTENSIVO
          </span>
        </div>
      </div>

      {/* Editorial Header Block (Stitch Spec) */}
      <section className="relative bg-pure-white p-6 sm:p-8 rounded-xl shadow-sm border border-outline-variant overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-graphite-teal-deep via-graphite-teal-surface to-renewal-green"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="space-y-space-xs max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-surface-container text-graphite-teal-deep font-label-sm text-label-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm text-graphite-teal-surface">shield</span>
              Símbolo Institucional da Doutrina Naval
            </div>
            <h1 className="font-headline-lg text-headline-lg text-graphite-teal-deep tracking-tight font-extrabold uppercase mt-1">
              Deusa Minerva / Atena
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Patrona da Sabedoria Estratégica, do Conhecimento Doutrinário e da Arte da Guerra dos Fuzileiros Navais.
            </p>
          </div>

          {/* Quick Emblem Status Badge */}
          <div className="flex items-center gap-3 p-space-sm bg-canvas-clean rounded-lg shadow-xs border border-outline-variant shrink-0">
            <div className="w-10 h-10 rounded bg-graphite-teal-deep text-renewal-green flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">local_police</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm uppercase text-graphite-industrial font-bold leading-tight">
                HERÁLDICA &amp; DOUTRINA
              </p>
              <p className="font-technical-code text-technical-code text-secondary leading-tight mt-0.5">
                TRADIÇÃO COMBATENTE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Dual-Column Bento Composition (Stitch Spec) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        {/* Coluna Esquerda: Busto Escultural e Ficha Técnica (5 cols) */}
        <div className="lg:col-span-5 space-y-space-md">
          {/* Card Escultural Principal */}
          <div className="bg-pure-white rounded-xl shadow-sm border border-outline-variant overflow-hidden flex flex-col items-center">
            <div className="w-full bg-gradient-to-b from-cool-light-grey to-surface-container-low p-6 sm:p-8 flex justify-center items-center relative">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#002E32_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              {/* Sculpture Artifact Display */}
              <div className="relative w-64 sm:w-72 max-w-full drop-shadow-xl transition-transform duration-500 hover:scale-[1.02] group">
                <button
                  type="button"
                  onClick={() => setImageModalOpen(true)}
                  className="absolute top-2 right-2 p-1.5 rounded-lg bg-pure-white/90 hover:bg-pure-white text-graphite-teal-deep shadow transition opacity-0 group-hover:opacity-100 z-20 flex items-center gap-1 text-xs font-mono"
                  title="Ampliar visualização do Busto"
                >
                  <span className="material-symbols-outlined text-base">zoom_in</span>
                  <span>Ampliar</span>
                </button>

                <img
                  src="/assets/aistudio/minerva_bust.png"
                  alt="Busto Oficial da Deusa Minerva com elmo coríntio de combate e pedestal gravado MINERVA"
                  className="w-full h-auto object-contain mx-auto drop-shadow-md cursor-pointer"
                  onClick={() => setImageModalOpen(true)}
                />
              </div>
            </div>

            {/* Legenda e Ficha Iconográfica */}
            <div className="w-full p-space-md sm:p-space-lg space-y-space-sm bg-pure-white border-t border-outline-variant">
              <div className="flex items-center justify-between pb-space-xs">
                <span className="font-label-sm text-label-sm uppercase text-graphite-industrial font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-renewal-green-dark">history_edu</span>
                  Busto Oficial de Minerva
                </span>
                <span className="px-2 py-0.5 rounded bg-renewal-green/20 text-graphite-teal-deep font-technical-code text-technical-code uppercase font-semibold">
                  ACERVO HISTÓRICO
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Representação escultórica da divindade armada da estratégia, sabedoria e vitória. Integrada às tradições e distintivos doutrinários do CTDDCFN como emblema maior da reflexão intelectual aplicada à prontidão operativa dos Fuzileiros Navais.
              </p>
              <div className="grid grid-cols-2 gap-space-sm pt-space-xs font-technical-code text-technical-code">
                <div className="p-space-xs bg-surface-container-low rounded border border-outline-variant/60">
                  <span className="block text-outline text-[11px] uppercase">Origem Simbólica</span>
                  <span className="text-graphite-industrial font-semibold">Grécia / Roma Antiga</span>
                </div>
                <div className="p-space-xs bg-surface-container-low rounded border border-outline-variant/60">
                  <span className="block text-outline text-[11px] uppercase">Atributo Central</span>
                  <span className="text-graphite-industrial font-semibold">Guerra Estratégica</span>
                </div>
              </div>
            </div>
          </div>

          {/* Virtudes Card (Micro-Bento Stitch) */}
          <div className="bg-graphite-teal-deep text-on-primary rounded-xl p-space-lg shadow-sm space-y-space-sm relative overflow-hidden border border-teal-900">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-renewal-green opacity-10 blur-xl pointer-events-none"></div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-renewal-green text-xl">military_tech</span>
              <h3 className="font-headline-sm text-headline-sm uppercase text-pure-white tracking-wide">
                Pilares de Atena no CFN
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
              <div className="p-space-sm bg-graphite-teal-surface/80 rounded-lg border border-white/5">
                <div className="flex items-center gap-1.5 text-renewal-green font-label-md text-label-md uppercase mb-0.5">
                  <span className="material-symbols-outlined text-base">psychology</span>
                  Sapientia
                </div>
                <p className="font-body-sm text-body-sm text-surface-variant">Conhecimento tático fundamentado e rigor analítico.</p>
              </div>
              <div className="p-space-sm bg-graphite-teal-surface/80 rounded-lg border border-white/5">
                <div className="flex items-center gap-1.5 text-renewal-green font-label-md text-label-md uppercase mb-0.5">
                  <span className="material-symbols-outlined text-base">explore</span>
                  Stratēgikē
                </div>
                <p className="font-body-sm text-body-sm text-surface-variant">Planejamento metódico antecipatório frente ao incerto.</p>
              </div>
              <div className="p-space-sm bg-graphite-teal-surface/80 rounded-lg border border-white/5">
                <div className="flex items-center gap-1.5 text-renewal-green font-label-md text-label-md uppercase mb-0.5">
                  <span className="material-symbols-outlined text-base">construction</span>
                  Ingenium
                </div>
                <p className="font-body-sm text-body-sm text-surface-variant">Engenhosidade operacional e adaptação dinâmica.</p>
              </div>
              <div className="p-space-sm bg-graphite-teal-surface/80 rounded-lg border border-white/5">
                <div className="flex items-center gap-1.5 text-renewal-green font-label-md text-label-md uppercase mb-0.5">
                  <span className="material-symbols-outlined text-base">verified</span>
                  Constantia
                </div>
                <p className="font-body-sm text-body-sm text-surface-variant">Firmeza de caráter e disciplina inegociável em combate.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Direita: Narrativa Institucional & Aplicação Doutrinária (7 cols) */}
        <div className="lg:col-span-7 space-y-space-lg">
          {/* Texto Oficial / Manuscrito Institucional */}
          <article className="bg-pure-white rounded-xl p-6 sm:p-8 shadow-sm border border-outline-variant space-y-space-md">
            <div className="flex items-center justify-between gap-2 pb-space-xs border-b border-outline-variant">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-renewal-green rounded-full"></span>
                <h2 className="font-headline-sm text-headline-sm uppercase text-graphite-teal-deep tracking-tight">
                  A Mitologia e a Vocação da Sabedoria
                </h2>
              </div>
              <button
                onClick={copyOfficialText}
                className="px-2.5 py-1 bg-surface-container hover:bg-surface-container-high text-graphite-teal-deep font-technical-code text-xs rounded transition flex items-center gap-1"
                title="Copiar texto oficial"
              >
                <span className="material-symbols-outlined text-xs">
                  {copied ? 'check' : 'content_copy'}
                </span>
                <span>{copied ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>

            {/* Lead Quote / Citação de Destaque */}
            <div className="p-space-md sm:p-space-lg bg-cool-light-grey rounded-lg relative border border-outline-variant/60">
              <span className="material-symbols-outlined text-graphite-teal-deep/20 text-5xl absolute top-2 right-3 select-none pointer-events-none">
                format_quote
              </span>
              <p className="font-body-lg text-body-lg text-graphite-industrial font-medium italic leading-relaxed relative z-10">
                "{officialText}"
              </p>
              <div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant">
                <span className="font-label-sm text-label-sm uppercase font-bold text-graphite-teal-deep">
                  Tradição Doutrinária Naval
                </span>
                <span className="font-technical-code text-technical-code">
                  DOCUMENTO CTDDCFN-MEM-08
                </span>
              </div>
            </div>

            <div className="space-y-space-sm font-body-md text-body-md text-on-surface leading-relaxed">
              <p>
                Ao contrário das divindades associadas à fúria desmedida e ao combate cego, Minerva encarna a vitória obtida pelo cálculo lúcido, pela prudência e pelo domínio da arte militar. Na concepção da doutrina anfíbia, a força bruta é estéril se desprovida de discernimento tático e doutrina consolidada.
              </p>
              <p>
                O patronato de Minerva sobre os estabelecimentos de ensino e desenvolvimento doutrinário sintetiza a máxima de que <strong>a bravura precisa de método</strong> e <strong>a prontidão forja-se no estudo metódico da arte da guerra</strong>.
              </p>
            </div>
          </article>

          {/* Aplicação no CTDDCFN: 3 Cards Temáticos (Stitch Bento) */}
          <div className="space-y-space-sm">
            <div className="flex items-center justify-between px-space-xs">
              <h3 className="font-label-sm text-label-sm uppercase text-graphite-teal-deep font-bold tracking-wider">
                A Relação com a Doutrina de Fuzileiros Navais
              </h3>
              <span className="font-technical-code text-technical-code text-secondary font-bold">
                METODOLOGIA APLICADA
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
              {/* Card 1 */}
              <div className="bg-pure-white p-space-md rounded-xl shadow-sm border border-outline-variant flex flex-col justify-between space-y-space-sm hover:shadow-md hover:border-graphite-teal-deep transition-all">
                <div className="space-y-space-xs">
                  <div className="w-10 h-10 rounded-lg bg-surface-container text-graphite-teal-deep flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">auto_stories</span>
                  </div>
                  <h4 className="font-title-md text-title-md text-graphite-teal-deep font-bold">
                    Saber Doutrinário
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Compilação de lições aprendidas, produção de manuais técnicos e disseminação perene do conhecimento expedicionário.
                  </p>
                </div>
                <div className="pt-space-xs flex items-center gap-1 text-secondary font-label-sm text-label-sm font-semibold">
                  <span>Normatização</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-pure-white p-space-md rounded-xl shadow-sm border border-outline-variant flex flex-col justify-between space-y-space-sm hover:shadow-md hover:border-graphite-teal-deep transition-all">
                <div className="space-y-space-xs">
                  <div className="w-10 h-10 rounded-lg bg-surface-container text-graphite-teal-deep flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">neurology</span>
                  </div>
                  <h4 className="font-title-md text-title-md text-graphite-teal-deep font-bold">
                    Astúcia &amp; Estratégia
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Desenvolvimento do pensamento crítico e da capacidade de decisão autônoma nos quadros de comando em cenários complexos.
                  </p>
                </div>
                <div className="pt-space-xs flex items-center gap-1 text-secondary font-label-sm text-label-sm font-semibold">
                  <span>Processo Decisório</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-pure-white p-space-md rounded-xl shadow-sm border border-outline-variant flex flex-col justify-between space-y-space-sm hover:shadow-md hover:border-graphite-teal-deep transition-all">
                <div className="space-y-space-xs">
                  <div className="w-10 h-10 rounded-lg bg-surface-container text-graphite-teal-deep flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
                  </div>
                  <h4 className="font-title-md text-title-md text-graphite-teal-deep font-bold">
                    Engenhosidade Tática
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Inovação operacional contínua, emprego de novas tecnologias e domínio da guerra moderna multidomínio.
                  </p>
                </div>
                <div className="pt-space-xs flex items-center gap-1 text-secondary font-label-sm text-label-sm font-semibold">
                  <span>Evolução Técnica</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>

          {/* Drupal 10 Node Technical Mapping Card */}
          <div className="bg-surface-container-low p-space-md rounded-xl border border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <div className="space-y-1">
              <span className="font-label-sm text-label-sm uppercase font-bold text-graphite-teal-deep flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-secondary">database</span>
                Arquitetura Drupal 10
              </span>
              <p className="font-technical-code text-xs text-on-surface-variant">
                Node ID: <strong className="text-graphite-industrial">node/deusa-minerva</strong> • Content Type: <strong className="text-graphite-industrial">pagina_institucional</strong>
              </p>
              <p className="font-technical-code text-[11px] text-outline">
                Template Twig: <code className="bg-pure-white px-1.5 py-0.5 rounded border border-outline-variant">templates/content/node--deusa-minerva.html.twig</code>
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="px-2.5 py-1 bg-pure-white border border-outline-variant text-graphite-teal-deep font-technical-code text-xs rounded font-bold">
                ESTRUTURA HOMOLOGADA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Imagem Ampliada do Busto */}
      {imageModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#00181a]/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setImageModalOpen(false)}
        >
          <div
            className="relative bg-pure-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-white/20 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant">
              <div>
                <span className="text-[10px] font-technical-code font-bold uppercase tracking-wider text-[#566500]">
                  Patrimônio Artístico-Cultural do CTDDCFN
                </span>
                <h3 className="font-headline-sm text-base sm:text-lg font-bold text-graphite-teal-deep">
                  Busto da Deusa Minerva / Atena
                </h3>
              </div>
              <button
                onClick={() => setImageModalOpen(false)}
                className="p-1 rounded-lg text-outline hover:text-graphite-teal-deep hover:bg-surface-container transition"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="my-4 p-4 rounded-xl bg-gradient-to-b from-cool-light-grey to-surface-container-low flex items-center justify-center">
              <img
                src="/assets/aistudio/minerva_bust.png"
                alt="Busto Oficial de Minerva ampliado"
                className="max-h-[60vh] w-auto object-contain drop-shadow-xl"
              />
            </div>

            <div className="pt-2 border-t border-outline-variant text-center font-technical-code text-xs text-on-surface-variant">
              Escultura em bronze sobre pedestal metálico negro, símbolo da Guerra Estratégica e Sabedoria Militar.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
