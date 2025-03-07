import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sc-color-picker',
  imports: [FormsModule],
  template: `
    <div class="max-w-md p-4 bg-white rounded-lg shadow-md">
      <div class="flex items-center mb-4 space-x-4">
        <div
          class="w-12 h-12 rounded border border-gray-300"
          [style.backgroundColor]="selectedColor"
        ></div>
        <input
          class="px-3 py-2 w-32 bg-gray-50 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          [value]="selectedColor"
          type="text"
          readonly
        />
      </div>

      <div class="space-y-6">
        <!-- RGB Sliders -->
        <div class="space-y-4">
          <!-- Red Slider -->
          <div class="flex items-center space-x-4">
            <label class="w-16 text-sm font-medium text-gray-700" for="label_12">Red:</label>
            <input
              class="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
              id="label_12"
              [(ngModel)]="red"
              (ngModelChange)="updateColor()"
              type="range"
              min="0"
              max="255"
            />
            <span class="w-12 text-right text-sm text-gray-600">{{ red }}</span>
          </div>

          <!-- Green Slider -->
          <div class="flex items-center space-x-4">
            <label class="w-16 text-sm font-medium text-gray-700" for="label_121">Green:</label>
            <input
              class="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
              id="label_121"
              [(ngModel)]="green"
              (ngModelChange)="updateColor()"
              type="range"
              min="0"
              max="255"
            />
            <span class="w-12 text-right text-sm text-gray-600">{{ green }}</span>
          </div>

          <!-- Blue Slider -->
          <div class="flex items-center space-x-4">
            <label class="w-16 text-sm font-medium text-gray-700" for="label_126">Blue:</label>
            <input
              class="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
              id="label_126"
              [(ngModel)]="blue"
              (ngModelChange)="updateColor()"
              type="range"
              min="0"
              max="255"
            />
            <span class="w-12 text-right text-sm text-gray-600">{{ blue }}</span>
          </div>
        </div>

        <!-- Preset Colors -->
        <div>
          <p class="mb-2 text-sm font-medium text-gray-700">Preset Colors:</p>
          <div class="grid grid-cols-5 gap-2">
            @for (color of presetColors; track color) {
              <button
                class="w-8 h-8 rounded border border-gray-300 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                [style.backgroundColor]="color"
                (click)="selectPresetColor(color)"
              >
                <span></span>
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScColorPicker implements OnInit {
  @Input() initialColor = '#ff0000';
  readonly colorChange = output<string>();

  red = 255;
  green = 0;
  blue = 0;
  selectedColor = '#ff0000';

  presetColors: string[] = [
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ffff00',
    '#ff00ff',
    '#00ffff',
    '#000000',
    '#ffffff',
    '#808080',
    '#ffa500',
  ];

  ngOnInit() {
    this.setInitialColor();
  }

  setInitialColor() {
    const color = this.initialColor.replace('#', '');
    this.red = parseInt(color.substr(0, 2), 16);
    this.green = parseInt(color.substr(2, 2), 16);
    this.blue = parseInt(color.substr(4, 2), 16);
    this.updateColor();
  }

  updateColor() {
    this.selectedColor = `#${this.componentToHex(this.red)}${this.componentToHex(this.green)}${this.componentToHex(this.blue)}`;
    this.colorChange.emit(this.selectedColor);
  }

  componentToHex(c: number): string {
    const hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }

  selectPresetColor(color: string) {
    this.initialColor = color;
    this.setInitialColor();
  }
}
