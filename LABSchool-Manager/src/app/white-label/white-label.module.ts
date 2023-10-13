import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteLabelComponent } from './components/white-label/white-label.component';



@NgModule({
  declarations: [
    WhiteLabelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WhiteLabelComponent
  ]
})
export class WhiteLabelModule { }
