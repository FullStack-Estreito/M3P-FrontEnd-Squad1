import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service'; 
import { User } from '../../../usuarios/Model/user.model';

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

  constructor(private dashboardService: DashboardService) { }

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
}

