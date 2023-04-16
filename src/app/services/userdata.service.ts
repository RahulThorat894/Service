import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  users()
  {
     return [
      {name:'rahul',email:'rahulthorat905@gmail.com'},
      {name:'Ganesh',email:'Ganesh@905@gmail.com'},
      {name:'Shubham',email:'Shubham@905@gmail.com'},
      {name:'Rohit',email:'rohit@905@gmail.com'}
     ]
  }
}
