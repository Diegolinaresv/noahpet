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
export class EmptyPetGuard implements CanActivate {
  constructor(private clientService: ClientService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.clientService.getActualClient().getActualPet().name.length == 0) {
      this.router.navigate(['/steps/condition']);
      return false;
    }
    return true;
  }
}
