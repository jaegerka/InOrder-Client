import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { StateModule } from '../modal/state/state.module';
import { FusionChartsModule } from 'angular-fusioncharts';
import { Chart } from 'chart.js';

import { ChartsModule } from 'ng2-charts';


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
})
export class HomePageModule {}
