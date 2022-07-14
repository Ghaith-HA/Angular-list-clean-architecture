import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PresentationModule} from './presentation/presentation.module';
import {DataModule} from './data/data.module';
import {InfrastructureModule} from './infrastructure/infrastructure.module';
import { AdvanceSearchModule } from './advanceSearch/advanced-search.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { counterReducer, movieListReducer, searchTextReducer } from './reducers';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DataModule,
    PresentationModule,
    InfrastructureModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer, movieList: movieListReducer, searchText: searchTextReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
