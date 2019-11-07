import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToolsserviceService } from 'src/app/service/tools/toolsservice.service';
import { DepressionComponent } from '../tools/depressiontools/depressiontools.component';
import { ManictoolsComponent } from '../tools/manictools/manictools.component';

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
      this.setDepressedAdvice(data);
    })
    this.toolsService.manicbs.subscribe((data) => {
      console.log(data);
      this.setManicAdvice(data);
    })
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  setDepressedAdvice(depressed: String) {
    this.depressed = depressed;
    // if (depressed == 'Simple') {
    //   this.depressedButton = depressed;
    // } else if (depressed == 'Stronger') {
    //   this.depressedButton = depressed;
    // } else {
    //   this.depressedButton = depressed;
    // }
    console.log(this.depressedButton);
  }

    setManicAdvice(manic: String) {
      this.manic = manic;
      // if (manic == 'Simple') {
      //  this.manicButton = manic;
      // } else if (manic == 'Stronger') {
      //  this.manicButton = manic;
      // } else {
      //  this.manicButton = manic;
      // }
      console.log(this.manicButton);
    
  }

  takeToDepressedTools() {
    console.log(this.depressed);
    this.toolsService.setDepression(this.depressed);
    this.showDepressionModal();
    // this.dismissModal();
  }

  takeToManicTools() {
    console.log(this.manic);
    this.toolsService.selectManic(this.manic);
    this.showManicModal();
    // this.dismissModal();
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
