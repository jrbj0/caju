import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectsViewComponent } from '../projects-view/projects-view.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    ProjectCardComponent,
    ProjectsViewComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ]
})
export class CoreModule { }
