import { TestBed } from '@angular/core/testing';

import { AcaliacaoesService } from './acaliacaoes.service';

describe('AcaliacaoesService', () => {
  let service: AcaliacaoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcaliacaoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
