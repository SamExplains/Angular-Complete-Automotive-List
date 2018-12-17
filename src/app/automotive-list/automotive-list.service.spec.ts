import { TestBed } from '@angular/core/testing';

import { AutomotiveListService } from './automotive-list.service';

describe('AutomotiveListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutomotiveListService = TestBed.get(AutomotiveListService);
    expect(service).toBeTruthy();
  });
});
