import { User } from './user.interface';


export interface UserRegistration extends Omit<User,
  'id'
  | 'accounts'
  | 'username'
  | 'avatar'
  | 'roles'
  | 'isDeleted'
> {
  confirmPassword?: string;
  agree?: boolean;
  password?: string;
}
