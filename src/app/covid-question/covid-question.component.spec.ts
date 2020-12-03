import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidQuestionComponent } from './covid-question.component';

describe('CovidQuestionComponent', () => {
  let component: CovidQuestionComponent;
  let fixture: ComponentFixture<CovidQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
