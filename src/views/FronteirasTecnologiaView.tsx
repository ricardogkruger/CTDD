import React, { useState } from 'react';

export const FronteirasTecnologiaView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'simposio' | 'projetos' | 'artigos'>('simposio');

  const techPillars = [
    {
      icon: 'smart_toy',
      title: 'IA e Algoritmos de Apoio à Decisão Tática',
      sub: 'Processamento de Sensores em Tempo Real',
      desc: 'Integração de modelos de visão computacional em tempo real a bordo de CLANFs e centros de operações táticas móveis, correlacionando transmissões de radar, térmicas e acústicas para redução do ciclo OODA (Observar-Orientar-Decidir-Agir).',
      trl: 'TRL 6 - PROTÓTIPO EM CAMPO',
    },
    {
      icon: 'flight',
      title: 'Enxames de Sistemas Não-Tripulados (SANT)',
      sub: 'Reconhecimento Coordenado e Guerra Eletrônica',
      desc: 'Pesquisa e validação de algoritmos distribuídos para coordenação autônoma de enxames de drones anfíbios de superfície e aéreos, capazes de realizar patrulha de costa, varredura de minas e saturação defensiva.',
      trl: 'TRL 7 - DEMONSTRAÇÃO OPERACIONAL',
    },
    {
      icon: 'security',
      title: 'Criptografia Pós-Quântica em Redes Táticas',
      sub: 'Comunicações Militares Seguras',
      desc: 'Substituição das rotinas clássicas de troca de chaves por esquemas baseados em reticulados criptográficos (Lattice-based cryptography) para blindar canais de comando expedicionários contra descriptografia por computadores quânticos.',
      trl: 'TRL 5 - TESTES LABORATORIAIS',
    },
    {
      icon: 'bolt',
      title: 'Sistemas Anti-Drone & Energia Dirigida',
      sub: 'Contramedidas Eletrônicas Avançadas',
      desc: 'Desenvolvimento conjunto de bloqueadores portáteis direcionais de radiofrequência e armas de pulso eletromagnético (HPM) para neutralização de ameaças de drones comerciais modificados em ambiente litorâneo.',
      trl: 'TRL 8 - PRONTO PARA HOMOLOGAÇÃO',
    },
  ];

  const papers = [
    {
      title: 'O Emprego da Inteligência Artificial Generativa no Planejamento de Apoio de Fogo Naval',
      authors: 'CC (FN) Rodrigo Viana & Dr. Carlos Eduardo (IME)',
      symposium: 'III Simpósio de Fronteiras da Tecnologia CTDDCFN - 2025',
      doi: '10.5849/ctddcfn.front.2025.01',
      pages: '18 Páginas',
    },
    {
      title: 'Avaliação de Desempenho de Redes Ad Hoc Móveis (MANET) em Ambientes de Selva Costeira',
      authors: 'Cap (FN) Marcos Esteves & Profa. Dra. Ana Paula (COPPE/UFRJ)',
      symposium: 'III Simpósio de Fronteiras da Tecnologia CTDDCFN - 2025',
      doi: '10.5849/ctddcfn.front.2025.04',
      pages: '22 Páginas',
    },
    {
      title: 'Arquitetura de Defesa Ativa Contra Enxames de Drones FPV em Cabeças de Praia',
      authors: 'CT (FN) Alexandre Pires & SO (FN-IF) Fernando Ramos',
      symposium: 'II Simpósio de Fronteiras da Tecnologia CTDDCFN - 2024',
      doi: '10.5849/ctddcfn.front.2024.12',
      pages: '14 Páginas',
    },
  ];

  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Top Breadcrumb */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#bad435] uppercase tracking-wider mb-1">
            <span>PESQUISA & DESENVOLVIMENTO</span>
            <span>/</span>
            <span>INOVAÇÃO MILITAR</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide uppercase font-serif">
            Fronteiras da Tecnologia
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Iniciativas de pesquisa científica, parcerias com o meio acadêmico e desenvolvimento de tecnologias disruptivas para a Guerra Anfíbia.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-[#00383d] border border-[#bad435]/40 text-[#bad435] text-xs font-mono rounded">
            IV SIMPÓSIO PREVISTO • NOV 2025
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-2">
        <button
          onClick={() => setActiveTab('simposio')}
          className={`px-4 py-2 text-xs font-mono rounded-t transition ${
            activeTab === 'simposio'
              ? 'bg-[#002e32] text-[#bad435] font-bold border-t-2 border-[#bad435]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          O SIMPÓSIO ANUAL
        </button>
        <button
          onClick={() => setActiveTab('projetos')}
          className={`px-4 py-2 text-xs font-mono rounded-t transition ${
            activeTab === 'projetos'
              ? 'bg-[#002e32] text-[#bad435] font-bold border-t-2 border-[#bad435]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          LINHAS DE PESQUISA & TRL
        </button>
        <button
          onClick={() => setActiveTab('artigos')}
          className={`px-4 py-2 text-xs font-mono rounded-t transition ${
            activeTab === 'artigos'
              ? 'bg-[#002e32] text-[#bad435] font-bold border-t-2 border-[#bad435]'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          ANAIS & ARTIGOS CIENTÍFICOS
        </button>
      </div>

      {/* Tab 1: Simposio */}
      {activeTab === 'simposio' && (
        <div className="space-y-6">
          <div className="bg-[#002e32] border border-white/10 p-6 md:p-8 rounded-lg relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <span className="px-3 py-1 bg-[#bad435]/20 text-[#bad435] border border-[#bad435]/40 text-xs font-mono rounded">
                EVENTO INSTITUCIONAL OFICIAL
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-serif">
                Simpósio Fronteiras da Tecnologia do CTDDCFN
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                O Simpósio anual reúne oficiais do Estado-Maior da Armada, cientistas do Instituto Militar de Engenharia (IME), 
                pesquisadores da COPPE/UFRJ e representantes da Base Industrial de Defesa (BID) para debater os impactos das 
                tecnologias disruptivas na condução de operações anfíbias no Atlântico Sul.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#bad435]">calendar_today</span>
                  <span>18 a 21 de Novembro de 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#bad435]">location_on</span>
                  <span>Auditório Principal do CTDDCFN, Rio de Janeiro</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-[#002e32] border border-white/10 rounded-lg">
              <div className="text-3xl font-extrabold text-[#bad435] font-mono mb-2">+450</div>
              <h4 className="text-sm font-bold text-white uppercase font-mono">Participantes Militares & Civis</h4>
              <p className="text-xs text-slate-400 mt-2">Pesquisadores, comandantes de forças operativas e cadetes navais.</p>
            </div>
            <div className="p-5 bg-[#002e32] border border-white/10 rounded-lg">
              <div className="text-3xl font-extrabold text-[#bad435] font-mono mb-2">32</div>
              <h4 className="text-sm font-bold text-white uppercase font-mono">Artigos Selecionados</h4>
              <p className="text-xs text-slate-400 mt-2">Apresentações técnicas com revisão por pares cegos no corpo editorial.</p>
            </div>
            <div className="p-5 bg-[#002e32] border border-white/10 rounded-lg">
              <div className="text-3xl font-extrabold text-[#bad435] font-mono mb-2">100%</div>
              <h4 className="text-sm font-bold text-white uppercase font-mono">Foco na Amazônia Azul</h4>
              <p className="text-xs text-slate-400 mt-2">Soberania nacional, proteção de recursos petrolíferos e litorâneos.</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Projetos & TRL */}
      {activeTab === 'projetos' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techPillars.map((p, i) => (
            <div key={i} className="p-6 bg-[#002e32] border border-white/10 rounded-lg hover:border-[#bad435]/40 transition space-y-3">
              <div className="flex items-center justify-between">
                <span className="material-symbols-outlined text-3xl text-[#bad435]">{p.icon}</span>
                <span className="text-[10px] font-mono px-2.5 py-1 bg-black/40 text-[#bad435] border border-[#bad435]/30 rounded">
                  {p.trl}
                </span>
              </div>
              <h3 className="text-base font-bold text-white">{p.title}</h3>
              <div className="text-xs font-mono text-slate-400">{p.sub}</div>
              <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Artigos */}
      {activeTab === 'artigos' && (
        <div className="space-y-4">
          {papers.map((paper, i) => (
            <div key={i} className="p-5 bg-[#002e32] border border-white/10 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#bad435]/15 text-[#bad435] border border-[#bad435]/30 rounded">
                  {paper.symposium}
                </span>
                <h3 className="text-sm font-bold text-white">{paper.title}</h3>
                <div className="text-xs text-slate-300 font-mono">Autores: {paper.authors}</div>
                <div className="text-[11px] text-slate-400 font-mono">DOI: {paper.doi} • {paper.pages}</div>
              </div>

              <button
                onClick={() => alert(`Download do artigo: ${paper.title}`)}
                className="px-3 py-1.5 bg-[#001f22] hover:bg-[#00383d] text-white border border-white/20 hover:border-[#bad435] text-xs font-mono rounded transition flex items-center gap-1.5 self-start md:self-center"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                PDF ARTIGO
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
