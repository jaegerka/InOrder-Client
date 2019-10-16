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
import { ProfileComponent } from './profile/profile.component';
import { HomePageModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';


//Routing information
const appRoutes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'profile', component: ProfileComponent },
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
