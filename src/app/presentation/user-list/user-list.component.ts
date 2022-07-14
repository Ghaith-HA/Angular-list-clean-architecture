import {Component} from '@angular/core';
import { ShowUserListPresenter, ShowUserListUseCase } from '../../core/use-case';
import { UserListViewModel } from './user-list.view-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  constructor(
    private readonly useCase: ShowUserListUseCase,
    public readonly presenter: ShowUserListPresenter<UserListViewModel>,
  ) {
    presenter.reset();

    useCase.execute();
  }
}
