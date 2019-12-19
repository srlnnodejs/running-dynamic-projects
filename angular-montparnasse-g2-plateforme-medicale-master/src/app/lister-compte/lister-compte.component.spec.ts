import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerCompteComponent } from './lister-compte.component';

describe('ListerCompteComponent', () => {
  let component: ListerCompteComponent;
  let fixture: ComponentFixture<ListerCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
