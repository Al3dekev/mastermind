import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultBallComponent } from './result-ball.component';

describe('ResultBallComponent', () => {
  let component: ResultBallComponent;
  let fixture: ComponentFixture<ResultBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
