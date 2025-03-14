import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lib-option',
  imports: [],
  template: `
    <div
      class="px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
      [class.bg-blue-100]="active"
      [class.font-medium]="active"
      [attr.aria-selected]="active"
      role="option"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScOption {
  constructor(public elementRef: ElementRef) {}

  @Input() value: any;
  @Input() label!: string;
  active = false;

  setActiveStyles(): void {
    this.active = true;
  }

  setInactiveStyles(): void {
    this.active = false;
  }

  getLabel(): string {
    return this.label ?? '';
  }
}
