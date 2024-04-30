import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../service/user.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
//Contoller
export class UserComponent implements OnInit {
  public users;
  public userForm;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      name: '',
      age: '',
    });
  }

  ngOnInit() {
    this.refreshUsers();
  }
  refreshUsers() {
    this.users = this.userService.users;
  }

  add(userForm) {
    this.userService.add(userForm);
    this.refreshUsers();
    this.userForm.reset();
  }
  delete({ id }) {
    this.userService.delete(id);
    this.refreshUsers();
  }
  edit(user, { innerText: age }) {
    const { id } = user;
    this.userService.edit(id, { ...user, age });
    this.refreshUsers();
  }
  toggle({ id }) {
    this.userService.toggle(id);
    this.refreshUsers();
  }
}
