import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Routes} from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';
import { IonicRatingModule } from 'ionic4-rating';

import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';

import { HomePage } from '../app/home/home.page';
import { ProfileComponent } from './modal/profile/profile.component';
import { HomePageModule } from './home/home.module';
import { ProfileModule } from './modal/profile/profile.module';
import { SignupComponent } from './modal/signup/signup.component';
import { SignUpModule } from './modal/signup/signup.module';


//Routing information
const appRoutes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent
    ],
  entryComponents: [
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BarRatingModule,
    IonicRatingModule,
    HttpClientModule,
    ChartsModule,
    HomePageModule,
    ProfileModule,
    SignUpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
