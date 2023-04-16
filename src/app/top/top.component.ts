import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {
        user:any;
     constructor(private userdata:UserdataService)
     {
      // console.warn(userdata.users);
      this.user=userdata.users();
     } 
}
