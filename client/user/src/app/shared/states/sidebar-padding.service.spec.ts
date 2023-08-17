import { TestBed } from '@angular/core/testing';

import {  } from './cartToCheckout.service';

describe('SidebarPaddingService', () => {
  let service: cartToCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cartToCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
