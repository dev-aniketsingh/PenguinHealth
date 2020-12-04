import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  chartTitle = "Have you recently started experiencing any of these symptoms?";
  chartTitle2 = "How old are you?";
  chartTitle3 = "In the last 10 days, have you been tested for COVID-19?";
  chartTitle4 = "experiencing severe symptons of COVID-19";
  chartTitle5 = "In the last 14 days did you work or volunteer in a healthcare facility?";
  chartTitle6 = "Have you been in contact with anyone that has tested postiive for COVID-19 in the last 10 days?";
  chartTitle7 = "Do any of these apply to you?";

  myData2 = [   ['Fever or chills', 23],   ['Mild or moderate difficulty breathing', 14],   ['New or worsening cough', 3],   ['Sudden loss of taste or smell', 8], ['Vomiting or diarrihea', 2]];
  myData = [   ['Under 18', 24],   ['Between 18-35', 7],   ['Between 35-60', 13],   ['60 or older', 6]];
  myData3 = [   ['I was tested and my result was positive for COVID-19', ],   ['Between 18-35', 7],   ['Between 35-60', 13],   ['60 or older', 2]];
  myData4 = [   ['Under 18', 8],   ['Between 18-35', 7],   ['Between 35-60', 13],   ['60 or older', 2]];
  myData5 = [   ['Under 18', 8],   ['Between 18-35', 7],   ['Between 35-60', 13],   ['60 or older', 2]];
  myData6 = [   ['Under 18', 8],   ['Between 18-35', 7],   ['Between 35-60', 13],   ['60 or older', 2]];
  myData7 = [   ['Under 18', 8],   ['Between 18-35', 7],   ['Between 35-60', 13],   ['60 or older', 2]];


  chartType = ChartType.PieChart;

  constructor() { }

  ngOnInit(): void {
  }

}
