import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import {
  DashboardOutline,
  FormOutline,
  LockOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  UserOutline
} from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline, UserOutline, LockOutline];

export function provideNzIcons(): EnvironmentProviders {
  return importProvidersFrom(NzIconModule.forRoot(icons));
}
