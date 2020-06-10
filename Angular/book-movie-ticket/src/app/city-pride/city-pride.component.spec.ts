import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPrideComponent } from './city-pride.component';

describe('CityPrideComponent', () => {
  let component: CityPrideComponent;
  let fixture: ComponentFixture<CityPrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityPrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityPrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
