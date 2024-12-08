import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'button[sc-button], a[sc-button]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class.sc-button]': 'true',
    '[class.sc-button-primary]': 'variant() === "primary"',
    '[class.sc-button-secondary]': 'variant() === "secondary"',
    '[class.sc-button-destructive]': 'variant() === "destructive"',
    '[class.sc-button-outline]': 'variant() === "outline"',
    '[class.sc-button-ghost]': 'variant() === "ghost"',
    '[class.sc-button-link]': 'variant() === "link"',
    '[class.sc-button-size-default]': 'size() === "default"',
    '[class.sc-button-size-sm]': 'size() === "sm"',
    '[class.sc-button-size-lg]': 'size() === "lg"',
    '[class.sc-button-size-icon]': 'size() === "icon"',
  },
  styles: `
    .sc-button {
      @apply inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0;
    }
    .sc-button-primary {
      @apply bg-primary text-primary-foreground hover:bg-primary/90;
    }
    .sc-button-secondary {
      @apply bg-secondary text-secondary-foreground hover:bg-secondary/80;
    }
    .sc-button-destructive {
      @apply bg-destructive text-destructive-foreground hover:bg-destructive/90;
    }
    .sc-button-outline {
      @apply border border-input bg-background hover:bg-accent hover:text-accent-foreground;
    }
    .sc-button-ghost {
      @apply hover:bg-accent hover:text-accent-foreground;
    }
    .sc-button-link {
      @apply text-primary underline-offset-4 hover:underline;
    }
    .sc-button-size-default {
      @apply h-10 px-4 py-2;
    }
    .sc-button-size-sm {
      @apply h-9 rounded-md px-3;
    }
    .sc-button-size-lg {
      @apply h-11 rounded-md px-8;
    }
    .sc-button-size-icon {
      @apply h-10 w-10;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScButton {
  variant = input<'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'>(
    'primary',
  );

  size = input<'default' | 'sm' | 'lg' | 'icon'>('default');
}
