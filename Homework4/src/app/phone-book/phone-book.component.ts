import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IUser } from 'src/app/phone-book/user.interface';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss'],
})
export class PhoneBookComponent implements OnInit {
  userList: Array<IUser> = [
    {
      name: 'Petya',
      last: 'Zhuk',
      number: '0631111111',
    },
    {
      name: 'Petro',
      last: 'Petriv',
      number: '0631222222',
    },
    {
      name: 'Alejandro',
      last: 'Del Rio Albrechet',
      number: '0633333333',
    },
    {
      name: 'Vasylyna',
      last: 'Verublevska',
      number: '0635555555',
    },
    {
      name: 'Ira',
      last: 'Tytar',
      number: '0636666666',
    },
    {
      name: 'Sophia',
      last: 'Zhuk',
      number: '09777777777',
    },
  ];

  searchText: string;
  sortedName: boolean = false;
  sortedLast: boolean = false;
  sortedNumber: boolean = false;
  condition: boolean = true;
  arrow: boolean;
  modalRef: BsModalRef;
  newUserName: string;
  newUserLast: string;
  newUserNum: string;
  editUserName: string;
  editUserLast: string;
  editUserNum: string;
  editObj: object = {
    name: '',
    last: '',
    number: '',
  };

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  sortName(param: string, direction: boolean): void {
    console.log(param);
    this.userList.sort(function (a, b) {
      if (a[param] > b[param]) {
        return 1;
      }
      if (a[param] < b[param]) {
        return -1;
      }
      return 0;
    });
    if (param === 'name') {
      this.condition = !this.condition;
      this.sortedName = !this.sortedName;
    } else if (param === 'number') {
      this.condition = !this.condition;
      this.sortedNumber = !this.sortedNumber;
    } else if (param === 'last') {
      this.condition = !this.condition;
      this.sortedLast = !this.sortedLast;
    }

    if (!direction) {
      this.userList = this.userList.reverse();
    }
    console.log(this.userList);
  }
  openModal(template: ElementRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModalEdit(template: ElementRef<any>, userObj: object) {
    this.modalRef = this.modalService.show(template);
    this.editObj = userObj;
    this.editUserName = this.editObj['name'];
    this.editUserLast = this.editObj['last'];
    this.editUserNum = this.editObj['number'];
  }
  addNewUser(): void {
    if (
      this.newUserName !== undefined &&
      this.newUserName !== '' &&
      this.newUserLast !== undefined &&
      this.newUserLast !== '' &&
      this.newUserNum !== undefined &&
      this.newUserNum !== ''
    ) {
      console.log(this.newUserName, this.newUserLast, this.newUserNum);
      this.userList.unshift({
        name: this.newUserName,
        last: this.newUserLast,
        number: this.newUserNum,
      });
      this.newUserName = '';
      this.newUserLast = '';
      this.newUserNum = '';
      this.modalRef.hide();
    }
  }
  editNewUser(): void {
    if (
      this.editUserName !== undefined &&
      this.editUserName !== '' &&
      this.editUserLast !== undefined &&
      this.editUserLast !== '' &&
      this.editUserNum !== undefined &&
      this.editUserNum !== ''
    ) {
      this.editObj['name'] = this.editUserName;
      this.editObj['last'] = this.editUserLast;
      this.editObj['number'] = this.editUserNum;
      this.modalRef.hide();
    }
  }
  deleteEl(i: number): void {
    console.log(i);
    this.userList.splice(i, 1);
  }
}
