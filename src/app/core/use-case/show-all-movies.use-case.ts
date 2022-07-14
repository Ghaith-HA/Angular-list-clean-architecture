import {IUseCase, Presenter} from '../arch';
import {Injectable} from '@angular/core';
import { MovieList } from '../entity';
import { MovieListRepository } from '../repository';

export abstract class ShowMovieListPresenter<T> extends Presenter<T> {
  public abstract displayMoviesList(movies: MovieList[]): void;
}

@Injectable({providedIn: 'root'})
export class ShowMovieListUseCase implements IUseCase<void, ShowMovieListPresenter<any>> {

  constructor(public readonly presenter: ShowMovieListPresenter<any>,
              private readonly repository: MovieListRepository,
  ) {
  }

  public async execute(request?: any, query?: string): Promise<void> {
    try {
      const allMovies = await this.repository.getAllMovies(query);
      this.presenter.displayMoviesList(allMovies);
    } catch (err) {
      console.error('Failed to load or present movie: %o', err);
      throw err;
    }
  }
}
