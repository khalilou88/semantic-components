import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScOnThisPage } from '@semantic-components/ui';

@Component({
  selector: 'app-on-this-page-page',
  imports: [ScOnThisPage],
  template: `
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row">
      <!-- Main content -->
      <main class="flex-1 p-8">
        <h1 class="text-3xl font-bold mt-8 scroll-mt-8" id="introduction">Introduction</h1>
        <p class="mt-4">This is the introduction section of the page...</p>
        <p class="mt-4">This is the introduction section of the page...</p>
        <p class="mt-4">This is the introduction section of the page...</p>
        <p class="mt-4">This is the introduction section of the page...</p>
        <p class="mt-4">This is the introduction section of the page...</p>
        <p class="mt-4">This is the introduction section of the page...</p>
        <p class="mt-4">This is the introduction section of the page...</p>
        <p class="mt-4">This is the introduction section of the page...</p>
        <p class="mt-4">This is the introduction section of the page...</p>
        <p class="mt-4">This is the introduction section of the page...</p>
        <p class="mt-4">This is the introduction section of the page...</p>
        <p class="mt-4">This is the introduction section of the page...</p>
        <p class="mt-4">This is the introduction section of the page...</p>
        <p class="mt-4">This is the introduction section of the page...</p>
        <p class="mt-4">This is the introduction section of the page...</p>
        <p class="mt-4">This is the introduction section of the page...</p>

        <h2 class="text-2xl font-bold mt-8 scroll-mt-8" id="getting-started">Getting Started</h2>
        <p class="mt-4">Let's get started with the basics...</p>
        <p class="mt-4">Let's get started with the basics...</p>
        <p class="mt-4">Let's get started with the basics...</p>
        <p class="mt-4">Let's get started with the basics...</p>
        <p class="mt-4">Let's get started with the basics...</p>
        <p class="mt-4">Let's get started with the basics...</p>
        <p class="mt-4">Let's get started with the basics...</p>
        <p class="mt-4">Let's get started with the basics...</p>
        <p class="mt-4">Let's get started with the basics...</p>
        <p class="mt-4">Let's get started with the basics...</p>
        <p class="mt-4">Let's get started with the basics...</p>
        <p class="mt-4">Let's get started with the basics...</p>
        <p class="mt-4">Let's get started with the basics...</p>
        <p class="mt-4">Let's get started with the basics...</p>
        <p class="mt-4">Let's get started with the basics...</p>
        <p class="mt-4">Let's get started with the basics...</p>
        <p class="mt-4">Let's get started with the basics...</p>
        <p class="mt-4">Let's get started with the basics...</p>

        <h3 class="text-xl font-bold mt-6 scroll-mt-8" id="installation">Installation</h3>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>
        <p class="mt-3">Instructions for installation...</p>

        <h3 class="text-xl font-bold mt-6 scroll-mt-8" id="configuration">Configuration</h3>
        <p class="mt-3">How to configure the application...</p>
        <p class="mt-3">How to configure the application...</p>
        <p class="mt-3">How to configure the application...</p>
        <p class="mt-3">How to configure the application...</p>
        <p class="mt-3">How to configure the application...</p>
        <p class="mt-3">How to configure the application...</p>
        <p class="mt-3">How to configure the application...</p>
        <p class="mt-3">How to configure the application...</p>
        <p class="mt-3">How to configure the application...</p>
        <p class="mt-3">How to configure the application...</p>
        <p class="mt-3">How to configure the application...</p>
        <p class="mt-3">How to configure the application...</p>
        <p class="mt-3">How to configure the application...</p>
        <p class="mt-3">How to configure the application...</p>
        <p class="mt-3">How to configure the application...</p>
        <p class="mt-3">How to configure the application...</p>

        <h2 class="text-2xl font-bold mt-8 scroll-mt-8" id="advanced-topics">Advanced Topics</h2>
        <p class="mt-4">Let's dive into some advanced topics...</p>
        <p class="mt-4">Let's dive into some advanced topics...</p>
        <p class="mt-4">Let's dive into some advanced topics...</p>
        <p class="mt-4">Let's dive into some advanced topics...</p>
        <p class="mt-4">Let's dive into some advanced topics...</p>
        <p class="mt-4">Let's dive into some advanced topics...</p>
        <p class="mt-4">Let's dive into some advanced topics...</p>
        <p class="mt-4">Let's dive into some advanced topics...</p>
        <p class="mt-4">Let's dive into some advanced topics...</p>
        <p class="mt-4">Let's dive into some advanced topics...</p>
        <p class="mt-4">Let's dive into some advanced topics...</p>
        <p class="mt-4">Let's dive into some advanced topics...</p>
        <p class="mt-4">Let's dive into some advanced topics...</p>
        <p class="mt-4">Let's dive into some advanced topics...</p>
        <p class="mt-4">Let's dive into some advanced topics...</p>
        <p class="mt-4">Let's dive into some advanced topics...</p>
        <p class="mt-4">Let's dive into some advanced topics...</p>
        <p class="mt-4">Let's dive into some advanced topics...</p>

        <h3 class="text-xl font-bold mt-6 scroll-mt-8" id="performance">Performance</h3>
        <p class="mt-3">Tips for optimizing performance...</p>
        <p class="mt-3">Tips for optimizing performance...</p>
        <p class="mt-3">Tips for optimizing performance...</p>
        <p class="mt-3">Tips for optimizing performance...</p>
        <p class="mt-3">Tips for optimizing performance...</p>
        <p class="mt-3">Tips for optimizing performance...</p>
        <p class="mt-3">Tips for optimizing performance...</p>
        <p class="mt-3">Tips for optimizing performance...</p>
        <p class="mt-3">Tips for optimizing performance...</p>
        <p class="mt-3">Tips for optimizing performance...</p>
        <p class="mt-3">Tips for optimizing performance...</p>
        <p class="mt-3">Tips for optimizing performance...</p>
        <p class="mt-3">Tips for optimizing performance...</p>
        <p class="mt-3">Tips for optimizing performance...</p>
        <p class="mt-3">Tips for optimizing performance...</p>
        <p class="mt-3">Tips for optimizing performance...</p>

        <h3 class="text-xl font-bold mt-6 scroll-mt-8" id="security">Security</h3>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>
        <p class="mt-3">Important security considerations...</p>

        <h4 class="text-lg font-bold mt-5 scroll-mt-8" id="authentication">Authentication</h4>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>
        <p class="mt-2">Details about authentication methods...</p>

        <h4 class="text-lg font-bold mt-5 scroll-mt-8" id="authorization">Authorization</h4>
        <p class="mt-2">Details about authorization strategies...</p>
        <p class="mt-2">Details about authorization strategies...</p>
        <p class="mt-2">Details about authorization strategies...</p>
        <p class="mt-2">Details about authorization strategies...</p>
        <p class="mt-2">Details about authorization strategies...</p>
        <p class="mt-2">Details about authorization strategies...</p>
        <p class="mt-2">Details about authorization strategies...</p>
        <p class="mt-2">Details about authorization strategies...</p>
        <p class="mt-2">Details about authorization strategies...</p>
        <p class="mt-2">Details about authorization strategies...</p>
        <p class="mt-2">Details about authorization strategies...</p>
        <p class="mt-2">Details about authorization strategies...</p>
        <p class="mt-2">Details about authorization strategies...</p>
        <p class="mt-2">Details about authorization strategies...</p>
        <p class="mt-2">Details about authorization strategies...</p>
        <p class="mt-2">Details about authorization strategies...</p>

        <h2 class="text-2xl font-bold mt-8 scroll-mt-8" id="conclusion">Conclusion</h2>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
        <p class="mt-4">Summary and next steps...</p>
      </main>

      <!-- Sidebar with on-this-page navigation -->
      <aside class="w-64 py-8 md:block hidden">
        <sc-on-this-page></sc-on-this-page>
      </aside>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OnThisPagePage {}
