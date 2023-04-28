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

    const isAdmin = this.IsadminService.getRights(); // здесь должна быть логика проверки, isAdmin - это пример

    if (isAdmin) {
      return true;
    }

    // Если пользователь не является администратором, то перенаправляем его на другую страницу, например, на страницу логина.
    return this.router.createUrlTree(['']);
  }
  
}
