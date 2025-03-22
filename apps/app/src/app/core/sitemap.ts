import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';

import { firstValueFrom } from 'rxjs';

import { Page, Sitemap, SitemapResponse } from './types';

@Injectable({
  providedIn: 'root',
})
export class SitemapLoader {
  readonly sitemap = signal<Sitemap | undefined>(undefined);

  readonly pages = computed<Page[]>(() => {
    let pages: Page[] = [];

    this.sitemap()?.sections.forEach((section) => (pages = pages.concat(section.pages)));

    return pages;
  });

  private readonly http = inject(HttpClient);

  constructor() {
    this.loadSitemap();
  }

  private async loadSitemap() {
    const data = await firstValueFrom(this.http.get<SitemapResponse>('/assets/sitemap.json'));
    this.sitemap.set(data.sitemap);
  }
}
