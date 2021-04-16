import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddNewComponent } from './add-new/add-new.component';
import{ReactiveFormsModule} from '@angular/forms';
import { ListAllComponent } from './list-all/list-all.component';

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
  declarations: [ AddNewComponent, ListAllComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class UserModule { }
