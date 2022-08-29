import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {


  // Message to be displayed when autentication fails
  errorMessage = "";

  // Loading spinner the form
  isLoading = false;

  authForm = new FormGroup({
    userName: new FormControl('', [Validators.required, this.isInvalidUserName.bind(this)]),
    password: new FormControl('', [Validators.required]),
  });



  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    if (!this.authForm.valid) {
      return;
    }

    this.isLoading = true;


    const userName = this.authForm.value.userName;
    const password = this.authForm.value.password;

    this.authService.login(userName, password).subscribe(
      {
        next: (response) => {
          this.errorMessage = "";
          localStorage.setItem('token', response);
          console.log(response);
          this.router.navigate(['/home']);
          this.isLoading = false;
        },
        error: (err) => {

          if (err.status === 401) {
            this.errorMessage = "Dados incorretos. Digite novamente.";;
          }
          else {
            this.errorMessage = "Erro desconhecido. Tente novamente mais tarde.";
          }
          console.log(err);
          this.isLoading = false;
        },
        complete: () => {
          console.log('completed');
          this.isLoading = false;
        }
      });
  }

  // Check if the userName is an e-mail, a CPF or a CNPJ
  isInvalidUserName(control: FormControl) {
    const emailRegex = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$');
    const cpfRegex = new RegExp('^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$');
    const cnpjRegex = new RegExp('^[0-9]{2}.?[0-9]{3}.?[0-9]{3}/?[0-9]{4}-?[0-9]{2}$');
    if (emailRegex.test(control.value) || cpfRegex.test(control.value) || cnpjRegex.test(control.value)) {
      return null;
    } else {
      return { 'invalidUserName': true };
    }
  }
}