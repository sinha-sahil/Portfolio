import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentPanelComponent } from './components/content-panel/content-panel.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { PersonalProfileComponent } from './components/personal-profile/personal-profile.component';

const routes: Routes = [
  { path : '', redirectTo : '/experience', pathMatch : 'full'}
, { path : 'experience', component : ExperienceComponent}
, { path : 'skills', component : SkillsComponent }
, { path : 'education', component : EducationComponent }
, { path : 'projects', component : ProjectsComponent}
, { path : 'achievements', component : AchievementsComponent }
, { path : 'personalProfile', component : PersonalProfileComponent}

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
