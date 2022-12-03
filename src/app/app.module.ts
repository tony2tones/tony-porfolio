import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Landingomponent } from './pages/landing/landing.component';
import { TechstackComponent } from './pages/techstack/techstack.component';
import { HeadnavComponent } from './components/headnav/headnav.component';
import { MainComponent } from './pages/main/main.component';
import { WorkComponent } from './pages/work/work.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileModule } from './pages/profile/profile.module';
import { ScrollDirective } from './directive/scroll-styles.directive';


const routes: Routes = [
  {  path: 'home', component: Landingomponent },
  { path: '', redirectTo: '/home' , pathMatch:'full'},
  {  path: 'profile', component: ProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Landingomponent,
    ScrollDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
