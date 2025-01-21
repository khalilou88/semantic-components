import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'sc-minute-markers',
  imports: [],
  template: `
    @for (minute of minutePositions(); track minute) {
      <div class="minute-marker" [style.top.%]="minute.top" [style.left.%]="minute.left">
        <div class="minute-label">{{ (minutePositions().indexOf(minute) * 5) % 60 }}</div>
      </div>
    }
  `,
  styles: `
    .minute-marker {
      position: absolute;
      width: 8px;
      height: 8px;
      background-color: black;
      border-radius: 50%;
    }

    .minute-label {
      position: absolute;
      font-size: 10px;
      color: black;
      text-align: center;
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMinuteMarkers {
  readonly minutePositions = input<
    {
      top: number;
      left: number;
    }[]
  >([]);
}
