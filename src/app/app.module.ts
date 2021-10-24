import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/landing/home.component';
import { TechstackComponent } from './pages/techstack/techstack.component';


const routes: Routes = [
  { path: '/', component: HomeComponent },
  { path: '/techstack', component: TechstackComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechstackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
