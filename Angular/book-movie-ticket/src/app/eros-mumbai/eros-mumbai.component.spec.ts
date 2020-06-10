import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErosMumbaiComponent } from './eros-mumbai.component';

describe('ErosMumbaiComponent', () => {
  let component: ErosMumbaiComponent;
  let fixture: ComponentFixture<ErosMumbaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErosMumbaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErosMumbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
