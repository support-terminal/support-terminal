import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {Config} from './config';
import {AuthGuard} from './login/auth.guard';
import {LoginComponent} from './login/login.component';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [];

@NgModule({
  providers: [
    Config
  ],
  imports: [RouterModule.forRoot(
    [
      {
        path: '', canActivate: [AuthGuard], component: MainComponent, children: [
          {path: 'settings', component: SettingsComponent}
        ]
      },
      {path: 'login', component: LoginComponent}

    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
