import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPraticienComponent } from './ajouter-praticien.component';

describe('AjouterPraticienComponent', () => {
  let component: AjouterPraticienComponent;
  let fixture: ComponentFixture<AjouterPraticienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPraticienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
