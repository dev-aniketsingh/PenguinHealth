import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor() {}

  ngOnInit(): void {}

  loginclicked(): void {
    if (this.email === "dabouchedid@student.ysu.edu") {
    } else if (this.email === "aksingh01@student.ysu.edu") {
    } else () => {};
    if (this.password === "password123") {
    }
  }
}
