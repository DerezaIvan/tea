import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { TeaService } from 'src/app/services/tea.service';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css'],
})
export class CatalogItemComponent implements OnInit {
  product: any;

  constructor(
    private teaService: TeaService,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      price: 0,
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.teaService.getTeaProduct(+params['id']).subscribe({
          next: (data) => {
            this.product = data;
          },
          error: (error) => {
            this.router.navigate(['/']);
          },
        });
      }
      this.product.title = this.productService.product;
    });
  }

  addToCart(title: string): void {
    this.productService.product = title;
    this.router.navigate(['/order', { product: title }]);
  }
}
