import { TestBed } from '@angular/core/testing';

import { TerrainDataService } from './terrain-data.service';

describe('TerrainDataService', () => {
  let service: TerrainDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerrainDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
