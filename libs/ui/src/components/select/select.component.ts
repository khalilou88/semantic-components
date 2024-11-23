import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { noop } from 'rxjs';

import { SelectOptionComponent } from './select-option.component';

export interface CustomSelectEvent {
  source: SelectComponent;
  selected: any;
}

@Component({
  selector: 'sc-select',
  standalone: true,
  imports: [CommonModule, PortalModule],
  template: `
    <div class="" [class.required]="required">
      @if (label.length > 0) {
        <p class="" [class.error]="error">{{ label }}</p>
      }

      <div
        #select
        [ngClass]="mainSelectClasses()"
        [attr.id]="inputId"
        [attr.aria-label]="ariaLabel || null"
        [attr.aria-labelledby]="ariaLabelledby || null"
        [attr.aria-multiselectable]="false"
        [innerHTML]="displayText"
        (click)="showDropdown()"
        (keydown)="onKeyDown($event)"
        (blur)="onTouched()"
        role="listbox"
        tabindex="{{ this.disabled ? -1 : 0 }}"
      ></div>
      <button class="" (click)="onDropMenuIconClick($event)">test</button>
      <ng-template class="dropdown" #overlayTemplate="cdkPortal" cdk-portal>
        <div class="">
          <button class="" (keydown)="onKeyDown($event)">
            <ng-content />
          </button>
        </div>
      </ng-template>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: SelectComponent,
    },
  ],
})
export class SelectComponent implements OnInit, ControlValueAccessor, Validator {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('id') public inputId = '';

  @Input() public label = '';
  @Input() public placeholder = '';

  @Input() public required = false;
  @Input() public disabled = false;
  @Input() public error = false;
  @Input() public multiple = false;
  @Input() public search = false;

  @Input('aria-label') public ariaLabel = '';
  @Input('aria-labelledby') public ariaLabelledby = '';

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() readonly change = new EventEmitter<CustomSelectEvent>();

  @ViewChild('select') public select!: ElementRef;
  @ViewChild(CdkPortal) public contentTemplate!: CdkPortal;

  @ContentChildren(SelectOptionComponent)
  public options!: QueryList<SelectOptionComponent>;

  public displayText!: SafeHtml;
  public displayX = false;

  //private readonly selectedOption: SelectOptionComponent;
  private showing = false;
  private readonly showPlaceholder = true;
  private overlayRef!: OverlayRef;

  constructor(
    private readonly cd: ChangeDetectorRef,
    private readonly domSanitizer: DomSanitizer,
    private readonly overlay: Overlay,
  ) {}

  public onChangeFn: any = (_: any) => noop();

  public onTouchedFn: any = () => noop();

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  public validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }

  public ngOnInit(): void {
    if (!this.displayText) {
      this.displayText = this.domSanitizer.bypassSecurityTrustHtml(this.placeholder);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public writeValue(obj: any): void {}

  public onTouched(): void {
    this.onTouchedFn();
  }

  public mainSelectClasses(): { [key: string]: any } {
    return {
      mainSelect: true,
      error: this.error,
      disabled: this.disabled,
      placeholder: this.showPlaceholder,
    };
  }

  public onDropMenuIconClick(event: UIEvent): void {
    if (!this.disabled) {
      event.stopPropagation();
      this.select.nativeElement.focus();
      this.select.nativeElement.click();
    }
  }

  public onKeyDown(event: KeyboardEvent): void {
    console.log('onKeyDown');
  }

  public showDropdown(): void {
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    this.overlayRef.attach(this.contentTemplate);
    this.syncWidth();
    this.overlayRef.backdropClick().subscribe(() => this.hide());
    this.showing = true;
  }

  private hide(): void {
    this.overlayRef.detach();
    this.showing = false;
  }

  private syncWidth(): void {
    if (!this.overlayRef) {
      return;
    }

    const refRectWidth = this.select.nativeElement.getBoundingClientRect().width;
    this.overlayRef.updateSize({ width: refRectWidth });
  }

  private getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.select.nativeElement)
      .withPush(true)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
          offsetY: 4,
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
          offsetY: -4,
        },
      ]);

    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    return new OverlayConfig({
      positionStrategy: positionStrategy,
      scrollStrategy: scrollStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
    });
  }
}
