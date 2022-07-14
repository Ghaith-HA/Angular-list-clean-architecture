import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { movieConfig } from 'src/app/config/movie';
import { MovieList } from 'src/app/core/entity';
import { ShowMovieListPresenter, ShowMovieListUseCase } from '../../core/use-case';
import { MovieListViewModel } from './movie-list.view-model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  isLoading: boolean = false;
  count: number = 0;
  constructor(
    private readonly useCase: ShowMovieListUseCase,
    public readonly presenter: ShowMovieListPresenter<MovieListViewModel>,
    private store: Store<{ count: number; movieList: MovieList[],searchText: string}>,
    public router: Router,
  ) {
    presenter.reset();

    useCase.execute();
  }

  ngOnInit(): void {
    this.store.select('searchText').subscribe(async (data) => {
      this.presenter.reset();
      this.isLoading = true;
      await this.useCase.execute(null,data);
      this.isLoading = false;
    });

    this.store.select('count').subscribe(async (data) => {
      this.count = data
    });
  }

  setImagePath(path: string): string {
    return movieConfig.IMAGE_SERVER_PATH + path;
  }

  viewMovieDetails(id: any): void {
    this.router.navigate([ 'movie/' + id + '/details' ], { state: { id } });
  }
}
