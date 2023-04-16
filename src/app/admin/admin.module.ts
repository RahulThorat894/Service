import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    LoginComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {

  constructor()
  {
    console.log('Admin Module');
  }
 }
