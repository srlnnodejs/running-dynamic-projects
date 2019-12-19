import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilPraticienComponent } from './accueil-praticien.component';

describe('AccueilPraticienComponent', () => {
  let component: AccueilPraticienComponent;
  let fixture: ComponentFixture<AccueilPraticienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilPraticienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilPraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
