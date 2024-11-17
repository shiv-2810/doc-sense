import { ComponentFixture, TestBed } from '@angular/core/testing';


import { WritableSignal } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../../../shared/interface/user.interface';
import { MockUserService } from '../../../shared/service/mock-user.service';
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let mockUserService: jasmine.SpyObj<MockUserService>;
  let usersSignal: WritableSignal<User[]>;

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj<MockUserService>('MockUserService', ['getUsers', 'deleteUser']);

    // Mock data for getUsers
    const mockUsers: User[] = [
      { id: '2', firstName: 'Jane', lastName: 'Smith', mail: 'jane@gmail.com', role: 'User' }
    ];
    mockUserService.getUsers.and.returnValue(of(mockUsers));
    // mockUserService.deleteUser.and.returnValue(of());



    await TestBed.configureTestingModule({
      imports: [UserListComponent],
      providers: [
        { provide: MockUserService, useValue: mockUserService } // Provide the mock service here
      ]

    })
      .compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users on init', () => {
    // Verify that getUsers was called
    expect(mockUserService.getUsers).toHaveBeenCalled();
    expect(component.users()).toEqual([
      { id: '2', firstName: 'Jane', lastName: 'Smith', mail: 'jane@gmail.com', role: 'User' }
    ]);
  });



  it('should add a new row', () => {

    const initialLength = component.users()?.length ?? 0;
    component.addRow();
    expect(component.users()?.length).toBe(initialLength + 1);
    expect(component.users()?.[initialLength]).toEqual({
      id: '2',
      firstName: '',
      lastName: '',
      mail: '',
      role: 'Guest',
    });
  });

  it('should start editing a user', () => {
    component.users.set([
      { id: '1', firstName: 'Jane', lastName: 'Smith', mail: 'jane@gmail.com', role: 'User' },
    ]);

    component.startEdit('1');

    expect(component.editCache['1']).toEqual({
      edit: true,
      data: { id: '1', firstName: 'Jane', lastName: 'Smith', mail: 'jane@gmail.com', role: 'User' },
    });
  });

  it('should cancel editing a user', () => {
    component.users.set([{ id: '1', firstName: 'Jane', lastName: 'Smith', mail: 'jane@gmail.com', role: 'User' }]);
    component.startEdit('1');
    component.cancelEdit('1');
    expect(component.editCache['1'].edit).toBeFalse();
  });

  it('should save edited user', () => {
    component.users.set([{ id: '1', firstName: 'Jane', lastName: 'Smith', mail: 'jane@gmail.com', role: 'User' }]);
    component.startEdit('1');
    component.editCache['1'].data.firstName = 'Jane';
    component.saveEdit('1');
    expect(component.users()?.[0].firstName).toEqual('Jane');
    expect(component.editCache['1'].edit).toBeFalse();
  });


});
