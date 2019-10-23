import { Component, OnInit } from '@angular/core';
import { InorderuserserviceService } from '../../service/inorderuser/inorderuserservice.service';
import { InOrderUser } from '../../model/inorderuser/inorderuser.model';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  currentInOrderUser: InOrderUser;

  inorderusers = [];
  inorderuser: any;

  editPressed: boolean = false;

  profileControl = new FormControl('value', Validators.required)


 constructor(
  public inOrderUserService: InorderuserserviceService,
  private modalController: ModalController,
  private alertController: AlertController) { }

  
  ngOnInit() {
    this.getAllInOrderUsers();
    this.getCurrentUser();
  }

  dismissModal() {
    this.modalController.dismiss();
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

  updateInOrderUser(form: NgForm) {
    console.log(form.value);
    console.log(form.value.firstname);
    console.log(form.value.lastname);
    console.log(form.value.username);
    console.log(form.value.password);

    this.currentInOrderUser = new InOrderUser (
      form.value.firstname,
      form.value.lastname,
      form.value.username,
      form.value.password
    )

    console.log(this.currentInOrderUser);
    
    this.editInOrderUser(this.currentInOrderUser);
  }

  editInOrderUser(newInOrderUser: InOrderUser) {
    console.log("Add In Order User Run");
    console.log(newInOrderUser)
    console.log(newInOrderUser.firstname);
    console.log(newInOrderUser.lastname);
    console.log(newInOrderUser.username);
    console.log(newInOrderUser.password);
    this.inOrderUserService.updateInOrderUser(newInOrderUser);
    this.dismissModal();
    this.showConfirmation();
  }

  async showConfirmation() {
    const info = await this.alertController.create({
      header: 'Success',
      message: 'Your information has been saved!',
      buttons: ['Okay']
    });
    await info.present();
  }
 

}
