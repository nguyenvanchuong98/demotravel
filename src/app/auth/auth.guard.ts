import { Injectable } from '@angular/core';
import {
  UrlTree,
  CanLoad,
  UrlSegment,
  Route,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private authService:AuthService,private router:Router){}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean{
      if(!this.authService._isLogin)
      {
        this.router.navigateByUrl('/auth');
      }
      return this.authService._isLogin;
    }
}
