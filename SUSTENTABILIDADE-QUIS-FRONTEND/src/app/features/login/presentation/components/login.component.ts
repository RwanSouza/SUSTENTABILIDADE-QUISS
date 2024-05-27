import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { OnInit, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loading: boolean = false;
  erro = false;

  constructor(
    private _loginService: LoginService,
    private _fb: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this._initForm();
  }

  private _initForm() {
    this.loginForm = this._fb.group({
      email: 'rwan@email.com',
      senha: '1020304050'
    })
  }

  signIn() {
    let email = this.loginForm.get("email")?.value;
    let senha = this.loginForm.get("senha")?.value;

    this._loginService.signIn(email, senha).subscribe(res => {
      localStorage.setItem("token", res.token);
      if (res) this._router.navigate(['/quis']);
    }, () => {
      this.erro = true;
    });
  }
}