import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';
import { SignupComponent } from './signup.component';


@NgModule({
    declarations: [
        SignupComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BarRatingModule,
        
    ],
    entryComponents: [
       SignupComponent
    ]
})

export class SignUpModule {}