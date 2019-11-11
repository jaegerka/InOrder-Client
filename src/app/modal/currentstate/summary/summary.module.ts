import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';
import { IonicRatingModule } from 'ionic4-rating';
import { SummaryComponent } from './summary.component';
import { AdviceComponent } from '../advice/advice.component';
import { AdviceModule } from '../advice/advice.module';


@NgModule({
    declarations: [
        SummaryComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BarRatingModule,
        IonicRatingModule,
        AdviceModule
    ],
    entryComponents: [
        SummaryComponent,
        AdviceComponent
    ]
})

export class SummaryModule {}