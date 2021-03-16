import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _isLogin: boolean = false;
  private _userId="xyz";
  constructor() {}

  get islogin() {
    return this._isLogin;
  }

  get userId()
  {
    return this._userId;
  }
  login() {
    return (this._isLogin = true);
  }

  logout() {
    return (this._isLogin = false);
  }
}
