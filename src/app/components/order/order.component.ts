import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  product: any;
  public checkoutForm: FormGroup;

  // Валидация формы
  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private productService: ProductService
  ) {
    this.checkoutForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[а-яА-Я]+$')]],
      last_name: ['', [Validators.required, Validators.pattern('^[а-яА-Я]+$')]],
      phone: ['', [Validators.required]],
      country: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      address: [
        '',
        [Validators.required, Validators.pattern('^[а-яА-Я0-9,.\\s]+$')],
      ],
      product: [{ value: '', disabled: true }],
      comment: ['', Validators.pattern('^[а-яА-Я0-9,.s]+$')],
    });
  }
  ngOnInit(): void {
    if (this.productService.product) {
      this.checkoutForm.get('product')?.setValue(this.productService.product);
    }
    console.log(this.checkoutForm.value);
  }
  onSubmit(event: Event) {
    event.preventDefault();

    if (this.checkoutForm.valid) {
      const formData = this.checkoutForm.value;
      const result = this.orderService.placeOrder(formData).subscribe(
        (response: any) => {
          if (response.success === 1) {
            // Заказ успешно отправлен
            alert('Спасибо за заказ!');
          } else {
            // Произошла ошибка
            alert(`Произошла ошибка. Попробуйте ещё раз`);
          }
        },
        (error) => {
          alert(`Ошибка при отправке запроса: ${error}`);
        }
      );
      console.log(result);
    }
  }
}
