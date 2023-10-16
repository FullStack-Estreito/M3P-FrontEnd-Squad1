import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditComponent } from './components/create-edit/create-edit.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    CreateEditComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class ExerciciosModule { }
