import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IsadminService } from 'src/app/services/isadmin.service';
@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  constructor(private router: Router, private IsadminService: IsadminService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const isAdmin$: Observable<boolean> = this.IsadminService.getRights();


    if (isAdmin$) {
      return true;
    }
    else{
      return this.router.navigate(['']);
    }

    
    
  }
  
}
