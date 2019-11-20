import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToolsserviceService } from 'src/app/service/tools/toolsservice.service';
import { DepressionComponent } from '../../tools/depressiontools/depressiontools.component';
import { ManictoolsComponent } from '../../tools/manictools/manictools.component';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss'],
})
export class AdviceComponent implements OnInit {
  
  depressed: any;
  manic: any;

  depressedButton: String;
  manicButton: String;
  
  constructor(
    private modalController: ModalController,
    private toolsService: ToolsserviceService) { }

  ngOnInit() {
    this.toolsService.depressedbs.subscribe((data) => {
      console.log(data);
      if (data == 'None') {
        console.log("No depression")
      } else {
      this.setDepressedAdvice(data);
      }
    })
    this.toolsService.manicbs.subscribe((data) => {
      console.log(data);
      if (data == 'None') {
        console.log("No mania")
      } else {
      this.setManicAdvice(data);
      }
    })
  }

  dismissModal() {
    this.modalController.dismiss();
    window.location.reload();
  }

  setDepressedAdvice(depressed: String) {
    this.depressed = depressed;
    console.log(this.depressedButton);
  }

    setManicAdvice(manic: String) {
      this.manic = manic;
      console.log(this.manicButton);
  }

  takeToDepressedTools() {
    console.log(this.depressed);
    this.toolsService.setDepression(this.depressed);
    this.showDepressionModal();
  }

  takeToManicTools() {
    console.log(this.manic);
    this.toolsService.selectManic(this.manic);
    this.showManicModal();
  }

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

}
