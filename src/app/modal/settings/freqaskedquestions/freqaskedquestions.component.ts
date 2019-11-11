import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-freqaskedquestions',
  templateUrl: './freqaskedquestions.component.html',
  styleUrls: ['./freqaskedquestions.component.scss'],
})
export class FreqaskedquestionsComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  FAQs = [
    { question: 'What is this app for?' },
    { question: 'How will I know if this app is working for me?' },
    { question: 'Will you keep track of my data?' },
    { question: 'Is this app anonymous?' },
    { question: 'Do you offer any online support?' },
    { question: 'How do I participate?' },
  ]

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }
}
