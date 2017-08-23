import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { IClient} from '../models/Client';

@Injectable()
export class ClientService {
  clients : FirebaseListObservable<any[]>;
  client : FirebaseObjectObservable<any>;

  constructor(public af:AngularFireDatabase) {
    this.clients = this.af.list('/clients') as FirebaseListObservable<IClient[]>;
   }
   getClients(){
     return this.clients;
   }
    addClient(client:IClient){
      this.clients.push(client);
    }

    getClientById(id:string){
       this.client = this.af.object('/clients/'+ id) as FirebaseObjectObservable<IClient>;
       return this.client; 
    }
}
