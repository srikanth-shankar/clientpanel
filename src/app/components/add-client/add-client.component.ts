import { Component, OnInit } from '@angular/core';
import {IClient} from '../../models/Client'
import {Router} from '@angular/router';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  isValidForm:boolean = true;

  client:IClient={
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    balance:0    
  };
  disableBalanceOnAdd:boolean = true;

  constructor(public router:Router, public cs:ClientService) { }

  ngOnInit() {

  }

  onSubmit({value, valid}:{value:IClient, valid:boolean}){
    if(this.disableBalanceOnAdd){
      value.balance=0;
    }
    if(!valid){
      //console.log('invalid');
      this.isValidForm = false;
      this.router.navigate(['add-client']);
    }else{
      //console.log('valid');
      this.isValidForm = true;
      //add client to swrvice
      this.cs.addClient(value);
      this.router.navigate(['/']);
    }
  }

}
