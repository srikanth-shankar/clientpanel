import { Component, OnInit } from '@angular/core';
import {IClient} from '../../models/Client'

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client:IClient={
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    balance:0    
  };
  disableBalanceOnAdd:boolean = true;
  
  constructor() { }

  ngOnInit() {

  }

}
