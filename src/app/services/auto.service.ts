import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { IsadminService } from './isadmin.service';
@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor(private route: Router, private IsadminService: IsadminService) { }
  setToken(token: string){
    sessionStorage.setItem('token', token)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isAuto(){
    return this.getToken() !== null
  }
  login(userInf: {email: string, password: string}): Observable<string | boolean>{
    if(userInf.email === 'user@gmail.com' && userInf.password === '123123qwe'){
      this.setToken('qwe121e12e1d2f')
      this.IsadminService.setLog(false)
      this.IsadminService.setRights(false)
    }
    if(userInf.email === 'admin@gmail.com' && userInf.password === '123123qwe'){
      this.setToken('qwe121e12e1d2qwdasdaf')
      this.IsadminService.setLog(false)
      this.IsadminService.setRights(true)
    }
    return throwError(()=> new Error('Failed Login'))
  }
}
