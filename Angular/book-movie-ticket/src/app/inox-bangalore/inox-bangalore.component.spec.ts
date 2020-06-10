import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InoxBangaloreComponent } from './inox-bangalore.component';

describe('InoxBangaloreComponent', () => {
  let component: InoxBangaloreComponent;
  let fixture: ComponentFixture<InoxBangaloreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InoxBangaloreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InoxBangaloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
