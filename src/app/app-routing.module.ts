
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from "./site/product/product.component";
import { LayoutComponent } from './Component/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./site/site.module').then(m => m.SiteModule)
      },
    ]
  },
  {
    path: 'Cart',
    component: LayoutComponent,
    data: {
      title: 'Cart'
    },
    children: [
      {
        path: 'Cart',
        loadChildren: () => import('./site/site.module').then(m => m.SiteModule)
      },
    ]
  },
  { path: 'product/:productId', component: ProductComponent,
  data: {
    title: 'product/:productId'
  },
  children: [
    {
      path: 'product/:productId',
      loadChildren: () => import('./site/site.module').then(m => m.SiteModule)
    },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
