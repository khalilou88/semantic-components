// animation-demo.component.ts
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

import { AnimatedComponent } from './animated-component';

@Component({
  selector: 'app-animation-demo',
  standalone: true,
  imports: [CommonModule, AnimatedComponent],
  template: `
    <div class="p-6 max-w-md mx-auto">
      <h1 class="text-2xl font-bold mb-4">Animation State Demo</h1>

      <div class="space-y-4">
        <div class="mb-4 p-3 bg-gray-100 rounded">
          <p class="text-sm text-gray-800 mb-2">
            Current state:
            <span
              class="font-mono font-medium"
              [ngClass]="{
                'text-gray-500': animatedComponent.state === 'initial',
                'text-blue-500': animatedComponent.state === 'entering',
                'text-green-500': animatedComponent.state === 'visible',
                'text-orange-500': animatedComponent.state === 'exiting',
                'text-red-500': animatedComponent.state === 'hidden',
              }"
            >
              {{ animatedComponent.state }}
            </span>
          </p>

          <div class="flex flex-wrap gap-2">
            <button
              class="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
              [disabled]="animatedComponent.state !== 'initial'"
              (click)="animatedComponent.enter()"
              title="Only works from 'initial' state"
            >
              Enter
            </button>

            <button
              class="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
              [disabled]="animatedComponent.state !== 'visible'"
              (click)="animatedComponent.exit()"
              title="Only works from 'visible' state"
            >
              Exit
            </button>

            <button
              class="px-3 py-1 bg-purple-500 text-white text-sm rounded hover:bg-purple-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
              [disabled]="
                animatedComponent.state !== 'initial' && animatedComponent.state !== 'visible'
              "
              (click)="animatedComponent.toggle()"
              title="Toggles between 'initial' and 'visible' states"
            >
              Toggle
            </button>

            <button
              class="px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
              [disabled]="animatedComponent.state === 'initial'"
              (click)="animatedComponent.reset()"
              title="Reset to 'initial' state"
            >
              Reset
            </button>
          </div>
        </div>

        <div class="bg-white rounded-md p-1 shadow">
          <app-animated-component #animatedComponent [initialState]="'initial'">
            <div class="p-4">
              <h2 class="text-xl font-semibold">Animated Content</h2>
              <p class="mt-2">This component follows a strict state lifecycle:</p>
              <ul class="list-disc list-inside mt-1 space-y-1">
                <li>initial → entering → visible → exiting → hidden</li>
                <li>Enter only works from 'initial' state</li>
                <li>Exit only works from 'visible' state</li>
                <li>Reset returns to 'initial' state</li>
              </ul>
            </div>
          </app-animated-component>
        </div>

        <div class="mt-4 text-xs text-gray-500">
          <p>State transition diagram:</p>
          <pre class="mt-1 bg-gray-100 p-2 rounded overflow-x-auto">
initial ──enter()──→ entering ─────────→ visible ──exit()──→ exiting ─────────→ hidden
   ↑                                                                              │
   └──────────────────────────────reset()───────────────────────────────────────┘</pre
          >
        </div>
      </div>
    </div>
  `,
})
export class AnimationDemoComponent {
  @ViewChild('animatedComponent') animatedComponent!: AnimatedComponent;
}
