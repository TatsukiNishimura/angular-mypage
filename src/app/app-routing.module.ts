import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ResearchComponent } from './research/research.component';
import { TopComponent } from './top/top.component';
import { AchievementComponent } from './achievement/achievement.component';
const routes: Routes = [
  { path: "", component: TopComponent },
  { path: "profile", component: ProfileComponent },
  { path: "research", component: ResearchComponent },
  { path: "contact", component: ContactComponent },
  { path: "achievement", component: AchievementComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
