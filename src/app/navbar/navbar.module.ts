import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component'
import { RouterModule } from '@angular/router';
import { SignupComponent } from '../modal/signup/signup.component';
import { SignUpModule } from '../modal/signup/signup.module';
import { ProfileModule } from '../modal/profile/profile.module';
import { ProfileComponent } from '../modal/profile/profile.component';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        RouterModule,
        SignUpModule,
        ProfileModule
    ],
    exports: [
        NavbarComponent
    ],
    entryComponents: [
        NavbarComponent,
        SignupComponent,
        ProfileComponent
    ]
})

export class NavbarModule {}