import { CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  TemplateRef,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'sc-menubar-trigger',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    CdkMenuItem,
    {
      directive: CdkMenuTrigger,
      inputs: ['cdkMenuTriggerFor: templateRef'],
    },
  ],
})
export class ScMenubarTrigger {
  class = input<string>('');

  classes = computed(() =>
    cn(
      'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      this.class(),
    ),
  );

  @ContentChild(TemplateRef) templateRef: TemplateRef<unknown> | undefined;
}
