import React, { useState } from 'react';
import { DrupalContentType, PageCategory, PageItem } from '../types';

interface CreatePageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newPage: PageItem) => void;
  initialData?: {
    title?: string;
    slug?: string;
    category?: PageCategory;
  };
}

export const CreatePageModal: React.FC<CreatePageModalProps> = ({ isOpen, onClose, onSave, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [subtitle, setSubtitle] = useState('');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [category, setCategory] = useState<PageCategory>(initialData?.category || 'produtos-doutrinarios');
  const [contentType, setContentType] = useState<DrupalContentType>('diretriz');
  const [icon, setIcon] = useState('menu_book');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('Oficial de Doutrina - CTDDCFN');
  const [status, setStatus] = useState<'publicado' | 'rascunho'>('publicado');

  // Sync if initialData changes when modal opens
  React.useEffect(() => {
    if (initialData?.title) setTitle(initialData.title);
    if (initialData?.slug) setSlug(initialData.slug);
    if (initialData?.category) setCategory(initialData.category);
  }, [initialData]);

  if (!isOpen) return null;

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!slug || slug === title.toLowerCase().replace(/[^a-z0-9]+/g, '-')) {
      const generated = val
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setSlug(generated);
    }
  };

  const loadTemplate = (type: string) => {
    if (type === 'diretriz') {
      setTitle('Diretriz Tática de Emprego de Forças Especiais');
      setSubtitle('Procedimentos Operacionais Padronizados de Reconhecimento');
      setCategory('produtos-doutrinarios');
      setContentType('diretriz');
      setIcon('verified_user');
      setDescription('Diretriz doutrinária complementar para emprego de frações de comandos anfíbios.');
      setContent(`1. FINALIDADE\nEstabelecer os parâmetros de planejamento, comando e controle, inserção e exfiltração de elementos de reconhecimento e comandos anfíbios em apoio ao escalão de assalto.\n\n2. ÂMBITO DE APLICAÇÃO\nAplica-se a todas as Unidades da Força de Fuzileiros da Esquadra (FFE) e ao Grupamento de Mergulhadores de Combate quando operando em Força-Tarefa Anfíbia.\n\n3. DIRETRIZES DE COMUNICAÇÃO\nAs comunicações seguirão a disciplina de silêncio rádio classe alfa, com emissão autorizada apenas via canais ópticos não-detectáveis ou rajadas ultracurtas satelitais.\n\n4. VIGÊNCIA E REVISÃO\nEntrada em vigor imediata, com revisão bienal a cargo da Divisão de Doutrina do CTDDCFN.`);
    } else if (type === 'curso') {
      setTitle('Curso Avançado de Guerra em Selva Litorânea');
      setSubtitle('Capacitação de Frações em Terreno Flúvio-Marítimo');
      setCategory('ensino');
      setContentType('curso');
      setIcon('school');
      setDescription('Matriz de formação tática para operações ribeirinhas na Amazônia Oriental.');
      setContent(`OBJETIVO DO CURSO:\nCapacitar os comandantes de fração a operar e combater em ambientes de manguezal, delta fluvial e selva costeira sob condições climáticas extremas.\n\nCARGA HORÁRIA TOTAL: 320 Horas (10 semanas)\nPÚBLICO-ALVO: Oficiais e Sargentos Fuzileiros Navais.\n\nDISCIPLINAS PRINCIPAIS:\n- Sobrevivência e Navegação Fluvial Noturna (60h)\n- Tiro Tático em Meios Aquaviários de Pronto Emprego (80h)\n- Comunicações Táticas sob Densa Cobertura Vegetal (60h)\n- Operações Psicológicas e Relações com Comunidades Ribeirinhas (40h)\n- Exercício Final em Terreno Real (80h)`);
    } else if (type === 'noticia') {
      setTitle('Exercício Dragão 2025 Mobiliza Mais de 3.000 Fuzileiros Navais');
      setSubtitle('Validação Doutrinária com Disparos Reais e Integração Aérea');
      setCategory('institucional');
      setContentType('noticia');
      setIcon('article');
      setDescription('Maior manobra anfíbia do ano comprova capacidade expedicionária e rápida mobilização.');
      setContent(`A Marinha do Brasil concluiu com pleno êxito o Exercício "Dragão 2025", realizado no litoral do Espírito Santo. O exercício contou com o emprego de navios de desembarque de carros de combate, helicópteros de ataque e mais de quarenta viaturas blindadas CLANF.\n\nA comissão de validação doutrinária do CTDDCFN esteve embarcada coletando dados biométricos, telemetria de sensores e tempos de resposta do escalão de ataque para incorporação aos novos manuais de campanha.`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !slug.trim()) return;

    const newPage: PageItem = {
      id: `page-${Date.now()}`,
      title: title.trim(),
      subtitle: subtitle.trim() || undefined,
      slug: slug.trim(),
      category,
      contentType,
      icon,
      description: description.trim(),
      content: content.trim(),
      author: author.trim(),
      status,
      isCustom: true,
      createdAt: new Date().toISOString().split('T')[0],
      blocks: ['hero', 'text', 'downloads'],
    };

    onSave(newPage);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#002e32] border-2 border-[#bad435]/40 rounded-xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#001f22] rounded-t-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#bad435]/20 border border-[#bad435]/40 flex items-center justify-center text-[#bad435]">
              <span className="material-symbols-outlined text-xl">note_add</span>
            </div>
            <div>
              <h2 className="text-base font-bold text-white uppercase font-mono">
                Criar Nova Página / Nó Drupal 10
              </h2>
              <p className="text-xs text-slate-400">
                Adicione novas páginas personalizadas com categorias militares e gere os templates Twig correspondentes.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/10 transition"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Quick Templates Bar */}
        <div className="p-3 bg-[#00262a] border-b border-white/10 flex items-center justify-between gap-2 overflow-x-auto">
          <span className="text-[11px] font-mono text-[#bad435] uppercase shrink-0">Modelos Rápidos:</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => loadTemplate('diretriz')}
              className="px-2.5 py-1 bg-white/5 hover:bg-white/10 text-xs text-slate-300 font-mono rounded border border-white/10"
            >
              + Diretriz Tática
            </button>
            <button
              type="button"
              onClick={() => loadTemplate('curso')}
              className="px-2.5 py-1 bg-white/5 hover:bg-white/10 text-xs text-slate-300 font-mono rounded border border-white/10"
            >
              + Curso / Matriz
            </button>
            <button
              type="button"
              onClick={() => loadTemplate('noticia')}
              className="px-2.5 py-1 bg-white/5 hover:bg-white/10 text-xs text-slate-300 font-mono rounded border border-white/10"
            >
              + Notícia Oficial
            </button>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs font-mono">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 mb-1 font-bold">Título da Página *</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Ex: Simpósio de Doutrina Cibernética"
                className="w-full bg-[#001f22] border border-white/15 rounded p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#bad435]"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-1 font-bold">Subtítulo / Linha Fina</label>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                placeholder="Ex: Diretrizes operacionais para o quadriênio 2025-2029"
                className="w-full bg-[#001f22] border border-white/15 rounded p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#bad435]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-slate-300 mb-1 font-bold">Slug URL (Drupal Alias) *</label>
              <div className="flex items-center bg-[#001f22] border border-white/15 rounded overflow-hidden">
                <span className="px-2 text-slate-500 select-none">/node/</span>
                <input
                  type="text"
                  required
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full bg-transparent p-2 text-white placeholder-slate-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 mb-1 font-bold">Categoria Militar</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as PageCategory)}
                className="w-full bg-[#001f22] border border-white/15 rounded p-2 text-white focus:outline-none focus:border-[#bad435]"
              >
                <option value="institucional">Institucional</option>
                <option value="produtos-doutrinarios">Produtos Doutrinários</option>
                <option value="ensino">Ensino e Cursos</option>
                <option value="secom">SECOM / Notícias</option>
                <option value="informatica">Informática & Segurança</option>
                <option value="personalizadas">Páginas Personalizadas</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 mb-1 font-bold">Tipo de Conteúdo (Drupal Bundle)</label>
              <select
                value={contentType}
                onChange={(e) => setContentType(e.target.value as DrupalContentType)}
                className="w-full bg-[#001f22] border border-white/15 rounded p-2 text-white focus:outline-none focus:border-[#bad435]"
              >
                <option value="diretriz">Diretriz Doutrinária</option>
                <option value="noticia">Notícia / SECOM</option>
                <option value="curso">Curso / Matriz</option>
                <option value="biografia">Biografia Militar</option>
                <option value="simposio">Simpósio / Tecnologia</option>
                <option value="pagina_basica">Página Básica (Basic Page)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-slate-300 mb-1 font-bold">Ícone (Material Symbol)</label>
              <input
                type="text"
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
                placeholder="Ex: menu_book, school, shield"
                className="w-full bg-[#001f22] border border-white/15 rounded p-2 text-white focus:outline-none focus:border-[#bad435]"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-1 font-bold">Autor / Seção Responsável</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full bg-[#001f22] border border-white/15 rounded p-2 text-white focus:outline-none focus:border-[#bad435]"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-1 font-bold">Status de Moderação</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as 'publicado' | 'rascunho')}
                className="w-full bg-[#001f22] border border-white/15 rounded p-2 text-white focus:outline-none focus:border-[#bad435]"
              >
                <option value="publicado">Publicado (Published)</option>
                <option value="rascunho">Rascunho (Draft)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-300 mb-1 font-bold">Resumo / Descrição Curta</label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Breve sumário exibido nos cards e resultados de busca..."
              className="w-full bg-[#001f22] border border-white/15 rounded p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#bad435]"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-1 font-bold">Conteúdo Principal da Página (Corpo)</label>
            <textarea
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Escreva aqui o conteúdo da página militar, seções, diretrizes ou ementas..."
              className="w-full bg-[#001f22] border border-white/15 rounded p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#bad435]"
            />
          </div>

          {/* Drupal Notice */}
          <div className="p-3 bg-[#001f22] border border-[#bad435]/30 rounded text-[11px] text-slate-300 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#bad435] text-base">info</span>
            <span>
              Ao salvar, a página será inserida no menu lateral, terá preview em tempo real e entrará no arquivo de exportação do tema Drupal 10.
            </span>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-transparent hover:bg-white/10 text-slate-300 text-xs font-mono rounded transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#bad435] hover:bg-[#8fa619] text-[#002e32] text-xs font-bold font-mono rounded transition flex items-center gap-2 shadow-lg"
            >
              <span className="material-symbols-outlined text-sm">save</span>
              CRIAR E PUBLICAR PÁGINA
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
