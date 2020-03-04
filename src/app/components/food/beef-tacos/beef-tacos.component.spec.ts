import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeefTacosComponent } from './beef-tacos.component';

describe('BeefTacosComponent', () => {
  let component: BeefTacosComponent;
  let fixture: ComponentFixture<BeefTacosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeefTacosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeefTacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
