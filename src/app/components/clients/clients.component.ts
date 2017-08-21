import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {IClient} from '../../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients:IClient[] = [];
  constructor(public cs : ClientService) { }

  ngOnInit() {
    this.cs.getClients().subscribe(clients=>{
      this.clients = clients;
      //debugger;
      console.log(this.clients);
    });
  }

}
