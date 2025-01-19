import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sc-hour-markers',
  imports: [NgFor],
  template: `
    <div
      class="hour-marker"
      *ngFor="let hour of hourPositions"
      [style.top.%]="hour.top"
      [style.left.%]="hour.left"
    >
      <div class="hour-label">{{ hourPositions.indexOf(hour) + 1 }}</div>
    </div>
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
  @Input() hourPositions: { top: number; left: number }[] = [];
}
