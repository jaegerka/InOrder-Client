import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { StateModule } from '../modal/currentstate/state/state.module';
import { FusionChartsModule } from 'angular-fusioncharts';
import { Chart } from 'chart.js';

import { ChartsModule } from 'ng2-charts';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StateModule,
    FormsModule,
    ReactiveFormsModule,
    FusionChartsModule,
    ChartsModule,
    StateModule,
    NavbarModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage
  ],
  exports: [
    HomePage
],
  providers: [DatePipe],
})
export class HomePageModule {}
