import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfortComponent } from './comfort.component';

describe('ComfortComponent', () => {
  let component: ComfortComponent;
  let fixture: ComponentFixture<ComfortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComfortComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComfortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
