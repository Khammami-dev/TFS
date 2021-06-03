import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPretComponent } from './form-pret.component';

describe('FormPretComponent', () => {
  let component: FormPretComponent;
  let fixture: ComponentFixture<FormPretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
