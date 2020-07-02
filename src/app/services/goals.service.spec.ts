import { TestBed } from '@angular/core/testing';

import { GoalService } from './goals.service';

describe('GoalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoalService = TestBed.get(GoalService);
    expect(service).toBeTruthy();
  });
});
