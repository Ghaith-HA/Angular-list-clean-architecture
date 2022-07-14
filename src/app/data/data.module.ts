import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieListRepository, TodoRepository, UserListRepository} from '../core/repository';
import {TodoRepositoryService} from './repository/todo-repository.service';
import { UserListRepositoryService } from './repository/user-list.repository.service';
import { MovieListRepositoryService } from './repository/movie-list-repository.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: TodoRepository, useClass: TodoRepositoryService},
    {provide: UserListRepository, useClass: UserListRepositoryService},
    {provide: MovieListRepository, useClass: MovieListRepositoryService},
  ]
})
export class DataModule {
}
