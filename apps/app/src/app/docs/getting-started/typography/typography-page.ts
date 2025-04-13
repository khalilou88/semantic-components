import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScHeading } from '@semantic-components/ui';

@Component({
  selector: 'app-typography-page',
  imports: [ScHeading],
  template: `
    <section>
      <h2 class="scroll-m-20 pb-2 mt-10" [underline]="true" sc-heading level="2">Headings</h2>
      <h1 class="scroll-m-20 pb-4 mt-6" [underline]="true" sc-heading level="1">Heading 1</h1>
      <h2 class="scroll-m-20 pb-2 mt-10" [underline]="true" sc-heading level="2">Heading 2</h2>
      <h3 class="scroll-m-20 pb-1 mt-8" [underline]="true" sc-heading level="3">Heading 3</h3>
      <h4 class="scroll-m-20 pb-0.5 mt-6" [underline]="true" sc-heading level="4">Heading 4</h4>
    </section>

    <section>
      <h2 class="scroll-m-20 pb-2 mt-10" [underline]="true" sc-heading level="2">Paragraphs</h2>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        This is a standard paragraph with default styling. The paragraph has proper line height and
        spacing to ensure readability across your application.
      </p>
      <p class="leading-7 [&:not(:first-child)]:mt-6">
        Second paragraphs and beyond have additional top margin to create proper spacing between
        content blocks.
      </p>
      <p class="text-xl text-foreground leading-7 mt-6">
        This is a lead paragraph, used for introductions or to emphasize important information with
        larger text.
      </p>
      <p class="text-lg font-medium mt-6">
        This is slightly larger text that can be used for emphasis without being as prominent as a
        lead paragraph.
      </p>
      <p class="text-sm font-medium leading-none mt-6">
        This is smaller text, useful for captions, footnotes, or secondary information that doesn't
        need emphasis.
      </p>
      <p class="text-sm text-muted-foreground mt-6">
        This is muted text with reduced emphasis, perfect for supplementary information, metadata,
        or less important details.
      </p>
    </section>

    <section>
      <h2
        class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10"
        [underline]="true"
        sc-heading
        level="2"
      >
        Blockquote
      </h2>
      <blockquote class="border-l-2 pl-6 italic mt-6">
        <p>
          Good design is as little design as possible. Less, but better - because it concentrates on
          the essential aspects, and the products are not burdened with non-essentials.
        </p>
        <footer class="text-sm text-muted-foreground mt-2">— Dieter Rams</footer>
      </blockquote>
    </section>

    <section>
      <h2 class="scroll-m-20 pb-2 mt-10" [underline]="true" sc-heading level="2">Lists</h2>
      <h3 class="scroll-m-20 mt-8" sc-heading level="3">Unordered List</h3>
      <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Clean, consistent typography</li>
        <li>Responsive design principles</li>
        <li>Dark mode compatibility</li>
        <li>Proper spacing and hierarchy</li>
      </ul>

      <h3 class="scroll-m-20 mt-8" sc-heading level="3">Ordered List</h3>
      <ol class="my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>Define your typography system</li>
        <li>Implement base Tailwind configuration</li>
        <li>Apply typography classes consistently</li>
        <li>Enjoy the clean, professional design</li>
      </ol>
    </section>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TypographyPage {}
