import { Component, OnInit } from '@angular/core';
import { InorderuserserviceService } from '../../service/inorderuser/inorderuserservice.service';
import { InOrderUser } from '../../model/inorderuser/inorderuser.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  currentInOrderUser: InOrderUser = new InOrderUser();

  inorderusers = [];
  inorderuser: any;

  editPressed: boolean = false;

 constructor(public inOrderUserService: InorderuserserviceService) {

    }

  
  ngOnInit() {
    this.getAllInOrderUsers();
    this.getCurrentUser();
  }

  getAllInOrderUsers() {
    this.inOrderUserService.getAllInOrderUsers()
      .subscribe((data) => {
      console.log(data);
      for (let inorderuser of data) {
        this.inorderusers.push(inorderuser);
      }
      console.log(this.inorderusers);
      (error) => console.log(error)
    });
  }

  getCurrentUser() {
    this.inOrderUserService.getUserByUsername()
      .subscribe((data) => {
        console.log(data);
        this.inorderuser = data;
        console.log(this.inorderuser);
      })
  }

  pressEdit() {
    this.editPressed = true;
  }

  editInOrderUser(form: NgForm) {
    console.log(form);
    console.log(form.controls.firstname.value);
    this.currentInOrderUser.setFirstName(form.controls.firstname.value);
    this.currentInOrderUser.setLastName(form.controls.lastname.value);
    this.currentInOrderUser.setUsername(this.inorderuser.username);
    this.currentInOrderUser.setPassword(form.controls.password.value);
    console.log(this.currentInOrderUser);
    this.inOrderUserService.updateInOrderUser(this.currentInOrderUser);
  }

}
