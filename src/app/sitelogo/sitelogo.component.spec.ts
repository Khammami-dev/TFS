import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitelogoComponent } from './sitelogo.component';

describe('SitelogoComponent', () => {
  let component: SitelogoComponent;
  let fixture: ComponentFixture<SitelogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitelogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitelogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
