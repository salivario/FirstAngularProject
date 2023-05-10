import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsadminService {

  constructor() { }
  private isLog$ = new BehaviorSubject<boolean>(true);
  private isAdmin$ = new BehaviorSubject<boolean>(false);
  getRights(): Observable<boolean> {
    return this.isAdmin$.asObservable();
  }
  getLog(): Observable<boolean>{
    return this.isLog$.asObservable();
  }
  setRights(result: boolean) {
    this.isAdmin$= new BehaviorSubject<boolean>(result)
  }
  setLog(result: boolean){
    return this.isLog$ = new BehaviorSubject<boolean>(result)
  }
  

}
