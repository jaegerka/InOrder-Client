import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-initialsetup',
  templateUrl: './initialsetup.component.html',
  styleUrls: ['./initialsetup.component.scss'],
})
export class InitialsetupComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

}
