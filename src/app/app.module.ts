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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    SignUpComponent,
    MoreInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
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

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
