import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { CovidQuestionComponent } from './covid-question/covid-question.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    SignUpComponent,
    MoreInfoComponent,
    CovidQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    GoogleChartsModule,
    RouterModule.forRoot([

    {  
      path: 'home',
       component: HomeComponent
    },

    {
       path: 'login', 
      component: LoginComponent
    },
    {
      path: 'about', 
     component: AboutComponent
   },
   {
    path: 'sign-up', 
   component: SignUpComponent
 },
 {
  path: 'more-info', 
 component: MoreInfoComponent
},
{
  path: 'covid-question',
  component: CovidQuestionComponent
},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
