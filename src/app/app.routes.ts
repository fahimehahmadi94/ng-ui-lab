import { Routes } from '@angular/router';

export const routes: Routes = [
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
    }
];
