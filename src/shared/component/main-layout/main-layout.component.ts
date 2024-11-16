import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { Submenu } from '../../constant/app.constant';
import { AuthService } from '../../service/auth.service';




@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzGridModule,
    RouterLink,
    NzToolTipModule
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

  #authService = inject(AuthService);
  #router = inject(Router);
  isCollapsed = false;
  submenu = Submenu;

  logOut() {
    this.#authService.logout();
    this.#router.navigateByUrl('/auth')
  }
}
