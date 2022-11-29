import { NgModule } from '@angular/core';

import { TechstackComponent } from '../techstack/techstack.component';
import { HeadnavComponent } from '../../components/headnav/headnav.component';
import { MainComponent } from '../main/main.component';
import { WorkComponent } from '../work/work.component';
import { ProfileComponent } from '../profile/profile.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  path: 'profile', component: ProfileComponent },
  {  path: 'work', component: WorkComponent },
  {  path: 'techstack', component: TechstackComponent },
];

@NgModule({
  declarations: [
    TechstackComponent,
    HeadnavComponent,
    MainComponent,
    WorkComponent,
    ProfileComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [ProfileComponent]
})
export class ProfileModule { }
