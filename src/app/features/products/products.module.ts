import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CatalogComponent } from 'src/app/components/catalog/catalog.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CatalogItemComponent } from 'src/app/components/catalog-item/catalog-item.component';

@NgModule({
  declarations: [CatalogComponent, CatalogItemComponent, ProductService],
  imports: [CommonModule, ProductsRoutingModule, RouterModule, ActivatedRoute],
})
export class ProductsModule {}
