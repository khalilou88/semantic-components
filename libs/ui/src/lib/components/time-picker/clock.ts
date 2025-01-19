import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ScHourMarkers } from './hour-markers';
import { ScMinuteMarkers } from './minute-markers';

@Component({
  selector: 'sc-clock',
  imports: [ScHourMarkers, ScMinuteMarkers],
  template: `
    <div class="clock-container">
      <!-- Hour Markers Component -->
      <sc-hour-markers [hourPositions]="hourPositions" />
    </div>

    <div class="clock-container">
      <!-- Minute Markers Component -->
      <sc-minute-markers [minutePositions]="minutePositions" />
    </div>
  `,
  styles: `
    .clock-container {
      position: relative;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: #f3f3f3;
      border: 2px solid black;
      margin: 50px auto;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScClock implements OnInit {
  hourPositions: { top: number; left: number }[] = [];
  minutePositions: { top: number; left: number }[] = [];

  ngOnInit(): void {
    this.calculateClockPositions(); // Calculate positions for hours and minutes on initialization
  }

  calculateClockPositions(): void {
    // Calculate the positions for hours (12-hour clock)
    this.hourPositions = [];
    for (let i = 1; i <= 12; i++) {
      const angle = (i * 30 - 90) * (Math.PI / 180); // Adjust for 12-hour clock
      const top = 50 - Math.cos(angle) * 40;
      const left = 50 + Math.sin(angle) * 40;
      this.hourPositions.push({ top, left });
    }

    // Calculate the positions for minutes (60-minute positions)
    this.minutePositions = [];
    for (let i = 0; i < 60; i++) {
      const angle = (i * 6 - 90) * (Math.PI / 180); // 6° per minute
      const top = 50 - Math.cos(angle) * 40;
      const left = 50 + Math.sin(angle) * 40;
      this.minutePositions.push({ top, left });
    }
  }
}
