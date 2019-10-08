import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { StateComponent } from '../modal/state/state.component'
import { StateserviceService } from '../service/stateservice.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  width = 600;
  height = 400;
  type = "msspline";
  dataFormat = "json";
  dataSource = {
    chart: {
      caption: "Your Past Episode States",
      yaxisname: "%",
      // subcaption: "Last week",
      numdivlines: "10",
      showvalues: "0",
      legenditemfontsize: "15",
      legenditemfontbold: "1",
      plottooltext: "<b>$dataValue</b> % $seriesName on $label",
      theme: "gammel"
    },
    categories: [
      {
        category: [
          {
            label: "Jan 1"
          },
          {
            label: "Feb 22"
          },
          {
            label: "Mar 10"
          },
          {
            label: "Apr 18"
          },
          {
            label: "May 21"
          },
          {
            label: "June 3"
          },
          {
            label: "July 8"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "Depressed",
        data: [
          {
            value: "80"
          },
          {
            value: "40"
          },
          {
            value: "70"
          },
          {
            value: "30"
          },
          {
            value: "20"
          },
          {
            value: "20"
          },
          {
            value: "30"
          }
        ]
      },
      {
        seriesname: "Manic",
        data: [
          {
            value: "50"
          },
          {
            value: "30"
          },
          {
            value: "30"
          },
          {
            value: "20"
          },
          {
            value: "30"
          },
          {
            value: "20"
          },
          {
            value: "20"
          }
        ]
      }
    ]
  };

  constructor(public modalController: ModalController, 
    public navController: NavController,
    private stateService: StateserviceService) {

    }

    

  ngOnInit() {
    this.presentModal();
    this.stateService.getAllStates();
  }

    async presentModal() {
    const modal = await this.modalController.create({
        component: StateComponent,
        componentProps: {
          myParameter: true
        }
    });
    return await modal.present();
  }

  

}
