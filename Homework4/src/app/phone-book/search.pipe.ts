import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from 'src/app/phone-book/user.interface';

@Pipe({
  name: 'search',
  pure: false,
})
export class SearchPipe implements PipeTransform {
  transform(value: Array<IUser>, seacrhParam: string): Array<any> {
    if (!seacrhParam) {
      return value;
    }
    if (!value) {
      return null;
    }
    // return value.filter((user) => {
    //   user.name.toLowerCase().includes(seacrhParam.toLowerCase());
    //   user.last.toLowerCase().includes(seacrhParam.toLowerCase());
    // });
    return value.filter((user) => {
      if (user.name.toLowerCase().includes(seacrhParam.toLowerCase())) {
        return user.name.toLowerCase().includes(seacrhParam.toLowerCase());
      } else if (user.last.toLowerCase().includes(seacrhParam.toLowerCase())) {
        return user.last.toLowerCase().includes(seacrhParam.toLowerCase());
      } else if (
        user.number.toLowerCase().includes(seacrhParam.toLowerCase())
      ) {
        return user.number.toLowerCase().includes(seacrhParam.toLowerCase());
      }
    });
  }
}
