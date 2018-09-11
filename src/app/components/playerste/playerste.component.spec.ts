import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersteComponent } from './playerste.component';

describe('PlayersteComponent', () => {
  let component: PlayersteComponent;
  let fixture: ComponentFixture<PlayersteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
