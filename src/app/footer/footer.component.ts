import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserdataService } from '../services/userdata.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @Input() prant:any
  user1:any;
  
 constructor(private userdata:UserdataService)
 {
  
  // console.warn("userdata",userdata.users())
  this.user1=userdata.users();
 }
 PrantTOChild()
 {
window.alert(this.prant);
 }
 

}
