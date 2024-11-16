import { Route } from '@angular/router';
import { USER_LOGIN_CONFIG } from '../../shared/formly/config/user.login.config';
import { USER_REGISTRATION_CONFIG } from '../../shared/formly/config/user.registration.config';
import { importFormlyProvider } from '../../shared/import-formly.provider';
import { AuthContainerComponent } from './auth-container/auth-container.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const AuthRoutes: Route[] = [
  {
    path: '',
    component: AuthContainerComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        providers: [importFormlyProvider(USER_LOGIN_CONFIG)]
      },
      {
        path: 'register',
        component: RegisterComponent,
        providers: [importFormlyProvider(USER_REGISTRATION_CONFIG)]
      },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ],

  },
];
