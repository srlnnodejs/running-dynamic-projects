import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilPayeurComponent } from './accueil-payeur.component';

describe('AccueilPayeurComponent', () => {
  let component: AccueilPayeurComponent;
  let fixture: ComponentFixture<AccueilPayeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilPayeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilPayeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
