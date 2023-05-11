import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsadminService {

  constructor() { }
  isLog$ = new BehaviorSubject<boolean>(false);
  isAdmin$ = new BehaviorSubject<boolean>(false);
  getRights(): Observable<boolean> {
    return this.isAdmin$.asObservable();
  }
  getLog(): Observable<boolean>{
    return this.isLog$.asObservable();
  }
  setRights(result: boolean) {
    this.isAdmin$.next(result);
  }
  setLog(result: boolean){
    this.isLog$.next(result);
  }
  

}
