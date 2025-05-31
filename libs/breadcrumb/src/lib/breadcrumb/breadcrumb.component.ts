import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BreadcrumbService } from './breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="breadcrumb-nav" [attr.aria-label]="ariaLabel">
      <ol class="breadcrumb-list">
        <li class="breadcrumb-item home-item" *ngIf="showHome">
          <a class="breadcrumb-link" [routerLink]="homeUrl">
            <svg class="home-icon" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              />
            </svg>
            <span class="sr-only">{{ homeLabel }}</span>
          </a>
        </li>

        <li
          class="breadcrumb-item"
          *ngFor="let item of breadcrumbs(); let last = last; first as isFirst"
          [class.active]="item.isActive"
        >
          <svg
            class="separator"
            *ngIf="showHome || !isFirst"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>

          <a
            class="breadcrumb-link"
            *ngIf="!item.isActive && enableNavigation"
            [routerLink]="item.url"
            [attr.aria-current]="item.isActive ? 'page' : null"
          >
            {{ item.label }}
          </a>

          <span
            class="breadcrumb-current"
            *ngIf="item.isActive || !enableNavigation"
            [attr.aria-current]="item.isActive ? 'page' : null"
          >
            {{ item.label }}
          </span>
        </li>
      </ol>
    </nav>
  `,
  styles: [
    `
      .breadcrumb-nav {
        padding: 0.75rem 0;
        font-size: 0.875rem;
      }

      .breadcrumb-list {
        display: flex;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0;
        flex-wrap: wrap;
        gap: 0.25rem;
      }

      .breadcrumb-item {
        display: flex;
        align-items: center;
      }

      .breadcrumb-link {
        color: #6366f1;
        text-decoration: none;
        padding: 0.25rem 0.5rem;
        border-radius: 0.375rem;
        transition: all 0.15s ease-in-out;
      }

      .breadcrumb-link:hover {
        color: #4338ca;
        background-color: #f1f5f9;
      }

      .breadcrumb-link:focus {
        outline: 2px solid #6366f1;
        outline-offset: 2px;
      }

      .breadcrumb-current {
        color: #64748b;
        padding: 0.25rem 0.5rem;
        font-weight: 500;
      }

      .breadcrumb-item.active .breadcrumb-current {
        color: #1e293b;
      }

      .separator {
        width: 1rem;
        height: 1rem;
        color: #9ca3af;
        margin: 0 0.25rem;
        flex-shrink: 0;
      }

      .home-item .breadcrumb-link {
        display: flex;
        align-items: center;
      }

      .home-icon {
        width: 1rem;
        height: 1rem;
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

      /* Responsive design */
      @media (max-width: 640px) {
        .breadcrumb-nav {
          font-size: 0.8125rem;
        }

        .breadcrumb-link,
        .breadcrumb-current {
          padding: 0.125rem 0.375rem;
        }
      }
    `,
  ],
})
export class BreadcrumbComponent {
  @Input() showHome = true;
  @Input() homeUrl = '/';
  @Input() homeLabel = 'Home';
  @Input() enableNavigation = true;
  @Input() ariaLabel = 'Breadcrumb navigation';

  breadcrumbs = inject(BreadcrumbService).breadcrumbs;
}
