import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dailyreminders',
  templateUrl: './dailyreminders.component.html',
  styleUrls: ['./dailyreminders.component.scss'],
})
export class DailyremindersComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }
}
