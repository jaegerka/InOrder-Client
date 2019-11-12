import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-accountingfortime',
  templateUrl: './accountingfortime.component.html',
  styleUrls: ['./accountingfortime.component.scss'],
})
export class AccountingfortimeComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }
}
