import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalServiceService } from 'src/app/service/modal/modalservice.service';

@Component({
  selector: 'app-outsidecomfortzone',
  templateUrl: './outsidecomfortzone.component.html',
  styleUrls: ['./outsidecomfortzone.component.scss'],
})
export class OutsidecomfortzoneComponent implements OnInit {

  comfort: any;
  slightly: boolean = false;
  toofar: boolean = false;

  constructor(
    private modalController: ModalController,
    private modalService: ModalServiceService
  ) { }

  ngOnInit() {
    this.modalService.comfortbs.subscribe((data) => {
      console.log(data);
      this.comfort = data; 
    })

    if (this.comfort == "Slightly outside comfort zone") {
      this.slightly = true;
      this.toofar = false;
      console.log("Slightly " + this.slightly)
    } else {
      this.toofar = true;
      this.slightly = false;
      console.log("Too far " + this.toofar)
    }
    console.log(this.comfort);
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
