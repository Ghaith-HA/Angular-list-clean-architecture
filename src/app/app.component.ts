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

  constructor(){}
  ngOnInit() {}
}
