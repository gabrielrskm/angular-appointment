import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class FacadeService {
  constructor() { }

  SetUserInfo(){

  }

  getUserInfo(){
    return {user : 'user', role : 'client'}
  }

  getUserLoginInfo(){
    return {name : 'user', role : 'client'}
  }

  getScheduleList() {
    
  }

}