import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component'
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        RouterModule,
    ],
    exports: [
        NavbarComponent
    ],
    entryComponents: [
        NavbarComponent
    ]
})

export class NavbarModule {}