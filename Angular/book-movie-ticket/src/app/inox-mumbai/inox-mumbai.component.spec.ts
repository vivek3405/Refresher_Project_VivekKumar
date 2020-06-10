import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InoxMumbaiComponent } from './inox-mumbai.component';

describe('InoxMumbaiComponent', () => {
  let component: InoxMumbaiComponent;
  let fixture: ComponentFixture<InoxMumbaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InoxMumbaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InoxMumbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
