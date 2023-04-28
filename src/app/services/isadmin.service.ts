import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsadminService {

  constructor() { }
  isAdmin: boolean = false;
  getRights(){
    return this.isAdmin
  }

}
