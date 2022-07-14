
import { Injectable } from "@angular/core";
import { MovieList } from "src/app/core/entity";
import { ShowMovieDetailsPresenter } from "src/app/core/use-case";
import { MovieDetailsViewModel } from "./movie-details.view-model";

@Injectable()
export class MovieDetailsPresenter extends ShowMovieDetailsPresenter<MovieDetailsViewModel> {

  constructor() {
    super(MovieDetailsViewModel);
  }

  public displayMovieDetails(movie: MovieList): void {
    this.viewModel.movieDetails = movie;
  }
}
