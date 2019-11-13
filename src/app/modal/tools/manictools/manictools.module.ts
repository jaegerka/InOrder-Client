import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ManictoolsComponent } from './manictools.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ManictoolsComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        
    ]
})

export class ManicToolsModule {}

