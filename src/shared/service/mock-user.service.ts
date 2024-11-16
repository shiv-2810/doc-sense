import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../interface/user.interface';



@Injectable({
  providedIn: 'root'
})
export class MockUserService {
  private users: User[] = [
    { id: '1', firstName: 'John', lastName: 'Doe', mail: 'john@gmail.com', role: 'Admin' },
    { id: '2', firstName: 'Jane', lastName: 'Smith', mail: 'jane@gmail.com', role: 'User' }
  ];

  constructor() { }

  public getUsers<T>(): Observable<T> {
    return of(this.users as T).pipe(delay(500));
  }

  getUserById(id: string): Observable<User | undefined> {
    const user = this.users.find(user => user.id === id);
    return of(user).pipe(delay(500));
  }

  createUser(user: User): Observable<User> {
    user.id = (Math.random() * 1000).toFixed(0); // Mock ID generation
    this.users.push(user);
    return of(user).pipe(delay(500));
  }

  updateUser(id: string, updatedUser: User): Observable<User | undefined> {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...updatedUser, id };
      return of(this.users[index]).pipe(delay(500));
    }
    return of(undefined);
  }

  deleteUser(id: string): Observable<void> {
    this.users = this.users.filter(user => user.id !== id);
    return of(undefined).pipe(delay(500));
  }
}
