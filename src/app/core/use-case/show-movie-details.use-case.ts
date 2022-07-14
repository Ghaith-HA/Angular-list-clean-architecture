import {IUseCase, Presenter} from '../arch';
import {Injectable} from '@angular/core';
import { MovieList } from '../entity';
import { MovieListRepository } from '../repository';
import { ActivatedRoute } from '@angular/router';

export abstract class ShowMovieDetailsPresenter<T> extends Presenter<T> {
  public abstract displayMovieDetails(movies: MovieList): void;
}

@Injectable({providedIn: 'root'})
export class ShowMovieDetailsUseCase implements IUseCase<void, ShowMovieDetailsPresenter<any>> {

  constructor(public readonly presenter: ShowMovieDetailsPresenter<any>,
              private readonly repository: MovieListRepository,
  ) {
  }

  public async execute(request?: any, id?: number): Promise<void> {
    try {
      if(!id){
        id = 0;
      }
      const allMovies = await this.repository.getMovieDetails(id);
      this.presenter.displayMovieDetails(allMovies);
    } catch (err) {
      console.error('Failed to load or present movie: %o', err);
      throw err;
    }
  }
}
