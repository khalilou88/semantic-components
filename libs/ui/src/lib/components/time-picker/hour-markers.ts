import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'sc-hour-markers',
  imports: [],
  template: `
    @for (hour of hourPositions(); track hour) {
      <div class="hour-marker" [style.top.%]="hour.top" [style.left.%]="hour.left">
        <div class="hour-label">{{ hourPositions().indexOf(hour) + 1 }}</div>
      </div>
    }
  `,
  styles: `
    .hour-marker {
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: black;
      border-radius: 50%;
    }

    .hour-label {
      position: absolute;
      font-size: 12px;
      color: black;
      text-align: center;
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScHourMarkers {
  readonly hourPositions = input<
    {
      top: number;
      left: number;
    }[]
  >([]);
}
