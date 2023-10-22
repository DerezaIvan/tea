import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogItemComponent } from './components/catalog-item/catalog-item.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog-item/:id', component: CatalogItemComponent },
  { path: 'order', component: OrderComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
