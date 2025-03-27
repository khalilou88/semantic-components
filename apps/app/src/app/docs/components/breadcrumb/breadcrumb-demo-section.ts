import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { BreadcrumbDemo } from './breadcrumb-demo';

@Component({
  selector: 'app-breadcrumb-demo-section',
  imports: [BreadcrumbDemo, PreviewCodeTabs],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-breadcrumb-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
  
import {
  ScBreadcrumb,
  ScBreadcrumbEllipsis,
  ScBreadcrumbItem,
  ScBreadcrumbLink,
  ScBreadcrumbList,
  ScBreadcrumbPage,
  ScBreadcrumbSeparator,
  ScMenu,
  ScMenuItem,
  ScMenuTriggerFor,
} from '@semantic-components/ui';
import { SiChevronRightIcon, SiEllipsisIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-breadcrumb-demo',
  imports: [
    ScBreadcrumb,
    ScBreadcrumbList,
    ScBreadcrumbItem,
    ScBreadcrumbLink,
    ScBreadcrumbPage,
    ScBreadcrumbSeparator,
    SiChevronRightIcon,
    ScBreadcrumbEllipsis,
    SiEllipsisIcon,
    ScMenu,
    ScMenuItem,
    ScMenuTriggerFor,
  ],
  template: \`
    <nav sc-breadcrumb>
      <ol sc-breadcrumb-list>
        <li sc-breadcrumb-item><a sc-breadcrumb-link href="#">Home</a></li>

        <li sc-breadcrumb-separator><svg si-chevron-right-icon></svg></li>

        <li sc-breadcrumb-item>
          <button [scMenuTriggerFor]="menu" sc-breadcrumb-ellipsis>
            <svg class="size-4" si-ellipsis-icon></svg>
            <span class="sr-only">More</span>
          </button>
        </li>

        <li sc-breadcrumb-separator><svg si-chevron-right-icon></svg></li>

        <li sc-breadcrumb-item><a sc-breadcrumb-link href="#">Components</a></li>

        <li sc-breadcrumb-separator><svg si-chevron-right-icon></svg></li>
        <li sc-breadcrumb-item>
          <span sc-breadcrumb-page>Breadcrumb</span>
        </li>
      </ol>
    </nav>

    <ng-template #menu>
      <div sc-menu>
        <button sc-menu-item>
          <span>Documentation</span>
        </button>

        <button sc-menu-item>
          <span>Themes</span>
        </button>

        <button sc-menu-item>
          <span>GitHub</span>
        </button>
      </div>
    </ng-template>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbDemo {}`;
}
