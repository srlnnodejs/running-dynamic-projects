import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RattacherPatientComponent } from './rattacher-patient.component';

describe('RattacherPatientComponent', () => {
  let component: RattacherPatientComponent;
  let fixture: ComponentFixture<RattacherPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RattacherPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RattacherPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
