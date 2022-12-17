import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  
  constructor() { }
  login(uname:string,password:string)
  {
    if(uname==='admin' && password==='admin')
    {
      return 200;
    }
    else{
      return 401;
    }
  }
}
