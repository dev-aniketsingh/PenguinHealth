import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name : string;
  ysuID : number;
  lastAssessment : number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.name = "David Bouchedid";
    this.lastAssessment = 6;
    this.ysuID = 78818300;
  }

}
