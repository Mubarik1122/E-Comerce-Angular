import { LayoutComponent } from './../Component/layout/layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { FilterPipe } from './../shared/filter.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    CartComponent,
    ProductComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
  ]
})
export class SiteModule { }
