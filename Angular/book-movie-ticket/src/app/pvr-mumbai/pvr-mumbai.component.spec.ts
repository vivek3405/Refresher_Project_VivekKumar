import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvrMumbaiComponent } from './pvr-mumbai.component';

describe('PvrMumbaiComponent', () => {
  let component: PvrMumbaiComponent;
  let fixture: ComponentFixture<PvrMumbaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvrMumbaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvrMumbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
