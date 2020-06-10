import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvrPuneComponent } from './pvr-pune.component';

describe('PvrPuneComponent', () => {
  let component: PvrPuneComponent;
  let fixture: ComponentFixture<PvrPuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvrPuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvrPuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
