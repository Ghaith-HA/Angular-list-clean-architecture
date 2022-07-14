import { TestBed } from '@angular/core/testing';
import { MovieListRepositoryService } from './movie-list-repository.service';


describe('MovieListRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieListRepositoryService = TestBed.get(MovieListRepositoryService);
    expect(service).toBeTruthy();
  });
});
