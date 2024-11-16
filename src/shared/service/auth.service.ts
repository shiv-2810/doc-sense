import { Injectable, signal } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { UserRegistration } from '../interface/user-registration.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Dummy users with Gmail IDs and passwords
  #users = signal([
    { email: 'admin@gmail.com', password: 'admin123', role: 'admin' },
    { email: 'user@gmail.com', password: 'user123', role: 'user' },
    { email: 'guest@gmail.com', password: 'guest123', role: 'guest' },
  ]);

  #isAuthenticated = false;
  #currentUser: { email: string; role: string } | null = null;


  public signUp(user: UserRegistration): Observable<any> {
    this.#isAuthenticated = true;
    this.#currentUser = { email: user.mail, role: user.role };
    localStorage.setItem('auth_token', 'mock-jwt-token');
    localStorage.setItem('user_role', user.role);
    return of({ success: true, user: this.#currentUser });
  }

  /**
   * Login method that checks the email and password
   * against the predefined list of users.
   */
  public login(email: string, password: string): Observable<any> {
    const user = this.#users().find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      this.#isAuthenticated = true;
      this.#currentUser = { email: user.email, role: user.role };
      // Store user info in localStorage to persist the session
      localStorage.setItem('auth_token', 'mock-jwt-token');
      localStorage.setItem('user_role', user.role);
      return of({ success: true, user: this.#currentUser });
    } else {
      return throwError(() => new Error('Invalid credentials'));
    }
  }

  /**
   * Logout method that clears user data and removes session information
   */
  public logout() {
    this.#isAuthenticated = false;
    this.#currentUser = null;
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_role');
  }

  /**
   * Method to check if the user is logged in
   */
  public isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  /**
   * Method to get the current user's role from localStorage
   */
  public getUserRole(): string | null {
    return localStorage.getItem('user_role');
  }

  /**
   * Method to get the current authenticated user information
   */
  public getCurrentUser(): { email: string; role: string } | null {
    return this.#currentUser;
  }
}
