import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprenderMaisComponent } from './aprender-mais/aprender-mais.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { InvestimentosComponent } from './investimentos/investimentos.component';
import { InvestirMaisComponent } from './investir-mais/investir-mais.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'aprender-mais',
    component: AprenderMaisComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'investir-mais',
    component: InvestirMaisComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'investimentos',
    component: InvestimentosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
