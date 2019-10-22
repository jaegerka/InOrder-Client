import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { InOrderUser } from 'src/app/model/inorderuser/inorderuser.model';
import { InorderuserserviceService } from 'src/app/service/inorderuser/inorderuserservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  newInOrderUser: InOrderUser;

  constructor(
    private modalController: ModalController,
    private inOrderUserService: InorderuserserviceService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  createInOrderUser(form: NgForm) {
    console.log(form.value);
    console.log(form.value.firstname);
    console.log(form.value.lastname);
    console.log(form.value.username);
    console.log(form.value.password);

    this.newInOrderUser = new InOrderUser (
      form.value.firstname,
      form.value.lastname,
      form.value.username,
      form.value.password
    )

    console.log(this.newInOrderUser);
    
    this.addInOrderUser(this.newInOrderUser);
  }

  addInOrderUser(newInOrderUser: InOrderUser) {
    console.log("Add In Order User Run");
    console.log(newInOrderUser)
    console.log(newInOrderUser.firstname);
    console.log(newInOrderUser.lastname);
    console.log(newInOrderUser.username);
    console.log(newInOrderUser.password);
    this.inOrderUserService.addInOrderUser(newInOrderUser);
    this.dismissModal();
    this.showConfirmation();
  }

  async showConfirmation() {
    const info = await this.alertController.create({
      header: 'Success',
      message: 'User successfully created!',
      buttons: ['Okay']
    });
    await info.present();
  }

}
