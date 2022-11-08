import { TestBed } from '@angular/core/testing';

import { CursoDataService } from './curso-data.service';

describe('CursoDataService', () => {
  let service: CursoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
