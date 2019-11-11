import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreqaskedquestionsComponent } from './freqaskedquestions.component';

describe('FreqaskedquestionsComponent', () => {
  let component: FreqaskedquestionsComponent;
  let fixture: ComponentFixture<FreqaskedquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreqaskedquestionsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreqaskedquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
