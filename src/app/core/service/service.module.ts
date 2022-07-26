import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieListRepository} from '../repository';
import { MovieListRepositoryService } from './movie/movie-list-repository.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: MovieListRepository, useClass: MovieListRepositoryService},
  ]
})
export class ServiceModule {
}
