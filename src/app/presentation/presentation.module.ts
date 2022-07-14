import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListComponent} from './todo-list/todo-list.component';
import {ShowMovieDetailsPresenter, ShowMovieListPresenter, ShowUserListPresenter} from '../core/use-case';
import { UserListPresenter } from './user-list/user-list.presenter';
import { UserListComponent } from './user-list/user-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListPresenter } from './movie-list/movie-list.presenter';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailsPresenter } from './movie-details/movie-details.presenter';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedSearchComponent } from '../advanceSearch/components/advanced-search.component';
import { AdvanceSearchModule } from '../advanceSearch/advanced-search.module';

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
    TodoListComponent,
    UserListComponent,
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
    TodoListComponent,
    UserListComponent,
    MovieListComponent,
    MovieDetailsComponent,
    LayoutComponent,
  ],
  providers: [
    {provide: ShowUserListPresenter, useClass: UserListPresenter},
    {provide: ShowMovieListPresenter, useClass: MovieListPresenter},
    {provide: ShowMovieDetailsPresenter, useClass: MovieDetailsPresenter},
  ]
})
export class PresentationModule {
}
