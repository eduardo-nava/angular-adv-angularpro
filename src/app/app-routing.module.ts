import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { Grafica1Component } from './page/grafica1/grafica1.component';
import { ProgressComponent } from './page/progress/progress.component';
import { NopagefoundComponent } from './page/nopagefound/nopagefound.component';
import { PageComponent } from './page/page.component';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes = [
  { path: '', 
    component: PageComponent, 
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'grafica1', component: Grafica1Component },
      { path: 'progress', component: ProgressComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ] 
  },
  { path: 'register', component: RegisterComponent}, 
  { path: 'login', component: LoginComponent },
  { path: '**', component: NopagefoundComponent }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
