import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { Subscription } from 'rxjs';
import { USER_LOGIN_FIELDS } from '../../../shared/formly/config/user.login.config';
import { TypedForm } from '../../../shared/formly/interface/form.interface';
import { AuthService } from '../../../shared/service/auth.service';

interface UserLogin {
  username: string;
  password: string;
}

@Component({
  selector: 'nova-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    FormlyNgZorroAntdModule,
    FormlyModule,
    NzCardComponent,
    NzButtonComponent,
  ],
})
export class LoginComponent {
  #router = inject(Router);
  #authService = inject(AuthService);
  form = new FormGroup<TypedForm<UserLogin>>({} as TypedForm<UserLogin>);
  model: UserLogin = {} as UserLogin;
  fields = USER_LOGIN_FIELDS;


  /**
   * The `login` function in TypeScript disables a form, attempts to log in a user using provided
   * credentials, and handles success and error responses accordingly.
   * @param {UserLogin}  - The `login` method takes an object as a parameter with the properties
   * `username` and `password`, which are used for user login credentials. The method then disables a
   * form, calls the `login` method of the `authService` with the provided username and password, and
   * subscribes to the
   */
  login({ username, password }: UserLogin) {
    this.form.disable();
    const response$: Subscription = this.#authService.login(username, password).subscribe({
      next: (res) => {
        this.#router.navigateByUrl('/user-list')
      },
      error: (err) => {
        console.log('Login failed:', err.message);
      },
      complete: () => response$.unsubscribe()
    });
  }

}

