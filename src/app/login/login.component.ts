import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  router : any;

  constructor() {}

  ngOnInit(): void {}

  loginclicked(): void {
    if (this.email === "dabouchedid@student.ysu.edu" && this.password === "password123") {
      this.router.navigate(HomeComponent);
    } else if (this.email === "aksingh01@student.ysu.edu" && this.password === "password123") {
      this.router.navigate(HomeComponent);
    } else () => {
      //do nothing
    };
  }
}
