import React, { useState } from 'react';

export const IdentidadeVisualView: React.FC = () => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const triggerDownload = (assetName: string, format: string) => {
    const filename = `${assetName.toLowerCase().replace(/\s+/g, '_')}.${format.toLowerCase()}`;
    const blob = new Blob([`Arquivo oficial de Identidade Visual CTDDCFN: ${assetName} (${format})`], {
      type: 'application/octet-stream',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadNotice(`Download iniciado: ${filename}`);
    setTimeout(() => setDownloadNotice(null), 3500);
  };

  const paletteColors = [
    {
      name: 'Graphite Teal Deep',
      role: 'Cor Primária Institucional',
      hex: '#002E32',
      rgb: '0, 46, 50',
      cmyk: '100, 8, 0, 80',
      pantone: 'Pantone 5463 C',
      textLight: true,
      bgClass: 'bg-[#002E32]',
    },
    {
      name: 'Renewal Lime Green',
      role: 'Cor Secundária de Destaque',
      hex: '#BAD435',
      rgb: '186, 212, 53',
      cmyk: '12, 0, 75, 17',
      pantone: 'Pantone 382 C',
      textLight: false,
      bgClass: 'bg-[#BAD435]',
    },
    {
      name: 'Graphite Industrial',
      role: 'Tipografia e Elementos Escuros',
      hex: '#181C1C',
      rgb: '24, 28, 28',
      cmyk: '14, 0, 0, 89',
      pantone: 'Black 7 C',
      textLight: true,
      bgClass: 'bg-[#181C1C]',
    },
    {
      name: 'Surface Clean Teal',
      role: 'Fundos de Aplicação & Canvas',
      hex: '#F7FAF9',
      rgb: '247, 250, 249',
      cmyk: '1, 0, 0, 2',
      pantone: 'Cool Gray 1 C',
      textLight: false,
      bgClass: 'bg-[#F7FAF9]',
    },
    {
      name: 'Ouro Heráldico Naval',
      role: 'Armas, Insígnias e Brasões',
      hex: '#D4AF37',
      rgb: '212, 175, 55',
      cmyk: '0, 17, 74, 17',
      pantone: 'Pantone 117 C',
      textLight: false,
      bgClass: 'bg-[#D4AF37]',
    },
  ];

  const brandAssets = [
    {
      title: "Brasão d'Armas do CTDDCFN",
      type: 'Distintivo Oficial de Organização Militar',
      formats: ['SVG', 'PNG', 'PDF'],
      desc: 'Escudo ibérico com campo azul e verde, âncoras cruzadas e fuzis, sob coroa mural dourada.',
      icon: 'shield',
    },
    {
      title: 'Logomarca Oficial do CTDDCFN',
      type: 'Assinatura Visual Completa',
      formats: ['SVG', 'PNG'],
      desc: 'Composição horizontal com o distintivo heráldico e o lema "A Prontidão Começa Aqui!".',
      icon: 'verified',
    },
    {
      title: 'Emblema Heráldico da Deusa Minerva',
      type: 'Símbolo Doutrinário e Acadêmico',
      formats: ['SVG', 'PNG'],
      desc: 'Efígie da deusa da estratégia militar e sabedoria aplicada ao combate anfíbio.',
      icon: 'auto_stories',
    },
    {
      title: 'Manual de Aplicação de Marca (PDF)',
      type: 'Diretriz Gráfica Homologada',
      formats: ['PDF'],
      desc: 'Norma gráfica de 48 páginas com regras de zonas de proteção, redução mínima e usos indevidos.',
      icon: 'menu_book',
    },
  ];

  const templates = [
    {
      title: 'Modelo de Apresentação em Slides (PPTX)',
      category: 'Slides Padrão CTDDCFN 16:9',
      size: '4.8 MB',
      icon: 'slideshow',
      ext: 'PPTX',
    },
    {
      title: 'Papel Timbrado Oficial e Ofício (DOCX)',
      category: 'Documentos Oficiais da SECOM',
      size: '1.2 MB',
      icon: 'description',
      ext: 'DOCX',
    },
    {
      title: 'Assinatura de E-mail Corporativo Zimbra',
      category: 'Gabarito HTML / Imagem',
      size: '320 KB',
      icon: 'mail',
      ext: 'HTML',
    },
    {
      title: 'Gabarito para Cartazes e Editais (INDD)',
      category: 'Design Editorial em Adobe InDesign',
      size: '12.4 MB',
      icon: 'design_services',
      ext: 'INDD',
    },
  ];

  return (
    <div className="flex flex-col w-full space-y-6 animate-fadeIn font-sans text-on-surface">
      {/* Breadcrumb & Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-outline-variant/60 font-mono text-xs">
        <div className="flex items-center gap-2 text-outline">
          <span>INÍCIO</span>
          <span>/</span>
          <span className="text-on-surface-variant font-bold">COMUNICAÇÃO SOCIAL E ESTRATÉGICA</span>
          <span>/</span>
          <span className="text-graphite-teal-deep font-extrabold">IDENTIDADE VISUAL</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-surface-container text-graphite-teal-deep font-bold rounded border border-outline-variant flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-renewal-green-dark"></span>
            MANUAL VIGENTE 2026
          </span>
        </div>
      </div>

      {/* Download notice toast */}
      {downloadNotice && (
        <div className="p-3 bg-surface-container text-graphite-teal-deep border border-renewal-green rounded-lg text-xs font-mono font-semibold flex items-center justify-between animate-fadeIn shadow-xs">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-renewal-green-dark text-base">check_circle</span>
            <span>{downloadNotice}</span>
          </div>
          <span className="text-[10px] bg-renewal-green/20 text-graphite-teal-deep px-2 py-0.5 rounded font-bold">
            ATIVO OFICIAL
          </span>
        </div>
      )}

      {/* Main Hero Header */}
      <section className="bg-surface-container-lowest rounded-xl border border-outline-variant/70 shadow-xs p-6 md:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-outline-variant/40">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-renewal-green rounded-full shrink-0"></div>
            <div>
              <span className="text-[10px] font-mono font-bold text-outline uppercase tracking-wider block">
                Comunicação Social e Estratégica • CTDDCFN
              </span>
              <h1 className="text-xl md:text-2xl font-extrabold text-graphite-teal-deep tracking-tight font-headline uppercase">
                Identidade Visual & Diretrizes de Marca
              </h1>
            </div>
          </div>

          <button
            onClick={() => triggerDownload('Manual_Identidade_Visual_CTDDCFN', 'PDF')}
            className="px-4 py-2 bg-graphite-teal-deep hover:bg-graphite-teal-surface active:bg-primary text-white font-headline font-bold text-xs uppercase tracking-wider rounded-lg shadow-xs transition flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm text-renewal-green">download</span>
            <span>Baixar Manual Completo (PDF)</span>
          </button>
        </div>

        <p className="text-sm text-on-surface-variant leading-relaxed max-w-4xl font-sans">
          A identidade visual do Comando do Treinamento e do Desenvolvimento Doutrinário do Corpo de Fuzileiros Navais (CTDDCFN) consolida as tradições navais e a sobriedade das operações anfíbias. Todos os materiais de comunicação, apresentações, documentos e mídias digitais devem seguir estritamente as diretrizes contidas nesta página.
        </p>

        {/* Paleta Oficial de Cores */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 bg-renewal-green rounded-full"></div>
            <h2 className="text-sm font-bold text-graphite-teal-deep uppercase font-headline tracking-wide">
              1. Paleta de Cores Institucional
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {paletteColors.map((color) => (
              <div
                key={color.name}
                className="rounded-lg border border-outline-variant/60 overflow-hidden bg-white shadow-2xs space-y-2.5 p-3 flex flex-col justify-between"
              >
                <div className={`h-16 rounded-md ${color.bgClass} flex items-end p-2 border border-black/10`}>
                  <span className={`text-[10px] font-mono font-bold ${color.textLight ? 'text-white' : 'text-black'}`}>
                    {color.hex}
                  </span>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-graphite-teal-deep font-headline">{color.name}</h3>
                  <p className="text-[10px] text-outline font-sans">{color.role}</p>
                </div>
                <div className="font-mono text-[9px] text-on-surface-variant space-y-0.5 border-t border-outline-variant/40 pt-1.5">
                  <div><strong>RGB:</strong> {color.rgb}</div>
                  <div><strong>CMYK:</strong> {color.cmyk}</div>
                  <div><strong>Pantone:</strong> {color.pantone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tipografia Oficial */}
        <div className="space-y-3 pt-4 border-t border-outline-variant/40">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 bg-renewal-green rounded-full"></div>
            <h2 className="text-sm font-bold text-graphite-teal-deep uppercase font-headline tracking-wide">
              2. Tipografia Normativa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/60 space-y-2">
              <span className="text-[10px] font-mono font-bold text-outline uppercase block">Títulos e Manchetes</span>
              <h3 className="text-xl font-bold font-headline text-graphite-teal-deep">Montserrat</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Utilizada em caixas-altas para manchetes institucionais, capas de manuais e títulos de nível H1 e H2.
              </p>
              <div className="pt-2 font-mono text-[10px] text-outline">Pesos: 700 (Bold) e 800 (ExtraBold)</div>
            </div>

            <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/60 space-y-2">
              <span className="text-[10px] font-mono font-bold text-outline uppercase block">Texto Corrido & Leitura</span>
              <h3 className="text-xl font-normal font-sans text-graphite-teal-deep">Inter</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Tipografia moderna de alta legibilidade para parágrafos, documentos digitais e relatórios técnicos.
              </p>
              <div className="pt-2 font-mono text-[10px] text-outline">Pesos: 400 (Regular) e 600 (SemiBold)</div>
            </div>

            <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/60 space-y-2">
              <span className="text-[10px] font-mono font-bold text-outline uppercase block">Dados Técnicos & Códigos</span>
              <h3 className="text-xl font-mono text-graphite-teal-deep">JetBrains Mono</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Empregada para identificação de cursos, códigos normativos, siglas militares e carimbos de validação.
              </p>
              <div className="pt-2 font-mono text-[10px] text-outline">Pesos: 500 (Medium) e 700 (Bold)</div>
            </div>
          </div>
        </div>

        {/* Ativos de Marca para Download */}
        <div className="space-y-3 pt-4 border-t border-outline-variant/40">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 bg-renewal-green rounded-full"></div>
            <h2 className="text-sm font-bold text-graphite-teal-deep uppercase font-headline tracking-wide">
              3. Ativos e Brasões Oficiais (Vetorial & Imagem)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {brandAssets.map((asset) => (
              <div
                key={asset.title}
                className="p-4 rounded-lg border border-outline-variant/60 bg-white shadow-2xs flex flex-col justify-between space-y-3"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-graphite-teal-deep text-renewal-green flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">{asset.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-graphite-teal-deep font-headline">{asset.title}</h3>
                    <span className="text-[10px] text-outline font-mono block">{asset.type}</span>
                    <p className="text-xs text-on-surface-variant mt-1 leading-snug">{asset.desc}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-outline-variant/40 font-mono text-xs">
                  <span className="text-[10px] text-outline uppercase">Formatos:</span>
                  {asset.formats.map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => triggerDownload(asset.title, fmt)}
                      className="px-2 py-0.5 rounded bg-surface-container hover:bg-graphite-teal-deep hover:text-white text-graphite-teal-deep font-bold text-[10px] transition border border-outline-variant/50"
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gabaritos e Modelos de Documentos */}
        <div className="space-y-3 pt-4 border-t border-outline-variant/40">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 bg-renewal-green rounded-full"></div>
            <h2 className="text-sm font-bold text-graphite-teal-deep uppercase font-headline tracking-wide">
              4. Gabaritos e Modelos de Documentos Institucionais
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {templates.map((tpl) => (
              <div
                key={tpl.title}
                className="p-3.5 rounded-lg border border-outline-variant/60 bg-surface-container-low flex flex-col justify-between space-y-2"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-graphite-teal-deep text-lg">{tpl.icon}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface-container font-bold text-outline">
                      {tpl.ext}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-graphite-teal-deep font-headline mt-1.5 leading-snug">
                    {tpl.title}
                  </h3>
                  <p className="text-[10px] text-outline font-sans mt-0.5">{tpl.category}</p>
                </div>

                <button
                  onClick={() => triggerDownload(tpl.title, tpl.ext)}
                  className="w-full py-1.5 bg-graphite-teal-deep hover:bg-graphite-teal-surface text-white text-[10px] font-bold uppercase rounded font-mono flex items-center justify-center gap-1 transition"
                >
                  <span className="material-symbols-outlined text-xs text-renewal-green">download</span>
                  <span>Baixar ({tpl.size})</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
