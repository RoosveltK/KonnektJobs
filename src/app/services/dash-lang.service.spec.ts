import { TestBed } from '@angular/core/testing';

import { DashLangService } from './dash-lang.service';

describe('DashLangService', () => {
  let service: DashLangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashLangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
