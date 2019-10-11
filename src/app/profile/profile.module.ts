import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StateModule } from '../modal/state/state.module';
import { FusionChartsModule } from 'angular-fusioncharts';
import { Chart } from 'chart.js';

import { ProfileComponent } from '../profile/profile.component';
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
    NavbarModule,
  ],
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
],
})
export class ProfileModule {}
