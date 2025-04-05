import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcounterComponent } from './ccounter.component';
import { By } from '@angular/platform-browser';

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

  it('باید مقدار اولیه 0 را نمایش دهد', () => {
    const text = fixture.nativeElement.querySelector('p')?.textContent;
    expect(text).toContain('0');
  });

  it('باید با کلیک روی دکمه مقدار را افزایش دهد', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    button.click();
    fixture.detectChanges();

    const text = fixture.nativeElement.querySelector('p')?.textContent;
    expect(text).toContain('1');
  });

  it('باید بعد از 6 بار کلیک پیام ویژه نمایش دهد', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    for (let i = 0; i < 6; i++) {
      button.click();
    }
    fixture.detectChanges();
    const special = fixture.nativeElement.querySelectorAll('p')[1];
    expect(special?.textContent).toContain("You're clicking fast!")
  });
});
