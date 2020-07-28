import { Component, OnInit } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-angular-homework1',
  templateUrl: './angular-homework1.component.html',
  styleUrls: ['./angular-homework1.component.scss'],
})
export class AngularHomework1Component implements OnInit {
  wordArr: Array<string> = ['java', 'tottenham'];
  badWord: string;
  isValid = false;
  isValidArea = false;
  check = false;
  textarea: string;
  placeholder = 'word here..';
  areaPlaceholder = 'text here..';
  newTextarea: string;
  constructor() {}

  ngOnInit(): void {}
  addWord(): void {
    if (this.badWord) {
      this.wordArr.push(this.badWord);
      this.placeholder = 'word here..';
      this.badWord = '';
      this.isValid = false;
    } else {
      this.check = true;
      this.placeholder = 'Please write a word.';
      this.isValid = true;
    }
  }
  wordArrMethod(): string {
    return this.wordArr.join();
  }
  cenzorText(textarea: string): void {
    if (textarea) {
      console.log(this.wordArr, this.textarea);
      this.areaPlaceholder = 'text here..';
      this.isValidArea = false;
      this.wordArr.forEach((element) => {
        while (this.textarea.search(element) > -1) {
          console.log();
          let forReplace = '';
          for (let i = 0; i < element.length; i++) {
            forReplace += '*';
          }
          this.textarea = this.textarea.replace(element, forReplace);
        }
      });
    } else {
      this.areaPlaceholder = 'Please write a word.';
      this.isValidArea = true;
    }
  }
  reset(): void {
    this.wordArr = [];
    this.badWord = '';
    this.textarea = '';
    this.isValid = false;
    this.isValidArea = false;
    this.placeholder = 'word here..';
    this.areaPlaceholder = 'text here..';
  }
}
