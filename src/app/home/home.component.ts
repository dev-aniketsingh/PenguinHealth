import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name : string;
  ysuID : number;
  lastAssessment : number;

  constructor() { }

  ngOnInit(): void {
    this.name = "David Bouchedid";
    this.lastAssessment = 6;
    this.ysuID = 78818300;
  }

}
