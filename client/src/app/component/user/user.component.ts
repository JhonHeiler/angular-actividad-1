import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
 
 
  mensajeInput: any;                                                         
  constructor() { }

  ngOnInit(): void {
   
  }

  getMensaje(e:Object){
    console.log(e);
    this.mensajeInput = e;
  }

}
