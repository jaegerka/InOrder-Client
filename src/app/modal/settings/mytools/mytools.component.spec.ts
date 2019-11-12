import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytoolsComponent } from './mytools.component';

describe('MytoolsComponent', () => {
  let component: MytoolsComponent;
  let fixture: ComponentFixture<MytoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytoolsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
