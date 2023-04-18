import { Component, inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  Database,
  DataSnapshot,
  endAt,
  onValue,
  orderByChild,
  query,
  ref,
  startAt,
  off,
  Query
  

} from '@angular/fire/database';
import { UserInformation } from '../interface/userInfo.interface';

export interface TurnInterface{

  id : string,
  date : string,
  init_time : string,
  end_time : string,
  aviable : string,
  users : string
}

export class TurnClass  {

  id: string;
  date: string;
  init_time: string;
  end_time: string;
  aviable: string;
  users: string;
  
  
  constructor(id: string, date: string, init_time: string, end_time: string, aviable: string, users: string) {
    this.id = id;
    this.date = date;
    this.init_time = init_time;
    this.end_time = end_time;
    this.aviable = aviable;
    this.users = users;
    
  }
}

@Injectable({ providedIn: 'root' })
export class DatabaseService {

  private dataListTurn = new BehaviorSubject<{}[]>([]);
  private dataListTurn$ = this.dataListTurn.asObservable();
  private dataListUser = new BehaviorSubject<{}[]>([]);
  private dataListUser$ = this.dataListUser.asObservable();
  private dataListUserInfo = new BehaviorSubject<UserInformation | null>(null);
  private dataListUserInfo$ = this.dataListUserInfo.asObservable();
  private queryList: Query[] = [];
  db = inject(Database);

  private snapshotDatabaseTurn(snapshot: DataSnapshot) {
    if (!snapshot.exists()) {
      console.log("no data");
      return;
    }
    let result: any[] = [];
    snapshot.forEach((element: DataSnapshot) => {
      const turno : TurnInterface = {
        id : element.key || '',
        date : element.val().fecha,
        init_time : element.val().hora_inicio,
        end_time : element.val().hora_fin,
        aviable : element.val().vacantes_disponibles,
        users : element.val().usuarios !== undefined ? element.val().usuarios : ""
      };
      result.push(turno);
    })
    this.dataListTurn.next(result);
  }

  private snapshotDatabaseUsers(snapshot: DataSnapshot){
    if (!snapshot.exists()) {
      console.log('no data ');
    }
    let result: any[] = [];
    snapshot.forEach((childSnapshot: DataSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      const obj = {
        id: childKey,
        nombre: childData.nombre,
        rol: childData.rol,
      };
      result.push(obj);
    });
    this.dataListUser.next(result);
  }

  private snapshotDatabaseUserInfo(snapshot: DataSnapshot) {
    if (!snapshot.exists()) {
      console.log('no user info exists in database ');
    }
    const result: UserInformation = {
      uid: snapshot.key || '',
      name: snapshot.val().nombre,
      role: snapshot.val().rol,
    }
    this.dataListUserInfo.next(result);
  }
  
  readDataQueryTurn(dateNow : Date) {
    
    const formatDate  = dateNow.toLocaleDateString.bind(dateNow)
    const dateInit =  formatDate('es-ES', { year: 'numeric' }) + '/' +
                      formatDate('es-ES', { month: '2-digit' }) + '/' +
                      formatDate('es-ES', { day: '2-digit' });

    dateNow.setUTCDate(dateNow.getUTCDate() + 5);

    const dateEnd = formatDate('es-ES', { year: 'numeric' }) + '/' +
                    formatDate('es-ES', { month: '2-digit' }) + '/' +
                    formatDate('es-ES', { day: '2-digit' });

    const starCountRef = query(

      ref(this.db, 'turnos'),
      orderByChild('fecha'),
      startAt(dateInit),
      endAt(dateEnd)
    );
      const callback = this.snapshotDatabaseTurn.bind(this);
    onValue(starCountRef, callback, (error) => console.log(error));
    this.queryList.push(starCountRef);
    return this.dataListTurn$;
  }

  readDataQueryUsers() {
    const starCountRef = query(ref(this.db, 'usuarios'));
    const callback = this.snapshotDatabaseUsers.bind(this);
    onValue(starCountRef, callback, (error) => console.log(error));
    this.queryList.push(starCountRef);
    return this.dataListUser$;
  }

  readDataQueryUserInfo(id: string) {
    
    const starCountRef = query(ref(this.db, 'usuarios/' + id) );
    const callback = this.snapshotDatabaseUserInfo.bind(this);
    onValue(starCountRef, callback, (error) => console.log(error));
    this.queryList.push(starCountRef);
    return this.dataListUserInfo$;
  }

  cancelQuery() {
    this.queryList.forEach(query => off(query));
  }

}
