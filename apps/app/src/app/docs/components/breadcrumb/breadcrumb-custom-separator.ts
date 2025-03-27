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
import { SiSlashIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-breadcrumb-custom-separator',
  imports: [
    ScBreadcrumb,
    ScBreadcrumbList,
    ScBreadcrumbItem,
    ScBreadcrumbLink,
    ScBreadcrumbPage,
    ScBreadcrumbSeparator,
    SiSlashIcon,
    ScBreadcrumbEllipsis,
  ],
  template: `
    <nav sc-breadcrumb>
      <ol sc-breadcrumb-list>
        <li sc-breadcrumb-item><a sc-breadcrumb-link href="#">Home</a></li>

        <li sc-breadcrumb-separator><svg si-slash-icon></svg></li>

        <li sc-breadcrumb-item><span sc-breadcrumb-ellipsis></span></li>

        <li sc-breadcrumb-separator><svg si-slash-icon></svg></li>

        <li sc-breadcrumb-item><a sc-breadcrumb-link href="#">Components</a></li>

        <li sc-breadcrumb-separator><svg si-slash-icon></svg></li>
        <li sc-breadcrumb-item>
          <span sc-breadcrumb-page>Breadcrumb</span>
        </li>
      </ol>
    </nav>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbCustomSeparator {}
