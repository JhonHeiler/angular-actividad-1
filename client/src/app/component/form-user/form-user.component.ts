import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/core/models/User.model';
import { UserService } from 'src/app/shared/service/user.service';
@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
 

  @Output() miEvento = new EventEmitter<string | UserModel>();
  constructor(private readonly userService:UserService) { 

  }
  identificacion!:number;
  nombre!:string;
  apellido!:string;
  edad!:number;


  @Input('usuario') cliente: string | object ="TE QUIERO MUCHO";

 
  ngOnInit(): void {
    
  }
  
  
  saveEvento(){
    const user: UserModel = {identificacion: this.identificacion, nombre: this.nombre, apellido: this.apellido, edad: this.edad};
    const users:string = this.userService.save(user);
    this.miEvento.emit(users);
   
  }

  getEvento(){
    const user: UserModel = {identificacion: this.identificacion, nombre: this.nombre, apellido: this.apellido, edad: this.edad};
    const users:UserModel = this.userService.get(user);
    this.miEvento.emit(users);
  }


}
 