import { Component, OnInit } from '@angular/core';
import {Supplier} from 'src/app/models/supplier';
import { ServerDataSource } from 'ng2-smart-table';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import {environment} from 'src/environments/environment';
@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListAllComponent implements OnInit {
  data:any = [];
  source: ServerDataSource;
  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false,
        editable: false,
        addable: false
      },
      name: {
        title: 'Name',
        filter: true
      },
      business_id: {
        title: 'Business Id',
        filter: true
      },
   
    },
    pager : {
                  perPage :10
    },
    actions: true
  };
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    this.source = new ServerDataSource(
      this.http, { endPoint: environment.apiUrl+ 'supplier', 
      dataKey:'data',
    totalKey:'total',
    perPage:'per_page',
    pagerPageKey:'page'
 
  });
console.log("source",this.source);

}

}