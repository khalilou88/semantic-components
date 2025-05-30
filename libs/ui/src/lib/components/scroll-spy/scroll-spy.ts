import { Directive, ElementRef, OnInit, inject, input, output } from '@angular/core';

@Directive({
  selector: '[scScrollSpy]',
})
export class ScScrollSpy implements OnInit {
  private readonly el = inject(ElementRef);

  readonly spySections = input<string[]>([]); // Section IDs to track
  readonly sectionChange = output<string>(); // Emits active section ID

  private observer!: IntersectionObserver;

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.sectionChange.emit(entry.target.id); // Emit when section is visible
          }
        });
      },
      {
        root: null, // Use viewport as root
        threshold: 0.6, // Section is active when 60% is visible
      },
    );

    this.spySections().forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        this.observer.observe(section);
      }
    });
  }
}
