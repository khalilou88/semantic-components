import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScBreadcrumb,
  ScBreadcrumbEllipsis,
  ScBreadcrumbItem,
  ScBreadcrumbLink,
  ScBreadcrumbList,
  ScBreadcrumbPage,
  ScBreadcrumbSeparator,
} from '@semantic-components/ui';
import { SiChevronRightIcon, SiEllipsisIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-breadcrumb-page',
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
  ],
  template: `
    <div class="space-y-2">
      <nav sc-breadcrumb>
        <ol sc-breadcrumb-list>
          <li sc-breadcrumb-item><a sc-breadcrumb-link>Components</a></li>

          <li sc-breadcrumb-separator><svg si-chevron-right-icon></svg></li>
          <li sc-breadcrumb-item>
            <span sc-breadcrumb-page>Breadcrumb</span>
          </li>
        </ol>
      </nav>

      <h1 class="scroll-m-20 text-3xl font-bold tracking-tight">Breadcrumb</h1>

      <p class="text-base text-muted-foreground">
        <span>Displays the path to the current resource using a hierarchy of links.</span>
      </p>
    </div>

    <nav sc-breadcrumb>
      <ol sc-breadcrumb-list>
        <li sc-breadcrumb-item><a sc-breadcrumb-link href="#">Home</a></li>

        <li sc-breadcrumb-separator><svg si-chevron-right-icon></svg></li>

        <li sc-breadcrumb-item>
          <span sc-breadcrumb-ellipsis>
            <svg class="size-4" si-ellipsis-icon></svg>
            <span class="sr-only">More</span>
          </span>
        </li>

        <li sc-breadcrumb-separator><svg si-chevron-right-icon></svg></li>

        <li sc-breadcrumb-item><a sc-breadcrumb-link href="#">Library</a></li>

        <li sc-breadcrumb-separator><svg si-chevron-right-icon></svg></li>
        <li sc-breadcrumb-item>
          <span sc-breadcrumb-page>Data</span>
        </li>
      </ol>
    </nav>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BreadcrumbPage {}
