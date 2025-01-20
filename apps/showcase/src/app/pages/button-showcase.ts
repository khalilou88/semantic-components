// button-showcase.component.ts
import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

interface Section {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-button-showcase',
  imports: [],
  template: `
    <div class="mx-auto flex max-w-6xl gap-8 px-4 py-8">
      <!-- Main content -->
      <div class="flex-1">
        <h1 class="mb-8 text-3xl font-bold">Button Showcase</h1>

        <section class="mb-12 scroll-mt-4" id="basic" #sectionEl>
          <div class="rounded-lg border p-6">
            <h2 class="mb-2 text-2xl font-semibold">Basic Buttons</h2>
            <p class="mb-6 text-gray-600">Standard button variations</p>
            <div class="grid gap-6">
              <div class="rounded-lg bg-gray-50 p-6">
                <h3 class="mb-4 text-lg font-medium">Preview</h3>
                <div class="flex flex-wrap gap-4">
                  <button class="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                    Primary
                  </button>
                  <button class="rounded-lg bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
                    Secondary
                  </button>
                  <button class="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                    Danger
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-12 scroll-mt-4" id="outline" #sectionEl>
          <div class="rounded-lg border p-6">
            <h2 class="mb-2 text-2xl font-semibold">Outline Buttons</h2>
            <p class="mb-6 text-gray-600">Border-only style buttons</p>
            <div class="grid gap-6">
              <div class="rounded-lg bg-gray-50 p-6">
                <h3 class="mb-4 text-lg font-medium">Preview</h3>
                <div class="flex flex-wrap gap-4">
                  <button
                    class="rounded-lg border-2 border-blue-500 px-4 py-2 text-blue-500 hover:bg-blue-50"
                  >
                    Primary
                  </button>
                  <button
                    class="rounded-lg border-2 border-gray-500 px-4 py-2 text-gray-500 hover:bg-gray-50"
                  >
                    Secondary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-12 scroll-mt-4" id="sizes" #sectionEl>
          <div class="rounded-lg border p-6">
            <h2 class="mb-2 text-2xl font-semibold">Button Sizes</h2>
            <p class="mb-6 text-gray-600">Different size variations</p>
            <div class="grid gap-6">
              <div class="rounded-lg bg-gray-50 p-6">
                <h3 class="mb-4 text-lg font-medium">Preview</h3>
                <div class="flex flex-wrap items-center gap-4">
                  <button
                    class="rounded-lg bg-blue-500 px-2 py-1 text-sm text-white hover:bg-blue-600"
                  >
                    Small
                  </button>
                  <button class="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                    Medium
                  </button>
                  <button
                    class="rounded-lg bg-blue-500 px-6 py-3 text-lg text-white hover:bg-blue-600"
                  >
                    Large
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-12 scroll-mt-4" id="icons" #sectionEl>
          <div class="rounded-lg border p-6">
            <h2 class="mb-2 text-2xl font-semibold">Icon Buttons</h2>
            <p class="mb-6 text-gray-600">Buttons with icons</p>
            <div class="grid gap-6">
              <div class="rounded-lg bg-gray-50 p-6">
                <h3 class="mb-4 text-lg font-medium">Preview</h3>
                <div class="flex flex-wrap gap-4">
                  <button
                    class="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                  >
                    <i class="fas fa-code"></i>
                    With Icon
                  </button>
                  <button class="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600">
                    <i class="fas fa-code"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Right side navigation -->
      <div class="hidden w-48 shrink-0 lg:block">
        <div class="sticky top-4 rounded-lg border p-4">
          <h3 class="mb-4 font-medium">On this page</h3>
          <nav class="space-y-2">
            @for (section of sections; track section) {
              <button
                class="block w-full rounded px-2 py-1 text-left text-sm hover:bg-gray-100"
                [class.text-blue-500]="activeSection === section.id"
                [class.bg-blue-50]="activeSection === section.id"
                [class.text-gray-600]="activeSection !== section.id"
                (click)="scrollToSection(section.id)"
              >
                {{ section.title }}
              </button>
            }
          </nav>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export default class ButtonShowcaseComponent implements AfterViewInit, OnDestroy {
  sections: Section[] = [
    { id: 'basic', title: 'Basic Buttons', description: 'Standard button variations' },
    { id: 'outline', title: 'Outline Buttons', description: 'Border-only style buttons' },
    { id: 'sizes', title: 'Button Sizes', description: 'Different size variations' },
    { id: 'icons', title: 'Icon Buttons', description: 'Buttons with icons' },
  ];

  activeSection = '';
  private observer!: IntersectionObserver;

  constructor(private readonly el: ElementRef) {}

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    const options = {
      threshold: 0.5,
      rootMargin: '-100px 0px -100px 0px',
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    this.el.nativeElement.querySelectorAll('section').forEach((section: Element) => {
      this.observer.observe(section);
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
