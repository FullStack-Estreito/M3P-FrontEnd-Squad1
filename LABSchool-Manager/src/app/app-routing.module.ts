import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent as AtendimentoListComponent} from './Atendimentos/components/list/list.component';
import { CreateComponent as AtendimentoCreateComponent } from './Atendimentos/components/create/create.component';
import { EditComponent as AtendimentoEditComponent } from './Atendimentos/components/edit/edit.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { CreateEditComponent as ExercicioCreateEdit } from './exercicios/components/create-edit/create-edit.component';
import { CreateEditComponent as AvaliacoesCreateEdit } from './Avaliacoes/components/create-edit/create-edit.component';
import { ListComponent } from './usuarios/components/list/list.component';
import { DetailsComponent } from './usuarios/components/details/details.component';
import { WhiteLabelComponent } from './white-label/components/white-label/white-label.component';
import { LogsComponent } from './logs/components/logs/logs.component';
import { CreateEditComponent} from './usuarios/components/create-edit/create-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'atendimentos/list', component: AtendimentoListComponent },
  { path: 'atendimentos/create', component: AtendimentoCreateComponent },
  { path: 'atendimentos/edit', component: AtendimentoEditComponent },
  { path: 'avaliacoes/edit', component: AvaliacoesCreateEdit },
  { path: 'exercicios/edit', component: ExercicioCreateEdit },
  { path: 'usuarios', component: ListComponent },
  { path: 'usuarios/details', component: DetailsComponent },
  { path: 'alunos', component: DetailsComponent },//componente do modulo usuario
  { path: 'usuarios/criar-editar', component: CreateEditComponent },
  { path: 'white-label', component: WhiteLabelComponent },
  { path: 'logs', component: LogsComponent },
  { path: '**', redirectTo: '/dashboard' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
