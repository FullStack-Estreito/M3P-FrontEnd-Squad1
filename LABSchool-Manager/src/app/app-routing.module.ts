import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent as AtendimentoListComponent} from './Atendimentos/components/list/list.component';
import { CreateComponent as AtendimentoCreateComponent } from './Atendimentos/components/create/create.component';
import { EditComponent as AtendimentoEditComponent } from './Atendimentos/components/edit/edit.component';
import { ListComponent as AvaliacaoListComponent } from './Avaliacoes/components/list/list.component';
import { CreateComponent as AvaliacaoCreateComponent } from './Avaliacoes/components/create/create.component';
import { EditComponent as AvaliacaoEditComponent } from './Avaliacoes/components/edit/edit.component';
import { ListComponent as ExercicioListComponent } from './exercicios/components/list/list.component';
import { CreateComponent as ExercicioCreateComponent } from './exercicios/components/create/create.component';
import { EditComponent as ExercicioEditComponent } from './exercicios/components/edit/edit.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
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
  { path: 'atendimentos/edit/:id', component: AtendimentoEditComponent },
  { path: 'avaliacoes/list', component: AvaliacaoListComponent },
  { path: 'avaliacoes/create', component: AvaliacaoCreateComponent },
  { path: 'avaliacoes/edit/:id', component: AvaliacaoEditComponent },
  { path: 'exercicios/list', component: ExercicioListComponent },
  { path: 'exercicios/create', component: ExercicioCreateComponent },
  { path: 'exercicios/edit/:id', component: ExercicioEditComponent },
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
