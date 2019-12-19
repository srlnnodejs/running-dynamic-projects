import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerRemboursementComponent } from './lister-remboursement.component';

describe('ListerRemboursementComponent', () => {
  let component: ListerRemboursementComponent;
  let fixture: ComponentFixture<ListerRemboursementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerRemboursementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerRemboursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
