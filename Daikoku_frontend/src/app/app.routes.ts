import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'onboarding',
    loadComponent: () => import('./pages/onboarding/onboarding.page').then( m => m.OnboardingPage)
  },
  {
    path: 'new-transaction',
    loadComponent: () => import('./pages/new-transaction/new-transaction.page').then( m => m.NewTransactionPage)
  },
  {
    path: 'goals',
    loadComponent: () => import('./pages/goals/goals.page').then( m => m.GoalsPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'transactions',
    loadComponent: () => import('./pages/transactions/transactions.page').then( m => m.TransactionsPage)
  },
];
