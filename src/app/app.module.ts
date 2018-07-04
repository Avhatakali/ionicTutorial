import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstallationComponent } from './installation/installation.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HomeComponent } from './home/home.component';
import { TutorialComponent } from './tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    InstallationComponent,
    IntroductionComponent,
    HomeComponent,
    TutorialComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'introduction', component: IntroductionComponent},
      {path:'installation', component: InstallationComponent},
      {path:'tutorial', component: TutorialComponent},

      // {path:'contact', component: ContactComponent},
      // {path:'news', component: NewsComponent},
  
      ])  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
