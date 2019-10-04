import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';
import { IonicRatingModule } from 'ionic4-rating';
import { ComfortComponent } from '../comfort/comfort.component';
import { BehaviorComponent } from '../behavior/behavior.component';
import { BehaviorModule } from '../behavior/behavior.module';


@NgModule({
    declarations: [
        ComfortComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BarRatingModule,
        IonicRatingModule,
        BehaviorModule
    ],
    entryComponents: [
        ComfortComponent,
        BehaviorComponent
    ]
})

export class ComfortModule {}