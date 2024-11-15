import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Subscription } from 'rxjs';
import { Roles } from '../../../shared/constant/user.constant';
import { User } from '../../../shared/interface/user.interface';
import { MockUserService } from '../../../shared/service/mock-user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NzTableModule,
    NzButtonComponent,
    FormsModule,
    NzInputModule,
    NzSelectModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  //services
  #userService = inject(MockUserService)

  //variables
  users = signal<User[]>([]);
  isLoading = signal(false);
  editCache: { [key: string]: { edit?: boolean; data: User } } = {};
  totalRoles = Roles;


  ngOnInit(): void {
    this.loadUsers();
  }

  /**
   * The function `loadUsers` fetches user data from a service, updates the loading state, and sets the
   * retrieved data to a users variable.
   */
  loadUsers() {
    this.isLoading.set(true);
    const response$: Subscription = this.#userService.getUsers<User[]>().subscribe({
      next: (data) => {
        this.isLoading.set(false);
        this.users.set(data)
      },
      error: () => this.isLoading.set(false),
      complete: () => response$.unsubscribe()
    })
  }

  /**
   * The deleteUser function deletes a user with the specified id from the users list after deleting the
   * user from the userService.
   * @param {string} id - The `id` parameter in the `deleteUser` function is a string that represents
   * the unique identifier of the user that needs to be deleted.
   */
  deleteUser(id: string) {
    this.#userService.deleteUser(id).subscribe(() => {
      this.users.update(prev => prev?.filter(user => user.id !== id))
    });
  }

  /**
   * The `addRow` function adds a new row with an empty name to the users list and starts editing the
   * newly added row.
   */
  addRow(): void {
    const id = String(this.users().length + 1)
    this.users.update(prev => [...(prev ?? []), { id, name: '', role: 'Guest' } as unknown as User])
    this.startEdit(id)
  }

  startEdit(id: string): void {
    if (!this.editCache[id]) {
      const index = this.users()?.findIndex(item => item.id === id) ?? -1;
      if (index !== -1) {
        this.editCache[id] = {
          data: { ...this.users()?.[index] } as User,
          edit: true
        };
      } else {
        return;
      }
    } else {
      this.editCache[id].edit = true;
    }
  }


  cancelEdit(id: string): void {
    const index = this.users()?.findIndex(item => item.id === id) ?? -1;
    this.editCache[id] = {
      data: { ...this.users()?.[index] } as User,
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.users()?.findIndex(item => item.id === id) ?? -1;
    Object.assign(this.users()?.[index] as User, this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.users()?.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }
}
