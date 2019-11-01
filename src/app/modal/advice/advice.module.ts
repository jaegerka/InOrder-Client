import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdviceComponent } from '../advice/advice.component'; 


@NgModule({
    declarations: [
        AdviceComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    entryComponents: [
        AdviceComponent
    ]
})

export class AdviceModule {}