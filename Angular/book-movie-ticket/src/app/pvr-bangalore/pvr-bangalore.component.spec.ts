import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvrBangaloreComponent } from './pvr-bangalore.component';

describe('PvrBangaloreComponent', () => {
  let component: PvrBangaloreComponent;
  let fixture: ComponentFixture<PvrBangaloreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvrBangaloreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvrBangaloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
