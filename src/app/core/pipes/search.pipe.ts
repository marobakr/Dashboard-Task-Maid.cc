import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interface/user';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(userdata: User[], id: string): User[] {
    let _ID = parseInt(id);
    if (id) {
      return userdata.filter((user) => {
        return user.id === _ID;
      });
    } else {
      return userdata;
    }
  }
}
