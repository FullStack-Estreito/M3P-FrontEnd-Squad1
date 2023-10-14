import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteLabelComponent } from './components/white-label/white-label.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    WhiteLabelComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports: [
    WhiteLabelComponent
  ]
})
export class WhiteLabelModule { }
