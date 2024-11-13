import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ui2Component } from './ui2.component';

describe('Ui2Component', () => {
  let component: Ui2Component;
  let fixture: ComponentFixture<Ui2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ui2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Ui2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
