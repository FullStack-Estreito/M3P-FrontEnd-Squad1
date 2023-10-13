import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditComponent } from './components/create-edit/create-edit.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';



@NgModule({
  declarations: [
    CreateEditComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
