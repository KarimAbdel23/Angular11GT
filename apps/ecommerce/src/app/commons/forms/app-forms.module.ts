import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailFormatDirective } from './email-format.directive';



@NgModule({
  declarations: [
    EmailFormatDirective
  ],
  exports:[
    EmailFormatDirective
  ],
  imports: [
    CommonModule
  ]
})
export class AppFormsModule { }
