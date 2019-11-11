import { NgModule } from "@angular/core";
import { EnvironmentComponent } from './environment.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';
import { IonicRatingModule } from 'ionic4-rating';
import { ComfortComponent } from '../comfort/comfort.component';
import { ComfortModule } from '../comfort/comfort.module'


@NgModule({
    declarations: [
        EnvironmentComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BarRatingModule,
        IonicRatingModule,
        ComfortModule
    ],
    entryComponents: [
        EnvironmentComponent,
        ComfortComponent
    ]
})

export class EnvironmentModule {}