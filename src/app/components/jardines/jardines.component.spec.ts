import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JardinesComponent } from './jardines.component';

describe('JardinesComponent', () => {
  let component: JardinesComponent;
  let fixture: ComponentFixture<JardinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JardinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JardinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
