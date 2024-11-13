import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ui3Component } from './ui3.component';

describe('Ui3Component', () => {
  let component: Ui3Component;
  let fixture: ComponentFixture<Ui3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ui3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Ui3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
