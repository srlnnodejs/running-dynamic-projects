import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerFactureComponent } from './lister-facture.component';

describe('ListerFactureComponent', () => {
  let component: ListerFactureComponent;
  let fixture: ComponentFixture<ListerFactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerFactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
