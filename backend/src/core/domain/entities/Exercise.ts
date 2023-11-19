import { User } from './User';
export class Exercise {
  id: string;
  content: string;
  created_at: Date;
  user_id: string;
  user: User;

  static create(content: string, user: User): Exercise {
    const exercise = new Exercise();
    exercise.user = user;
    exercise.content = content;
    exercise.created_at = new Date();
    exercise.user_id = user.id;
    return exercise;
  }
}
