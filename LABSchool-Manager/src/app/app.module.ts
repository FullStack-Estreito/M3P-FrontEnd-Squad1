import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WhiteLabelModule } from './white-label/white-label.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AtendimentosModule } from './Atendimentos/atendimentos.module';
import { LogsModule } from './logs/logs.module';
import { ExerciciosModule } from './exercicios/exercicios.module';
import { AvaliacoesModule } from './Avaliacoes/avaliacoes.module';

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
    LogsModule,
    ExerciciosModule,
    AvaliacoesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
