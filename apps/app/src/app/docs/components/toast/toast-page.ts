import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ToastDemoSection } from './toast-demo-section';
import { ToastDestructiveSection } from './toast-destructive-section';
import { ToastSimpleSection } from './toast-simple-section';
import { ToastWithActionSection } from './toast-with-action-section';
import { ToastWithTitleSection } from './toast-with-title-section';

@Component({
  selector: 'app-toast-page',
  imports: [
    ToastDemoSection,
    ToastSimpleSection,
    ToastWithTitleSection,
    ToastWithActionSection,
    ToastDestructiveSection,
  ],
  template: `
    <app-toast-demo-section />

    <app-toast-simple-section title="Simple" />

    <app-toast-with-title-section title="With title" />

    <app-toast-with-action-section title="With Action" />

    <app-toast-destructive-section title="Destructive" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToastPage {}
