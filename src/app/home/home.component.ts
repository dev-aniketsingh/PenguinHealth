import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name : string;
  YID : string;
  lastAssessment : number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.name = "David Bouchedid";
    this.lastAssessment = 6;
    this.YID = "Y0078818300"
  }

}
