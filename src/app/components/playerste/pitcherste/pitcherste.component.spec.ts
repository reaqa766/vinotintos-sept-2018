import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchersteComponent } from './pitcherste.component';

describe('PitchersteComponent', () => {
  let component: PitchersteComponent;
  let fixture: ComponentFixture<PitchersteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchersteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchersteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
