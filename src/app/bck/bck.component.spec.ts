import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BckComponent } from './bck.component';

describe('BckComponent', () => {
  let component: BckComponent;
  let fixture: ComponentFixture<BckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
