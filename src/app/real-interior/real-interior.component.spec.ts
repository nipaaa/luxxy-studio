import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealInteriorComponent } from './real-interior.component';

describe('RealInteriorComponent', () => {
  let component: RealInteriorComponent;
  let fixture: ComponentFixture<RealInteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealInteriorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealInteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
