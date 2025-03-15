import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScOnThisPage } from '@semantic-components/ui';

@Component({
  selector: 'app-on-this-page-page',
  imports: [ScOnThisPage],
  template: `
    <div class="flex">
      <!-- Main content area -->
      <main class="flex-1 p-6">
        <h1 class="text-3xl font-bold mb-8">Documentation Page</h1>

        <h2 class="text-2xl font-semibold mt-8 mb-4" id="introduction">Introduction</h2>
        <p>This is the introduction section of our documentation...</p>

        <h2 class="text-2xl font-semibold mt-8 mb-4" id="getting-started">Getting Started</h2>
        <p>Here's how to get started with our product...</p>

        <h3 class="text-xl font-semibold mt-6 mb-3" id="installation">Installation</h3>
        <p>Installation instructions go here...</p>

        <h4 class="text-lg font-semibold mt-4 mb-2" id="npm-install">NPM Installation</h4>
        <p>Details about npm installation...</p>

        <h4 class="text-lg font-semibold mt-4 mb-2" id="manual-setup">Manual Setup</h4>
        <p>Details about manual setup...</p>

        <h3 class="text-xl font-semibold mt-6 mb-3" id="configuration">Configuration</h3>
        <p>Configuration details go here...</p>

        <h4 class="text-lg font-semibold mt-4 mb-2" id="basic-config">Basic Configuration</h4>
        <p>Basic configuration options...</p>

        <h4 class="text-lg font-semibold mt-4 mb-2" id="advanced-config">Advanced Configuration</h4>
        <p>Advanced configuration options...</p>

        <h2 class="text-2xl font-semibold mt-8 mb-4" id="api-reference">API Reference</h2>
        <p>Detailed API documentation...</p>

        <h3 class="text-xl font-semibold mt-6 mb-3" id="core-api">Core API</h3>
        <p>Core API details...</p>

        <h3 class="text-xl font-semibold mt-6 mb-3" id="plugins">Plugins</h3>
        <p>Plugin information...</p>
      </main>

      <!-- Sidebar with on-this-page navigation -->
      <aside class="hidden lg:block border-l border-gray-200">
        <sc-on-this-page></sc-on-this-page>
      </aside>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OnThisPagePage {}
