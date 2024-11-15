import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../shared/component/main-layout/main-layout.component';
import { AuthRoutes } from './auth/auth.routes';
import { AuthGuard } from './auth/guard';
import { QnaContainerComponent } from './component/qna-container/qna-container.component';
import { UserListComponent } from './component/user-list/user-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'user-list', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'user-list',
        component: UserListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'q-and-a',
        component: QnaContainerComponent,
        canActivate: [AuthGuard],
      },
    ],

  },
  { path: 'auth', children: AuthRoutes }
];
