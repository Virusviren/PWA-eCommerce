import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInsurancesComponent } from './admin-insurances.component';

describe('AdminInsurancesComponent', () => {
  let component: AdminInsurancesComponent;
  let fixture: ComponentFixture<AdminInsurancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInsurancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInsurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
