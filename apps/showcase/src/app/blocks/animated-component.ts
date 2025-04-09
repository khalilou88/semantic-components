// animated-component.component.ts
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  input,
  signal,
} from '@angular/core';

export type State = 'initial' | 'entering' | 'visible' | 'exiting' | 'hidden';

@Component({
  selector: 'app-animated-component',
  imports: [CommonModule],
  template: `
    <div
      #animatedElement
      [ngClass]="[
        'p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out',

        'bg-blue-500 text-white',

        state() === 'initial' ? 'opacity-0 scale-95' : '',
        state() === 'entering' ? 'opacity-0 scale-95' : '',
        state() === 'visible' ? 'opacity-100 scale-100' : '',
        state() === 'exiting' ? 'opacity-0 scale-95' : '',
        state() === 'hidden' ? 'opacity-0 scale-95 invisible' : '',
      ]"
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class AnimatedComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly initialState = input<State>('initial');
  readonly autoAnimate = input(false);

  @ViewChild('animatedElement') animatedElement!: ElementRef;

  state = signal<State>('initial');
  private transitionEndHandler: ((event: TransitionEvent) => void) | null = null;

  ngOnInit(): void {
    this.state.set(this.initialState());
  }

  ngAfterViewInit(): void {
    if (this.autoAnimate() && this.state() === 'initial') {
      // Use setTimeout to avoid ExpressionChangedAfterItHasBeenCheckedError
      setTimeout(() => this.enter(), 0);
    }

    this.setupTransitionEndListener();
  }

  ngOnDestroy(): void {
    this.removeTransitionEndListener();
  }

  setupTransitionEndListener(): void {
    if (this.animatedElement?.nativeElement) {
      this.transitionEndHandler = (event: TransitionEvent) => {
        // Only react to opacity transition end to avoid multiple events
        if (event.propertyName === 'opacity') {
          this.handleTransitionEnd();
        }
      };

      this.animatedElement.nativeElement.addEventListener(
        'transitionend',
        this.transitionEndHandler,
      );
    }
  }

  removeTransitionEndListener(): void {
    if (this.animatedElement?.nativeElement && this.transitionEndHandler) {
      this.animatedElement.nativeElement.removeEventListener(
        'transitionend',
        this.transitionEndHandler,
      );
      this.transitionEndHandler = null;
    }
  }

  handleTransitionEnd(): void {
    if (this.state() === 'entering') {
      this.state.set('visible');
    } else if (this.state() === 'exiting') {
      this.state.set('hidden');
    }
  }

  enter(): void {
    if (this.state() === 'initial') {
      this.state.set('entering');
      // Force a reflow to ensure the transition happens
      if (this.animatedElement?.nativeElement) {
        void this.animatedElement.nativeElement.offsetHeight;
      }
      // Use requestAnimationFrame to ensure the CSS transition takes effect
      requestAnimationFrame(() => {
        this.state.set('visible');
      });
    }
  }

  exit(): void {
    if (this.state() === 'visible') {
      this.state.set('exiting');
    }
  }

  toggle(): void {
    if (this.state() === 'visible') {
      this.exit();
    } else if (this.state() === 'initial') {
      this.enter();
    }
  }

  reset(): void {
    this.state.set('initial');
  }
}
