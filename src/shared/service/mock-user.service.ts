import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../interface/user.interface';



@Injectable({
  providedIn: 'root'
})
export class MockUserService {
  #users: User[] = [
    { id: '1', firstName: 'John', lastName: 'Doe', mail: 'john@gmail.com', role: 'Admin' },
    { id: '2', firstName: 'Jane', lastName: 'Smith', mail: 'jane@gmail.com', role: 'User' }
  ];

  /**
   * The function `getUsers` returns an observable of type `T` containing users data with a delay of
   * 500 milliseconds.
   */
  public getUsers<T>(): Observable<T> {
    return of(this.#users as T).pipe(delay(500));
  }

  public getUserById(id: string): Observable<User | undefined> {
    const user = this.#users.find(user => user.id === id);
    return of(user).pipe(delay(500));
  }

  public createUser(user: User): Observable<User> {
    user.id = (Math.random() * 1000).toFixed(0); // Mock ID generation
    this.#users.push(user);
    return of(user).pipe(delay(500));
  }

  public updateUser(id: string, updatedUser: User): Observable<User | undefined> {
    const index = this.#users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.#users[index] = { ...updatedUser, id };
      return of(this.#users[index]).pipe(delay(500));
    }
    return of(undefined);
  }

  public deleteUser(id: string): Observable<void> {
    this.#users = this.#users.filter(user => user.id !== id);
    return of(undefined).pipe(delay(500));
  }
}
