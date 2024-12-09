import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScBreadcrumb,
  ScBreadcrumbElipssis,
  ScBreadcrumbItem,
  ScBreadcrumbLink,
  ScBreadcrumbList,
  ScBreadcrumbPage,
  ScBreadcrumbSeparator,
} from '@semantic-components/ui';
import { SvgChevronRightIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-breadcrumb-page',
  imports: [
    ScBreadcrumb,
    ScBreadcrumbList,
    ScBreadcrumbItem,
    ScBreadcrumbLink,
    ScBreadcrumbPage,
    ScBreadcrumbSeparator,
    SvgChevronRightIcon,
    ScBreadcrumbElipssis,
  ],
  template: `
    <nav sc-breadcrumb>
      <ol sc-breadcrumb-list>
        <li sc-breadcrumb-item><a sc-breadcrumb-link href="#">Home</a></li>

        <li sc-breadcrumb-separator><svg-chevron-right-icon /></li>

        <li sc-breadcrumb-item><span sc-breadcrumb-elipssis></span></li>

        <li sc-breadcrumb-separator><svg-chevron-right-icon /></li>

        <li sc-breadcrumb-item><a sc-breadcrumb-link href="#">Library</a></li>

        <li sc-breadcrumb-separator><svg-chevron-right-icon /></li>
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
