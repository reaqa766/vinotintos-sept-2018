import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListteComponent } from './player-listte.component';

describe('PlayerListteComponent', () => {
  let component: PlayerListteComponent;
  let fixture: ComponentFixture<PlayerListteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerListteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
