import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Playerste1Component } from './playerste1.component';

describe('Playerste1Component', () => {
  let component: Playerste1Component;
  let fixture: ComponentFixture<Playerste1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Playerste1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Playerste1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
