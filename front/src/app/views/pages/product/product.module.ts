import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewComponent } from './add-new/add-new.component';
import { ListAllComponent } from './list-all/list-all.component';
import { Routes, RouterModule } from '@angular/router';
import{ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component:  AddNewComponent 
  },

  
  {
    path: 'add_new',
    component:  AddNewComponent
  },
       {
        path: 'list_all',
        component: ListAllComponent 
      },
    ]


@NgModule({
  declarations: [AddNewComponent, ListAllComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ProductModule { }
