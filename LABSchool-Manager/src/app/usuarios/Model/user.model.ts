export interface User {
    id?: string;
    nome: string;
    genero: string;
    cpf: string;
    telefone: string;
    email: string;
    senha: string;
    tipo: string;
    endereco: {
      cep: string;
      cidade: string;
      estado: string;
      logradouro: string;
      numero: string;
      complemento?: string;
      bairro: string;
      referencia?: string;
    };
    status: string;
    matricula?: number;
    codigoProfessor?: string;
    whiteLabelId?: any; // Eu adicionei esta propriedade, mas você deve substituir 'any' pelo tipo correto
}

  