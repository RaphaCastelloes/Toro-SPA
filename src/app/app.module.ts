import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AprenderMaisComponent } from './aprender-mais/aprender-mais.component';
import { InvestirMaisComponent } from './investir-mais/investir-mais.component';
import { InvestimentosComponent } from './investimentos/investimentos.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    LoadingSpinnerComponent,
    NotFoundComponent,
    AprenderMaisComponent,
    InvestirMaisComponent,
    InvestimentosComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
