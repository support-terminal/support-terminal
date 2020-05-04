import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {Config} from './config';
import {AuthGuard} from './login/auth.guard';
import {LoginComponent} from './login/login.component';

const routes: Routes = [];

@NgModule({
  providers:[
    Config
  ],
  imports: [RouterModule.forRoot(
    [{
      path: '',
      canActivate: [AuthGuard],
      component:  MainComponent,
      children: [


        NotificationApiListComponent
      ]
    },
      {
        path: 'login',
        component: LoginComponent
      }]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
