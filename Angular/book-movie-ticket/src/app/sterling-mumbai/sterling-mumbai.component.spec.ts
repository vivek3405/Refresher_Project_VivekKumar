import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SterlingMumbaiComponent } from './sterling-mumbai.component';

describe('SterlingMumbaiComponent', () => {
  let component: SterlingMumbaiComponent;
  let fixture: ComponentFixture<SterlingMumbaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SterlingMumbaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SterlingMumbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
