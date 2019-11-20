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

  scale: boolean = false;
  state: String;
  selected: boolean = false;
  manicpercentage: any;
  depressedpercentage: any;
  ratingsubmitted: boolean = false;

  constructor(private modalController: ModalController, 
    private navParams: NavParams,
    private alertController: AlertController,
    private modalService: ModalServiceService,
    private nativeStorage: NativeStorage) { }

  dismissModal() {
    this.modalController.dismiss();
  }

  submitRating(form: NgForm) {
    console.log(form.value)
    this.manicpercentage = form.value.manicrating;
    this.depressedpercentage = form.value.depressedrating;
    if (form.value.manicrating == undefined) {
      this.manicpercentage = 0;
    }
    if (form.value.depressedrating == undefined) {
      this.depressedpercentage = 0;
    }
    console.log(this.manicpercentage);
    console.log(this.depressedpercentage);
    this.modalService.setManicPercentage(this.manicpercentage);
    this.modalService.setDepressedPercentage(this.depressedpercentage);
    this.ratingsubmitted = true;
    this.nextModal();
  }

  backToState() {
    this.selected = false;
    this.ratingsubmitted = false;
  }

  nextModal() {
    this.dismissModal();
    this.showEnvironmentModal();
  }

  async showEnvironmentModal() {
    const modal = await this.modalController.create({
        component: EnvironmentComponent,
        componentProps: {
          myParameter: true
        }
    });
    return await modal.present();
  }

  async showInfo() {
    const info = await this.alertController.create({
      header: 'How do I choose?',
      message: 'Use the scales to describe your percentage of mania and depression. <br> <br> If at 0%, leave the scale blank.',
      buttons: ['Okay']
    });
    await info.present();
  }

  

}
