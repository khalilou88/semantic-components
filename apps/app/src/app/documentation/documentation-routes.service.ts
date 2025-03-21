import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';

import { DocumentationComponent } from './documentation.component';
import { PageData, Section, Sitemap, SitemapResponse } from './documentation.types';

@Injectable({
  providedIn: 'root',
})
export class DocumentationRoutesService {
  private readonly sitemapSubject = new BehaviorSubject<Sitemap | null>(null);
  public sitemap$ = this.sitemapSubject.asObservable();

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
  ) {}

  async loadRoutes(): Promise<Route[]> {
    try {
      const data = await firstValueFrom(this.http.get<SitemapResponse>('/assets/sitemap.json'));
      this.sitemapSubject.next(data.sitemap);
      return this.createRoutesFromSitemap(data.sitemap);
    } catch (error) {
      console.error('Failed to load sitemap:', error);
      return [];
    }
  }

  private createRoutesFromSitemap(sitemap: Sitemap): Route[] {
    const routes: Route[] = [];

    // Add base docs route
    routes.push({
      path: 'docs',
      component: DocumentationComponent,
      data: {
        title: sitemap.title,
        description: 'Documentation home',
      } as PageData,
    });

    // Process each section and its pages
    sitemap.sections.forEach((section) => {
      section.pages.forEach((page) => {
        // Remove leading slash if present
        let path = page.path;
        if (path.startsWith('/')) {
          path = path.substring(1);
        }

        routes.push({
          path,
          component: DocumentationComponent,
          data: {
            title: page.title,
            description: page.description,
            section: section.title,
            sectionId: section.id,
            lastUpdated: page.lastUpdated,
            status: page.status,
          } as PageData,
        });
      });
    });

    return routes;
  }

  getSectionPages(sectionId: string): Observable<Section['pages']> {
    return this.sitemap$.pipe(
      map((sitemap) => {
        if (!sitemap) return [];
        const section = sitemap.sections.find((s) => s.id === sectionId);
        return section ? section.pages : [];
      }),
    );
  }
}
