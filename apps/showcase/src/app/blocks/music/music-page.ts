import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AlbumArtwork } from './album-artwork';
import { listenNowAlbums, madeForYouAlbums, playlists } from './data/albums';
import { Menu } from './menu';
import { PodcastEmptyPlaceholder } from './podcast-empty-placeholder';
import { Sidebar } from './sidebar';

@Component({
  selector: 'app-music-page',
  imports: [AlbumArtwork, CommonModule, Sidebar, Menu, PodcastEmptyPlaceholder],
  template: `
    <div class="md:hidden">
      <img class="block dark:hidden" src="assets/images/music-light.png" alt="Music" />
      <img class="hidden dark:block" src="assets/images/music-dark.png" alt="Music" />
    </div>

    <div class="hidden md:block">
      <app-menu></app-menu>
      <div class="border-t">
        <div class="bg-background">
          <div class="grid lg:grid-cols-5">
            <app-sidebar class="hidden lg:block" [playlists]="playlists"></app-sidebar>
            <div class="col-span-3 lg:col-span-4 lg:border-l">
              <div class="h-full px-4 py-6 lg:px-8">
                <div class="h-full space-y-6">
                  <div class="space-between flex items-center">
                    <div
                      class="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
                    >
                      <button
                        class="tab-trigger inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm relative"
                        [class.active]="activeTab === 'music'"
                        (click)="setActiveTab('music')"
                      >
                        Music
                      </button>
                      <button
                        class="tab-trigger inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                        [class.active]="activeTab === 'podcasts'"
                        (click)="setActiveTab('podcasts')"
                      >
                        Podcasts
                      </button>
                      <button
                        class="tab-trigger inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                        [class.active]="activeTab === 'live'"
                        [disabled]="isTabDisabled('live')"
                        (click)="setActiveTab('live')"
                      >
                        Live
                      </button>
                    </div>
                    <div class="ml-auto mr-4">
                      <button
                        class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                      >
                        <i class="plus-circle-icon"></i>
                        Add music
                      </button>
                    </div>
                  </div>

                  <!-- Music tab content -->
                  <div class="border-none p-0 outline-none" *ngIf="activeTab === 'music'">
                    <div class="flex items-center justify-between">
                      <div class="space-y-1">
                        <h2 class="text-2xl font-semibold tracking-tight">Listen Now</h2>
                        <p class="text-sm text-muted-foreground">
                          Top picks for you. Updated daily.
                        </p>
                      </div>
                    </div>
                    <div class="separator my-4"></div>
                    <div class="relative">
                      <div class="scroll-area">
                        <div class="flex space-x-4 pb-4">
                          <app-album-artwork
                            *ngFor="let album of listenNowAlbums"
                            [album]="album"
                            [class]="'w-[250px]'"
                            [aspectRatio]="'portrait'"
                            [width]="250"
                            [height]="330"
                          ></app-album-artwork>
                        </div>
                        <div class="scroll-bar horizontal"></div>
                      </div>
                    </div>
                    <div class="mt-6 space-y-1">
                      <h2 class="text-2xl font-semibold tracking-tight">Made for You</h2>
                      <p class="text-sm text-muted-foreground">
                        Your personal playlists. Updated daily.
                      </p>
                    </div>
                    <div class="separator my-4"></div>
                    <div class="relative">
                      <div class="scroll-area">
                        <div class="flex space-x-4 pb-4">
                          <app-album-artwork
                            *ngFor="let album of madeForYouAlbums"
                            [album]="album"
                            [class]="'w-[150px]'"
                            [aspectRatio]="'square'"
                            [width]="150"
                            [height]="150"
                          ></app-album-artwork>
                        </div>
                        <div class="scroll-bar horizontal"></div>
                      </div>
                    </div>
                  </div>

                  <!-- Podcasts tab content -->
                  <div class="h-full flex-col border-none p-0" *ngIf="activeTab === 'podcasts'">
                    <div class="flex items-center justify-between">
                      <div class="space-y-1">
                        <h2 class="text-2xl font-semibold tracking-tight">New Episodes</h2>
                        <p class="text-sm text-muted-foreground">
                          Your favorite podcasts. Updated daily.
                        </p>
                      </div>
                    </div>
                    <div class="separator my-4"></div>
                    <app-podcast-empty-placeholder></app-podcast-empty-placeholder>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MusicPage {
  title = 'Music App';
  activeTab = 'music';
  listenNowAlbums = listenNowAlbums;
  madeForYouAlbums = madeForYouAlbums;
  playlists = playlists;

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  isTabDisabled(tab: string): boolean {
    return tab === 'live';
  }
}
