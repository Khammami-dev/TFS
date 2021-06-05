import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomEpargneComponent } from './fom-epargne.component';

describe('FomEpargneComponent', () => {
  let component: FomEpargneComponent;
  let fixture: ComponentFixture<FomEpargneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomEpargneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FomEpargneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
