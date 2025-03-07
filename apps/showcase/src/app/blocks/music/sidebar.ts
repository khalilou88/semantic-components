import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  template: `
    <div class="pb-12">
      <div class="space-y-4 py-4">
        <div class="px-3 py-2">
          <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">Discover</h2>
          <div class="space-y-1">
            <button class="sidebar-item">
              <i class="playlist-icon"></i>
              Listen Now
            </button>
            <button class="sidebar-item">
              <i class="browse-icon"></i>
              Browse
            </button>
            <button class="sidebar-item">
              <i class="radio-icon"></i>
              Radio
            </button>
          </div>
        </div>
        <div class="px-3 py-2">
          <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">Library</h2>
          <div class="space-y-1">
            <button class="sidebar-item">
              <i class="playlist-icon"></i>
              Playlists
            </button>
            <button class="sidebar-item">
              <i class="artist-icon"></i>
              Artists
            </button>
            <button class="sidebar-item">
              <i class="album-icon"></i>
              Albums
            </button>
          </div>
        </div>
        <div class="px-3 py-2">
          <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">Playlists</h2>
          <div class="space-y-1">
            @for (playlist of playlists(); track playlist) {
              <button class="sidebar-item">
                {{ playlist.name }}
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    @reference "tailwindcss";
    .sidebar-item {
      @apply w-full justify-start rounded-md p-2 text-sm font-medium hover:underline;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  readonly playlists = input<any[]>([]);
}
