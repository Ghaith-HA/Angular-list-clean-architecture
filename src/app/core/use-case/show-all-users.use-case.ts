import {IUseCase, Presenter} from '../arch';
import {UserList} from '../entity';
import {UserListRepository} from '../repository';
import {Injectable} from '@angular/core';

export abstract class ShowUserListPresenter<T> extends Presenter<T> {
  public abstract displayUsersList(users: UserList[]): void;
}

@Injectable({providedIn: 'root'})
export class ShowUserListUseCase implements IUseCase<void, ShowUserListPresenter<any>> {

  constructor(public readonly presenter: ShowUserListPresenter<any>,
              private readonly repository: UserListRepository,
  ) {
  }

  public async execute(request: void): Promise<void> {
    try {
      const allUsers = await this.repository.getAllUsers();
      console.log('allUsers------->',allUsers)
      this.presenter.displayUsersList(allUsers);
    } catch (err) {
      console.error('Failed to load or present user: %o', err);
      throw err;
    }
  }
}
