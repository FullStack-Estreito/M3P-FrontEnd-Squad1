import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service'; 
import { User } from '../../../usuarios/Model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  usuarios: any[] = [];
  totalAlunos: number = 0; 
  totalExercicios: number = 0;
  totalAvaliacoes: number = 0;
  totalAtendimentos: number = 0;
  alunos: User[] = [];
  buscaUsuarios: any[] = [];
  buscaAlunos: User[] = [];

  constructor(private dashboardService: DashboardService, private router: Router) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dashboardService.getAlunos().subscribe(alunos => this.totalAlunos = alunos.length);

    this.dashboardService.getTotalExercicios().subscribe(total => this.totalExercicios = total);
    this.dashboardService.getTotalAvaliacoes().subscribe(total => this.totalAvaliacoes = total);
    this.dashboardService.getTotalAtendimentos().subscribe(total => this.totalAtendimentos = total);
    this.dashboardService.getAlunos().subscribe(alunos => this.alunos = alunos);
    this.dashboardService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
}


  onSearch(query: string): void {
    
  }

  onViewMore(id: number): void {
    //lógica para visualizar 
  }

  onEdit(id: number): void {
    // lógica de edição 
  }

  buscaUser(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value.toLowerCase();
  
    if (inputValue === '') {
      // Campo de busca vazio, não faça nada
      this.buscaUsuarios = [];
    } else {
      // Executar a pesquisa com o termo digitado
      this.buscaUsuarios = this.usuarios.filter(usuario => {
        return (
          usuario.nome.toLowerCase().includes(inputValue) ||
          usuario.telefone.includes(inputValue) ||
          usuario.cpf.includes(inputValue)
        );
      });
    }
  }
  

  buscaAluno(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value.toLowerCase();
  
    if (inputValue === '') {
      // Campo de busca vazio, não faça nada
      this.buscaAlunos = [];
    } else {
      // Executar a pesquisa com o termo digitado
      this.buscaAlunos = this.alunos.filter(aluno => {
        return (
          aluno.nome.toLowerCase().includes(inputValue) ||
          aluno.telefone.includes(inputValue) ||
          aluno.cpf.includes(inputValue)
        );
      });
    }
  }
  

  navigateTo(route: string) {
    this.router.navigate([route,]);
  }
  
}
@Pipe({
  name: 'userType'
})
export class UserTypePipe implements PipeTransform {
  transform(userType: number): string {
    switch (userType) {
      case 0: return 'Administrador';
      case 1: return 'Pedagogo';
      case 2: return 'Professor';
      case 3: return 'Aluno';
      default: return 'Desconhecido';
    }
  }

 
}

