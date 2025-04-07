import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'welcome',
                pathMatch: 'full'
            },
            {
                path: 'welcome',
                loadComponent: () => import('./features/welcome/welcome.component').then(m => m.WelcomeComponent)
            },
            {
                path: 'counter',
                loadComponent: () => import('./features/ccounter/ccounter.component').then(m => m.CcounterComponent)
            },
            {
                path: 'login',
                loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent)
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
            }
        ]
    }

];
