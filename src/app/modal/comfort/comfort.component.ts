import { Component } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { BehaviorComponent } from '../behavior/behavior.component';
import { EnvironmentComponent } from '../environment/environment.component';
import { ModalServiceService } from 'src/app/service/modal/modalservice.service';

@Component({
  selector: 'app-comfort',
  templateUrl: './comfort.component.html',
  styleUrls: ['./comfort.component.scss'],
})
export class ComfortComponent {

  comfort: String;
  comfortselected: boolean = false;

  constructor(private modalController: ModalController, 
    private navParams: NavParams,
    private alertController: AlertController,
    private modalService: ModalServiceService) { }

  dismissModal() {
    this.modalController.dismiss();
  }

  public form = [
    { value: 'inside comfort zone'},
    { value: 'slightly outside comfort zone'},
    { value: 'too far outside comfort zone'}
  ]


  select0() {
    this.comfort = this.form[0].value;
    this.comfortselected = true;
    console.log(this.comfort);
    this.nextModal();
  }

  select1() {
    this.comfort = this.form[1].value;
    this.comfortselected = true;
    console.log(this.comfort);
    this.nextModal();
  }

  select2() {
    this.comfort = this.form[2].value;
    this.comfortselected = true;
    console.log(this.comfort);
    this.nextModal();
  }

  nextModal() {
    this.modalService.setComfort(this.comfort);
    this.dismissModal();
    this.showBehaviorModal();
  }

  previousModal() {
    this.dismissModal();
    this.showEnvironmentModal();
  }

  async showBehaviorModal() {
    const modal = await this.modalController.create({
        component: BehaviorComponent
    });
    return await modal.present();
  }

  async showEnvironmentModal() {
    const modal = await this.modalController.create({
        component: EnvironmentComponent
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
