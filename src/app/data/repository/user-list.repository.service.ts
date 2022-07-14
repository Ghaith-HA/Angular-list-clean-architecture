import {Injectable} from '@angular/core';
import {UserListRepository} from '../../core/repository';
import {UserList} from '../../core/entity';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class UserListRepositoryService extends UserListRepository {

  private userList: UserList[] = [];
  
  public async getAllUsers(size: Number = 25, skip: Number = 0): Promise<UserList[]>{
    try {
      let data: UserList[] = this.userList;
      let randomUsers: any = await axios.get(`https://random-data-api.com/api/users/random_user?size=${size}`);
      if(randomUsers && randomUsers.data && randomUsers.data.length){
        data = [ ...randomUsers.data ];
      }
      return data;
      
    } catch(err) {
      console.log("error: ", err);
      return this.userList
    }
  }
}
