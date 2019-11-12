import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './settings.component';
import { FreqaskedquestionsComponent } from 'src/app/modal/settings/freqaskedquestions/freqaskedquestions.component';
import { FreqAskedQuestionsModule } from 'src/app/modal/settings/freqaskedquestions/freqaskedquestions.module';
import { AboutusComponent } from 'src/app/modal/settings/aboutus/aboutus.component';
import { AboutUsModule } from 'src/app/modal/settings/aboutus/aboutus.module';
import { DailyRemindersModule } from 'src/app/modal/settings/dailyreminders/dailyreminders.module';
import { DailyremindersComponent } from 'src/app/modal/settings/dailyreminders/dailyreminders.component';
import { MytoolsComponent } from 'src/app/modal/settings/mytools/mytools.component';
import { MyToolsModule } from 'src/app/modal/settings/mytools/mytools.module';
import { AccountingForTimeModule } from 'src/app/modal/settings/accountingfortime/accountingfortime.module';
import { AccountingfortimeComponent } from 'src/app/modal/settings/accountingfortime/accountingfortime.component';
import { InitialsetupComponent } from 'src/app/modal/settings/initialsetup/initialsetup.component';
import { InitialSetUpModule } from 'src/app/modal/settings/initialsetup/initialsetup.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    FreqAskedQuestionsModule,
    AboutUsModule,
    DailyRemindersModule,
    MyToolsModule,
    AccountingForTimeModule,
    InitialSetUpModule
  ],
  declarations: [
    SettingsComponent
  ],
  exports: [
    SettingsComponent
],
  entryComponents: [
    FreqaskedquestionsComponent,
    AboutusComponent,
    DailyremindersComponent,
    MytoolsComponent,
    AccountingfortimeComponent,
    InitialsetupComponent
  ],
})
export class SettingsModule {}
