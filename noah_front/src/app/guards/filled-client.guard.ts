import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ClientService } from '../services/client.service';

@Injectable({
  providedIn: 'root',
})
export class FilledClientGuard implements CanActivate {
  constructor(private clientService: ClientService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    var Client = this.clientService.getActualClient();
    if (
      Client.name != null &&
      Client.name.length > 0 &&
      Client.cellphone != null &&
      Client.cellphone.length > 0
    ) {
      this.router.navigate(['/steps/condition']);
      return false;
    }
    return true;
  }
}
