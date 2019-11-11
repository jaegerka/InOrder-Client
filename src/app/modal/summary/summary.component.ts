import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from 'src/app/service/modal/modalservice.service';
import { modalController } from '@ionic/core';
import { AlertController, ModalController } from '@ionic/angular';
import { BehaviorComponent } from '../behavior/behavior.component';
import { StateComponent } from '../state/state.component';
import { EnvironmentComponent } from '../environment/environment.component';
import { ComfortComponent } from '../comfort/comfort.component';
import { AdviceComponent } from '../advice/advice.component';
import { ToolsserviceService } from 'src/app/service/tools/toolsservice.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

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
  depression: String;
  manic: String;

  constructor(private modalService: ModalServiceService,
    private toolsService: ToolsserviceService,
    private modalController: ModalController,
    private nativeStorage: NativeStorage) { }

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
    if (this.depressedpercentage <= 4) {
      this.depression = 'Simple';
    }
    else if (this.depressedpercentage >= 5 && this.depressedpercentage <= 8) {
      this.depression = 'Stronger';
    } else {
      this.depression = 'Extreme';
    }

    if (this.manicpercentage <= 4) {
      this.manic = 'Simple';
    }
    else if (this.manicpercentage >= 5 && this.manicpercentage <= 8) {
      this.manic = 'Stronger';
    } else {
      this.manic = 'Extreme';
    }

    this.setCurrentState();
    this.getCurrentState();
    this.toolsService.setAdvice(this.depression, this.manic);
    this.showAdviceModal();
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  previousModal() {
    this.dismissModal();
    this.showBehaviorModal();
  }

  async showBehaviorModal() {
    const modal = await this.modalController.create({
        component: BehaviorComponent
    });
    return await modal.present();
  }

  async backToState() {
    const modal = await this.modalController.create({
        component: StateComponent
    });
    return await modal.present();
  }

  async backToEnvironment() {
    const modal = await this.modalController.create({
        component: EnvironmentComponent
    });
    return await modal.present();
  }

  async backToComfort() {
    const modal = await this.modalController.create({
        component: ComfortComponent
    });
    return await modal.present();
  }

  async showAdviceModal() {
    const modal = await this.modalController.create({
        component: AdviceComponent
    });
    return await modal.present();
  }

  async setCurrentState() {
    this.nativeStorage.setItem('currentState1',
    { 
      manicpercentage: this.manicpercentage,
      depressedpercentage: this.depressedpercentage,
      environment: this.environment,
      behavior: this.behavior,
      comfort: this.comfort,
    })
    .then(
      (data) => console.log('Stored current state:', data),
      error => console.error('Error storing current state:', error)
    )
  }

  async getCurrentState() {
    this.nativeStorage.getItem('currentState1')
      .then(
        data => console.log(data),
        error => console.error(error)
      )
  }

}
