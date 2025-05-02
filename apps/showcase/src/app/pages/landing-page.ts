import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ScBadge, ScLink } from '@semantic-components/ui';
import { SiArrowRightIcon, SiGithubIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-landing-page',
  imports: [SiArrowRightIcon, SiGithubIcon, ScLink, ScBadge, RouterLink],
  template: `
    <section class="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div class="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div class="flex flex-col items-center gap-6 text-center sm:gap-12">
          <div class="animate-appear" sc-badge variant="outline">
            <span class="text-muted-foreground">New version of Semantic Components is out!</span>
            <a class="flex items-center gap-1" href="/">
              Get started
              <svg class="size-3" si-arrow-right-icon></svg>
            </a>
          </div>
          <h1
            class="animate-appear relative z-10 inline-block bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight"
          >
            Build your next angular app even faster.
          </h1>
          <p
            class="text-md animate-appear relative z-10 max-w-[550px] font-medium text-muted-foreground  delay-100 sm:text-xl"
          >
            Ui components built with Angular and Tailwind and inspired by Shadcn/ui.
          </p>
          <div class="animate-appear relative z-10 flex justify-center gap-4  delay-300">
            <div class="animate-appear relative z-10 flex justify-center gap-4  delay-300">
              <a variant="primary" size="lg" sc-link routerLink="/get-started">Get started</a>

              <a variant="secondary" size="lg" sc-link>
                <svg class="mr-2 size-4" si-github-icon></svg>
                Github
              </a>
            </div>
          </div>
          <!--div class="relative pt-12">
            <MockupFrame class="animate-appear  delay-700" size="small">
              <Mockup type="responsive">
                <Image src="{src}" alt="Launch UI app screenshot" width="{1248}" height="{765}" />
              </Mockup>
            </MockupFrame>
            <Glow variant="top" class="animate-appear-zoom  delay-1000" />
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
