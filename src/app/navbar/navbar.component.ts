import { Component, OnInit } from '@angular/core';
import { HomePage } from '../../app/home/home.page';
import { NavbarService } from '../service/navbar/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(
    // private navCtrl: NavController
    private navbarService: NavbarService
    ) { }

  ngOnInit() {}

  routeToHome() {
    this.navbarService.setPage('Home');
    console.log("Routed to Home Page");
  }

  routeToProfile() {
    this.navbarService.setPage('Profile');
    console.log("Routed to Profile Page")
  }
}
