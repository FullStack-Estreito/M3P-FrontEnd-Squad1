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
  userForm: FormGroup = new FormGroup({});
  isEditing: boolean = false;

  generos: string[] = Object.values(TipoGenero).filter((v): v is string => typeof v === 'string');
  tiposUsuario: string[] = Object.values(TipoUsuario).filter((v): v is string => typeof v === 'string');
  estados: string[] = Object.values(TipoEstado).filter((v): v is string => typeof v === 'string');

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    console.log('Componente CreateEdit iniciado.');
    this.initializeForm();
  }

  initializeForm() {
    console.log('Inicializando o formulário.');
    this.userForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      genero: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tipoUsuario: ['', Validators.required],
      cep: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      estado: ['', Validators.required],
      cidade: ['', [Validators.required, Validators.maxLength(100)]],
      logradouro: ['', [Validators.required, Validators.maxLength(20)]],
      numero: ['', [Validators.required, Validators.maxLength(10)]],
      complemento: ['', Validators.maxLength(100)],
      bairro: ['', [Validators.required, Validators.maxLength(120)]],
      referencia: ['', Validators.maxLength(120)],
      matricula: [''],
      codigoProfessor: [null], 
      whiteLabelId: [0], 
      statusAtivo: [true, Validators.required],
      senha: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('Método onSubmit chamado. Valor do formulário:', this.userForm.value);

    if (this.userForm.valid) {
      if (this.isEditing) {
        this.updateUser();
      } else {
        this.createUser();
      }
    } else {
      console.error('Erro: Formulário inválido.');
    }
  }

  createUser() {
    console.log('Tentando criar um novo usuário.');

    if (this.userForm.valid) {
      let formData = this.userForm.value;
      
      let userToSubmit: User = {
        nome: formData.nome,
        genero: +formData.genero, 
        cpf: formData.cpf,
        statusAtivo: formData.statusAtivo,
        telefone: formData.telefone,
        email: formData.email,
        senha: formData.senha,
        tipoUsuario: +formData.tipo, 
        matricula: formData.matricula,
        codigoProfessor: formData.codigoProfessor,
        whiteLabelId: formData.whiteLabelId || 0,
        endereco: {
          cep: formData.cep,
          cidade: formData.cidade,
          estado: +formData.estado,
          logradouro: formData.logradouro,
          numero: formData.numero,
          complemento: formData.complemento,
          bairro: formData.bairro,
          referencia: formData.referencia
        }
      };

      console.log('Dados formatados para criação:', userToSubmit);

      this.usuarioService.createUser(userToSubmit).subscribe(
        res => {
          console.log('Usuário criado com sucesso:', res);
        },
        err => {
          console.error('Erro ao criar usuário:', err);
        }
      );
    } else {
      console.error('Erro: Formulário inválido para criação.');
    }
  }

  updateUser() {
    console.log('Tentando atualizar o usuário.');

    if (this.userForm.valid) {
      const userId = this.userForm.get('id')?.value;
      if (userId) {
        console.log('ID do usuário:', userId);
        console.log('Dados para atualização:', this.userForm.value);

        this.usuarioService.updateUser(userId, this.userForm.value).subscribe(
          res => {
            console.log('Usuário atualizado com sucesso:', res);
          },
          err => {
            console.error('Erro ao atualizar usuário:', err);
          }
        );
      } else {
        console.error('Erro: ID do usuário não encontrado no formulário.');
      }
    } else {
      console.error('Erro: Formulário inválido para atualização.');
    }
  }
}
