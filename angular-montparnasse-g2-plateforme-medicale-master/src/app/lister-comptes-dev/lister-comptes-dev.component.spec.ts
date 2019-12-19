import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerComptesDevComponent } from './lister-comptes-dev.component';

describe('ListerComptesDevComponent', () => {
  let component: ListerComptesDevComponent;
  let fixture: ComponentFixture<ListerComptesDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerComptesDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerComptesDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
