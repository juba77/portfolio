import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header';
import { MenuComponent } from './components/menu';
import { HomeComponent } from './components/home';
import { LateralComponent } from './components/lateral';
import { AboutComponent } from './components/about';
import { FooterComponent } from './components/footer';
import { JobComponent } from './components/job';
import { EducationComponent } from './components/education';
import { SkillsComponent } from './components/skills';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    LateralComponent,
    AboutComponent,
    FooterComponent,
    JobComponent,
    EducationComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
