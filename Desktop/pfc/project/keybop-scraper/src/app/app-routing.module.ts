import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './views/landing/landing.component';
import { ShopListComponent } from './views/shop-list/shop-list.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch: 'full'},
  {path:'home', component: LandingComponent},
  {path:'shop', component: ShopListComponent},
  {path:'shop/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
