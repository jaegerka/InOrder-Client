import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdviceComponent } from '../advice/advice.component'; 
import { ManictoolsComponent } from '../tools/manictools/manictools.component';
import { DepressionComponent } from '../tools/depressiontools/depressiontools.component';


@NgModule({
    declarations: [
        AdviceComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    entryComponents: [
        AdviceComponent,
        ManictoolsComponent,
        DepressionComponent
    ]
})

export class AdviceModule {}