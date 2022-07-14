import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { async } from 'rxjs';
import { movieConfig } from 'src/app/config/movie';
import { MovieList } from 'src/app/core/entity';
import { ShowMovieDetailsPresenter, ShowMovieDetailsUseCase } from 'src/app/core/use-case/show-movie-details.use-case';
import { MovieDetailsViewModel } from './movie-details.view-model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  isLoading: boolean = false;
  movieId: any = 0;
  movieDetails: MovieList = {
    adult: false,
    backdrop_path: '',
    id: 0,
    original_language: '',
    original_title: '',
    poster_path: '',
    release_date: '',
    title: '',
    vote_average: '',
    budget: 0,
    revenue: 0,
    status: '',
    tagline: '',
    overview: ''
  };
  
  constructor(
    private readonly useCase: ShowMovieDetailsUseCase,
    public readonly presenter: ShowMovieDetailsPresenter<MovieDetailsViewModel>,
    private store: Store<{ count: number; movieList: MovieList[],searchText: string}>,
    private route: ActivatedRoute,
  ) {
      this.movieId = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : 0;
      this.executeGetMovieDetails();
  }

    ngOnInit() {
    
  }
  async executeGetMovieDetails(): Promise<void> {
    this.presenter.reset();
    await this.useCase.execute(null, this.movieId);
    this.movieDetails = this.presenter.viewModel.movieDetails;
  }
  setImagePath(path: string): string {
    return movieConfig.IMAGE_SERVER_PATH + path;
  }
}
