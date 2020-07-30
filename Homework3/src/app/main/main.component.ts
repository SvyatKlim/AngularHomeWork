import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  taskArr: Array<object> = [
    {
      task: 'HTML5',
      check: true,
      progress: true,
    },
    {
      task: 'CSS3',
      check: true,
      progress: true,
    },
    {
      task: 'SCSS',
      check: false,
      progress: false,
    },
    {
      task: 'JavaScript',
      check: false,
      progress: false,
    },
    {
      task: 'jQuery',
      check: false,
      progress: false,
    },
    {
      task: 'Angular',
      check: false,
      progress: false,
    },
  ];
  length = this.taskArr.length;
  inpTask: string;
  progress: boolean;
  newValue: string;
  editTask: object;
  visibleInp = false;
  constructor() {}

  ngOnInit(): void {}
  add(): void {
    let newTask = {
      task: this.inpTask,
      check: false,
      progress: false,
    };
    this.taskArr.push(newTask);
    this.inpTask = '';
    this.length = this.taskArr.length;
  }
  checkedBox(task: any): void {
    task.check = !task.check;
    task.progress = !task.progress;
  }
  delete(i: number): void {
    if (confirm('Are you sure?')) {
      this.taskArr.splice(i, 1);
    }
    this.length = this.taskArr.length;
  }
  edit(obj: any): void {
    this.newValue = obj.task;
    this.editTask = obj;
    this.visibleInp = true;
  }
  save(newNameforTask: string): void {
    this.editTask['task'] = newNameforTask;
    console.log(this.editTask);
    this.newValue = '';
    this.visibleInp = false;
  }
}
