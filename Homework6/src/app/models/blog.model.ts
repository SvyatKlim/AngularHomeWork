import { IBlog } from '../interfaces/blog.interface';

export class BlogModel implements IBlog {
  constructor(
    public id: number,
    public postedBy: string,
    public topic: string,
    public date: string,
    public message: string,
    public userId: number
  ) {}
}
