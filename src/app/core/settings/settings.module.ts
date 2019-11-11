import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './settings.component';
import { FreqaskedquestionsComponent } from 'src/app/modal/settings/freqaskedquestions/freqaskedquestions.component';
import { FreqAskedQuestionsModule } from 'src/app/modal/settings/freqaskedquestions/freqaskedquestions.module';
import { AboutusComponent } from 'src/app/modal/settings/aboutus/aboutus.component';
import { AboutUsModule } from 'src/app/modal/settings/aboutus/aboutus.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    FreqAskedQuestionsModule,
    AboutUsModule
  ],
  declarations: [
    SettingsComponent
  ],
  exports: [
    SettingsComponent
],
  entryComponents: [
    FreqaskedquestionsComponent,
    AboutusComponent
  ],
})
export class SettingsModule {}
