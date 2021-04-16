import { Component, OnInit } from '@angular/core';
import {Category} from 'src/app/models/category';
import {CategoryService} from 'src/app/services/category.service';
import { DataTable } from "simple-datatables";
@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListAllComponent implements OnInit {

  categorys:Category[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    
 
    this.categoryService.getCategorys().subscribe(
      (response)=>{
      this.categorys=response.data;
      console.log(response.data);
      
    var data=response.data;
      let obj = {
        // Quickly get the headings
        headings: Object.keys(data[0]),
    
        // data array
        data: []
    };
    
    // Loop over the objects to get the values
    for ( let i = 0; i < data.length; i++ ) {
    
        obj.data[i] = [];
    
        for (let p in data[i]) {
            if( data[i].hasOwnProperty(p) ) {
                obj.data[i].push(data[i][p]);
            }
        }
    }


      
      let dataTable = new DataTable("#dataTableExample", {
        data: obj
      });


     
       }); 
  }

}