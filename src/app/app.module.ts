import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TopComponent } from './top/top.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor()
  {
    console.log("App Module");
  }
 }
