import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { By } from '@angular/platform-browser';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('باید متن پیش‌فرض Welcome Page رو نمایش بده', () => {
    const title = fixture.nativeElement.querySelector('h2');
    expect(title?.textContent).toContain('Welcome Page');
  });
  it('باید پیام Hello وقتی name تنظیم بشه نمایش داده شود', () => {
    component.name.set('Fahimeh');
    fixture.detectChanges();

    const message = fixture.nativeElement.querySelector('p');
    expect(message?.textContent).toContain('Hello, Fahimeh!');
  });

  it('باید مقدار input را تغییر دهد وقتی کاربر تایپ می‌کند', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    input.value = 'Fahimeh';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.name()).toBe('Fahimeh')
  });

});
