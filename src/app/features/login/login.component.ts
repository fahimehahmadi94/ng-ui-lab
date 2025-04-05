import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  loading = signal(false);
  error = signal('');

  onSubmit() {
    if (this.form.invalid) return;
  
    this.loading.set(true);
    this.error.set('');
  
    const { email, password } = this.form.value;
  
    this.auth.login(email, password).subscribe({
      next: (success) => {
        if (success) {
          alert('✅ ورود موفق!');
        } else {
          this.error.set('❌ کاربر پیدا نشد');
        }
        this.loading.set(false);
      },
      error: () => {
        this.error.set('خطا در ارتباط با سرور!');
        this.loading.set(false);
      }
    });
  }
  
}
