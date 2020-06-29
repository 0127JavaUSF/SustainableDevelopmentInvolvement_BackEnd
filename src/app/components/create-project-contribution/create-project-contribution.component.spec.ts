import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectContributionComponent } from './create-project-contribution.component';

describe('CreateProjectContributionComponent', () => {
  let component: CreateProjectContributionComponent;
  let fixture: ComponentFixture<CreateProjectContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
