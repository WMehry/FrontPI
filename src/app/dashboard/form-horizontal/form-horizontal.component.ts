import { Component, OnInit } from '@angular/core';
import { RegisterRequest } from 'src/app/Models/user/RegisterRequest';
import { ERole } from 'src/app/Models/user/role';
import { User } from 'src/app/Models/user/user';
import { AdminServiceService } from 'src/app/services/admin-service.service';


@Component({
  selector: 'app-form-horizontal',
  templateUrl: './form-horizontal.component.html',
  styleUrls: ['./form-horizontal.component.css']
})
export class FormHorizontalComponent implements OnInit {
  users: User[] = [];
  newUser: RegisterRequest = new RegisterRequest('', '', '', '', []); // Créez une nouvelle instance de RegisterRequest
  roles: ERole[] = [ERole.ROLE_USER, ERole.ROLE_ADMIN];
  showAddUserForm: boolean = false;



   // Declare the users property

  constructor(private adminService: AdminServiceService) { }


  ngOnInit(): void {
    this.loadUsers();
  }
  toggleAddUserForm() {
    this.showAddUserForm = !this.showAddUserForm;
  }

  loadUsers(): void {
    this.adminService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
  deleteUser(id: number | undefined): void {
    if (id !== undefined) {
      this.adminService.deleteUser(id).subscribe(() => {
        // After successful deletion, fetch users again to update the list
        this.loadUsers();
      });
    } else {
      console.error('User ID is undefined');
    }
  }
  addUser(): void {
    this.adminService.addUser(this.newUser).subscribe(() => {
      // Réinitialisez le formulaire et rechargez la liste des utilisateurs
      this.newUser = new RegisterRequest('', '', '', '', []);
      this.loadUsers();
    });
  }


}