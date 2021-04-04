import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebgComponent } from './homebg.component';

describe('HomebgComponent', () => {
  let component: HomebgComponent;
  let fixture: ComponentFixture<HomebgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomebgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
