import { UserList } from '../entity';

export abstract class UserListRepository {
    public abstract getAllUsers(size?: Number, skip?: Number): Promise<UserList[]>;

}
