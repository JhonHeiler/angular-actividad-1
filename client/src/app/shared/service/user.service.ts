import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/core/models/User.model';


@Injectable()
export class UserService {
 
  constructor() { } 
  save(user:  UserModel): string {
    return `Save success ${user.identificacion} - ${user.nombre} - ${user.apellido} - ${user.edad}`;
  }
  get(user:  UserModel): UserModel {
    return {identificacion: user.identificacion, nombre: user.nombre, apellido: user.apellido, edad: user.edad};
  }
}
