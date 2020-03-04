import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishTacosComponent } from './fish-tacos.component';

describe('FishTacosComponent', () => {
  let component: FishTacosComponent;
  let fixture: ComponentFixture<FishTacosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishTacosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishTacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
