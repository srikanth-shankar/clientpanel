import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {IClient} from '../../models/client';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id:string;
  client:IClient;
  hasBalnce:boolean=false;
  showBalUpdateInput:boolean=false;

  constructor(
    public cs:ClientService,
    public router:Router,
    public actvtdRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.actvtdRoute.snapshot.params['id'];
    //console.log(this.id);
    // get client by id
    this.cs.getClientById(this.id).subscribe(resClient=>{
      if(resClient.balance>0){
        this.hasBalnce = true;
      }
      this.client = resClient;
      //console.log(this.client);
    });
  }

}
