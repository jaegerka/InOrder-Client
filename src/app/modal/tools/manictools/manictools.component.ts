import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToolsserviceService } from 'src/app/service/tools/toolsservice.service';

@Component({
  selector: 'app-manictools',
  templateUrl: './manictools.component.html',
  styleUrls: ['./manictools.component.scss'],
})
export class ManictoolsComponent implements OnInit {

  selected = [];
  select: String;

  simpletools = [
    { value: 'Go on a walk' },
    { value: 'Spend time with friends' },
    { value: 'Meditate for 10 minutes' },
    { value: 'Drink a coffee' },
    { value: 'Take an exercise class' },
  ]

  strongertools = [
    { value: 'Take time off work' },
    { value: 'Vigorous physical exercise' },
    { value: 'Medicine' },
    { value: 'Group therapy' },
    { value: 'Avoid stimulants' },
    { value: 'Drin strong calming herbal tea' },
    { value: 'Individual therapy' },
    { value: 'Call a doctor' },
    { value: 'Seek professional advice' },
    { value: 'Seek spiritual counselor' },
    { value: 'Call confidential hotline' },
    { value: 'Get extra sleep' },
    { value: 'Long meditation' },
  ]

  extremetools = [
    { value: 'Consult doctor about medication changes' },
    { value: 'Go to a hospital' },
    { value: 'Day program' },
    { value: 'Go on a vacation' },
    { value: 'Consider a career switch' },
    { value: 'Find a new job' },
    { value: 'Go on a business retreat' },
    { value: 'Go on a spiritual retreat' },
    { value: 'Go on a creative retreat' },
    { value: 'End a relationship' },
    { value: 'Start a relationship' },
    { value: 'Find specific professional support' },
  ]

  constructor (
    private modalController: ModalController,
    private toolsService: ToolsserviceService) { }

  ngOnInit() {
    this.toolsService.selectbs.subscribe((data) => {
      console.log(data);
      this.setSelected(data);
    })
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  setSelected(select: String) {
    this.select = select;
    if (select == 'Simple') {
      this.selected = this.simpletools;
    } else if (select == 'Stronger') {
      this.selected = this.strongertools;
    } else {
      this.selected = this.extremetools;
    }
    
  }
}
