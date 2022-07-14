
import { Injectable } from "@angular/core";
import { MovieList } from "src/app/core/entity";
import { ShowMovieListPresenter } from "src/app/core/use-case";
import { MovieListViewModel } from "./movie-list.view-model";

@Injectable()
export class MovieListPresenter extends ShowMovieListPresenter<MovieListViewModel> {

  constructor() {
    super(MovieListViewModel);
  }

  public displayMoviesList(movies: MovieList[]): void {
    this.viewModel.movies = movies;
  }
}
