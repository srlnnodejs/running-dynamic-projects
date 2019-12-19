import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRemboursementComponent } from './ajouter-remboursement.component';

describe('AjouterRemboursementComponent', () => {
  let component: AjouterRemboursementComponent;
  let fixture: ComponentFixture<AjouterRemboursementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterRemboursementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterRemboursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
