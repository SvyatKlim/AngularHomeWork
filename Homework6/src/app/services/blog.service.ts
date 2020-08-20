import { Injectable } from '@angular/core';
import { IBlog } from '../interfaces/blog.interface';
import { IUsers } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private arrBlogs: Array<IBlog> = [
    {
      id: 1,
      postedBy: 'admin',
      topic: 'First post',
      date: new Date('2020-05-22, 10:00:00').toString(),
      message: 'Sing up to create your account and start to use Angular Blog',
      userId: 1,
    },
  ];
  private arrUsers: Array<IUsers> = [
    {
      id: 1,
      username: 'admin',
      category: 'admin',
      email: 'admin@gmail.com',
      password: '123456',
    },
    {
      id: 2,
      username: 'guest',
      category: 'user',
      email: 'guest@gmail.com',
      password: '123456',
    },
  ];
  constructor() {}
  addUser(user: IUsers): void {
    this.arrUsers.push(user);
  }
  addBlog(blog: IBlog): void {
    this.arrBlogs.push(blog);
  }
  getBlog(): Array<IBlog> {
    return this.arrBlogs;
  }
  getUser(): Array<IUsers> {
    return this.arrUsers;
  }
  deleteBlog(id: number): void {
    const index = this.arrBlogs.findIndex((b) => b.id === id);
    this.arrBlogs.splice(index, 1);
  }
  updatePost(post: IBlog): void {
    const index = this.arrBlogs.findIndex((b) => b.id === post.id);
    this.arrBlogs.splice(index, 1, post);
  }
  regUser(newUser: IUsers): void {
    this.arrUsers.push(newUser);
  }
}
