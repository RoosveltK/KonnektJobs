import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProcedureComponent } from './our-procedure.component';

describe('OurProcedureComponent', () => {
  let component: OurProcedureComponent;
  let fixture: ComponentFixture<OurProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurProcedureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
