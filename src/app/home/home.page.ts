import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { StateComponent } from '../modal/state/state.component'



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController, public navController: NavController) {}

  ngOnInit() {
    this.presentModal();
  }

    async presentModal() {
    const modal = await this.modalController.create({
        component: StateComponent,
        componentProps: {
          myParameter: true
        }
    });
    return await modal.present();
  }


}
