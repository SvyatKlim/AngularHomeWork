import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BlogService } from 'src/app/services/blog.service';
import { IUsers } from 'src/app/interfaces/users.interface';
import { BlogModel } from 'src/app/models/blog.model';
import { IBlog } from 'src/app/interfaces/blog.interface';
import { DatePipe } from '@angular/common';
import { element } from 'protractor';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  modalRef: BsModalRef;
  btnPost: boolean;
  iAmAdmin: boolean;
  signInEmail: string;
  signInPass: string;
  blogs: Array<IBlog>;
  loged: boolean = false;
  loginedUser: string;
  postArray: Array<IBlog> = [];
  postTitle: string;
  postText: string;
  postedBy: string;
  postID = 1;
  loginedUserId: number;
  currentUserId: number;
  deleteBlogID: number;
  postDate: string;
  editStatus = false;
  regName: string;
  regEmail: string;
  regPassword: string;
  constructor(
    private bService: BlogService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getBlogList();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  signIn(): void {
    const userFind = this.bService.getUser();
    userFind.forEach((element) => {
      if (
        element.category === 'admin' &&
        this.signInEmail === element.email &&
        this.signInPass === element.password
      ) {
        this.loginedUser = element.username;
        this.iAmAdmin = true;
        this.loged = true;
        this.signInEmail = '';
        this.signInPass = '';
        this.modalRef.hide();
        this.postedBy = 'admin';
        this.loginedUserId = element.id;
        this.currentUserId = element.id;
        console.log('Hello admin');
      }
      if (
        element.category === 'user' &&
        this.signInEmail === element.email &&
        this.signInPass === element.password
      ) {
        console.log('GOOO');
        this.loginedUser = element.username;
        this.iAmAdmin = false;
        this.loged = true;
        this.signInEmail = '';
        this.signInPass = '';
        this.postedBy = 'user';
        this.modalRef.hide();
        this.loginedUserId = element.id;
        this.currentUserId = element.id;
      }
    });
  }
  signOut(): void {
    this.loged = false;
    this.iAmAdmin = false;
    this.currentUserId = undefined;
    this.loginedUserId = null;
  }
  addPostOpen(): void {
    this.btnPost = true;
  }
  addPost(): void {
    const blog = new BlogModel(
      this.postID,
      this.loginedUser,
      this.postTitle,
      (this.postDate = new Date().toString()),
      this.postText,
      this.currentUserId
    );
    if (this.postTitle != '' && this.postText != '' && this.btnPost) {
      if (this.blogs.length > 0) {
        blog.id = this.blogs.slice(-1)[0].id + 1;
      }
      this.editStatus = true;
      this.bService.addBlog(blog);
      console.log(this.bService.getBlog(), this.bService.getUser());
    }
    this.resetForm();
    this.modalRef.hide();
  }
  getBlogList() {
    this.blogs = this.bService.getBlog();
  }
  deletePost(id: number): void {
    this.deleteBlogID = id;
  }
  confirm(): void {
    this.bService.deleteBlog(this.deleteBlogID);
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }
  editPostOpen(template: TemplateRef<any>, editedPost: IBlog): void {
    this.btnPost = false;
    this.modalRef = this.modalService.show(template);
    this.postID = editedPost.id;
    this.postedBy = editedPost.postedBy;
    this.postTitle = editedPost.topic;
    this.postDate = editedPost.date;
    this.postText = editedPost.message;
    this.currentUserId = this.currentUserId;
  }
  editPost(): void {
    const blog: IBlog = new BlogModel(
      this.postID,
      this.postedBy,
      this.postTitle,
      this.postDate,
      this.postText,
      this.currentUserId
    );
    if (!this.btnPost && this.postTitle != '' && this.postText != '') {
      this.bService.updatePost(blog);
      this.editStatus = false;
    }
    this.resetForm();
    this.modalRef.hide();
  }
  private resetForm(): void {
    this.postID = 1;
    this.postedBy = '';
    this.postTitle = '';
    this.postText = '';
  }
  private resetRegisterForm(): void {
    this.regName = '';
    this.regEmail = '';
    this.regPassword = '';
  }
  signUp(): void {
    const getID = this.bService.getUser().length;
    const newUser: IUsers = {
      id: getID + 1,
      username: this.regName,
      category: 'user',
      email: this.regEmail,
      password: this.regPassword,
    };
    this.bService.regUser(newUser);
    this.resetRegisterForm();
    this.modalRef.hide();
    this.loginedUser = newUser.username;
    this.iAmAdmin = false;
    this.loged = true;
    this.currentUserId = newUser.id;
    this.loginedUserId = newUser.id;
  }
}
