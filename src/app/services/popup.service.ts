import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private showPopupSubject = new BehaviorSubject<boolean>(false);
  public showPopup$: Observable<boolean> = this.showPopupSubject.asObservable();
  constructor(private router: Router) {}

  showPopup() {
    const currentRoute = this.router.url;
    if (currentRoute === '/') {
      setTimeout(() => {
        this.showPopupSubject.next(true);
      }, 10000);
    } else {
      this.showPopupSubject.next(false);
    }
  }
}
