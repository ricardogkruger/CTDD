import React from 'react';

interface FooterProps {
  onOpenExport: () => void;
  onOpenCreate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenExport, onOpenCreate }) => {
  return (
    <footer className="w-full bg-[#001c1e] border-t border-white/10 text-slate-300 font-mono text-xs">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Col 1: Emblem & Identity */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#00383d] border border-[#bad435]/40 flex items-center justify-center text-[#bad435]">
              <span className="material-symbols-outlined text-xl">anchor</span>
            </div>
            <div>
              <span className="block font-bold text-white uppercase text-xs">CTDDCFN</span>
              <span className="block text-[10px] text-slate-400">MARINHA DO BRASIL</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
            Centro de Instrução e Doutrina do Corpo de Fuzileiros Navais. Excelência doutrinária, tecnológica e operacional.
          </p>
          <div className="text-[10px] text-[#bad435] font-bold">
            LEMA OFICIAL: "AD SUMUS"
          </div>
        </div>

        {/* Col 2: Institutional Links */}
        <div className="space-y-2">
          <h4 className="text-white font-bold uppercase text-[11px] tracking-wider mb-2 text-[#bad435]">
            Organizações Vinculadas
          </h4>
          <ul className="space-y-1.5 text-[11px] text-slate-400">
            <li>
              <a href="https://www.marinha.mil.br" target="_blank" rel="noreferrer" className="hover:text-white transition">
                • Comando-Geral do CFN (CGCFN)
              </a>
            </li>
            <li>
              <a href="https://www.marinha.mil.br" target="_blank" rel="noreferrer" className="hover:text-white transition">
                • Força de Fuzileiros da Esquadra (FFE)
              </a>
            </li>
            <li>
              <a href="https://www.marinha.mil.br" target="_blank" rel="noreferrer" className="hover:text-white transition">
                • Diretoria-Geral de Desenvolvimento Nuclear e Tecnológico (DGDNTM)
              </a>
            </li>
            <li>
              <a href="https://www.marinha.mil.br" target="_blank" rel="noreferrer" className="hover:text-white transition">
                • Estado-Maior da Armada (EMA)
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: CTDDCFN Address & OPSEC */}
        <div className="space-y-2">
          <h4 className="text-white font-bold uppercase text-[11px] tracking-wider mb-2 text-[#bad435]">
            Localização & Contato
          </h4>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Estrada do Bananal, s/nº - Ilha do Governador<br />
            Rio de Janeiro - RJ • CEP: 21911-000<br />
            Telefone: (21) 3386-4500<br />
            SECOM: secom.ctddcfn@marinha.mil.br
          </p>
        </div>

        {/* Col 4: Drupal Theme Studio Actions */}
        <div className="space-y-3 bg-[#00262a] p-4 rounded-lg border border-white/10">
          <h4 className="text-white font-bold uppercase text-[11px] flex items-center gap-1.5 text-[#bad435]">
            <span className="material-symbols-outlined text-sm">settings_suggest</span>
            Tema Drupal 10 Ativo
          </h4>
          <p className="text-[11px] text-slate-300">
            Gerador dinâmico de páginas com templates Twig e Tailwind CSS compilados.
          </p>
          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={onOpenExport}
              className="w-full py-1.5 px-3 bg-[#bad435] hover:bg-[#8fa619] text-[#002e32] font-bold rounded transition text-center flex items-center justify-center gap-1.5 text-[11px]"
            >
              <span className="material-symbols-outlined text-xs">download</span>
              Exportar Pacote .ZIP
            </button>
            <button
              onClick={onOpenCreate}
              className="w-full py-1.5 px-3 bg-white/5 hover:bg-white/10 text-white rounded transition text-center flex items-center justify-center gap-1.5 text-[11px] border border-white/10"
            >
              <span className="material-symbols-outlined text-xs">add</span>
              Criar Nova Página
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-[#001416] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2 text-[10px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Marinha do Brasil • CTDDCFN • Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Desenvolvido para CMS Drupal 10+ (Twig + Tailwind CSS)</span>
            <span>•</span>
            <span className="text-[#bad435]">Ambiente Seguro & Homologado</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
