import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StateModule } from '../state/state.module';
import { FusionChartsModule } from 'angular-fusioncharts';
import { Chart } from 'chart.js';

import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StateModule,
    FormsModule,
    ReactiveFormsModule,
    FusionChartsModule,
  ],
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
],
})
export class ProfileModule {}
