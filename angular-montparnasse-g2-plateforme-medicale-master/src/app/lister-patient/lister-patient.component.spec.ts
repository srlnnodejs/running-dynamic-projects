import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerPatientComponent } from './lister-patient.component';

describe('ListerPatientComponent', () => {
  let component: ListerPatientComponent;
  let fixture: ComponentFixture<ListerPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
