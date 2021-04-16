import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricComponent } from './metric/metric.component';
import { Routes, RouterModule } from '@angular/router';
import{ReactiveFormsModule} from '@angular/forms';
import { ListAllComponent } from './list-all/list-all.component';

const routes: Routes = [
  {
    path: '',
    component:MetricComponent 
  },

  {
    path: 'metric',
    component: MetricComponent
  },
       {
        path: 'list_all',
        component: ListAllComponent 
      },
]
@NgModule({
  declarations: [MetricComponent, ListAllComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class MetricModule { }
