import { TestBed } from '@angular/core/testing';

import { IdCursoActualService } from './id-curso-actual.service';

describe('IdCursoActualService', () => {
  let service: IdCursoActualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdCursoActualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
