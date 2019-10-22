import { Component, OnInit } from '@angular/core';
import { HomePage } from '../../app/home/home.page';
import { NavbarService } from '../service/navbar/navbar.service';
import { ModalController } from '@ionic/angular';
import { SignupComponent } from '../modal/signup/signup.component';
import { ProfileComponent } from '../modal/profile/profile.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(
    private navbarService: NavbarService,
    private modalController: ModalController
    ) { }

  ngOnInit() {}

  async showSignUpModal() {
    const modal = await this.modalController.create({
        component: SignupComponent,
        componentProps: {
          myParameter: true
        }
    });
    return await modal.present();
  }

  async showProfileModal() {
    const modal = await this.modalController.create({
        component: ProfileComponent,
        componentProps: {
          myParameter: true
        }
    });
    return await modal.present();
  }
}
