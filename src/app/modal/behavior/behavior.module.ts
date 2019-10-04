import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';
import { IonicRatingModule } from 'ionic4-rating';
import { BehaviorComponent } from '../behavior/behavior.component';
import { SummaryComponent } from '../summary/summary.component';
import { SummaryModule } from '../summary/summary.module';


@NgModule({
    declarations: [
        BehaviorComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BarRatingModule,
        IonicRatingModule,
        SummaryModule
    ],
    entryComponents: [
        BehaviorComponent,
        SummaryComponent
    ]
})

export class BehaviorModule {}