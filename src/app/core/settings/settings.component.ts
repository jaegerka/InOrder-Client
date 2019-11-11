import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FreqaskedquestionsComponent } from 'src/app/modal/settings/freqaskedquestions/freqaskedquestions.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  showFAQs() {
    this.showFAQmodal();
  }

  async showFAQmodal() {
    const modal = await this.modalController.create({
      component: FreqaskedquestionsComponent
    })
    return await modal.present();
  }
}
