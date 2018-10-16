import { TestBed } from '@angular/core/testing';


describe('AdminAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminAuthGuardService = TestBed.get(AdminAuthGuardService);
    expect(service).toBeTruthy();
  });
});
