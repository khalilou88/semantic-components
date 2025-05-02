import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  FlexibleScrollAreaComponent,
  HoverScrollbarComponent,
  ScScrollArea,
  ScrollAreaComponent,
} from '@semantic-components/ui';

interface Artwork {
  artist: string;
  art: string;
}

@Component({
  selector: 'app-scroll-area-page',
  imports: [
    ScScrollArea,
    HoverScrollbarComponent,
    ScrollAreaComponent,
    FlexibleScrollAreaComponent,
  ],
  template: `
    <div class="h-64 w-full rounded-md border border-gray-200 dark:border-gray-800" sc-scroll-area>
      <div class="p-4">
        <p>Content that might overflow...</p>
        <p>
          Vernacular architecture is building done outside any academic tradition, and without
          professional guidance. It is not a particular architectural movement or style, but rather
          a broad category, encompassing a wide range and variety of building types, with differing
          methods of construction, from around the world, both historical and extant and classical
          and modern. Vernacular architecture constitutes 95% of the world's built environment, as
          estimated in 1995 by Amos Rapoport, as measured against the small percentage of new
          buildings every year designed by architects and built by engineers.
        </p>
        <p>
          This type of architecture usually serves immediate, local needs, is constrained by the
          materials available in its particular region and reflects local traditions and cultural
          practices. The study of vernacular architecture does not examine formally schooled
          architects, but instead that of the design skills and tradition of local builders, who
          were rarely given any attribution for the work. More recently, vernacular architecture has
          been examined by designers and the building industry in an effort to be more energy
          conscious with contemporary design and construction—part of a broader interest in
          sustainable design.
        </p>
      </div>
    </div>

    <div class="h-[200px] w-[350px] rounded-md border p-4" sc-scroll-area>
      Jokester began sneaking into the castle in the middle of the night and leaving jokes all over
      the place: under the king's pillow, in his soup, even in the royal toilet. The king was
      furious, but he couldn't seem to stop Jokester. And then, one day, the people of the kingdom
      discovered that the jokes left by Jokester were so funny that they couldn't help but laugh.
      And once they started laughing, they couldn't stop.
    </div>

    <div class="w-96 whitespace-nowrap rounded-md border" sc-scroll-area>
      <div class="flex w-max space-x-4 p-4">
        @for (artwork of works; track $index) {
          <figure class="shrink-0">
            <div class="overflow-hidden rounded-md">
              <img
                class="aspect-3/4 h-fit w-fit object-cover"
                [src]="artwork.art"
                [alt]="'Photo by ' + artwork.artist"
                width="300"
                height="400"
              />
            </div>
            <figcaption class="pt-2 text-xs text-muted-foreground">
              Photo by
              <span class="font-semibold text-foreground">
                {{ artwork.artist }}
              </span>
            </figcaption>
          </figure>
        }
      </div>
    </div>

    <br />

    <sc-hover-scrollbar [width]="400" [height]="300" [border]="true">
      <p>Your content goes here...</p>
      <p>This content will scroll with a scrollbar visible only on hover.</p>
      <p>Add as much content as needed to make it scrollable.</p>
    </sc-hover-scrollbar>

    <br />

    <sc-hover-scrollbar [width]="400" [height]="300" [border]="true">
      <p>Your content goes here...</p>
      <p>This content will scroll with a scrollbar visible only on hover.</p>
      <p>Add as much content as needed to make it scrollable.</p>
      <p>Your content goes here...</p>
      <p>This content will scroll with a scrollbar visible only on hover.</p>
      <p>Add as much content as needed to make it scrollable.</p>
      <p>Your content goes here...</p>
      <p>This content will scroll with a scrollbar visible only on hover.</p>
      <p>Add as much content as needed to make it scrollable.</p>
      <p>Your content goes here...</p>
      <p>This content will scroll with a scrollbar visible only on hover.</p>
      <p>Add as much content as needed to make it scrollable.</p>
      <p>Your content goes here...</p>
      <p>This content will scroll with a scrollbar visible only on hover.</p>
      <p>Add as much content as needed to make it scrollable.</p>
    </sc-hover-scrollbar>

    <br />

    <sc-scroll-area3 />

    <br />
    <br />
    <br />

    <div class="mb-12">
      <h2 class="mb-4 text-xl font-medium">Vertical Scrolling</h2>
      <sc-flexible-scroll-area orientation="vertical">
        <p>
          Vernacular architecture is building done outside any academic tradition, and without
          professional guidance. It is not a particular architectural movement or style, but rather
          a broad category, encompassing a wide range and variety of building types, with differing
          methods of construction, from around the world, both historical and extant and classical
          and modern.
        </p>
        <p>
          Vernacular architecture constitutes 95% of the world's built environment, as estimated in
          1995 by Amos Rapoport, as measured against the small percentage of new buildings every
          year designed by architects and built by engineers.
        </p>
        <p>
          This type of architecture usually serves immediate, local needs, is constrained by the
          materials available in its particular region and reflects local traditions and cultural
          practices. The study of vernacular architecture does not examine formally schooled
          architects, but instead that of the design skills and tradition of local builders, who
          were rarely given any attribution for the work.
        </p>
        <p>
          More recently, vernacular architecture has been examined by designers and the building
          industry in an effort to be more energy conscious with contemporary design and
          construction—part of a broader interest in sustainable design.
        </p>
      </sc-flexible-scroll-area>
    </div>

    <div class="mb-12">
      <h2 class="mb-4 text-xl font-medium">horizontal Scrolling</h2>

      <sc-flexible-scroll-area orientation="horizontal">
        @for (item of items; track item) {
          <div
            class="bg-white rounded-lg shadow-md w-64 h-52 shrink-0 border border-gray-200 hover:border-blue-500 transition-colors duration-200 inline-block"
          >
            <div class="p-4 h-full flex flex-col">
              <h3 class="text-lg font-medium text-gray-900 mb-2">{{ item.title }}</h3>
              <p class="text-sm text-gray-600 grow">{{ item.description }}</p>
              <div class="mt-4 text-xs text-gray-500">{{ item.category }}</div>
            </div>
          </div>
        }
      </sc-flexible-scroll-area>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ScrollAreaPage {
  works: Artwork[] = [
    {
      artist: 'Ornella Binni',
      art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
    },
    {
      artist: 'Tom Byrom',
      art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
    },
    {
      artist: 'Vladimir Malyavko',
      art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
    },
  ];

  // Sample items for horizontal scrolling
  items = Array(15)
    .fill(0)
    .map((_, i) => ({
      title: `Item ${i + 1}`,
      description: `This is a description for item ${i + 1}. It contains some sample text to demonstrate the scrolling functionality.`,
      category: ['Design', 'Development', 'Marketing', 'Research'][i % 4],
    }));
}
