import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimaryButtonComponent } from './primary-button.component';

@NgModule({
  declarations: [PrimaryButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [PrimaryButtonComponent]
})
export class PrimaryButtonModule { }
