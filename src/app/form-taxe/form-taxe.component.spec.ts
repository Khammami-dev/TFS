import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTaxeComponent } from './form-taxe.component';

describe('FormTaxeComponent', () => {
  let component: FormTaxeComponent;
  let fixture: ComponentFixture<FormTaxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTaxeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTaxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
