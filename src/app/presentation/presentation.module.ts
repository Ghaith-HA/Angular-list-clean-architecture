import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListComponent} from './todo-list/todo-list.component';
import {ShowUserListPresenter} from '../core/use-case';
import { UserListPresenter } from './user-list/user-list.presenter';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    TodoListComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TodoListComponent,
    UserListComponent,
  ],
  providers: [
    {provide: ShowUserListPresenter, useClass: UserListPresenter},
  ]
})
export class PresentationModule {
}
