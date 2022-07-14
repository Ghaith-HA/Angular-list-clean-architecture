import { TestBed } from '@angular/core/testing';

import { UserListRepositoryService } from './user-list.repository.service';

describe('UserListRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserListRepositoryService = TestBed.get(UserListRepositoryService);
    expect(service).toBeTruthy();
  });
});
