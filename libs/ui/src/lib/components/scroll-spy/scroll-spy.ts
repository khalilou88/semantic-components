import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[scScrollSpy]',
})
export class ScScrollSpy implements OnInit {
  @Input() spySections: string[] = []; // Section IDs to track
  @Output() sectionChange = new EventEmitter<string>(); // Emits active section ID

  private observer!: IntersectionObserver;

  constructor(private readonly el: ElementRef) {}

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

    this.spySections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        this.observer.observe(section);
      }
    });
  }
}
