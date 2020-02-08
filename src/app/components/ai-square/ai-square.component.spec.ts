import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSquareComponent } from './ai-square.component';

describe('AiSquareComponent', () => {
  let component: AiSquareComponent;
  let fixture: ComponentFixture<AiSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
