import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialsetupComponent } from './initialsetup.component';

describe('InitialsetupComponent', () => {
  let component: InitialsetupComponent;
  let fixture: ComponentFixture<InitialsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialsetupComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
