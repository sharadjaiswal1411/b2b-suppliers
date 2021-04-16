import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
const routes: Routes = [

  {
    path: '',
    component: BaseComponent,
    children: [

      {
        path: 'dashboard',
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },

      {
        path: 'brand',
        loadChildren: () => import('./views/pages/brand/brand.module').then(m => m.BrandModule)
      },
      
      
      {
        path: 'category',
        loadChildren: () => import('./views/pages/category/category.module').then(m => m.CategoryModule)
      },

      {
        path: 'product',
        loadChildren: () => import('./views/pages/product/product.module').then(m => m.ProductModule)
      },

      {
        path: 'setting',
        loadChildren: () => import('./views/pages/setting/setting.module').then(m => m.SettingModule)
      },

      {
        path: 'supplier',
        loadChildren: () => import('./views/pages/supplier/supplier.module').then(m => m.SupplierModule)
      },

      {
        path: 'user',
        loadChildren: () => import('./views/pages/user/user.module').then(m => m.UserModule)
      },

      {
        path: 'metric',
        loadChildren: () => import('./views/pages/metric/metric.module').then(m => m.MetricModule)
      },
    ]
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
