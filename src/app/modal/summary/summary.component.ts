import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from 'src/app/service/modal/modalservice.service';
import { modalController } from '@ionic/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {

  manicpercentage: any;
  depressedpercentage: any;
  environment: any;
  behavior: any;
  comfort: any;

  constructor(private modalService: ModalServiceService,
    private alertController: AlertController) { }

  ngOnInit() {
    this.modalService.manicpercentagebs.subscribe((data) => {
      console.log(data);
      this.manicpercentage = data; 
    })

    this.modalService.depressedpercentagebs.subscribe((dpbs) => {
      console.log(dpbs);
      this.depressedpercentage = dpbs; 
    })

    this.modalService.environmentbs.subscribe((data) => {
      console.log(data);
      this.environment = data; 
    })

    this.modalService.behaviorbs.subscribe((data) => {
      console.log(data);
      this.behavior = data; 
    })

    this.modalService.comfortbs.subscribe((data) => {
      console.log(data);
      this.comfort = data; 
    })
  }

  submitCurrentState() {
    modalController.dismiss();
    this.showConfirmation();
  }

  async showConfirmation() {
    const info = await this.alertController.create({
      header: 'Success',
      message: 'Your current state has been successfully recorded',
      buttons: ['Okay']
    });
    await info.present();
  }



}
