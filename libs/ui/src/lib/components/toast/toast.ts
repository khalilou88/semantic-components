import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { cn } from '@semantic-components/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { Subject, combineLatest } from 'rxjs';

import { SC_TOAST_ID } from './toast-id';
import { ToastService, ToastState } from './toast.service';
import { Toaster } from './toaster';

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-(--radix-toast-swipe-end-x) data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x) data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-top data-[state=open]:sm:slide-in-from-bottom',
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground',
        destructive:
          'destructive group border-destructive bg-destructive text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type ToastVariants = VariantProps<typeof toastVariants>;

@Component({
  selector: 'div[sc-toast]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    role: 'status',
    '[class]': 'class()',
    '[attr.data-state]': 'state()',
    '[attr.data-swipe]': 'swipe()',
    '(animationend)': 'animationend()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScToast implements OnInit {
  private readonly toaster = inject(Toaster);

  private readonly toastService = inject(ToastService);

  private readonly toastId = inject<string>(SC_TOAST_ID);

  readonly variant = input<ToastVariants['variant']>('default');

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(toastVariants({ variant: this.variant() }), this.classInput()),
  );

  protected readonly state = toSignal<ToastState>(this.toastService.currentState);

  //TODO make swipe works
  protected readonly swipe = signal<'start' | 'move' | 'cancel' | 'end' | undefined>(undefined);

  private readonly animationState = new Subject<'end'>();

  constructor() {
    afterNextRender(() => {
      this.toastService.updateState('open');
    });

    combineLatest([this.toastService.currentState, this.animationState]).subscribe(
      ([state, animationState]) => {
        if (state === 'closed' && animationState === 'end') {
          this.toaster.remove(this.toastId);
        }
      },
    );
  }

  ngOnInit() {
    setTimeout(() => {
      this.toastService.updateState('closed');
    }, 3000);
  }

  //TODO try to use AnimationEvent: animationName property
  protected animationend() {
    if (this.state() === 'closed') {
      this.animationState.next('end');
    }
  }
}
