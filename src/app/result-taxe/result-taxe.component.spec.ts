import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTaxeComponent } from './result-taxe.component';

describe('ResultTaxeComponent', () => {
  let component: ResultTaxeComponent;
  let fixture: ComponentFixture<ResultTaxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultTaxeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTaxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
