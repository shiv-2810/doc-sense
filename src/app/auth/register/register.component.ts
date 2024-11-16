import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { RoleCode } from '../../../shared/constant/user.constant';
import { USER_REGISTRATION_FIELDS } from '../../../shared/formly/config/user.registration.config';
import { TypedForm } from '../../../shared/formly/interface/form.interface';
import { UserRegistration } from '../../../shared/interface/user-registration.interface';
import { AuthService } from '../../../shared/service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormlyNgZorroAntdModule,
    FormlyModule,
    NzCardComponent,
    NzButtonComponent,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  #authService = inject(AuthService);

  form = new FormGroup<TypedForm<UserRegistration>>({} as TypedForm<UserRegistration>);
  model: UserRegistration = {} as UserRegistration;
  fields = USER_REGISTRATION_FIELDS;

  register(model: UserRegistration) {
    const { firstName, lastName, mail, password } = model
    const payload = {
      firstName, lastName, mail, password, role: RoleCode.Guest
    }
    this.#authService.signUp(payload)

  }
}
