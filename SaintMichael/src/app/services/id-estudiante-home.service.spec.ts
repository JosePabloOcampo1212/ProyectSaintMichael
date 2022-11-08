import { TestBed } from '@angular/core/testing';

import { IdEstudianteHomeService } from './id-estudiante-home.service';

describe('IdEstudianteHomeService', () => {
  let service: IdEstudianteHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdEstudianteHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
