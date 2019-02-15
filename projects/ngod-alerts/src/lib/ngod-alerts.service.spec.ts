import { TestBed } from '@angular/core/testing';

import { NgodAlertsService } from './ngod-alerts.service';

describe('NgodAlertsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgodAlertsService = TestBed.get(NgodAlertsService);
    expect(service).toBeTruthy();
  });
});
