import React from 'react';

export const OrdemInternaView: React.FC = () => {
  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Top Breadcrumb & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1 font-mono text-xs">
        <div className="flex items-center gap-1.5 uppercase text-slate-500">
          <span>SECOM</span>
          <span>/</span>
          <span className="text-[#002E32] font-bold">ORDEM INTERNA</span>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="px-2 py-0.5 rounded bg-slate-100 text-[#002E32] font-semibold text-[11px]">
            REF: REG-NORM-10/24
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold flex items-center gap-1 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            BASE ATIVA MB
          </span>
        </div>
      </div>

      {/* Header Section */}
      <div className="relative bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#002E32]"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 font-mono">
              <span className="px-2.5 py-0.5 rounded bg-[#002E32] text-[#BAD435] text-[11px] font-bold uppercase tracking-wider">
                SECOM / DIV-NORMAS
              </span>
              <span className="text-xs text-slate-400">CTDDCFN · MB</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif uppercase tracking-tight">
              Ordens Internas &amp; Diretrizes
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Publicações Oficiais de Normas Administrativas e Doutrinárias da Secretaria de Comunicação Social e Subchefia de Doutrina.
            </p>
          </div>

          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg shrink-0 border border-slate-100 font-mono">
            <div className="w-12 h-12 rounded bg-[#002E32] flex items-center justify-center text-[#BAD435] shadow-xs">
              <span className="material-symbols-outlined text-2xl">gavel</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-slate-400 font-bold">Vigência Do Regulamento</span>
              <span className="text-sm font-bold text-[#002E32]">CIRCULAR ATIVA</span>
              <span className="block text-[10px] text-slate-500">Adesão Compulsória em Todo CFN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Module Container: 10 · CDDCFN */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-[#002E32] px-6 py-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#00383D] flex items-center justify-center text-[#BAD435]">
              <span className="material-symbols-outlined text-xl">menu_book</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold font-serif text-base">10 · CDDCFN</span>
                <span className="text-slate-400 opacity-40">|</span>
                <span className="text-[11px] font-mono uppercase text-[#BAD435] font-semibold tracking-wider">
                  Centro de Desenvolvimento Doutrinário
                </span>
              </div>
              <p className="text-xs text-slate-300 font-sans">Normas Gerais de Doutrina e Procedimentos Internos</p>
            </div>
          </div>

          <span className="px-2.5 py-0.5 rounded font-mono text-[10px] uppercase bg-white/10 text-slate-200 font-semibold border border-white/10">
            SÉRIE 10 - GESTÃO TÉCNICA
          </span>
        </div>

        {/* Main Directive Card */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200/80">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2 font-mono">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold bg-[#BAD435]/20 text-[#002E32] border border-[#BAD435]/40">
                    Vigente / Homologada
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] uppercase bg-slate-200 text-slate-700">
                    CLASSIFICAÇÃO: OSTENSIVO (INTRANET MB)
                  </span>
                  <span className="text-[10px] text-slate-400">
                    SGI-REG: #OI-2024-10-1
                  </span>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#002E32] font-serif uppercase">
                    Ordem Interna Nº 10-1
                  </h2>
                  <p className="text-sm font-semibold text-slate-800 font-mono mt-0.5">
                    Normas para elaboração de Notas Doutrinárias (ND)
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed max-w-4xl font-sans">
                  Diretriz técnica institucional que regulamenta minuciosamente a sistemática de proposição, estrutura redacional, formatação gráfica padronizada, fluxo de revisão colegiada e ciclo final de aprovação e publicação de Notas Doutrinárias (ND) no âmbito de todos os escalões operacionais e unidades subordinadas do Corpo de Fuzileiros Navais.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                  <div className="p-2.5 bg-white rounded border border-slate-200">
                    <span className="block text-[10px] text-slate-400 uppercase">Data de Expedição</span>
                    <span className="font-bold text-slate-800 text-[11px]">15 DE MAIO DE 2024</span>
                  </div>
                  <div className="p-2.5 bg-white rounded border border-slate-200">
                    <span className="block text-[10px] text-slate-400 uppercase">Autoridade Signatária</span>
                    <span className="font-bold text-slate-800 text-[11px]">COMANDANTE DO CTDDCFN</span>
                  </div>
                  <div className="p-2.5 bg-white rounded border border-slate-200">
                    <span className="block text-[10px] text-slate-400 uppercase">Distribuição / Alcance</span>
                    <span className="font-bold text-slate-800 text-[11px]">TODAS AS OM DO CFN</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 shrink-0 w-full sm:w-auto min-w-[240px] bg-white p-4 rounded-lg border border-slate-200 font-mono">
                <span className="text-xs font-bold text-[#002E32] uppercase pb-1 border-b border-slate-100 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-[#BAD435]">download</span>
                  Acesso aos Autos Oficiais
                </span>

                <button
                  onClick={() => alert('Download da Ordem Interna Nº 10-1 (PDF - 2.8 MB) iniciado.')}
                  className="w-full py-2.5 px-3 bg-[#002E32] hover:bg-[#00383D] text-white text-xs font-bold rounded shadow-xs flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm text-[#BAD435]">picture_as_pdf</span>
                  Baixar Ordem Interna (PDF)
                </button>

                <button
                  onClick={() => alert('Visualizador de documento acionado.')}
                  className="w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">visibility</span>
                  Visualizar Online
                </button>

                <span className="text-[10px] text-slate-400 text-center block pt-1">
                  PDF (2.8 MB) · HASH SHA-256 VERIFICADO
                </span>
              </div>
            </div>
          </div>

          {/* Bento Grid: Chapters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded bg-[#002E32] text-[#BAD435] flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">format_shapes</span>
                </span>
                <span className="font-mono text-[10px] text-slate-500 font-bold">CAP. I - ESTRUTURAÇÃO</span>
              </div>
              <h3 className="font-bold text-xs text-slate-900 font-serif uppercase">Padronização Redacional</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Critérios para tipografia, numeração decimal, glossário militar de siglas e inserção de referências táticas conforme manuais da MB.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded bg-[#002E32] text-[#BAD435] flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">rule</span>
                </span>
                <span className="font-mono text-[10px] text-slate-500 font-bold">CAP. II - REVISÃO</span>
              </div>
              <h3 className="font-bold text-xs text-slate-900 font-serif uppercase">Ciclo de Validação Técnica</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Passo a passo da comissão examinadora de doutrina, prazos regimentais de 15 dias para parecer e critérios de homologação superior.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded bg-[#002E32] text-[#BAD435] flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">deployed_code</span>
                </span>
                <span className="font-mono text-[10px] text-slate-500 font-bold">CAP. III - DIFUSÃO</span>
              </div>
              <h3 className="font-bold text-xs text-slate-900 font-serif uppercase">Distribuição &amp; Catalogação</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Inclusão compulsória no Portal do Conhecimento, difusão via SISCRECIM e registro nos bancos históricos de Lições Aprendidas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stepper / Protocol Flow */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-mono">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#002E32]">account_tree</span>
              <h2 className="text-sm font-bold text-slate-900 uppercase">
                Protocolo para Proposição de Notas Doutrinárias
              </h2>
            </div>
            <span className="text-[10px] text-slate-400 uppercase">FLUXO SISCRECIM / SECOM</span>
          </div>

          <div className="space-y-3 font-sans">
            <div className="flex gap-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-[#002E32] text-[#BAD435] font-mono font-bold flex items-center justify-center shrink-0">
                1
              </div>
              <div className="space-y-1 flex-1">
                <h4 className="text-xs font-bold text-[#002E32] font-mono uppercase">Download do Modelo Padronizado</h4>
                <p className="text-xs text-slate-600">
                  Baixe o template oficial em formato .DOTX configurado com réguas militares, cabeçalhos heráldicos e estilos de títulos prescritos na Ordem Interna Nº 10-1.
                </p>
                <button
                  onClick={() => alert('Download do template DOTX iniciado.')}
                  className="mt-1 px-3 py-1 bg-white border border-slate-200 text-xs font-mono font-bold text-[#002E32] rounded hover:bg-slate-100"
                >
                  Baixar Template ND (.DOTX - 1.2 MB)
                </button>
              </div>
            </div>

            <div className="flex gap-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-[#002E32] text-white font-mono font-bold flex items-center justify-center shrink-0">
                2
              </div>
              <div className="space-y-1 flex-1">
                <h4 className="text-xs font-bold text-[#002E32] font-mono uppercase">Redação e Justificativa Operacional</h4>
                <p className="text-xs text-slate-600">
                  Preencha os módulos obrigatórios: Situação/Problema identificado, Base Conceitual Vigente, Proposta de Aperfeiçoamento Doutrinário e Parecer do Encarregado da OM.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-[#002E32] text-white font-mono font-bold flex items-center justify-center shrink-0">
                3
              </div>
              <div className="space-y-1 flex-1">
                <h4 className="text-xs font-bold text-[#002E32] font-mono uppercase">Envio Digital via SISCRECIM / SECOM</h4>
                <p className="text-xs text-slate-600">
                  Abra um chamado no módulo "Doutrina e Normas", anexando a minuta no formato digital assinado com certificado militar ICP-Bravo.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-[#BAD435] text-[#002E32] font-mono font-bold flex items-center justify-center shrink-0">
                4
              </div>
              <div className="space-y-1 flex-1">
                <h4 className="text-xs font-bold text-[#002E32] font-mono uppercase">Revisão Colegiada &amp; Publicação em BONO</h4>
                <p className="text-xs text-slate-600">
                  Após aprovação pelo Conselho de Doutrina do CTDDCFN e homologação pelo Comandante, a nova Nota Doutrinária é registrada e publicada no BONO da Marinha.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Side Panel: Support & Related Norms */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-3 font-mono text-xs">
            <h3 className="font-bold text-slate-900 uppercase pb-2 border-b border-slate-100 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-[#002E32]">support_agent</span>
              Canal de Apoio Técnico
            </h3>
            <p className="text-slate-600 font-sans">
              Dúvidas quanto ao enquadramento de termos doutrinários ou preenchimento do padrão:
            </p>
            <div className="space-y-2">
              <div className="p-2 bg-slate-50 rounded flex justify-between">
                <span>Divisão de Doutrina:</span>
                <span className="font-bold text-[#002E32]">Ramal 4518 / 4522</span>
              </div>
              <div className="p-2 bg-slate-50 rounded flex justify-between">
                <span>SECOM Geral:</span>
                <span className="font-bold text-[#002E32]">Ramal 4501</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1C1C1C] text-white rounded-xl p-5 shadow-sm space-y-3 font-mono text-xs">
            <h3 className="font-bold text-[#BAD435] uppercase pb-2 border-b border-white/10 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">verified</span>
              Normas Correlatas
            </h3>
            <ul className="space-y-2 text-slate-300 font-sans">
              <li>• <strong>CGCFN-100:</strong> Doutrina Básica dos Fuzileiros Navais</li>
              <li>• <strong>EMA-300:</strong> Manual de Redação Oficial da Marinha</li>
              <li>• <strong>CTDDCFN-01:</strong> Regimento Interno do Comando</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
