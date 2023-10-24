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

  genders = Object.values(TipoGenero);
  userTypes = Object.values(TipoUsuario);
  states = Object.values(TipoEstado);

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.userForm = this.formBuilder.group({
      nome: ['', Validators.required],
      genero: [TipoGenero.Masculino, Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      tipoUsuario: [TipoUsuario.Administrador, Validators.required],
      endereco: this.formBuilder.group({
        cep: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: [null, Validators.required],
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

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
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
    }
  }
}

