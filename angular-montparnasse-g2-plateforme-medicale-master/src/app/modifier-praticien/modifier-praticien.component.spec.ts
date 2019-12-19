import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPraticienComponent } from './modifier-praticien.component';

describe('ModifierPraticienComponent', () => {
  let component: ModifierPraticienComponent;
  let fixture: ComponentFixture<ModifierPraticienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierPraticienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
