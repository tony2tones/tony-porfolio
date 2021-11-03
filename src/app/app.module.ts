import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/landing/home.component';
import { TechstackComponent } from './pages/techstack/techstack.component';
import { HeadnavComponent } from './components/headnav/headnav.component';
import { MainComponent } from './pages/main/main.component';
import { WorkComponent } from './pages/work/work.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  {  path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home' , pathMatch:'full'},
  {  path: 'work', component: WorkComponent },
  {  path: 'techstack', component: TechstackComponent },
  {  path: 'work', component: WorkComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
