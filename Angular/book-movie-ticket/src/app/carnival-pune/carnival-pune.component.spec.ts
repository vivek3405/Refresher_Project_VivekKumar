import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnivalPuneComponent } from './carnival-pune.component';

describe('CarnivalPuneComponent', () => {
  let component: CarnivalPuneComponent;
  let fixture: ComponentFixture<CarnivalPuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarnivalPuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnivalPuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
