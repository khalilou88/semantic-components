export interface SitemapResponse {
  sitemap: Sitemap;
}

export interface PageInfo {
  current: Page | undefined;
  previous: Page | undefined;
  next: Page | undefined;
}

/**
 * Represents a page within the documentation
 */
export interface Page {
  /** Unique identifier for the page */
  id: string;
  /** Page title to display in navigation and header */
  title: string;
  /** Route path for the page */
  path: string;
  /** Brief description of the page content */
  description: string;
}

/**
 * Represents a section of documentation pages
 */
export interface Section {
  /** Unique identifier for the section */
  id: string;
  /** Section title to display in navigation */
  title: string;
  /** Brief description of the section */
  description?: string;
  /** Pages contained within this section */
  pages: Page[];
}

/**
 * Metadata for the documentation site
 */
export interface SitemapMetadata {
  /** Documentation version */
  version: string;
  /** ISO date string of last update */
  lastUpdated: string;
  /** Whether content is searchable */
  searchable: boolean;
  /** Contributors information */
  contributors?: Array<{
    name: string;
    email?: string;
  }>;
}

/**
 * Complete documentation sitemap structure
 */
export interface Sitemap {
  /** Documentation site title */
  title: string;
  /** Base URL for documentation */
  baseUrl: string;
  /** Sections containing pages */
  sections: Section[];
  /** Metadata about the documentation */
  metaData: SitemapMetadata;
}

/**
 * Data passed to routes for documentation pages
 */
export interface PageData {
  /** Page title */
  title: string;
  /** Page description */
  description?: string;
  /** Section title this page belongs to */
  section: string;
  /** Section ID this page belongs to */
  sectionId: string;
}
