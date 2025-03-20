import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';

@Component({
  selector: 'app-page',
  imports: [],
  template: `
    <div class="bg-background text-foreground min-h-screen flex items-center justify-center p-4">
      <div class="max-w-md w-full mx-auto">
        <div
          class="bg-card text-card-foreground rounded-lg border border-border shadow-md overflow-hidden"
        >
          <!-- Album Art and Info -->
          <div class="relative">
            <img
              class="w-full h-48 object-cover"
              src="https://placehold.co/400x250"
              alt="Album Cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4"
            >
              <span class="text-white/80 text-sm">Now Playing</span>
              <h2 class="text-white text-xl font-bold">Midnight Reverie</h2>
              <p class="text-white/80">The Cosmic Wanderers</p>
            </div>
          </div>

          <!-- Player Controls -->
          <div class="p-4 space-y-4">
            <!-- Progress Bar -->
            <div class="space-y-1">
              <div class="flex justify-between text-xs text-muted-foreground">
                <span id="current-time">1:24</span>
                <span id="total-time">3:45</span>
              </div>
              <input class="w-full" id="progress" type="range" min="0" max="100" value="37" />
            </div>

            <!-- Main Controls -->
            <div class="flex items-center justify-between">
              <!-- Previous Button -->
              <button
                class="rounded-full p-2 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polygon points="19 20 9 12 19 4 19 20"></polygon>
                  <line x1="5" y1="19" x2="5" y2="5"></line>
                </svg>
              </button>

              <!-- Rewind Button -->
              <button
                class="rounded-full p-2 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polygon points="11 19 2 12 11 5 11 19"></polygon>
                  <polygon points="22 19 13 12 22 5 22 19"></polygon>
                </svg>
              </button>

              <!-- Play/Pause Button -->
              <button
                class="bg-primary text-primary-foreground rounded-full p-3 hover:bg-primary/90 transition-colors"
                id="play-pause-btn"
                (click)="toggle()"
              >
                <svg
                  class="h-6 w-6"
                  id="play-icon"
                  [class.hidden]="isPlaying()"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <svg
                  class="h-6 w-6"
                  id="pause-icon"
                  [class.hidden]="!isPlaying()"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
              </button>

              <!-- Forward Button -->
              <button
                class="rounded-full p-2 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polygon points="13 19 22 12 13 5 13 19"></polygon>
                  <polygon points="2 19 11 12 2 5 2 19"></polygon>
                </svg>
              </button>

              <!-- Next Button -->
              <button
                class="rounded-full p-2 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polygon points="5 4 15 12 5 20 5 4"></polygon>
                  <line x1="19" y1="5" x2="19" y2="19"></line>
                </svg>
              </button>
            </div>

            <!-- Volume and Additional Controls -->
            <div class="flex items-center justify-between pt-2">
              <!-- Repeat Button -->
              <button
                class="rounded-full p-2 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                id="repeat-btn"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17 2l4 4-4 4"></path>
                  <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                  <path d="M7 22l-4-4 4-4"></path>
                  <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                </svg>
              </button>

              <!-- Volume Control -->
              <div class="flex items-center space-x-2 flex-1 px-2">
                <button
                  class="rounded-full p-1 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  id="volume-btn"
                >
                  <svg
                    class="h-4 w-4"
                    id="volume-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                  </svg>
                  <svg
                    class="h-4 w-4 hidden"
                    id="mute-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="23" y1="9" x2="17" y2="15"></line>
                    <line x1="17" y1="9" x2="23" y2="15"></line>
                  </svg>
                </button>
                <input class="flex-1" id="volume" type="range" min="0" max="100" value="75" />
              </div>

              <!-- Shuffle Button -->
              <button
                class="rounded-full p-2 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                id="shuffle-btn"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="16 3 21 3 21 8"></polyline>
                  <line x1="4" y1="20" x2="21" y2="3"></line>
                  <polyline points="21 16 21 21 16 21"></polyline>
                  <line x1="15" y1="15" x2="21" y2="21"></line>
                  <line x1="4" y1="4" x2="9" y2="9"></line>
                </svg>
              </button>
            </div>
          </div>

          <!-- Playlist or Additional Info -->
          <div class="border-t border-border p-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div
                  class="flex items-end h-6 space-x-1 py-1"
                  id="equalizer"
                  [class.paused]="!isPlaying()"
                >
                  <div class="w-1 bg-primary rounded-full equalizer-1"></div>
                  <div class="w-1 bg-primary rounded-full equalizer-2"></div>
                  <div class="w-1 bg-primary rounded-full equalizer-3"></div>
                </div>
                <span class="font-medium">From Album: Cosmic Journeys</span>
              </div>

              <!-- More Options Button -->
              <button
                class="rounded-full p-2 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Up Next -->
        <div class="mt-4 bg-card text-card-foreground rounded-lg border border-border shadow-sm">
          <div class="p-3 border-b border-border flex justify-between items-center">
            <h3 class="font-medium">Up Next</h3>
            <button class="text-sm text-primary hover:underline">View All</button>
          </div>

          <!-- Song Item -->
          <div class="p-3 hover:bg-muted/50 transition-colors flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-secondary rounded-md flex items-center justify-center">
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>
              <div>
                <div class="font-medium">Stellar Winds</div>
                <div class="text-sm text-muted-foreground">The Cosmic Wanderers</div>
              </div>
            </div>
            <div class="text-sm text-muted-foreground">3:17</div>
          </div>

          <!-- Song Item -->
          <div class="p-3 hover:bg-muted/50 transition-colors flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-secondary rounded-md flex items-center justify-center">
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>
              <div>
                <div class="font-medium">Astral Dreams</div>
                <div class="text-sm text-muted-foreground">The Cosmic Wanderers</div>
              </div>
            </div>
            <div class="text-sm text-muted-foreground">4:32</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    /* Custom styles for volume slider and progress bar */
    input[type='range'] {
      -webkit-appearance: none;
      appearance: none;
      background: transparent;
      cursor: pointer;
    }

    input[type='range']::-webkit-slider-runnable-track {
      background: hsl(var(--muted));
      border-radius: 0.25rem;
      height: 0.25rem;
    }

    input[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      margin-top: -0.375rem;
      background-color: hsl(var(--primary));
      border-radius: 50%;
      height: 1rem;
      width: 1rem;
    }

    input[type='range']:focus {
      outline: none;
    }

    input[type='range']:focus::-webkit-slider-thumb {
      box-shadow: 0 0 0 3px hsla(var(--ring) / 0.3);
    }

    /* Animation for equalizer */
    @keyframes equalize-1 {
      0%,
      100% {
        height: 0.5rem;
      }
      50% {
        height: 1.5rem;
      }
    }

    @keyframes equalize-2 {
      0%,
      100% {
        height: 1rem;
      }
      25% {
        height: 0.5rem;
      }
      75% {
        height: 1.75rem;
      }
    }

    @keyframes equalize-3 {
      0%,
      100% {
        height: 0.75rem;
      }
      35% {
        height: 1.5rem;
      }
      60% {
        height: 0.5rem;
      }
    }

    .equalizer-1 {
      animation: equalize-1 1.2s ease-in-out infinite;
    }

    .equalizer-2 {
      animation: equalize-2 1.6s ease-in-out infinite;
    }

    .equalizer-3 {
      animation: equalize-3 1.4s ease-in-out infinite;
    }

    .paused .equalizer-1,
    .paused .equalizer-2,
    .paused .equalizer-3 {
      animation-play-state: paused;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
  // Play/Pause toggle functionality
  isPlaying = signal(false);

  toggle() {
    this.isPlaying.update((isPlaying) => !isPlaying);
  }

  // Volume mute/unmute functionality
  isMuted = signal(false);
  previousVolume = 75;
}
