import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepressionComponent } from './depressiontools.component';

describe('DepressionComponent', () => {
  let component: DepressionComponent;
  let fixture: ComponentFixture<DepressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepressionComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
