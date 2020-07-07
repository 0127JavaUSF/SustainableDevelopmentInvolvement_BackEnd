import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInvolvementsComponent } from './all-involvements.component';

describe('AllInvolvementsComponent', () => {
  let component: AllInvolvementsComponent;
  let fixture: ComponentFixture<AllInvolvementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllInvolvementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInvolvementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
