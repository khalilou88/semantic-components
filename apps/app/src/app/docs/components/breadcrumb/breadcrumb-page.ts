import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { BreadcrumbCustomSeparatorSection } from './breadcrumb-custom-separator-section';
import { BreadcrumbDemoSection } from './breadcrumb-demo-section';

@Component({
  selector: 'app-breadcrumb-page',
  imports: [BreadcrumbDemoSection, BreadcrumbCustomSeparatorSection],
  template: `
    <app-breadcrumb-demo-section />

    <app-breadcrumb-custom-separator-section title="Custom separator" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BreadcrumbPage {}
