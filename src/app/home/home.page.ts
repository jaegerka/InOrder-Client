import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { StateComponent } from '../modal/currentstate/state/state.component'
import { StateserviceService } from '../service/state/stateservice.service';
import { NavbarService } from '../service/navbar/navbar.service';
import { Currentstate } from '../model/currentstate/currentstate';
import { StorageService } from '../service/storage/storage.service';
import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  
  graphView: boolean = true;
  tableView: boolean = false;
  currentStates: any = [];
  depressedPercentages: any = [];
  manicPercentages: any = [];
  currentStateDates: any = [];

  constructor(public modalController: ModalController, 
    public navController: NavController,
    private stateService: StateserviceService,
    private navbarService: NavbarService,
    private storageService: StorageService,
    public datepipe: DatePipe) {

    }

  ngOnInit() {
    this.getAllCurrentStates();
  }

  getAllCurrentStates() {
    this.storageService.getCurrentStates()
      .then(currentStates => {
        console.log(currentStates);
        this.currentStates = currentStates;
        for (let currentState of currentStates) {
          console.log(currentState.depressedpercentage)
          this.depressedPercentages.push(currentState.depressedpercentage)
          console.log(currentState.manicpercentage)
          this.manicPercentages.push(currentState.manicpercentage)
          console.log(this.datepipe.transform(currentState.date, 'MM-dd-yy'))
          this.currentStateDates.push(this.datepipe.transform(currentState.date, 'MM-dd-yy'))
        }
      })
  }

  switchView() {
    if (this.graphView == true) {
      this.graphView = false;
      this.tableView = true;
    } else {
      this.graphView = true;
      this.tableView = false;
    }
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

  //Line Chart Information
  public lineChartData:Array<any> = [
    {data: this.depressedPercentages, label: 'Depressed'},
    {data: this.manicPercentages, label: 'Manic'},
  ];
  public lineChartLabels:Array<any> = this.currentStateDates;
  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public lineChartColors:Array<any> = [
    { // blue
      backgroundColor: 'rgba(148,159,177,0.0)',
      borderColor: '#7eaed3',
      pointBackgroundColor: '#7eaed3',
      pointBorderColor: '#7eaed3',
      pointHoverBackgroundColor: '#7eaed3',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // mustard
      backgroundColor: 'rgba(77,83,96,0.0)',
      borderColor: '#e1ad01',
      pointBackgroundColor: '#e1ad01',
      pointBorderColor: '#e1ad01',
      pointHoverBackgroundColor: '#e1ad01',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];
  
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.currentStates.length)
    // (this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }

}
