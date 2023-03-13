import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserNetwork } from 'src/app/shared/models/UserNetwork';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false;
  error: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._initializeForm();
  }

  _initializeForm() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  OnSubmit() {
    // check if the form is valid
    if (this.loginForm.valid) {
      this.loading = true;
      // get wanted fields to create the new user (??)
      const { email, password } = this.loginForm.value;
      // call the auth service in order to create the user
      const userNetwork: UserNetwork = {
        email,
        password,
      };
      this._authService.login(userNetwork).subscribe({
        next: () => {
          //redirect user to dashboard
          this._router.navigate(['']);
        },
        error: (error) => {
          //show error on console
          this.loading = false;
          this.error = error;
          console.log(error);
        },
      });
      // if all is okei, redirect the user --> where? we need access_token for the new created_user (??)
    }
  }
}
