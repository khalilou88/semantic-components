import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sticky-header',
  imports: [],
  template: `
    <!-- Main container -->
    <div class="flex flex-col min-h-screen">
      <!-- Sticky Header -->
      <header class="sticky top-0 bg-blue-600 text-white p-4 shadow-md z-10">
        <div class="max-w-6xl mx-auto">
          <h1 class="text-2xl font-bold">Sticky Header & Normal Footer</h1>
        </div>
      </header>

      <!-- Main content -->
      <main class="grow p-6">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-xl font-semibold mb-4">
            How to Create a Sticky Header with Normal Footer
          </h2>

          <div class="space-y-4 text-gray-700">
            <p>
              This example demonstrates how to create a layout with a sticky header that remains
              visible when scrolling, while the footer stays at the bottom of the page but scrolls
              out of view.
            </p>

            <h3 class="font-medium text-lg">Key Components:</h3>

            <ol class="list-decimal pl-5 space-y-2">
              <li>
                <strong>Wrapper Div:</strong>
                A flex container that spans the minimum viewport height
              </li>
              <li>
                <strong>Sticky Header:</strong>
                Fixed at the top of the viewport during scrolling
              </li>
              <li>
                <strong>Flex Grow Main Content:</strong>
                Expands to push the footer down
              </li>
              <li>
                <strong>Normal Footer:</strong>
                Stays at the bottom of the content but scrolls normally
              </li>
            </ol>

            <div class="bg-gray-100 p-4 rounded-md">
              <p class="font-mono text-sm mb-2 text-gray-900">The essential Tailwind classes:</p>
              <h4 class="font-medium mb-1">For the overall layout:</h4>
              <ul class="list-disc pl-5 font-mono text-sm mb-2">
                <li>
                  <code>flex flex-col min-h-screen</code>
                  - Creates the basic layout structure
                </li>
                <li>
                  <code>grow</code>
                  or
                  <code>flex-1</code>
                  - Makes main content expand
                </li>
              </ul>
              <h4 class="font-medium mb-1">For the sticky header:</h4>
              <ul class="list-disc pl-5 font-mono text-sm mb-2">
                <li>
                  <code>sticky</code>
                  - Enables position sticky behavior
                </li>
                <li>
                  <code>top-0</code>
                  - Sticks to the top of the viewport
                </li>
                <li>
                  <code>z-10</code>
                  - Ensures header stays above other content
                </li>
              </ul>
              <h4 class="font-medium mb-1">For the normal footer:</h4>
              <ul class="list-disc pl-5 font-mono text-sm">
                <li>No special positioning classes - behaves like a normal element</li>
                <li>
                  Will appear at the bottom due to
                  <code>grow</code>
                  on the main content
                </li>
              </ul>
            </div>

            <h3 class="font-medium text-lg">Example HTML Structure:</h3>

            <pre class="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
&lt;div class="flex flex-col min-h-screen"&gt;
  &lt;header class="sticky top-0 z-10"&gt;...&lt;/header&gt;
  &lt;main class="grow"&gt;...&lt;/main&gt;
  &lt;footer&gt;...&lt;/footer&gt;
&lt;/div&gt;</pre
            >

            <p>This approach ensures that:</p>
            <ul class="list-disc pl-5">
              <li>The header stays visible at the top when scrolling down</li>
              <li>The footer stays at the bottom of the page content</li>
              <li>When content is short, the footer appears at the bottom of the viewport</li>
              <li>When content is long, you need to scroll down to see the footer</li>
              <li>The layout works responsively across all screen sizes</li>
            </ul>

            <!-- Dummy content to demonstrate scrolling -->
            <div class="py-4">
              <h3 class="text-lg font-medium mb-2">Scroll down to see the behavior</h3>
              <div class="space-y-4">
                <p>Notice how the header stays fixed at the top as you scroll down.</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
                  Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus
                  rhoncus ut eleifend nibh porttitor.
                </p>
                <p>
                  Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl
                  tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor
                  posuere.
                </p>
                <p>
                  Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus
                  et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus
                  condimentum laoreet.
                </p>
                <p>
                  Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in
                  metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus
                  tortor.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
                  Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus
                  rhoncus ut eleifend nibh porttitor.
                </p>
                <p>
                  Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl
                  tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor
                  posuere.
                </p>
                <p>
                  Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus
                  et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus
                  condimentum laoreet.
                </p>
                <p>
                  Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in
                  metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus
                  tortor.
                </p>
                <p>
                  Keep scrolling to find the footer at the bottom. The header remains visible, but
                  the footer will only be visible when you reach the bottom of the page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- Normal Footer (not sticky) -->
      <footer class="bg-gray-800 text-white p-4">
        <div class="max-w-6xl mx-auto flex justify-between items-center">
          <p>© 2025 Layout Example</p>
          <p>This is a normal footer (not sticky)</p>
        </div>
      </footer>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StickyHeader {}
