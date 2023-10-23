import { TestBed } from '@angular/core/testing';

import { AvaliacoesService } from '../services/avaliacaoes.service';

describe('AcaliacaoesService', () => {
  let service: AvaliacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvaliacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
