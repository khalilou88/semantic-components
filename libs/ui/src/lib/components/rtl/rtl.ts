import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  signal,
} from '@angular/core';

function isRTL(text: string) {
  // Define the Unicode range for RTL scripts
  const rtlRegex = /[\u0590-\u08FF]/; // Includes Hebrew, Arabic, Syriac, and others
  return rtlRegex.test(text);
}

@Component({
  selector: 'sc-rtl',
  imports: [],
  template: `
    <p>isRTL: {{ isRTL() }}</p>
    <p>isRTL2: {{ isRTL2() }}</p>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRTL {
  text = signal('مرحبا');
  isRTL = computed(() => isRTL(this.text()));

  text2 = signal('Bienvenue');
  isRTL2 = computed(() => isRTL(this.text2()));
}
