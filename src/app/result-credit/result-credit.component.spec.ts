import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCreditComponent } from './result-credit.component';

describe('ResultCreditComponent', () => {
  let component: ResultCreditComponent;
  let fixture: ComponentFixture<ResultCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
