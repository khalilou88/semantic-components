import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  ViewEncapsulation,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { SvgChevronRightIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';
import { ScSidebar } from './sidebar';

@Component({
  selector: 'sc-sidebar-layout',
  imports: [ScSidebar, SvgChevronRightIcon, RouterModule, ScButton],
  template: `
    <sc-sidebar />

    <main class="">
      <button sc-button type="button" size="icon">
        <svg-chevron-right-icon />
      </button>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: `
    sc-sidebar-layout {
      @apply flex min-h-svh w-full;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarLayout implements OnInit {
  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  opened = signal<boolean>(true);

  ngOnInit() {
    document.documentElement.classList.add('h-full');
    this.document.body.classList.add('h-full');
  }

  toggleNav() {
    this.opened.update((value) => !value);
  }
}
