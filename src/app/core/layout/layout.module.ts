import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [LayoutComponent, HomeComponent],
  imports: [CommonModule, SharedModule, LayoutRoutingModule],
})
export class LayoutModule {}
