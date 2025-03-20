import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

import { Observable, map, switchMap } from 'rxjs';

import { DocumentationRoutesService } from './documentation-routes.service';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, RouterLink, RouterOutlet],
  template: `
    <div class="flex h-screen bg-gray-50">
      <!-- Sidebar -->
      <aside class="w-64 bg-white border-r border-gray-200 overflow-y-auto">
        <div class="px-6 py-4" *ngIf="sitemap$ | async as sitemap">
          <h1 class="text-xl font-bold text-gray-900 mb-6">{{ sitemap.title }}</h1>

          <div class="mb-6" *ngFor="let section of sitemap.sections">
            <div class="flex items-center mb-2">
              <span class="text-gray-500 mr-2">
                <svg
                  class="h-5 w-5"
                  *ngIf="section.icon === 'rocket'"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  />
                </svg>
                <svg
                  class="h-5 w-5"
                  *ngIf="section.icon === 'book'"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                  />
                </svg>
                <svg
                  class="h-5 w-5"
                  *ngIf="section.icon === 'code'"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h2 class="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                {{ section.title }}
              </h2>
            </div>

            <ul class="space-y-1">
              <li *ngFor="let page of section.pages">
                <a
                  class="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition ease-in-out duration-150"
                  [routerLink]="[page.path]"
                  routerLinkActive="bg-indigo-50 text-indigo-600"
                >
                  {{ page.title }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <main class="flex-1 overflow-y-auto">
        <div class="max-w-4xl mx-auto px-4 py-8" *ngIf="pageData$ | async as pageData">
          <div class="flex items-center mb-2">
            <span class="text-sm text-gray-500">{{ pageData.section }}</span>
            <svg
              class="h-3 w-3 mx-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <h1 class="text-sm text-gray-500">{{ pageData.title }}</h1>
          </div>

          <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ pageData.title }}</h1>

          <div class="flex items-center space-x-4 mb-8">
            <span class="text-sm text-gray-500">Last updated: {{ pageData.lastUpdated }}</span>
            <span
              class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800"
              *ngIf="pageData.status === 'published'"
            >
              Published
            </span>
            <span
              class="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800"
              *ngIf="pageData.status === 'draft'"
            >
              Draft
            </span>
          </div>

          <div class="mb-6 text-gray-600">
            {{ pageData.description }}
          </div>

          <div
            class="prose prose-indigo max-w-none"
            *ngIf="content$ | async as content"
            [innerHTML]="content"
          ></div>
        </div>
      </main>
    </div>
  `,
})
export class DocumentationComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  private docRoutesService = inject(DocumentationRoutesService);

  sitemap$ = this.docRoutesService.sitemap$;

  pageData$ = this.route.data;

  content$ = this.route.url.pipe(
    map((segments) => '/' + segments.map((segment) => segment.path).join('/')),
    switchMap((path) => this.fetchContent(path)),
  );

  ngOnInit() {}

  private fetchContent(path: string): Observable<string> {
    return this.http.get(`/assets/content${path}.md`, { responseType: 'text' }).pipe(
      // Here you would typically convert markdown to HTML
      // For example using a library like marked.js
      map((content) => content),
    );
  }
}
