import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatEpargneComponent } from './resultat-epargne.component';

describe('ResultatEpargneComponent', () => {
  let component: ResultatEpargneComponent;
  let fixture: ComponentFixture<ResultatEpargneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatEpargneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatEpargneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
