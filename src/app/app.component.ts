import { Component } from '@angular/core';
import {UserdataService} from './services/userdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rahul';
  name:string='hii i am your Child';
  users1:any;
 constructor(private userdata:UserdataService)
 {
  console.warn("userdata",userdata.users())
  this.users1=userdata.users();
  
 }
}
