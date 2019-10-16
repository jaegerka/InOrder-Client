import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from '../app/home/home.page';
import { ProfileComponent } from '../app/profile/profile.component'

const routes: Routes = [
  // { path: '', component: HomePage },
  // { path: 'home', component: HomePage },
  // { path: 'profile', component: ProfileComponent},
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // { path: 'profile', loadChildren: () => import('./profile/profile.module').then( m => m.HomePageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
