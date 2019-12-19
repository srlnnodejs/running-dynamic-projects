import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPayeurComponent } from './modifier-payeur.component';

describe('ModifierPayeurComponent', () => {
  let component: ModifierPayeurComponent;
  let fixture: ComponentFixture<ModifierPayeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierPayeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPayeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
