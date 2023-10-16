import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { CreateEditComponent } from './components/create-edit/create-edit.component';



@NgModule({
  declarations: [
    CreateEditComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class AtendimentosModule { }
