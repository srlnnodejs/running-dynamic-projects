import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPayeurComponent } from './ajouter-payeur.component';

describe('AjouterPayeurComponent', () => {
  let component: AjouterPayeurComponent;
  let fixture: ComponentFixture<AjouterPayeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPayeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPayeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
