import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import { InputFieldComponent } from './input-field/input-field.component';

@NgModule({
  declarations: [
    ButtonComponent,
    LabelComponent,
    InputFieldComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonComponent,
    LabelComponent,
    InputFieldComponent,
  ]
})
export class SharedModule { }
