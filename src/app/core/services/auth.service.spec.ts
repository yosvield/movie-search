import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let storage: { [key: string]: string } = {};

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save token to local storage', () => {
    const token = 'test-token';

    spyOn(Object.getPrototypeOf(localStorage), 'getItem').and.callFake((key: string): string => {
      return storage[key] || null;
    });

    spyOn(Object.getPrototypeOf(localStorage), 'setItem').and.callFake((key: string, value: string) => {
      storage[key] = value as string;
    });

    service.setToken(token);
    expect(service.getToken()).toEqual(token);
  });
});
