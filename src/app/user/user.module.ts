import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    LoginComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule {

  constructor()
  {
    console.log("userModule");
  }
 }
