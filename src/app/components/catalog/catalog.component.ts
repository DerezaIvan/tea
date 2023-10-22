import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeaService } from 'src/app/services/tea.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  teaProducts: any[] = [];

  constructor(private teaService: TeaService, private router: Router) {}

  ngOnInit(): void {
    this.teaService.getTeaProducts().subscribe({
      next: (products) => {
        this.teaProducts = products;
      },
      error: (error) => {
        console.log(error);
        this.router.navigate(['/']);
      },
    });
  }
}
