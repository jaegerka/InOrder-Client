import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss'],
})
export class AdviceComponent implements OnInit {

  depressed = [
    { value: 'Go on a walk' },
    { value: 'Take a hot shower' },
    { value: 'Write a list of things to focus on' },
  ]
  
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }
}
