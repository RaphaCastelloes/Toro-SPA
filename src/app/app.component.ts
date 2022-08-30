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

  // Check if it is logged in by checking if the token is in the local storage
  isLogado() {
    return localStorage.getItem('token');
  }

  // Logout by removing the token from the local storage
  desconectar() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
