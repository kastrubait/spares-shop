import { TestBed } from '@angular/core/testing';

import { TovarService } from './tovar.service';

describe('TovarService', () => {
  let service: TovarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TovarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
