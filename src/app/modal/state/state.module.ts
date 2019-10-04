import { NgModule } from "@angular/core";
import { StateComponent } from './state.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';
import { IonicRatingModule } from 'ionic4-rating';
import { EnvironmentComponent } from '../environment/environment.component';
import { EnvironmentModule } from '../environment/environment.module';


@NgModule({
    declarations: [
        StateComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BarRatingModule,
        IonicRatingModule,
        EnvironmentModule
    ],
    entryComponents: [
        StateComponent,
        EnvironmentComponent
    ]
})

export class StateModule {}