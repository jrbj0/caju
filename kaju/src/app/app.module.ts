import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';  

import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const firebaseConfig = {
  apiKey: "AIzaSyAuftbBakpdrJzYXOr0L9CkX2nEJF5_8G8",
  authDomain: "kaju-bc449.firebaseapp.com",
  databaseURL: "https://kaju-bc449.firebaseio.com",
  projectId: "kaju-bc449",
  storageBucket: "kaju-bc449.appspot.com",
  messagingSenderId: "536697512595",
  appId: "1:536697512595:web:af5d3454af6c4c6e76e366",
  measurementId: "G-YVCKVRL4VP"
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [AngularFireModule, AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
