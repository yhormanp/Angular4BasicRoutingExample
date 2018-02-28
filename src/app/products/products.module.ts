import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router, ActivatedRoute} from '@angular/router'
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from '../main/main.component'


export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  // { path: 'more-info', component: MoreInfoComponent },
  { path: ':id', component: ProductComponent },
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  exports: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductModule { }
