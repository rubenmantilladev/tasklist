import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { StatusTransformPipe } from './pipes/status-transform.pipe';
import { PriorityTransformPipe } from './pipes/priority-transform.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StatusTransformPipe,
    PriorityTransformPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    StatusTransformPipe,
    PriorityTransformPipe,
  ],
})
export class SharedModule {}
