import { Component, OnInit } from '@angular/core';
import { IUser } from './user.interface';
import { User } from './user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList: Array<IUser> = [];
  user: object;
  login: string;
  password: string;
  email: string;
  show = false;
  edit = false;
  hidden = false;
  visible = true;
  i: number;
  constructor() {}

  ngOnInit(): void {}
  addUser(): void {
    if ((this.login, this.password, this.email)) {
      const user: IUser = new User(this.login, this.password, this.email);
      this.userList.push(user);
      this.resetForm();
      console.log(this.userList);
    }
  }
  private resetForm(): void {
    this.login = '';
    this.password = '';
    this.email = '';
  }
  deleteUser(index: number): void {
    this.userList.splice(index, 1);
  }
  editUser(index: number): void {
    this.edit = true;
    let editObj = this.userList[index];
    this.login = editObj.login;
    this.password = editObj.password;
    this.email = editObj.email;
    this.hidden = true;
    this.visible = false;
    this.i = index;
  }
  saveEditUser(i: number): void {
    console.log('IDITE NA HUY');
    let editObj = this.userList[i];
    editObj.login = this.login;
    editObj.password = this.password;
    editObj.email = this.email;
    this.resetForm();
    this.hidden = false;
    this.visible = true;
  }
}
