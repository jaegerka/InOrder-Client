import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyremindersComponent } from './dailyreminders.component';

describe('DailyremindersComponent', () => {
  let component: DailyremindersComponent;
  let fixture: ComponentFixture<DailyremindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyremindersComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyremindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
