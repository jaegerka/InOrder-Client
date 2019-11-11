import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StateComponent } from '../modal/currentstate/state/state.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

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
