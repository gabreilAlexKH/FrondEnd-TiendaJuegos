import { TestBed } from '@angular/core/testing';

import { VideojuegosApiService } from './videojuegos-api.service';

describe('VideojuegosApiService', () => {
  let service: VideojuegosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideojuegosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
