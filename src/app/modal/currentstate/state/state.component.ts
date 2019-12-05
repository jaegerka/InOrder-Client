import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { EnvironmentComponent } from '../environment/environment.component'
import { ModalServiceService } from 'src/app/service/modal/modalservice.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent {

  manicpercentage: any;
  depressedpercentage: any;

  constructor(
    private modalController: ModalController, 
    private alertController: AlertController,
    private modalService: ModalServiceService) { 

    }

  //Closes modal
  dismissModal() {
    this.modalController.dismiss();
  }

  //Called when submit button is pressed
  submitRating(form: NgForm) {
    //Log submitted values in the console
    console.log(form.value)

    //Set manic and depressed percentages to form response values
    this.manicpercentage = form.value.manicrating;
    this.depressedpercentage = form.value.depressedrating;

    //Set manic and/or depressed percentages to zero if no response
    if (form.value.manicrating == undefined) {
      this.manicpercentage = 0;
    }
    if (form.value.depressedrating == undefined) {
      this.depressedpercentage = 0;
    }

    //Log local manic and depressed percentages in the console
    console.log("Manic percentage in state component: " + this.manicpercentage);
    console.log("Depressed percentage in state component: " + this.depressedpercentage);

    //Send manic and depressed percentages to service
    this.modalService.setManicPercentage(this.manicpercentage);
    this.modalService.setDepressedPercentage(this.depressedpercentage);

    //Show next modal (environment modal)
    this.nextModal();
  }

  //Called at the end of submit function
  nextModal() {
    //Closes modal
    this.dismissModal();

    //Causes next modal to appear
    this.showEnvironmentModal();
  }

  //Shows environment modal
  async showEnvironmentModal() {
    const modal = await this.modalController.create({
        component: EnvironmentComponent,
    });
    return await modal.present();
  }

  //Shows information on how to select current state
  async showInfo() {
    const info = await this.alertController.create({
      header: 'How do I choose?',
      message: 'Use the scales to describe your percentage of mania and depression. <br> <br> If at 0%, leave the scale blank.',
      buttons: ['Okay']
    });
    await info.present();
  }

  

}
