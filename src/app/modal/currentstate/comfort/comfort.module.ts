import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';
import { IonicRatingModule } from 'ionic4-rating';
import { ComfortComponent } from '../comfort/comfort.component';
import { BehaviorComponent } from '../behavior/behavior.component';
import { BehaviorModule } from '../behavior/behavior.module';
import { OutsidecomfortzoneComponent } from '../outsidecomfortzone/outsidecomfortzone.component';
import { OutsideComfortZoneModule } from '../outsidecomfortzone/outsidecomfortzone.module';


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
        BehaviorModule,
        OutsideComfortZoneModule
    ],
    entryComponents: [
        ComfortComponent,
        BehaviorComponent,
        OutsidecomfortzoneComponent
    ]
})

export class ComfortModule {}