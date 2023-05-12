import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IsadminService } from '../services/isadmin.service';

@Injectable({
  providedIn: 'root'
})
export class LogedGuard implements CanActivate {
  isLog!: boolean;
  isLogSubscription!: Subscription;
  constructor(private IsadminService: IsadminService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      this.isLogSubscription = this.IsadminService.getLog().subscribe(data => this.isLog = data);


      if (this.isLog == true) {
        return true;
      }
      else{
        return this.router.navigate(['']);
      }
  }

  
}
