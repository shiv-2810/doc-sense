import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input'; // Import NzInputModule for prefix-input
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PasswordInputComponent } from '../../../shared/formly/component/password-input.component';
import { PrefixInputComponent } from '../../../shared/formly/component/prefix-input.component';
import { AuthService } from '../../../shared/service/auth.service';
import { LoginComponent } from './login.component';

// Register custom Formly field types here
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        NzIconModule,
        FormlyModule.forRoot({
          validators: [
            {
              name: 'email',
              validation: (control) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(control.value) ? null : { email: 'Invalid email address' };
              },
            },
          ],
          types: [
            {
              name: 'prefix-input',  // Register 'prefix-input' type
              component: PrefixInputComponent,  // Register the correct component here
            },
            {
              name: 'password-input',  // Register 'password-input' type
              component: PasswordInputComponent,  // Register the correct component here
            },
          ],
        }),
        FormlyNgZorroAntdModule,  // Import FormlyNgZorroAntdModule
        NzInputModule,  // Import NzInputModule to handle 'prefix-input'
        LoginComponent,  // Add the standalone component here
      ],
      providers: [
        { provide: AuthService },  // Mock the AuthService
        { provide: NzNotificationService, useValue: {} },  // Mock the NzNotificationService
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Additional test cases
});
