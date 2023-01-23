import { TestBed } from '@angular/core/testing';

import { LocalStorageSaverService } from './local-storage-saver.service';

describe('LocalStorageSaverService', () => {
  let service: LocalStorageSaverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageSaverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
