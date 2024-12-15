import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'input[sc-slider]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[id]': '"range2"',
    '[class]': 'classes()',
    '(input)': 'handleInput($event)',
  },
  styles: `
    #range1 {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      cursor: pointer;
      outline: none;
      overflow: hidden;
      border-radius: 16px;
    }

    #range1::-webkit-slider-runnable-track {
      height: 15px;
      background: #ccc;
      border-radius: 16px;
    }

    #range1::-moz-range-track {
      height: 15px;
      background: #ccc;
      border-radius: 16px;
    }

    #range1::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      height: 15px;
      width: 15px;
      background-color: #fff;
      border-radius: 50%;
      border: 2px solid #f50;
      box-shadow: -407px 0 0 400px #f50;
    }

    #range1::-moz-range-thumb {
      height: 15px;
      width: 15px;
      background-color: #fff;
      border-radius: 50%;
      border: 1px solid #f50;
      box-shadow: -407px 0 0 400px #f50;
    }

    /* range 2 */
    .range-input {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      cursor: pointer;
      outline: none;
      border-radius: 15px;
      height: 6px;
      background: #ccc;
    }

    .range-input::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      height: 15px;
      width: 15px;
      background-color: #f50;
      border-radius: 50%;
      border: none;
      transition: 0.2s ease-in-out;
    }

    .range-input::-moz-range-thumb {
      height: 15px;
      width: 15px;
      background-color: #f50;
      border-radius: 50%;
      border: none;
      transition: 0.2s ease-in-out;
    }

    .range-input::-webkit-slider-thumb:hover {
      box-shadow: 0 0 0 10px rgba(255, 85, 0, 0.1);
    }
    .range-input:active::-webkit-slider-thumb {
      box-shadow: 0 0 0 13px rgba(255, 85, 0, 0.2);
    }
    .range-input:focus::-webkit-slider-thumb {
      box-shadow: 0 0 0 13px rgba(255, 85, 0, 0.2);
    }

    .range-input::-moz-range-thumb:hover {
      box-shadow: 0 0 0 10px rgba(255, 85, 0, 0.1);
    }
    .range-input:active::-moz-range-thumb {
      box-shadow: 0 0 0 13px rgba(255, 85, 0, 0.2);
    }
    .range-input:focus::-moz-range-thumb {
      box-shadow: 0 0 0 13px rgba(255, 85, 0, 0.2);
    }

    .value2,
    .value3,
    .value4 {
      font-size: 26px;
      width: 50px;
      text-align: center;
    }

    /* range 3 */
    #range3 {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      cursor: pointer;
      outline: none;
      border-radius: 15px;
      height: 20px;
      height: 6px;
      background: #ccc;
    }

    #range3::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      height: 30px;
      width: 30px;
      background: transparent;
      background-image: url('https://ibaslogic.github.io/hosted-assets/smile.png');
      background-size: cover;
      border-radius: 50%;
      transition: 0.2s ease-in-out;
      transform: rotateZ(var(--thumb-rotate, 0deg));
    }

    /* Thumb: Firefox */
    #range3::-moz-range-thumb {
      height: 30px;
      width: 30px;
      background: transparent;
      background-image: url('https://ibaslogic.github.io/hosted-assets/smile.png');
      background-size: cover;
      border: none;
      border-radius: 50%;
      transform: rotateZ(var(--thumb-rotate, 0deg));
      transition: 0.2s ease-in-out;
    }

    #range3::-webkit-slider-thumb:hover {
      box-shadow: 0 0 0 10px rgba(255, 85, 0, 0.1);
    }
    #range3:active::-webkit-slider-thumb {
      box-shadow: 0 0 0 13px rgba(255, 85, 0, 0.2);
    }

    #range3:focus::-webkit-slider-thumb {
      box-shadow: 0 0 0 13px rgba(255, 85, 0, 0.2);
    }

    #range3::-moz-range-thumb:hover {
      box-shadow: 0 0 0 10px rgba(255, 85, 0, 0.1);
    }
    #range3:active::-moz-range-thumb {
      box-shadow: 0 0 0 13px rgba(255, 85, 0, 0.2);
    }
    #range3:focus::-moz-range-thumb {
      box-shadow: 0 0 0 13px rgba(255, 85, 0, 0.2);
    }

    /* range 3 */
    .range-slider {
      flex: 1;
    }

    .sliderticks {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
    }

    .sliderticks span {
      display: flex;
      justify-content: center;
      width: 1px;
      height: 10px;
      background: #d3d3d3;
      line-height: 40px;
    }

    /*=============
Aesthetics 
=========================*/

    body {
      font-family: system-ui;
    }

    h1 {
      color: #4b4949;
      text-align: center;
    }

    .wrapper {
      color: #4b4949;
      background: #f50;
      max-width: 600px;
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }

    .content {
      width: 100%;
      max-width: 500px;
      height: 80%;
      background: #fff;
      padding: 0px 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .range {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSlider {
  class = input<string>('');

  //https://github.com/tailwindlabs/tailwindcss/discussions/8748
  //https://stackoverflow.com/questions/18389224/how-to-style-html5-range-input-to-have-different-color-before-and-after-slider/63941494#63941494
  thumbClass = signal('');

  trackClass = signal('');

  classes = computed(() => cn('range-input', this.thumbClass(), this.trackClass(), this.class()));

  constructor() {
    effect(() => {});
  }

  private host = inject(ElementRef);

  handleInput(event: KeyboardEvent) {
    console.log(event);

    if (!event.target) return;

    const currentValue = +(event.target as HTMLInputElement).value;

    const progress = (currentValue / this.host.nativeElement.max) * 100;

    this.host.nativeElement.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
  }
}
