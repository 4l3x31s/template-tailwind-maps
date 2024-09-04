import { Routes } from '@angular/router';
import { MainContentComponent } from './pages/dashboard/main-content/main-content.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path: '', component: MainContentComponent}
    ]
  },
  {
    path: 'signin', component: SigninComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path:'**', redirectTo: ''
  }
];
