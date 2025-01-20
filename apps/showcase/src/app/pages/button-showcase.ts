// button-showcase.component.ts
import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

interface Section {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-button-showcase',
  imports: [NgFor],
  template: `
    <div class="max-w-6xl mx-auto px-4 py-8 flex gap-8">
      <!-- Main content -->
      <div class="flex-1">
        <h1 class="text-3xl font-bold mb-8">Button Showcase</h1>

        <section class="mb-12 scroll-mt-4" id="basic" #sectionEl>
          <div class="border rounded-lg p-6">
            <h2 class="text-2xl font-semibold mb-2">Basic Buttons</h2>
            <p class="text-gray-600 mb-6">Standard button variations</p>
            <div class="grid gap-6">
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-lg font-medium mb-4">Preview</h3>
                <div class="flex gap-4 flex-wrap">
                  <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Primary
                  </button>
                  <button class="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
                    Secondary
                  </button>
                  <button class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                    Danger
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-12 scroll-mt-4" id="outline" #sectionEl>
          <div class="border rounded-lg p-6">
            <h2 class="text-2xl font-semibold mb-2">Outline Buttons</h2>
            <p class="text-gray-600 mb-6">Border-only style buttons</p>
            <div class="grid gap-6">
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-lg font-medium mb-4">Preview</h3>
                <div class="flex gap-4 flex-wrap">
                  <button
                    class="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50"
                  >
                    Primary
                  </button>
                  <button
                    class="px-4 py-2 border-2 border-gray-500 text-gray-500 rounded-lg hover:bg-gray-50"
                  >
                    Secondary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-12 scroll-mt-4" id="sizes" #sectionEl>
          <div class="border rounded-lg p-6">
            <h2 class="text-2xl font-semibold mb-2">Button Sizes</h2>
            <p class="text-gray-600 mb-6">Different size variations</p>
            <div class="grid gap-6">
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-lg font-medium mb-4">Preview</h3>
                <div class="flex gap-4 items-center flex-wrap">
                  <button
                    class="px-2 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Small
                  </button>
                  <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Medium
                  </button>
                  <button
                    class="px-6 py-3 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Large
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-12 scroll-mt-4" id="icons" #sectionEl>
          <div class="border rounded-lg p-6">
            <h2 class="text-2xl font-semibold mb-2">Icon Buttons</h2>
            <p class="text-gray-600 mb-6">Buttons with icons</p>
            <div class="grid gap-6">
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-lg font-medium mb-4">Preview</h3>
                <div class="flex gap-4 flex-wrap">
                  <button
                    class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
                  >
                    <i class="fas fa-code"></i>
                    With Icon
                  </button>
                  <button class="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    <i class="fas fa-code"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Right side navigation -->
      <div class="hidden lg:block w-48 flex-shrink-0">
        <div class="sticky top-4 p-4 border rounded-lg">
          <h3 class="font-medium mb-4">On this page</h3>
          <nav class="space-y-2">
            <button
              class="block w-full text-left px-2 py-1 text-sm rounded hover:bg-gray-100"
              *ngFor="let section of sections"
              [class.text-blue-500]="activeSection === section.id"
              [class.bg-blue-50]="activeSection === section.id"
              [class.text-gray-600]="activeSection !== section.id"
              (click)="scrollToSection(section.id)"
            >
              {{ section.title }}
            </button>
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

  activeSection: string = '';
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
