import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEditComponent } from './Atendimentos/components/create-edit/create-edit.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WhiteLabelModule } from './white-label/white-label.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AtendimentosModule } from './Atendimentos/atendimentos.module';
import { LogsModule } from './logs/logs.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    WhiteLabelModule,
    HttpClientModule,
    FormsModule,
    UsuariosModule,
    AtendimentosModule,
    LogsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
