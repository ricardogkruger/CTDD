import React, { useState } from 'react';

interface PrimaryNavProps {
  currentSlug: string;
  onNavigate: (slug: string) => void;
  onOpenCreatePage: () => void;
}

export const PrimaryNav: React.FC<PrimaryNavProps> = ({
  currentSlug,
  onNavigate,
  onOpenCreatePage,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-[#002E32] text-white shadow-md z-40 border-b border-[#002023] relative">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-semibold tracking-wider font-mono">
        {/* Navigation list */}
        <div className="flex items-center space-x-1 py-1 overflow-x-visible">
          {/* 1. Início */}
          <button
            onClick={() => {
              onNavigate('inicio');
              closeDropdown();
            }}
            className={`px-3 py-2.5 rounded flex items-center gap-1.5 transition ${
              currentSlug === 'inicio' ? 'bg-white/15 text-white font-bold' : 'text-slate-200 hover:bg-white/10'
            }`}
          >
            <span className="material-symbols-outlined text-sm text-[#BAD435]">home</span>
            <span>Início</span>
          </button>

          {/* 2. Departamentos (Mega Menu Dropdown) */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('departamentos')}
              className={`px-3 py-2.5 rounded flex items-center gap-1 transition ${
                openDropdown === 'departamentos'
                  ? 'bg-[#BAD435] text-[#1C1C1C] font-bold'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <span>Departamentos</span>
              <span className="material-symbols-outlined text-xs">expand_more</span>
            </button>

            {openDropdown === 'departamentos' && (
              <div
                onMouseLeave={closeDropdown}
                className="absolute left-0 top-full pt-2 w-[720px] md:w-[860px] z-50 animate-fadeIn"
              >
                <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-6 text-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
                  {/* Col 1 */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 pb-1.5 border-b border-slate-200 mb-2">
                        <span className="material-symbols-outlined text-[#002E32] text-sm">shield</span>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#002E32] font-mono">Gabinete & Assessorias</h4>
                      </div>
                      <ul className="space-y-1 text-xs">
                        {['03 Gabinete (GAB)', '04 Ass Com. Estratégica (SECOM)', '05 Ass Rel. Institucionais (ARIN)', '06 Ass Inteligência (INTEL)', '07 Ass Justiça e Disciplina (AJUD)'].map((name, i) => (
                          <li key={i}>
                            <button
                              onClick={() => {
                                onNavigate('inicio');
                                closeDropdown();
                              }}
                              className="w-full text-left px-2 py-1.5 rounded hover:bg-[#002E32]/5 hover:text-[#002E32] transition font-medium truncate block"
                            >
                              {name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center gap-2 pb-1.5 border-b border-slate-200 mb-2">
                        <span className="material-symbols-outlined text-[#002E32] text-sm">menu_book</span>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#002E32] font-mono">10 CDDFN</h4>
                      </div>
                      <ul className="space-y-1 text-xs">
                        {[
                          { title: '11 Div Integração Doutrinária', slug: 'flash-doutrinario' },
                          { title: '12 Div Pesquisa e Desenvolvimento', slug: 'fronteira-tecnologia' },
                          { title: '13 Div Formação Doutrinária', slug: 'ordem-interna' },
                          { title: '14 Div Gestão do Conhecimento', slug: 'ctddmarinst' },
                        ].map((item, i) => (
                          <li key={i}>
                            <button
                              onClick={() => {
                                onNavigate(item.slug);
                                closeDropdown();
                              }}
                              className="w-full text-left px-2 py-1.5 rounded hover:bg-[#002E32]/5 hover:text-[#002E32] transition font-medium truncate block"
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Col 2 */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 pb-1.5 border-b border-slate-200 mb-2">
                        <span className="material-symbols-outlined text-[#002E32] text-sm">school</span>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#002E32] font-mono">20 Dept Ensino</h4>
                      </div>
                      <ul className="space-y-1 text-xs">
                        {[
                          { title: '21 Div Sup Pedagógica (RACE)', slug: 'race' },
                          { title: '22 Div Sup Doutrinária (PLACAPE)', slug: 'placape' },
                          { title: '23 Div Adm de Cursos', slug: 'curriculos' },
                          { title: '24 Div Planejamento (Vagas 2027)', slug: 'vagas-2027' },
                          { title: 'Banco de Temas TCC C-ApA-CFN', slug: 'temas-tcc' },
                        ].map((item, i) => (
                          <li key={i}>
                            <button
                              onClick={() => {
                                onNavigate(item.slug);
                                closeDropdown();
                              }}
                              className="w-full text-left px-2 py-1.5 rounded hover:bg-[#002E32]/5 hover:text-[#002E32] transition font-medium truncate block"
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center gap-2 pb-1.5 border-b border-slate-200 mb-2">
                        <span className="material-symbols-outlined text-[#002E32] text-sm">military_tech</span>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#002E32] font-mono">30 Dept Treinamento</h4>
                      </div>
                      <ul className="space-y-1 text-xs">
                        {[
                          { title: '31 Div Prontidão (Ágata Amazônia)', slug: 'agata-amazonia' },
                          { title: '32 Div Apoio ao Adestramento', slug: 'curriculos' },
                          { title: '33 Div Programas Treinamento (PTTC)', slug: 'ctddmarinst' },
                        ].map((item, i) => (
                          <li key={i}>
                            <button
                              onClick={() => {
                                onNavigate(item.slug);
                                closeDropdown();
                              }}
                              className="w-full text-left px-2 py-1.5 rounded hover:bg-[#002E32]/5 hover:text-[#002E32] transition font-medium truncate block"
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Col 3 */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 pb-1.5 border-b border-slate-200 mb-2">
                        <span className="material-symbols-outlined text-[#002E32] text-sm">psychology</span>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#002E32] font-mono">40 Lições Aprendidas</h4>
                      </div>
                      <ul className="space-y-1 text-xs">
                        {[
                          { title: '41 Div Coleta (Ágata Amazônia)', slug: 'agata-amazonia' },
                          { title: '42 Div Análise (Podcast Doutrina)', slug: 'podcast-doutrinario' },
                          { title: '43 Div Monitoramento (Flash)', slug: 'flash-doutrinario' },
                        ].map((item, i) => (
                          <li key={i}>
                            <button
                              onClick={() => {
                                onNavigate(item.slug);
                                closeDropdown();
                              }}
                              className="w-full text-left px-2 py-1.5 rounded hover:bg-[#002E32]/5 hover:text-[#002E32] transition font-medium truncate block"
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center gap-2 pb-1.5 border-b border-slate-200 mb-2">
                        <span className="material-symbols-outlined text-[#002E32] text-sm">settings_suggest</span>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#002E32] font-mono">50 Administração</h4>
                      </div>
                      <ul className="space-y-1 text-xs">
                        {[
                          { title: '51 Div Finanças & Auxílio Transporte', slug: 'auxilio-transporte' },
                          { title: '52 Div Pessoal', slug: 'auxilio-transporte' },
                          { title: '55 Div Informática & Sistemas', slug: 'seg-prot-aut' },
                        ].map((item, i) => (
                          <li key={i}>
                            <button
                              onClick={() => {
                                onNavigate(item.slug);
                                closeDropdown();
                              }}
                              className="w-full text-left px-2 py-1.5 rounded hover:bg-[#002E32]/5 hover:text-[#002E32] transition font-medium truncate block"
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Sites */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('sites')}
              className={`px-3 py-2.5 rounded flex items-center gap-1 transition ${
                openDropdown === 'sites' ? 'bg-[#BAD435] text-[#1C1C1C] font-bold' : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <span>Sites</span>
              <span className="material-symbols-outlined text-xs">expand_more</span>
            </button>
            {openDropdown === 'sites' && (
              <div
                onMouseLeave={closeDropdown}
                className="absolute left-0 top-full pt-2 w-56 z-50 bg-white rounded-lg shadow-xl border border-slate-200 p-2 text-slate-800 font-sans"
              >
                <div className="px-2 py-1 text-[10px] font-bold uppercase text-slate-400 font-mono">Comandos da MB</div>
                {['CGCFN', 'CPesCFN', 'ComFFE', 'CMatCFN'].map((site, i) => (
                  <a
                    key={i}
                    href="https://www.marinha.mil.br"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-slate-100 text-xs font-semibold text-slate-700"
                  >
                    <span>{site}</span>
                    <span className="material-symbols-outlined text-xs text-slate-400">open_in_new</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* 4. Sistemas */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('sistemas')}
              className={`px-3 py-2.5 rounded flex items-center gap-1 transition ${
                openDropdown === 'sistemas' ? 'bg-[#BAD435] text-[#1C1C1C] font-bold' : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <span>Sistemas</span>
              <span className="material-symbols-outlined text-xs">expand_more</span>
            </button>
            {openDropdown === 'sistemas' && (
              <div
                onMouseLeave={closeDropdown}
                className="absolute left-0 top-full pt-2 w-80 z-50 bg-white rounded-xl shadow-2xl border border-slate-200 p-3 text-slate-800 font-sans"
              >
                <div className="px-2 py-1 text-[10px] font-bold uppercase text-slate-400 font-mono">Sistemas Operacionais &amp; Gestão</div>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  {['SIGeP', 'SiGDEM', 'SIGAD-MB', 'Zimbra', 'SisPes', 'SisBol', 'SisCOp', 'Boletim CFN', 'DMF SisBens', 'SisNetuno', 'Quaestor', 'Rede Serpro'].map((sys, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        alert(`Acesso simulado ao sistema ${sys}.`);
                        closeDropdown();
                      }}
                      className="text-left px-2 py-1.5 rounded hover:bg-slate-100 text-slate-700 font-medium flex items-center gap-1.5 truncate"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BAD435]"></span>
                      <span className="truncate">{sys}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 5. OM */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('om')}
              className={`px-3 py-2.5 rounded flex items-center gap-1 transition ${
                openDropdown === 'om' ? 'bg-[#BAD435] text-[#1C1C1C] font-bold' : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <span>OM</span>
              <span className="material-symbols-outlined text-xs">expand_more</span>
            </button>
            {openDropdown === 'om' && (
              <div
                onMouseLeave={closeDropdown}
                className="absolute left-0 top-full pt-2 w-56 z-50 bg-white rounded-lg shadow-xl border border-slate-200 p-2 text-slate-800 font-sans"
              >
                <div className="px-2 py-1 text-[10px] font-bold uppercase text-slate-400 font-mono">Organizações Vinculadas</div>
                {[
                  { name: 'CIASC', sub: 'Centro de Instrução Almirante Sylvio de Camargo' },
                  { name: 'CADIM', sub: 'Centro de Adestramento Almirante Marques de Leão' },
                  { name: 'COPAZNAV', sub: 'Centro de Operações de Paz Naval' },
                ].map((om, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      onNavigate('curriculos');
                      closeDropdown();
                    }}
                    className="w-full text-left px-2.5 py-1.5 rounded hover:bg-slate-100 text-xs font-semibold text-slate-700 block"
                  >
                    <div>{om.name}</div>
                    <div className="text-[10px] font-normal text-slate-400 truncate">{om.sub}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 6. BONO */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('bono')}
              className={`px-3 py-2.5 rounded flex items-center gap-1 transition ${
                openDropdown === 'bono' ? 'bg-[#BAD435] text-[#1C1C1C] font-bold' : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <span>BONO</span>
              <span className="material-symbols-outlined text-xs">expand_more</span>
            </button>
            {openDropdown === 'bono' && (
              <div
                onMouseLeave={closeDropdown}
                className="absolute left-0 top-full pt-2 w-48 z-50 bg-white rounded-lg shadow-xl border border-slate-200 p-2 text-slate-800 font-sans"
              >
                <button
                  onClick={() => {
                    onNavigate('ordem-interna');
                    closeDropdown();
                  }}
                  className="w-full text-left px-2.5 py-1.5 rounded hover:bg-slate-100 text-xs font-semibold text-slate-700 block"
                >
                  Bono Geral
                </button>
                <button
                  onClick={() => {
                    onNavigate('ctddmarinst');
                    closeDropdown();
                  }}
                  className="w-full text-left px-2.5 py-1.5 rounded hover:bg-slate-100 text-xs font-semibold text-slate-700 block"
                >
                  Bono CTDDCFN
                </button>
              </div>
            )}
          </div>

          {/* 7. Plano do Dia */}
          <button
            onClick={() => {
              onNavigate('placape');
              closeDropdown();
            }}
            className={`px-3 py-2.5 rounded transition ${
              currentSlug === 'placape' ? 'bg-white/15 text-white font-bold' : 'text-slate-200 hover:bg-white/10'
            }`}
          >
            Plano do Dia
          </button>

          {/* 8. Catálogo */}
          <button
            onClick={() => {
              onNavigate('matriz-navegacao');
              closeDropdown();
            }}
            className={`px-3 py-2.5 rounded transition ${
              currentSlug === 'matriz-navegacao' ? 'bg-white/15 text-white font-bold' : 'text-slate-200 hover:bg-white/10'
            }`}
          >
            Catálogo
          </button>

          {/* 9. Design System */}
          <button
            onClick={() => {
              onNavigate('design-system');
              closeDropdown();
            }}
            className={`px-3 py-2.5 rounded transition ${
              currentSlug === 'design-system' ? 'bg-white/15 text-white font-bold' : 'text-slate-200 hover:bg-white/10'
            }`}
          >
            Design System
          </button>
        </div>

        {/* Right side CTAs */}
        <div className="py-1 pl-4 flex-shrink-0 flex items-center gap-2">
          <button
            onClick={onOpenCreatePage}
            className="hidden sm:inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-2.5 py-1.5 rounded text-xs transition"
          >
            <span className="material-symbols-outlined text-sm text-[#BAD435]">add_circle</span>
            <span>+ Página</span>
          </button>

          <button
            onClick={() => alert('Autenticação de Segurança Integrada à Rede Militar da Marinha do Brasil (SIPN 2.0).')}
            className="inline-flex items-center gap-1.5 bg-[#BAD435] hover:bg-[#a6bf2a] text-[#002E32] font-black px-4 py-2 rounded shadow-sm transition text-xs tracking-wider uppercase"
          >
            <span className="material-symbols-outlined text-sm">lock</span>
            <span>INTRANET AUTH</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
