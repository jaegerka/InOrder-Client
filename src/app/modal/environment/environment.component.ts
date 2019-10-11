import { Component } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { ComfortComponent } from '../comfort/comfort.component'
import { StateComponent } from '../state/state.component';
import { ModalServiceService } from 'src/app/service/modal/modalservice.service';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss'],
})
export class EnvironmentComponent {

  environmentselected: boolean = false;
  environment: any;

  constructor(private modalController: ModalController, 
    private navParams: NavParams,
    private alertController: AlertController,
    private modalService: ModalServiceService) { }

  dismissModal() {
    this.modalController.dismiss();
  }

  public form = [
    { value: 'safe'},
    { value: 'triggering'},
    { value: 'toxic'}
  ]


  select0() {
    this.environment = this.form[0].value;
    this.environmentselected = true;
    console.log(this.environment);
    this.nextModal();
  }

  select1() {
    this.environment = this.form[1].value;
    this.environmentselected = true;
    console.log(this.environment);
    this.nextModal();
  }

  select2() {
    this.environment = this.form[2].value;
    this.environmentselected = true;
    console.log(this.environment);
    this.nextModal();
  }

  nextModal() {
    this.modalService.setEnvironment(this.environment);
    this.dismissModal();
    this.showComfortModal();
  }

  previousModal() {
    this.dismissModal();
    this.showStateModal();
  }

  async showComfortModal() {
    const modal = await this.modalController.create({
        component: ComfortComponent
    });
    return await modal.present();
  }

  async showStateModal() {
    const modal = await this.modalController.create({
        component: StateComponent
    });
    return await modal.present();
  }

  async showInfo() {
    const info = await this.alertController.create({
      header: 'How do I choose?',
      message: 'Here is the info to choose.',
      buttons: ['Okay']
    });
    await info.present();
  }


}
