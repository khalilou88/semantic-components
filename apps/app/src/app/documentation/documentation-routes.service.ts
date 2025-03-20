import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';

import { DocumentationComponent } from './documentation-component';

@Injectable({
  providedIn: 'root',
})
export class DocumentationRoutesService {
  private sitemapSubject = new BehaviorSubject<any>(null);
  public sitemap$ = this.sitemapSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  async loadRoutes(): Promise<Route[]> {
    try {
      const data = await firstValueFrom(this.http.get<any>('/assets/sitemap.json'));
      this.sitemapSubject.next(data.sitemap);
      return this.createRoutesFromSitemap(data.sitemap);
    } catch (error) {
      console.error('Failed to load sitemap:', error);
      return [];
    }
  }

  private createRoutesFromSitemap(sitemap: any): Route[] {
    const routes: Route[] = [];

    // Add base docs route
    routes.push({
      path: 'docs',
      component: DocumentationComponent,
      data: { title: sitemap.title },
    });

    // Process each section and its pages
    sitemap.sections.forEach((section) => {
      section.pages.forEach((page) => {
        // Remove leading slash and 'docs/' prefix if present
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
          },
        });
      });
    });

    return routes;
  }

  getSectionPages(sectionId: string): Observable<any[]> {
    return this.sitemap$.pipe(
      map((sitemap) => {
        if (!sitemap) return [];
        const section = sitemap.sections.find((s) => s.id === sectionId);
        return section ? section.pages : [];
      }),
    );
  }
}
