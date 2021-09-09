import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimaryButtonComponent } from './primary-button.component';

@NgModule({
  declarations: [PrimaryButtonComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [PrimaryButtonComponent]
})
export class PrimaryButtonModule { }
