import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, Platform } from '@ionic/angular';
import { ToolsserviceService } from 'src/app/service/tools/toolsservice.service';
import { Tool, StorageService } from 'src/app/service/storage/storage.service';

@Component({
  selector: 'app-depressiontools',
  templateUrl: './depressiontools.component.html',
  styleUrls: ['./depressiontools.component.scss'],
})
export class DepressionComponent implements OnInit {

  name = "star-outline";
  selected = [];
  select: String;

  tools: Tool[] = [];

  newTool: Tool = <Tool>{};

  showFavorites: boolean = true;

  simpletools = [
    { value: 'Go on a walk', favorite: false},
    { value: 'Spend time with friends', favorite: false },
    { value: 'Meditate for 10 minutes', favorite: false },
    { value: 'Drink a coffee', favorite: false },
    { value: 'Take an exercise class', favorite: false },
  ]

  strongertools = [
    { value: 'Take time off work' },
    { value: 'Drink an energy drink' },
    { value: 'Medicine' },
    { value: 'Extra coffee' },
    { value: 'Stronger herbal tea' },
    { value: 'Group therapy' },
    { value: 'Individual therapy' },
    { value: 'Call a doctor' },
    { value: 'Seek professional advice' },
    { value: 'Seek spiritual counselor' },
    { value: 'Call confidential hotline' },
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

  constructor(
    private modalController: ModalController,
    private toolsService: ToolsserviceService,
    private storageService: StorageService,
    private toastController: ToastController,
    private platform: Platform) {
    }

  ngOnInit() {
    this.toolsService.selectbs.subscribe((data) => {
      console.log(data);
      this.select = data;
      console.log(this.select);
      this.setSelected(data);
    })
    this.loadTools();
    console.log(this.tools.length)
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

  toggleFavorites() {
    if (this.showFavorites == true) {
      this.showFavorites = false;
    } else {
      this.showFavorites = true;
    }
  }

  loadTools() {
    console.log(this.select)
    if (this.select == 'Simple') {
      this.storageService.getSimpleDepressionTools()
      .then(tools => {
        console.log(tools);
        this.tools = tools;
      })
    } else if (this.select == 'Stronger') {
      this.storageService.getStrongerDepressionTools()
      .then(tools => {
        console.log(tools);
        this.tools = tools;
      })
    } else {
      this.storageService.getExtremeDepressionTools()
      .then(tools => {
        console.log(tools);
        this.tools = tools;
      })
    }
  }

  addTool(value: any) {
    console.log(this.select)
    console.log(value);

    if (this.newTool.title == undefined) {
      this.newTool.title = value;
    }
    this.newTool.modified = Date.now();
    this.newTool.id = Date.now();

    if (this.select == 'Simple') {
      this.storageService.addSimpleDepressionTool(this.newTool)
      .then(tool => {
        console.log(tool);
        this.newTool = <Tool>{};
        this.showToast('New simple tool added!');
        this.loadTools();
      })
    } else if (this.select == 'Stronger') {
      this.storageService.addStrongerDepressionTool(this.newTool)
      .then(tool => {
        console.log(tool);
        this.newTool = <Tool>{};
        this.showToast('New stronger tool added!');
        this.loadTools();
      })
    } else {
      this.storageService.addExtremeDepressionTool(this.newTool)
      .then(tool => {
        console.log(tool);
        this.newTool = <Tool>{};
        this.showToast('New extreme tool added!');
        this.loadTools();
      })
    }
    
  }

  deleteTool(tool: Tool) {
    console.log(this.select);
    if (this.select == 'Simple') {
      console.log("Deleted Simple Tool");
      this.storageService.deleteSimpleDepressionTool(tool.id)
      .then(tool => {
        this.showToast('Tool removed from Favorites');
        this.loadTools();
      })
    } else if (this.select == 'Stronger') {
      console.log("Deleted Stronger Tool");
      this.storageService.deleteStrongerDepressionTool(tool.id)
      .then(tool => {
        this.showToast('Tool removed from Favorites');
        this.loadTools();
      })
    } else {
      console.log("Deleted Extreme Tool");
      this.storageService.deleteExtremeDepressionTool(tool.id)
      .then(tool => {
        this.showToast('Tool removed from Favorites');
        this.loadTools();
      })
    }
   
  } 

  async showToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    })
    toast.present();
  }

  addToFavorites(value: any) {
    console.log(value.value);
    for (var tool of this.simpletools) {
      if (value.value == tool.value)
        console.log(tool);
        tool.favorite = true;
        break;
    }
  }
}
