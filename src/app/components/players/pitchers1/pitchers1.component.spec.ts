import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pitchers1Component } from './pitchers1.component';

describe('PitchersComponent', () => {
  let component: Pitchers1Component;
  let fixture: ComponentFixture<Pitchers1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pitchers1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pitchers1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
