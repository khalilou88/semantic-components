import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sticky-footer',
  imports: [],
  template: `
    <!-- Main container -->
    <div class="flex flex-col min-h-screen">
      <!-- Header -->
      <header class="bg-blue-600 text-white p-4">
        <h1 class="text-2xl font-bold">Sticky Footer Tutorial</h1>
      </header>

      <!-- Main content -->
      <main class="grow p-6 bg-gray-50">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-xl font-semibold mb-4">
            How to Create a Sticky Footer with Tailwind CSS
          </h2>

          <div class="space-y-4 text-gray-700">
            <p>
              Creating a sticky footer requires a specific layout structure to ensure the footer
              stays at the bottom of the page, even when content is minimal.
            </p>

            <h3 class="font-medium text-lg">Key Components:</h3>

            <ol class="list-decimal pl-5 space-y-2">
              <li>
                <strong>Wrapper Div:</strong>
                Use a flex container that spans the minimum viewport height
              </li>
              <li>
                <strong>Flex Column:</strong>
                Set content direction to vertical
              </li>
              <li>
                <strong>Flex Grow:</strong>
                Make the main content area expand to push the footer down
              </li>
            </ol>

            <div class="bg-gray-100 p-4 rounded-md">
              <p class="font-mono text-sm mb-2 text-gray-900">The essential Tailwind classes:</p>
              <ul class="list-disc pl-5 font-mono text-sm">
                <li>
                  <code>flex</code>
                  - Creates a flex container
                </li>
                <li>
                  <code>flex-col</code>
                  - Sets vertical direction
                </li>
                <li>
                  <code>min-h-screen</code>
                  - Ensures minimum height of 100vh
                </li>
                <li>
                  <code>grow</code>
                  or
                  <code>flex-1</code>
                  - Makes main content expand
                </li>
              </ul>
            </div>

            <h3 class="font-medium text-lg">Example HTML Structure:</h3>

            <pre class="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
&lt;div class="flex flex-col min-h-screen"&gt;
  &lt;header&gt;...&lt;/header&gt;
  &lt;main class="grow"&gt;...&lt;/main&gt;
  &lt;footer&gt;...&lt;/footer&gt;
&lt;/div&gt;</pre
            >

            <p>This approach ensures that:</p>
            <ul class="list-disc pl-5">
              <li>The footer stays at the bottom when content is short</li>
              <li>The footer pushes down when content exceeds viewport height</li>
              <li>The layout works responsively across all screen sizes</li>
            </ul>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p class="text-yellow-700">
                <strong>Note:</strong>
                The
                <code>grow</code>
                class is essential - without it, the footer won't stay at the bottom when content is
                minimal.
              </p>
            </div>
          </div>
        </div>
      </main>

      <!-- Footer - The sticky part! -->
      <footer class="bg-gray-800 text-white p-4">
        <div class="max-w-6xl mx-auto flex justify-between items-center">
          <p>© 2025 Sticky Footer Example</p>
          <p>This footer will always stick to the bottom</p>
        </div>
      </footer>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StickyFooter {}
