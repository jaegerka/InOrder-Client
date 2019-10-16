import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { StateModule } from '../modal/state/state.module';
import { FusionChartsModule } from 'angular-fusioncharts';
import { Chart } from 'chart.js';

import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarModule } from '../navbar/navbar.module';

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
    NavbarModule,
    ChartsModule,
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
    NavbarComponent,
    HomePage
],
})
export class HomePageModule {}
