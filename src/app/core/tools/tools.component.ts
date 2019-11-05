import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToolsserviceService } from 'src/app/service/tools/toolsservice.service';
import { DepressionComponent } from 'src/app/modal/tools/depressiontools/depressiontools.component';
import { ManictoolsComponent } from 'src/app/modal/tools/manictools/manictools.component';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    private toolsService: ToolsserviceService
  ) { }

  ngOnInit() {}

  async showDepressionModal() {
    const modal = await this.modalController.create({
        component: DepressionComponent
    });
    return await modal.present();
  }

  async showManicModal() {
    const modal = await this.modalController.create({
        component: ManictoolsComponent
    });
    return await modal.present();
  }

  selectDepression(select: String) {
    this.toolsService.setDepression(select);
    this.showDepressionModal();
  }

  selectManic(select: String) {
    this.toolsService.selectManic(select);
    this.showManicModal();
  }


}
