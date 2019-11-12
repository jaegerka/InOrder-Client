import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mytools',
  templateUrl: './mytools.component.html',
  styleUrls: ['./mytools.component.scss'],
})
export class MytoolsComponent implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }
}
