import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSchematicsComponent } from './ngx-schematics.component';

describe('NgxSchematicsComponent', () => {
  let component: NgxSchematicsComponent;
  let fixture: ComponentFixture<NgxSchematicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSchematicsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxSchematicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
