import { NgModule } from "@angular/core";
import { DailyremindersComponent } from './dailyreminders.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [],
    declarations: [
        DailyremindersComponent
    ],
    entryComponents: [],
})

export class DailyRemindersModule {}