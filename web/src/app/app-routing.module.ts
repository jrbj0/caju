import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsViewComponent } from './projects-view/projects-view.component';


const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'projects', component: ProjectsViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
