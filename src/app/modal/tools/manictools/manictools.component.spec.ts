import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManictoolsComponent } from './manictools.component';

describe('ManictoolsComponent', () => {
  let component: ManictoolsComponent;
  let fixture: ComponentFixture<ManictoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManictoolsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManictoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
