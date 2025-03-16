// hover-scrollbar.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sc-hover-scrollbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="relative mx-auto"
      [ngClass]="{
        'border border-gray-300': border,
      }"
      [ngStyle]="{
        width: width + 'px',
        height: height + 'px',
      }"
    >
      <div class="w-full h-full overflow-y-auto p-3 box-border hover-scrollbar">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      @reference "tailwindcss";

      /* These styles need to be included as they cannot be done with Tailwind utility classes */
      .hover-scrollbar::-webkit-scrollbar {
        width: 8px;
      }

      .hover-scrollbar::-webkit-scrollbar-thumb {
        @apply bg-transparent rounded-md transition-colors duration-300;
      }

      .hover-scrollbar:hover::-webkit-scrollbar-thumb {
        @apply bg-gray-400;
      }

      .hover-scrollbar:hover::-webkit-scrollbar-thumb:hover {
        @apply bg-gray-500;
      }

      /* Firefox */
      .hover-scrollbar {
        scrollbar-width: thin;
        scrollbar-color: transparent transparent;
        transition: scrollbar-color 0.3s ease;
      }

      .hover-scrollbar:hover {
        scrollbar-color: theme('colors.gray.400') transparent;
      }
    `,
  ],
})
export class HoverScrollbarComponent {
  @Input() width = 300;
  @Input() height = 200;
  @Input() border = true;
}
