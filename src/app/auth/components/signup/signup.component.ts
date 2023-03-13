import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserProfile } from '../../../shared/models/UserProfile';
import { UserNetwork } from 'src/app/shared/models/UserNetwork';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
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
    this.signupForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  OnSubmit() {
    // check if the form is valid
    if (this.signupForm.valid) {
      this.loading = true;
      // get wanted fields to create the new user (??)
      const { email, fullName, username, password } = this.signupForm.value;
      // call the auth service in order to create the user
      const userNetwork: UserNetwork = {
        email,
        fullName,
        username,
        password,
      };
      this._authService.signup(userNetwork).subscribe({
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
