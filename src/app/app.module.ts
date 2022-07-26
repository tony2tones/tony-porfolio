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


const routes: Routes = [
  {  path: 'home', component: Landingomponent },
  { path: '', redirectTo: '/home' , pathMatch:'full'},
  {  path: 'work', component: WorkComponent },
  {  path: 'techstack', component: TechstackComponent },
  {  path: 'profile', component: ProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Landingomponent,
    TechstackComponent,
    HeadnavComponent,
    MainComponent,
    WorkComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
