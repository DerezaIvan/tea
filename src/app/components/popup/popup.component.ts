import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  showPopup: boolean = false;

  constructor(private popupService: PopupService, private router: Router) {
    this.popupService.showPopup$.subscribe((show) => {
      this.showPopup = show;
    });
  }

  redirectCatalog() {
    this.router.navigate(['/catalog']);
    this.showPopup = false;
  }
}
