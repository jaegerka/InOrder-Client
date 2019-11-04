import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SimpleComponent } from 'src/app/modal/tools/depression/simple/simple.component';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  async showDSimple() {
    const modal = await this.modalController.create({
        component: SimpleComponent
    });
    return await modal.present();
  }


}
