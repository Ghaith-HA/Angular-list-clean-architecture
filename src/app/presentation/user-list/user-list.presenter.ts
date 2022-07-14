import {ShowUserListPresenter} from '../../core/use-case';
import {UserList} from '../../core/entity';
import { Injectable } from "@angular/core";
import { UserListViewModel } from './user-list.view-model';

@Injectable()
export class UserListPresenter extends ShowUserListPresenter<UserListViewModel> {

  constructor() {
    super(UserListViewModel);
  }

  public displayUsersList(users: UserList[]): void {
    this.viewModel.users = users;
  }
}
