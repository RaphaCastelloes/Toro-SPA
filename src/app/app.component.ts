import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Toro Investimentos';
  public isCollapsed = true;

  constructor(private router: Router) { }

  isLogado() {
    return localStorage.getItem('token');
  }

  desconectar() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
