import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiconsDirectivesComponent } from './heroicons-directives.component';

describe('HeroiconsDirectivesComponent', () => {
  let component: HeroiconsDirectivesComponent;
  let fixture: ComponentFixture<HeroiconsDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroiconsDirectivesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroiconsDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
