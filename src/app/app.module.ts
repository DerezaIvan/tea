import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { PopupService } from './services/popup.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { OrderModule } from './features/order/order.module';
import { MainModule } from './features/main/main.module';

@NgModule({
  declarations: [AppComponent, CatalogComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    OrderModule,
    MainModule,
    AppRoutingModule,
  ],
  providers: [PopupService],
  bootstrap: [AppComponent],
})
export class AppModule {}
