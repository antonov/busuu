import { User } from './User';
export class Exercise {
  id: string;
  content: string;
  created_at: Date;
  user: User;

  static create(content: string, user: User): Exercise {
    const exercise = new Exercise();
    exercise.user = user;
    exercise.content = content;
    return exercise;
  }
}
