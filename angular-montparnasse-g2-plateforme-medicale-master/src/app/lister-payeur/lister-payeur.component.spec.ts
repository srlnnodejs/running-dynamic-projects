import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerPayeurComponent } from './lister-payeur.component';

describe('ListerPayeurComponent', () => {
  let component: ListerPayeurComponent;
  let fixture: ComponentFixture<ListerPayeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerPayeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerPayeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
