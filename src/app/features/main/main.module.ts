import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from 'src/app/components/main/main.component';
import { RouterModule } from '@angular/router';
import { PopupComponent } from 'src/app/components/popup/popup.component';

@NgModule({
  declarations: [MainComponent, PopupComponent],
  imports: [CommonModule, MainRoutingModule, RouterModule],
  exports: [PopupComponent],
})
export class MainModule {}
