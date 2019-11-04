import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
})
export class SimpleComponent implements OnInit {

  options = [
    { value: 'Go on a walk' },
    { value: 'Spend time with friends' },
    { value: 'Meditate for 10 minutes' },
    { value: 'Drink a coffee' },
    { value: 'Take an exercise class' },
  ]

  constructor(
    private modalController: ModalController) { }

  ngOnInit() {
    
  }

  
  dismissModal() {
    this.modalController.dismiss();
  }


}
