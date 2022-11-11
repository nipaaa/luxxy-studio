import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedCompanyComponent } from './trusted-company.component';

describe('TrustedCompanyComponent', () => {
  let component: TrustedCompanyComponent;
  let fixture: ComponentFixture<TrustedCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustedCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustedCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
