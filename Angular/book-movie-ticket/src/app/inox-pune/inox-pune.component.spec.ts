import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InoxPuneComponent } from './inox-pune.component';

describe('InoxPuneComponent', () => {
  let component: InoxPuneComponent;
  let fixture: ComponentFixture<InoxPuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InoxPuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InoxPuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
