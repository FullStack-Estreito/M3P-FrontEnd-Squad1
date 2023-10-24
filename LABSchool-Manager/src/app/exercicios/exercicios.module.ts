import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditComponent } from './components/create-edit/create-edit.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateEditComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ExerciciosModule { }
