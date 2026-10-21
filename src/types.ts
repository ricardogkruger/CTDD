/**
 * Types for the CTDDCFN Drupal 10+ Theme & Page Studio
 */

export type PageCategory =
  | 'institucional'
  | 'produtos-doutrinarios'
  | 'secom'
  | 'ensino'
  | 'navegacao'
  | 'informatica'
  | 'personalizadas';

export type DrupalContentType =
  | 'noticia'
  | 'biografia'
  | 'diretriz'
  | 'curriculo'
  | 'curso'
  | 'simposio'
  | 'pagina_basica'
  | 'page';

export interface PageItem {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  category: PageCategory;
  contentType: DrupalContentType;
  icon: string;
  summary?: string;
  description?: string;
  content?: string;
  contentMarkdown?: string;
  date?: string;
  createdAt?: string;
  author?: string;
  status?: 'publicado' | 'rascunho';
  heroImage?: string;
  tags?: string[];
  isCustom?: boolean;
  blocks?: string[];
  metadata?: Record<string, string | number | boolean>;
}

export interface DrupalFile {
  path: string;
  description: string;
  language: 'twig' | 'yaml' | 'php' | 'css' | 'javascript' | 'markdown';
  content: string;
  category: 'core' | 'templates' | 'config' | 'assets' | 'docs';
}

export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export interface BussolaResult {
  title: string;
  category: string;
  slug: string;
  snippet: string;
  type: string;
}
