import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgodAlertsComponent } from './ngod-alerts.component';

describe('NgodAlertsComponent', () => {
  let component: NgodAlertsComponent;
  let fixture: ComponentFixture<NgodAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgodAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgodAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
