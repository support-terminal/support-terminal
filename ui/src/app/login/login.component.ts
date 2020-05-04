import {Component} from '@angular/core';
import {AuthService} from 'ng2-ui-auth';
import {Router} from '@angular/router';
import {Login} from './login';
import {Config} from '../config';


@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {

  loginData = new Login();

  public submitted = false;
  public show = false;
  private url;

  constructor(private auth: AuthService,
              private router: Router,
              private config: Config) {
    this.url = config.api + '/authenticate';
  }

  public onSubmit(form: any): void {
    this.submitted = true;
    this.auth.removeToken();

    this.auth.login(this.loginData, this.url).subscribe({
      error: (err: any) => console.log(err),
      complete: () => this.router.navigateByUrl('/')
    });

  }
}
