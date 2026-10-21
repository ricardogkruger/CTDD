import React, { useState } from 'react';

export const AgataAmazoniaView: React.FC = () => {
  const [downloadActive, setDownloadActive] = useState(false);

  const handleDownload = () => {
    setDownloadActive(true);
    setTimeout(() => {
      setDownloadActive(false);
      alert('Download autorizado iniciado: RLA_Agata_Amazonia_2025_vFinal.pdf');
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Top Breadcrumb & Metadata Header */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs font-mono">
        <div className="flex flex-wrap items-center gap-1.5 text-slate-500 text-xs uppercase">
          <span className="text-[#002E32] font-bold">PRODUTOS DOUTRINÁRIOS</span>
          <span>/</span>
          <span>LIÇÕES APRENDIDAS</span>
          <span>/</span>
          <span className="text-[#BAD435] font-bold">ÁGATA AMAZÔNIA 2025</span>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto text-xs">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 font-bold uppercase">
            <span className="material-symbols-outlined text-sm">lock</span>
            Classificação: Reservado
          </span>
          <span className="text-slate-500 text-[11px]">
            MB-DOC ID: CFN-RLA-2025/08
          </span>
        </div>
      </section>

      {/* Main Title Banner with Tactical Watermark */}
      <section className="relative overflow-hidden rounded-xl bg-[#002E32] text-white p-6 md:p-8 shadow-md">
        <div className="absolute -right-8 -bottom-8 opacity-5 pointer-events-none select-none">
          <span className="material-symbols-outlined text-[240px]">anchor</span>
        </div>

        <div className="relative z-10 flex flex-col gap-2 max-w-4xl">
          <div className="flex items-center gap-2 font-mono">
            <span className="px-2.5 py-0.5 rounded bg-[#BAD435] text-[#002E32] text-xs font-bold uppercase tracking-wider">
              Doutrina em Operações Reais
            </span>
            <span className="text-slate-300 text-xs">
              PUBLICADO: 14/FEV/2025 • DIV. DOUTRINA CFN
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl text-white font-extrabold tracking-tight font-serif uppercase mt-1">
            Ágata Amazônia
          </h1>
          <p className="text-base text-[#BAD435] font-mono">
            Relatório Oficial de Lições Aprendidas — Operação Ágata Amazônia 2025
          </p>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl font-sans mt-1">
            Sistematização de dados táticos, vetores de emprego anfíbio e ribeirinho, sustentação logística de vanguarda e doutrina conjunta aplicada aos teatros fluviais da Região Amazônica.
          </p>
        </div>
      </section>

      {/* Interactive Doctrinal Document Card */}
      <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#002E32] text-[#BAD435] flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-3xl">description</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono uppercase text-slate-500 font-bold tracking-wider">
                Disponibilidade Doutrinária Oficial
              </span>
              <h2 className="text-base sm:text-lg text-[#002E32] font-bold font-serif uppercase">
                RLA-CFN Nº 04/2025 • Operação Ágata Amazônia
              </h2>
              <p className="text-xs text-slate-600 max-w-2xl leading-relaxed font-sans mt-1">
                O arquivo abaixo está disponível para consulta e download. Ele contém informações detalhadas referentes ao documento oficial da <strong className="text-slate-900 font-semibold">Operação Ágata Amazônia 2025</strong>, compilado pela Subchefia de Doutrina e Treinamento do CTDDCFN com foco na modernização tática do combatente anfíbio.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-stretch md:items-end justify-center gap-1.5 shrink-0 font-mono">
            <button
              onClick={handleDownload}
              disabled={downloadActive}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#002E32] hover:bg-[#00383D] text-white transition shadow-sm font-bold text-xs uppercase"
            >
              <span className="material-symbols-outlined text-[#BAD435]">
                {downloadActive ? 'sync' : 'download'}
              </span>
              <span>{downloadActive ? 'Autenticando...' : 'Baixar Arquivo'}</span>
            </button>
            <div className="flex items-center justify-center gap-1 text-slate-500 text-[11px]">
              <span className="material-symbols-outlined text-xs text-emerald-600">verified_user</span>
              <span>PDF (A4) • 18.4 MB • Versão Criptografada</span>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-white text-[#002E32] flex items-center justify-center border border-slate-200">
                <span className="material-symbols-outlined text-lg">sailing</span>
              </div>
              <span className="font-bold text-xs text-[#002E32] font-mono uppercase">Teatro Ribeirinho &amp; Selva</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Emprego descentralizado de lanchas blindadas, botes táticos de assalto e manobra anfíbia em igarapés sob condições de estiagem severa.
            </p>
            <div className="mt-auto pt-2 flex items-center gap-1 text-[#002E32] font-mono text-[11px] font-bold">
              <span className="material-symbols-outlined text-sm text-[#BAD435]">check_circle</span>
              <span>6 Procedimentos Validados</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-white text-[#002E32] flex items-center justify-center border border-slate-200">
                <span className="material-symbols-outlined text-lg">medical_services</span>
              </div>
              <span className="font-bold text-xs text-[#002E32] font-mono uppercase">Sustentação &amp; Saúde</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Avaliação dos fluxos de evacuação aeromédica (EVAM) em raio estendido, potabilidade autônoma e manutenção de baterias táticas sob umidade acima de 90%.
            </p>
            <div className="mt-auto pt-2 flex items-center gap-1 text-[#002E32] font-mono text-[11px] font-bold">
              <span className="material-symbols-outlined text-sm text-[#BAD435]">check_circle</span>
              <span>Resiliência: 98.4%</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-white text-[#002E32] flex items-center justify-center border border-slate-200">
                <span className="material-symbols-outlined text-lg">radar</span>
              </div>
              <span className="font-bold text-xs text-[#002E32] font-mono uppercase">Interoperabilidade C4I</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Integração doutrinária entre Marinha, Exército e Força Aérea no combate a ilícitos transfronteiriços com comunicação satelital contínua.
            </p>
            <div className="mt-auto pt-2 flex items-center gap-1 text-[#002E32] font-mono text-[11px] font-bold">
              <span className="material-symbols-outlined text-sm text-[#BAD435]">check_circle</span>
              <span>Enlace Tripartite Homologado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Photos & Metrics */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xl text-[#002E32]">photo_camera</span>
              <h3 className="font-bold text-sm text-[#002E32] uppercase font-mono">
                Registros Táticos de Campo
              </h3>
            </div>
            <span className="text-[10px] font-mono uppercase text-slate-400">SECOM / FOTO-REGISTRO</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQaENHo7gkh_Po1RyQEkjTVxbL4u3YHZJn5lfvYlGcq7XFzEcnUfvYFq23gtgMvtpAYEZ0kA2D4rRe8wRaTGWgfHgn2TKEkOzAc58pogtM8W4048U2sV-JBpGWl7G7_PfuU7GeQDpJOvRByUgASf5DjB869IA9N3TY1lA-7x82xV-sdb70S5tRkPPmOVaiq5N62-ShHMJuLDZd3UMvAJFdFcY7Qa6iVJ0l3ntzjlkyQ5Y26IHKi7Ud"
                alt="Patrulhamento Fluvial"
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3 text-white font-mono">
                <span className="text-xs font-bold">Patrulhamento Fluvial Noturno</span>
                <span className="text-[10px] text-slate-300">Pelotão Ribeirinho • Rio Solimões</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy7wuFEtob-wi7USa1qZX90bggbDmqeKluWBBb4p1BX8GkTLm51RcXQdeJa1uh6NYZ0us2auFKaw57mbILZ966mYiV9FqPud-xtbXHwnyWLvQ7oHPsynwft6uwS3GoNd5aRBo43wPQIMkwLaxBL267aw7LxZsgchWtz5TYA9FeV4fQvP2DJ5gnZl5OpAsEA4ZADNchImMRPrkDTYJkQmzt6nHux1N64obX6eh_O9QYZNpureduujxU"
                alt="Posto de Comando"
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3 text-white font-mono">
                <span className="text-xs font-bold">Posto de Comando Tático</span>
                <span className="text-[10px] text-slate-300">C2 Integrado • Base Fluvial</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Card */}
        <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between font-mono">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xl text-[#002E32]">analytics</span>
                <h3 className="font-bold text-sm text-[#002E32] uppercase">
                  Métricas da Operação
                </h3>
              </div>
              <span className="px-2 py-0.5 rounded bg-slate-100 text-[#002E32] text-[10px] font-bold">
                CONSOLIDADO
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="flex justify-between text-xs font-bold text-[#002E32] mb-1">
                  <span>Eficácia de Interdição Fluvial</span>
                  <span>96.8%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#BAD435] h-full rounded-full" style={{ width: '96.8%' }}></div>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">142 embarcações inspecionadas</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="flex justify-between text-xs font-bold text-[#002E32] mb-1">
                  <span>Tempo Médio Resposta EVAM</span>
                  <span>38 min</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#002E32] h-full rounded-full" style={{ width: '82%' }}></div>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">Meta de 45 min superada em 15.5%</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="flex justify-between text-xs font-bold text-red-700 mb-1">
                  <span>Atualizações Manual CGCFN-12</span>
                  <span>14 Itens</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-red-600 h-full rounded-full" style={{ width: '70%' }}></div>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">Encaminhadas ao Comandante</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex justify-between text-[11px] text-slate-500 mt-3">
            <span>Responsável Técnico:</span>
            <span className="font-bold text-[#002E32]">Divisão de Avaliação Doutrinária</span>
          </div>
        </div>
      </section>

      {/* QSLI Table */}
      <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-[#002E32] font-serif uppercase">
              Quadro Sintético de Lições Identificadas (QSLI)
            </h3>
            <p className="text-xs text-slate-500 font-sans">
              Matriz de ações corretivas e aprimoramento contínuo para o Corpo de Fuzileiros Navais
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="bg-[#002E32] text-white font-mono uppercase tracking-wider text-[11px]">
                <th className="p-3">Ref. Tática</th>
                <th className="p-3">Área Funcional</th>
                <th className="p-3">Lição Aprendida / Observação</th>
                <th className="p-3">Ação Recomendada</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-mono font-bold text-[#002E32]">LA-25-001</td>
                <td className="p-3 font-semibold text-slate-900">Manobra Ribeirinha</td>
                <td className="p-3 text-slate-600">Hélices convencionais de motor sujeitas a danos em bancos de areia e troncos.</td>
                <td className="p-3 text-slate-800">Padronizar kits de hidrojato ou proteção modular de quilha para lanchas LPR.</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded-full bg-[#BAD435]/20 text-[#002E32] font-mono text-[10px] font-bold uppercase">
                    Em Análise
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 bg-slate-50/50">
                <td className="p-3 font-mono font-bold text-[#002E32]">LA-25-002</td>
                <td className="p-3 font-semibold text-slate-900">Comunicações</td>
                <td className="p-3 text-slate-600">Interferência atmosférica tropical pontual em VHF durante tempestades.</td>
                <td className="p-3 text-slate-800">Expandir redundância HF com antena NVIS e canal satelital secundário.</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold uppercase">
                    Implementada
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-mono font-bold text-[#002E32]">LA-25-003</td>
                <td className="p-3 font-semibold text-slate-900">Equipamento Individual</td>
                <td className="p-3 text-slate-600">Saturação hídrica em coturnos e coletes balísticos ocasionando desgaste térmico.</td>
                <td className="p-3 text-slate-800">Adotar tecidos de secagem hidrofóbica com menor retenção de massa líquida no edital 2026.</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-800 font-mono text-[10px] font-bold uppercase">
                    Revisão Normativa
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Outras Edições da Operação Ágata */}
      <section className="bg-slate-100 p-5 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#002E32] text-[#BAD435] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-xl">auto_stories</span>
          </div>
          <div>
            <span className="font-bold text-[#002E32] uppercase block">Outras Edições da Operação Ágata</span>
            <p className="text-slate-500 text-[11px] font-sans">Consulte o repositório histórico completo da série Ágata (2018 a 2024).</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('Abrindo Ágata Sul 2024')}
            className="px-3 py-1.5 rounded bg-white hover:bg-slate-50 text-[#002E32] font-semibold shadow-xs border border-slate-200"
          >
            Ágata Sul 2024
          </button>
          <button
            onClick={() => alert('Abrindo Ágata Pantanal 2024')}
            className="px-3 py-1.5 rounded bg-white hover:bg-slate-50 text-[#002E32] font-semibold shadow-xs border border-slate-200"
          >
            Ágata Pantanal 2024
          </button>
        </div>
      </section>
    </div>
  );
};
