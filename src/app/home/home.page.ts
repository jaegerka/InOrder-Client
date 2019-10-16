import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { StateComponent } from '../modal/state/state.component'
import { StateserviceService } from '../service/state/stateservice.service';
import { NavbarComponent } from '../navbar/navbar.component'
import { NavbarService } from '../service/navbar/navbar.service';
import { Currentstate } from '../model/currentstate';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  profilePage: boolean = false;
  page: any;
  graphview: boolean = true;
  tableview: boolean = false;

  currentStates: any = [];
  firstDP: any;

  depressedPercentages: any = [];
  manicPercentages: any = [];

  constructor(public modalController: ModalController, 
    public navController: NavController,
    private stateService: StateserviceService,
    private navbarService: NavbarService) {

    }

  
  ngOnInit() {
    // this.presentModal();
    this.getAllCurrentStates();
  }

  getAllCurrentStates() {
    this.stateService.getAllStates()
      .subscribe((data) => {
      console.log(data);
      for (let currentstate of data) {
        this.currentStates.push(currentstate);
        this.depressedPercentages.push(currentstate.depressedpercentage);
        this.manicPercentages.push(currentstate.manicpercentage);
        console.log(this.depressedPercentages);
        console.log(this.manicPercentages);
      }
      (error) => console.log(error)
    });
  }

  switchView() {
    if (this.graphview == true) {
      this.graphview = false;
      this.tableview = true;
    } else {
      this.graphview = true;
      this.tableview = false;
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
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
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
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
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
