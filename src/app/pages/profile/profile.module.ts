import { NgModule } from '@angular/core';

import { TechstackComponent } from '../techstack/techstack.component';
import { HeadnavComponent } from '../../components/headnav/headnav.component';
import { MainComponent } from '../main/main.component';
import { WorkComponent } from '../work/work.component';
import { ProfileComponent } from '../profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCardComponent } from 'src/app/components/profile-card/profile-card.component';
import { SvgTailwindComponent } from 'src/app/components/svgs/svg-tailwind/svg-tailwind.component';

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
    ProfileCardComponent,
    SvgTailwindComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [ProfileComponent]
})
export class ProfileModule { }
