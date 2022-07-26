import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListPresenter } from './movie-list/movie-list.presenter';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailsPresenter } from './movie-details/movie-details.presenter';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedSearchComponent } from '../advanceSearch/components/advanced-search.component';
import { AdvanceSearchModule } from '../advanceSearch/advanced-search.module';
import { ShowMovieListPresenter } from '../core/use-case/show-all-movies.use-case';
import { ShowMovieDetailsPresenter } from '../core/use-case/show-movie-details.use-case';

const routes: Routes = [
  {
    path: 'movie/list',
    component: MovieListComponent,
  },
  {
    path: 'movie/:id/details',
    component: MovieDetailsComponent,
  }
];
@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    AdvanceSearchModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    MovieListComponent,
    MovieDetailsComponent,
    LayoutComponent,
  ],
  providers: [
    {provide: ShowMovieListPresenter, useClass: MovieListPresenter},
    {provide: ShowMovieDetailsPresenter, useClass: MovieDetailsPresenter},
  ]
})
export class PresentationModule {
}
