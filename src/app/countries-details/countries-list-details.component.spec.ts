import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesListDetailsComponent } from './countries-list-details.component';

describe('CountriesListDetailsComponent', () => {
  let component: CountriesListDetailsComponent;
  let fixture: ComponentFixture<CountriesListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
