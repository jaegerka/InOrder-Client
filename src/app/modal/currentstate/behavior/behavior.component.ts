import { Component } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { SummaryComponent } from '../summary/summary.component';
import { ComfortComponent } from '../comfort/comfort.component';
import { ModalServiceService } from 'src/app/service/modal/modalservice.service';

@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.scss'],
})
export class BehaviorComponent {

  behavior: String;
  behaviorselected: boolean = false;

  constructor(private modalController: ModalController, 
    private navParams: NavParams,
    private alertController: AlertController,
    private modalService: ModalServiceService) { }

  dismissModal() {
    this.modalController.dismiss();
  }

  public form = [
    { value: 'In Order'},
    { value: 'Dis-ordered'},
    { value: 'Out of Control'}
  ]


  select0() {
    this.behavior = this.form[0].value;
    this.behaviorselected = true;
    console.log(this.behavior);
    this.nextModal();
  }

  select1() {
    this.behavior = this.form[1].value;
    this.behaviorselected = true;
    console.log(this.behavior);
    this.nextModal();
  }

  select2() {
    this.behavior = this.form[2].value;
    this.behaviorselected = true;
    console.log(this.behavior);
    this.nextModal();
  }

  nextModal() {
    this.modalService.setBehavior(this.behavior);
    this.dismissModal();
    this.showSummaryModal();
  }

  async showSummaryModal() {
    const modal = await this.modalController.create({
        component: SummaryComponent
    });
    return await modal.present();
  }

  previousModal() {
    this.dismissModal();
    this.showComfortModal();
  }

  async showComfortModal() {
    const modal = await this.modalController.create({
        component: ComfortComponent
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
