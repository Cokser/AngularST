import { TestBed, inject } from '@angular/core/testing';

import { Firebase.ServiceService } from './firebase.service.service';

describe('Firebase.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Firebase.ServiceService]
    });
  });

  it('should be created', inject([Firebase.ServiceService], (service: Firebase.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
