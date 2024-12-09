import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScBreadcrumb,
  ScBreadcrumbItem,
  ScBreadcrumbLink,
  ScBreadcrumbList,
  ScBreadcrumbPage,
} from '@semantic-components/ui';

@Component({
  selector: 'app-breadcrumb-page',
  imports: [ScBreadcrumb, ScBreadcrumbList, ScBreadcrumbItem, ScBreadcrumbLink, ScBreadcrumbPage],
  template: `
    <nav sc-breadcrumb>
      <ol sc-breadcrumb-list>
        <li sc-breadcrumb-item><a sc-breadcrumb-link href="#">Home</a></li>
        <li sc-breadcrumb-item><a sc-breadcrumb-link href="#">Library</a></li>
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
