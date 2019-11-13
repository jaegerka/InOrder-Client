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
import { HomePageModule } from './home/home.module';
import { ToolsComponent } from './core/tools/tools.component';
import { ToolsModule } from './core/tools/tools.module';
import { NavbarModule } from './navbar/navbar.module';
import { SettingsComponent } from './core/settings/settings.component';
import { SettingsModule } from './core/settings/settings.module';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { IonicStorageModule } from '@ionic/storage';


//Routing information
const appRoutes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'tools', component: ToolsComponent },
  { path: 'settings', component: SettingsComponent },
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
    ToolsModule,
    NavbarModule,
    SettingsModule,
    IonicStorageModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
