import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './settings.component';
import { FreqaskedquestionsComponent } from 'src/app/modal/settings/freqaskedquestions/freqaskedquestions.component';
import { FreqAskedQuestionsModule } from 'src/app/modal/settings/freqaskedquestions/freqaskedquestions.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    FreqAskedQuestionsModule
  ],
  declarations: [
    SettingsComponent
  ],
  exports: [
    SettingsComponent
],
  entryComponents: [
    FreqaskedquestionsComponent
  ],
})
export class SettingsModule {}
