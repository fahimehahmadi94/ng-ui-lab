import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcounterComponent } from './ccounter.component';

describe('CcounterComponent', () => {
  let component: CcounterComponent;
  let fixture: ComponentFixture<CcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
