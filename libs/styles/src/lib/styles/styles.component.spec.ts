import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesComponent } from './styles.component';

describe('StylesComponent', () => {
  let component: StylesComponent;
  let fixture: ComponentFixture<StylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StylesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
