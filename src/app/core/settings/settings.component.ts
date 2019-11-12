import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FreqaskedquestionsComponent } from 'src/app/modal/settings/freqaskedquestions/freqaskedquestions.component';
import { AboutusComponent } from 'src/app/modal/settings/aboutus/aboutus.component';
import { DailyremindersComponent } from 'src/app/modal/settings/dailyreminders/dailyreminders.component';
import { MytoolsComponent } from 'src/app/modal/settings/mytools/mytools.component';

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

  async showAboutUs() {
    const modal = await this.modalController.create({
      component: AboutusComponent
    })
    return await modal.present();
  }

  async showDailyReminders() {
    const modal = await this.modalController.create({
      component: DailyremindersComponent
    })
    return await modal.present();
  }

  async showMyTools() {
    const modal = await this.modalController.create({
      component: MytoolsComponent
    })
    return await modal.present();
  }
  
}
