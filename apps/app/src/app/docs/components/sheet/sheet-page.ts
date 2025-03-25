import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SheetDemoSection } from './sheet-demo-section';
import { SheetSideSection } from './sheet-side-section';

@Component({
  selector: 'app-sheet-page',
  imports: [SheetDemoSection, SheetSideSection],
  template: `
    <app-sheet-demo-section />
    <app-sheet-side-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SheetPage {}
