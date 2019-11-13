import { NgModule } from "@angular/core";
import { DepressionComponent } from './depressiontools.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DepressionComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        
    ]
})

export class DepressionToolsModule {}

