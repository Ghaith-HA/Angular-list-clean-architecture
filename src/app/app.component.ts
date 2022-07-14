import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieList } from './core/entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';

  constructor(private store: Store<{ count: number; movieList: MovieList[],searchText: string}>){
    
  }
  ngOnInit() {
    this.store.select('movieList').subscribe((data) => {
      console.log('movie List from app--->', data);
    });
    this.store.select('count').subscribe((data) => {
      console.log('count movie List from app--->', data);
    });
    this.store.select('searchText').subscribe((data) => {
      console.log('searchText from app--->', data);
    });
  }
}
