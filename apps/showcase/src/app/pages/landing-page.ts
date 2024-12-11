import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScBadge, ScButton } from '@semantic-components/ui';
import { SvgArrowRightIcon, SvgGithubIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-landing-page',
  imports: [SvgArrowRightIcon, SvgGithubIcon, ScButton, ScBadge],
  template: `
    <section class="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div class="mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
        <div class="flex flex-col items-center gap-6 text-center sm:gap-12">
          <div class="animate-appear" sc-badge variant="outline">
            <span class="text-muted-foreground">New version of Launch UI is out!</span>
            <a class="flex items-center gap-1" href="/">
              Get started
              <svg-arrow-right-icon class="h-3 w-3" />
            </a>
          </div>
          <h1
            class="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight"
          >
            Give your big idea the website it deserves
          </h1>
          <p
            class="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl"
          >
            Landing page components built with React, Shadcn/ui and Tailwind that will make your
            website feel premium.
          </p>
          <div class="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
            <div class="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
              <a variant="primary" size="lg" sc-button routerLink="/get-started"></a>

              <a variant="secondary" size="lg" sc-button>
                <svg-github-icon class="mr-2 h-4 w-4" />
                Github
              </a>
            </div>
          </div>
          <!--div class="relative pt-12">
            <MockupFrame class="animate-appear opacity-0 delay-700" size="small">
              <Mockup type="responsive">
                <Image src="{src}" alt="Launch UI app screenshot" width="{1248}" height="{765}" />
              </Mockup>
            </MockupFrame>
            <Glow variant="top" class="animate-appear-zoom opacity-0 delay-1000" />
          </div-->
        </div>
      </div>
    </section>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LandingPage {}
