import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interface/user';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(userdata: User[], id: number): User[] {
    if (id) {
      return userdata.filter((user) => {
        return user.id == +id;
      });
    } else {
      return userdata;
    }
  }
}
