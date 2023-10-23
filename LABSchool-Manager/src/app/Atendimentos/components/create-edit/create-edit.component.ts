import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from '../../../services/atendimento.service';
import { Atendimento } from '../../model/atendimento.moel';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {

  alunos: any[] = [];
  pedagogos: any[] = [];
  atendimento: Atendimento = {
    dataHora: '',
    descricao: '',
    statusAtivo: true,
    alunoId: 0,
    pedagogoId: 0
  };

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit(): void {
    this.loadAlunos();
    this.loadPedagogos();
  }

  loadAlunos(): void {
    this.atendimentoService.getAlunos().subscribe(alunos => {
      this.alunos = alunos;
    });
  }

  loadPedagogos(): void {
    this.atendimentoService.getPedagogos().subscribe(pedagogos => {
      this.pedagogos = pedagogos;
    });
  }

  saveAtendimento(): void {
    this.atendimentoService.createAtendimento(this.atendimento).subscribe(result => {
     
      console.log("Atendimento criado com sucesso!", result);
    });
  }

  

}

