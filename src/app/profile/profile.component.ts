import { Component, OnInit } from '@angular/core';
import { InorderuserserviceService } from '../service/inorderuser/inorderuserservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user: {
    firstname: "Kaleigh",
    lastname: "Jaeger"
  }

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

}
