import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { User, TipoGenero, TipoUsuario, TipoEstado } from '../../Model/user.model';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {
  userForm: FormGroup;

  // Obtem valores dos enums para preencher as opções dos select no template.
  genders = Object.values(TipoGenero).filter(value => typeof value === 'string');
  userTypes = Object.values(TipoUsuario).filter(value => typeof value === 'string');
  states = Object.values(TipoEstado).filter(value => typeof value === 'string');

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.userForm = this.formBuilder.group({
      nome: ['', Validators.required],
      genero: ['Masculino', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      tipoUsuario: ['Administrador', Validators.required],
      endereco: this.formBuilder.group({
        cep: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['AC', Validators.required],
        logradouro: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: [''],
        bairro: ['', Validators.required],
        referencia: ['']
      }),
      statusAtivo: [true, Validators.required],
      matricula: [null],
      codigoProfessor: [null],
      whiteLabelId: [null]
    });
  }

  ngOnInit(): void {}

  stringToTipoGenero(value: string): TipoGenero {
    switch (value) {
        case "Masculino":
            return TipoGenero.Masculino;
        case "Feminino":
            return TipoGenero.Feminino;
        default:
            throw new Error('Genero inválido: ' + value);
    }
  }
  // Converte string que representa um gênero para valor enum correspondente.
  stringToTipoUsuario(value: string): TipoUsuario {
    switch (value) {
        case "Administrador":
            return TipoUsuario.Administrador;
        case "Pedagogo":
            return TipoUsuario.Pedagogo;
        case "Professor":
            return TipoUsuario.Professor;
        case "Aluno":
            return TipoUsuario.Aluno;
        default:
            throw new Error('Tipo de usuário inválido: ' + value);
    }
  }

  stringToTipoEstado(value: string): TipoEstado {
    switch (value) {
      case "AC": return TipoEstado.AC;
      case "AL": return TipoEstado.AL;
      case "AP": return TipoEstado.AP;
      case "AM": return TipoEstado.AM;
      case "BA": return TipoEstado.BA;
      case "CE": return TipoEstado.CE;
      case "DF": return TipoEstado.DF;
      case "ES": return TipoEstado.ES;
      case "GO": return TipoEstado.GO;
      case "MA": return TipoEstado.MA;
      case "MT": return TipoEstado.MT;
      case "MS": return TipoEstado.MS;
      case "MG": return TipoEstado.MG;
      case "PA": return TipoEstado.PA;
      case "PB": return TipoEstado.PB;
      case "PR": return TipoEstado.PR;
      case "PE": return TipoEstado.PE;
      case "PI": return TipoEstado.PI;
      case "RJ": return TipoEstado.RJ;
      case "RN": return TipoEstado.RN;
      case "RS": return TipoEstado.RS;
      case "RO": return TipoEstado.RO;
      case "RR": return TipoEstado.RR;
      case "SC": return TipoEstado.SC;
      case "SP": return TipoEstado.SP;
      case "SE": return TipoEstado.SE;
      case "TO": return TipoEstado.TO;
      default:
          throw new Error('Estado inválido: ' + value);
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;

      // funções de conversão
      user.genero = this.stringToTipoGenero(user.genero as unknown as string);
      user.tipoUsuario = this.stringToTipoUsuario(user.tipoUsuario as unknown as string);
      user.endereco.estado = this.stringToTipoEstado(user.endereco.estado as unknown as string);

      // Lógica para chamar o serviço e criar ou atualizar o usuário
      if (user.id) {
        this.usuarioService.updateUser(user.id, user).subscribe(
          response => {
            console.log('Usuário atualizado com sucesso!', response);
          },
          error => {
            console.error('Erro ao atualizar o usuário.', error);
          }
        );
      } else {
        this.usuarioService.createUser(user).subscribe(
          response => {
            console.log('Usuário criado com sucesso!', response);
          },
          error => {
            console.error('Erro ao criar o usuário.', error);
          }
        );
      }
    } else {
      console.error('Formulário inválido. Verifique os dados inseridos.');
    }
  }
}
