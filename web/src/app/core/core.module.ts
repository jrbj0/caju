import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ]
})
export class CoreModule { }
