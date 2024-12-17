import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-scroll-area-page',
  imports: [],
  template: `
    <main class="relative py-6 pl-12 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div class="mx-auto w-full min-w-0 max-w-3xl">
        <div class="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
          <div class="truncate">Docs</div>
          <div class="text-foreground">Scroll-area</div>
        </div>
        <div class="space-y-2">
          <h1 class="scroll-m-20 text-3xl font-bold tracking-tight">Scroll-area</h1>
          <p class="text-base text-muted-foreground">
            <span
              style="display: inline-block; vertical-align: top; text-decoration: inherit; max-width: 523px;"
              data-br=":r17f:"
              data-brr="1"
            >
              Augments native scroll functionality for custom, cross-browser styling.
            </span>
          </p>
        </div>
        <div class="flex items-center space-x-2 pt-4">
          <a
            class="inline-flex items-center gap-1 rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            href="https://www.radix-ui.com/docs/primitives/components/scroll-area"
            target="_blank"
            rel="noreferrer"
          >
            Docs
          </a>
          <a
            class="inline-flex items-center gap-1 rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            href="https://www.radix-ui.com/docs/primitives/components/scroll-area#api-reference"
            target="_blank"
            rel="noreferrer"
          >
            API Reference
          </a>
        </div>
        <div class="pb-12 pt-8">
          <div class="mdx">
            <div class="group relative my-4 flex flex-col space-y-2">
              <div class="relative mr-auto w-full" dir="ltr" data-orientation="horizontal">
                <div class="flex items-center justify-between pb-3">
                  <div
                    class="inline-flex h-9 w-full items-center justify-start rounded-none border-b bg-transparent p-0 text-muted-foreground"
                    style="outline: none;"
                    tabindex="0"
                    data-orientation="horizontal"
                  >
                    <button
                      class="relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-1 pb-3 pt-2 text-sm font-semibold text-muted-foreground shadow-none ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-primary data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      id="radix-:r17g:-trigger-preview"
                      tabindex="-1"
                      type="button"
                      data-state="active"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      Preview
                    </button>
                    <button
                      class="relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-1 pb-3 pt-2 text-sm font-semibold text-muted-foreground shadow-none ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-primary data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      id="radix-:r17g:-trigger-code"
                      tabindex="-1"
                      type="button"
                      data-state="inactive"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      Code
                    </button>
                  </div>
                </div>
                <div
                  class="relative mt-2 rounded-md border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  id="radix-:r17g:-content-preview"
                  style="animation-duration: 0s;"
                  tabindex="0"
                  data-state="active"
                  data-orientation="horizontal"
                >
                  <div class="flex items-center justify-between p-4">
                    <button
                      class="flex h-7 w-[145px] items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-xs shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 [&_svg]:size-4"
                      dir="ltr"
                      type="button"
                      data-state="closed"
                    >
                      <span class="text-muted-foreground">Style:</span>
                      <span style="pointer-events: none;">Default</span>
                    </button>
                    <div class="flex items-center gap-2">
                      <form
                        action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you're trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                      >
                        <button
                          class="z-50 inline-flex h-[calc(theme(spacing.7)_-_1px)] items-center justify-center gap-1 whitespace-nowrap rounded-[6px] bg-black px-3 py-2 text-xs font-medium text-white shadow transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-black [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                        >
                          Open in
                        </button>
                      </form>
                      <button
                        class="relative z-10 inline-flex size-7 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-background text-sm font-medium text-foreground opacity-100 shadow-sm transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                      >
                        <span class="sr-only">Copy</span>
                      </button>
                    </div>
                  </div>
                  <div class="theme-zinc w-full" style="--radius: 0.5rem;">
                    <div class="preview flex min-h-[350px] w-full items-center justify-center p-10">
                      <div
                        class="relative h-72 w-48 overflow-hidden rounded-md border"
                        dir="ltr"
                        style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
                      >
                        <div
                          class="size-full rounded-[inherit]"
                          style="overflow: hidden scroll;"
                          data-radix-scroll-area-viewport=""
                        >
                          <div style="min-width: 100%; display: table;">
                            <div class="p-4">
                              <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
                              <div class="text-sm">v1.2.0-beta.50</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.49</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.48</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.47</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.46</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.45</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.44</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.43</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.42</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.41</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.40</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.39</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.38</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.37</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.36</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.35</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.34</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.33</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.32</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.31</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.30</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.29</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.28</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.27</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.26</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.25</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.24</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.23</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.22</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.21</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.20</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.19</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.18</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.17</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.16</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.15</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.14</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.13</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.12</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.11</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.10</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.9</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.8</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.7</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.6</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.5</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.4</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.3</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.2</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                              <div class="text-sm">v1.2.0-beta.1</div>
                              <div
                                class="my-2 h-px w-full shrink-0 bg-border"
                                data-orientation="horizontal"
                              >
                                &nbsp;
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  id="radix-:r17g:-content-code"
                  tabindex="0"
                  hidden=""
                  data-state="inactive"
                  data-orientation="horizontal"
                >
                  &nbsp;
                </div>
              </div>
            </div>
            <h2
              class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="installation"
            >
              Installation
            </h2>
            <div class="relative mt-6 w-full" dir="ltr" data-orientation="horizontal">
              <div
                class="inline-flex h-9 w-full items-center justify-start rounded-none border-b bg-transparent p-0 text-muted-foreground"
                style="outline: none;"
                tabindex="0"
                data-orientation="horizontal"
              >
                <button
                  class="relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-1 pb-3 pt-2 text-sm font-semibold text-muted-foreground shadow-none ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-primary data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-none"
                  id="radix-:r17k:-trigger-cli"
                  tabindex="-1"
                  type="button"
                  data-state="active"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  CLI
                </button>
                <button
                  class="relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-1 pb-3 pt-2 text-sm font-semibold text-muted-foreground shadow-none ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-primary data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-none"
                  id="radix-:r17k:-trigger-manual"
                  tabindex="-1"
                  type="button"
                  data-state="inactive"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  Manual
                </button>
              </div>
              <div
                class="relative mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold"
                id="radix-:r17k:-content-cli"
                style="animation-duration: 0s;"
                tabindex="0"
                data-state="active"
                data-orientation="horizontal"
              >
                <div data-rehype-pretty-code-fragment="">
                  <pre
                    class="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                    data-language="bash"
                    data-theme="default"
                  ><code class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm" data-language="bash" data-theme="default"><span class="line"><span style="color: #b392f0;">npx</span><span style="color: #9ecbff;"> shadcn latest</span><span style="color: #9ecbff;"> add</span><span style="color: #9ecbff;"> scroll-area</span></span></code></pre>
                  <button
                    class="absolute right-4 top-4 z-10 inline-flex size-6 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700 hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                    id="radix-:r17n:"
                    type="button"
                    data-state="closed"
                  >
                    <span class="sr-only">Copy</span>
                  </button>
                </div>
              </div>
              <div
                class="relative mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold"
                id="radix-:r17k:-content-manual"
                tabindex="0"
                hidden=""
                data-state="inactive"
                data-orientation="horizontal"
              >
                &nbsp;
              </div>
            </div>
            <h2
              class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="usage"
            >
              Usage
            </h2>
            <div data-rehype-pretty-code-fragment="">
              <pre
                class="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                data-language="tsx"
                data-theme="default"
              ><code class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm" data-language="tsx" data-theme="default"><span class="line"><span style="color: #f97583;">import</span><span style="color: #e1e4e8;"> ScrollArea  </span><span style="color: #f97583;">from</span><span style="color: #9ecbff;"> "components/ui/scroll-area"</span></span></code></pre>
              <button
                class="absolute right-4 top-4 z-10 inline-flex size-6 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700 hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none  [&_svg]:size-4 [&_svg]:shrink-0"
              >
                <span class="sr-only">Copy</span>
              </button>
            </div>
            <div data-rehype-pretty-code-fragment="">
              <pre
                class="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                data-language="tsx"
                data-theme="default"
              ><code class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm" data-language="tsx" data-theme="default"><span class="line"><span style="color: #e1e4e8;">&lt;</span><span style="color: #79b8ff;">ScrollArea</span><span style="color: #b392f0;"> className</span><span style="color: #f97583;">=</span><span style="color: #9ecbff;">"h-[200px] w-[350px] rounded-md border p-4"</span><span style="color: #e1e4e8;">&gt;</span></span>
<span class="line"><span style="color: #e1e4e8;"> Jokester began sneaking into the castle in the middle of the night and leaving</span></span>
<span class="line"><span style="color: #e1e4e8;"> jokes all over the place: under the king's pillow, in his soup, even in the</span></span>
<span class="line"><span style="color: #e1e4e8;"> royal toilet. The king was furious, but he couldn't seem to stop Jokester. And</span></span>
<span class="line"><span style="color: #e1e4e8;"> then, one day, the people of the kingdom discovered that the jokes left by</span></span>
<span class="line"><span style="color: #e1e4e8;"> Jokester were so funny that they couldn't help but laugh. And once they</span></span>
<span class="line"><span style="color: #e1e4e8;"> started laughing, they couldn't stop.</span></span>
<span class="line"><span style="color: #e1e4e8;">&lt;/</span><span style="color: #79b8ff;">ScrollArea</span><span style="color: #e1e4e8;">&gt;</span></span></code></pre>
              <button
                class="absolute right-4 top-4 z-10 inline-flex size-6 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700 hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none  [&_svg]:size-4 [&_svg]:shrink-0"
              >
                <span class="sr-only">Copy</span>
              </button>
            </div>
            <h2
              class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="examples"
            >
              Examples
            </h2>
            <h3
              class="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="horizontal-scrolling"
            >
              Horizontal Scrolling
            </h3>
            <div class="group relative my-4 flex flex-col space-y-2">
              <div class="relative mr-auto w-full" dir="ltr" data-orientation="horizontal">
                <div class="flex items-center justify-between pb-3">
                  <div
                    class="inline-flex h-9 w-full items-center justify-start rounded-none border-b bg-transparent p-0 text-muted-foreground"
                    style="outline: none;"
                    tabindex="0"
                    data-orientation="horizontal"
                  >
                    <button
                      class="relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-1 pb-3 pt-2 text-sm font-semibold text-muted-foreground shadow-none ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-primary data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      id="radix-:r17p:-trigger-preview"
                      tabindex="-1"
                      type="button"
                      data-state="active"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      Preview
                    </button>
                    <button
                      class="relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-1 pb-3 pt-2 text-sm font-semibold text-muted-foreground shadow-none ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-primary data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      id="radix-:r17p:-trigger-code"
                      tabindex="-1"
                      type="button"
                      data-state="inactive"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      Code
                    </button>
                  </div>
                </div>
                <div
                  class="relative mt-2 rounded-md border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  id="radix-:r17p:-content-preview"
                  style="animation-duration: 0s;"
                  tabindex="0"
                  data-state="active"
                  data-orientation="horizontal"
                >
                  <div class="flex items-center justify-between p-4">
                    <button
                      class="flex h-7 w-[145px] items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-xs shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 [&_svg]:size-4"
                      dir="ltr"
                      type="button"
                      data-state="closed"
                    >
                      <span class="text-muted-foreground">Style:</span>
                      <span style="pointer-events: none;">Default</span>
                    </button>
                    <div class="flex items-center gap-2">
                      <button
                        class="relative z-10 inline-flex size-7 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-background text-sm font-medium text-foreground opacity-100 shadow-sm transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none  [&_svg]:size-4 [&_svg]:shrink-0"
                      >
                        <span class="sr-only">Copy</span>
                      </button>
                    </div>
                  </div>
                  <div class="theme-zinc w-full" style="--radius: 0.5rem;">
                    <div class="preview flex min-h-[350px] w-full items-center justify-center p-10">
                      <div
                        class="relative w-96 overflow-hidden whitespace-nowrap rounded-md border"
                        dir="ltr"
                        style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
                      >
                        <div
                          class="size-full rounded-[inherit]"
                          style="overflow: scroll;"
                          data-radix-scroll-area-viewport=""
                        >
                          <div style="min-width: 100%; display: table;">
                            <div class="flex w-max space-x-4 p-4">
                              <figure class="shrink-0">
                                <div class="overflow-hidden rounded-md">
                                  <img
                                    class="aspect-[3/4] size-fit object-cover"
                                    style="color: transparent;"
                                    src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1465869185982-5a1a7522cbcb%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=640&amp;q=75"
                                    srcset="
                                      /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1465869185982-5a1a7522cbcb%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=384&amp;q=75 1x,
                                      /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1465869185982-5a1a7522cbcb%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=640&amp;q=75 2x
                                    "
                                    alt="Photo by Ornella Binni"
                                    width="300"
                                    height="400"
                                    data-nimg="1"
                                  />
                                </div>
                                <figcaption class="pt-2 text-xs text-muted-foreground">
                                  Photo by
                                  <span class="font-semibold text-foreground">Ornella Binni</span>
                                </figcaption>
                              </figure>
                              <figure class="shrink-0">
                                <div class="overflow-hidden rounded-md">
                                  <img
                                    class="aspect-[3/4] size-fit object-cover"
                                    style="color: transparent;"
                                    src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1548516173-3cabfa4607e9%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=640&amp;q=75"
                                    srcset="
                                      /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1548516173-3cabfa4607e9%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=384&amp;q=75 1x,
                                      /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1548516173-3cabfa4607e9%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=640&amp;q=75 2x
                                    "
                                    alt="Photo by Tom Byrom"
                                    width="300"
                                    height="400"
                                    data-nimg="1"
                                  />
                                </div>
                                <figcaption class="pt-2 text-xs text-muted-foreground">
                                  Photo by
                                  <span class="font-semibold text-foreground">Tom Byrom</span>
                                </figcaption>
                              </figure>
                              <figure class="shrink-0">
                                <div class="overflow-hidden rounded-md">
                                  <img
                                    class="aspect-[3/4] size-fit object-cover"
                                    style="color: transparent;"
                                    src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494337480532-3725c85fd2ab%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=640&amp;q=75"
                                    srcset="
                                      /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494337480532-3725c85fd2ab%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=384&amp;q=75 1x,
                                      /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494337480532-3725c85fd2ab%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=640&amp;q=75 2x
                                    "
                                    alt="Photo by Vladimir Malyavko"
                                    width="300"
                                    height="400"
                                    data-nimg="1"
                                  />
                                </div>
                                <figcaption class="pt-2 text-xs text-muted-foreground">
                                  Photo by
                                  <span class="font-semibold text-foreground">
                                    Vladimir Malyavko
                                  </span>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  id="radix-:r17p:-content-code"
                  tabindex="0"
                  hidden=""
                  data-state="inactive"
                  data-orientation="horizontal"
                >
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row items-center justify-between">
          <a
            class="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
            href="/docs/components/resizable"
          >
            Resizable
          </a>
          <a
            class="ml-auto inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
            href="/docs/components/select"
          >
            Select
          </a>
        </div>
      </div>
      <div class="hidden text-sm xl:block">
        <div class="sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4">
          <div class="no-scrollbar h-full overflow-auto pb-10">
            <div class="space-y-2">
              <p class="font-medium">On This Page</p>
              <ul class="m-0 list-none">
                <li class="mt-0 pt-2">
                  <a
                    class="inline-block font-medium text-foreground no-underline transition-colors hover:text-foreground"
                    href="#installation"
                  >
                    Installation
                  </a>
                </li>
                <li class="mt-0 pt-2">
                  <a
                    class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                    href="#usage"
                  >
                    Usage
                  </a>
                </li>
                <li class="mt-0 pt-2">
                  <a
                    class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                    href="#examples"
                  >
                    Examples
                  </a>
                  <ul class="m-0 list-none pl-4">
                    <li class="mt-0 pt-2">
                      <a
                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                        href="#horizontal-scrolling"
                      >
                        Horizontal Scrolling
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ScrollAreaPage {}
