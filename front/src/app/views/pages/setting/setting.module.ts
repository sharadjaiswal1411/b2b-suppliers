import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import{ReactiveFormsModule} from '@angular/forms';
import { SettingComponent } from './setting/setting.component';
import { ListAllComponent } from './list-all/list-all.component';

const routes: Routes = [
  {
    path: '',
    component:SettingComponent 
  },

  {
    path: 'setting',
    component:  SettingComponent
  },
       {
        path: 'list_all',
        component: ListAllComponent 
      },
    ]

@NgModule({
  declarations: [SettingComponent, ListAllComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class SettingModule { }
