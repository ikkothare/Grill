import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { adviceResolver } from './advice.resolver';

describe('adviceResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => adviceResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
