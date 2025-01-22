import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';

@Component({
  selector: 'sc-clock-picker2',
  imports: [],
  template: ``,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScClockPicker2 {
  protected readonly isHourMode = signal(true);
  protected readonly selectedHour = signal(12);
  protected readonly selectedMinute = signal(0);

  // Generate positions for clock numbers
  generateClockNumbers = () => {
    const numbers = this.isHourMode() ? 12 : 60;
    const step = this.isHourMode() ? 1 : 5;
    const items = [];

    for (let i = 1; i <= numbers / step; i++) {
      const angle = i * (360 / (numbers / step)) - 90;
      const radius = 80;
      const x = Math.cos((angle * Math.PI) / 180) * radius;
      const y = Math.sin((angle * Math.PI) / 180) * radius;

      items.push({
        number: i,
        style: {
          left: `${x + 100}px`,
          top: `${y + 100}px`,
        },
      });
    }

    return items;
  };

  handleNumberClick = (num: number) => {
    if (this.isHourMode()) {
      this.selectedHour.set(num);
    } else {
      this.selectedMinute.set(num * 5);
    }
  };

  getHandRotation = () => {
    const value = this.isHourMode() ? this.selectedHour() : this.selectedMinute() / 5;
    const angle = value * (360 / (this.isHourMode() ? 12 : 60 / 5)) - 90;
    return `rotate(${angle}deg)`;
  };
}
