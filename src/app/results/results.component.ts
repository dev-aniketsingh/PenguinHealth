import { Component, OnInit } from "@angular/core";
import { ChartType } from "angular-google-charts";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"],
})
export class ResultsComponent implements OnInit {
  chartTitle = "Have you recently started experiencing any of these symptoms?";
  chartTitle2 = "How old are you?";
  chartTitle3 = "In the last 10 days, have you been tested for COVID-19?";
  chartTitle4 = "experiencing severe symptons of COVID-19";
  chartTitle5 =
    "In the last 14 days did you work or volunteer in a healthcare facility?";
  chartTitle6 =
    "Have you been in contact with anyone that has tested postiive for COVID-19 in the last 10 days?";
  chartTitle7 = "Do any of these apply to you?";

  myData2 = [
    ["Fever or chills", 23],
    ["Mild or moderate difficulty breathing", 14],
    ["New or worsening cough", 3],
    ["Sudden loss of taste or smell", 8],
    ["Vomiting or diarrihea", 2],
  ];
  myData = [
    ["Under 18", 24],
    ["Between 18-35", 7],
    ["Between 35-60", 13],
    ["60 or older", 6],
  ];
  myData3 = [
    ["I was tested and my result was positive for COVID-19", 7],
    ["I was tested and my result was negative for COVID-19", 3],
    ["I was tested but I have not yet recieved my test results", 3],
    ["I have not been tested in the last 10 days", 27],
  ];
  myData4 = [
    ["I am experiencing at least one of these", 3],
    ["I do not have any of these", 47],
  ];
  myData5 = [
    [
      "I worked or volunteered in a healthcare facility in the last 14 days",
      14,
    ],
    [
      "I did not work or volunteer in a healthcare facility in the last 14 days",
      36,
    ],
  ];
  myData6 = [
    ["Yes", 23],
    ["No", 27],
  ];
  myData7 = [
    ["None", 10],
    ["Obesity", 8],
    ["Smoking or vaping", 12],
    ["Pregnancy", 6],
    [
      "Diabities, high blood pressure, chronic kidney disease, or liver disease",
      9,
    ],
    ["Other health conditions that would make a difference", 5],
  ];

  chartType = ChartType.PieChart;

  constructor() {}

  ngOnInit(): void {}
}
