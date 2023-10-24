export interface Exercicio {
    id: number;
    titulo: string;
    descricao: string;
    materia: string;
    codigoProfessor: number;
    alunoId: number;
    dataConclusao: Date;
}

export enum TipoUsuario {
    Administrador = 0,
    Pedagogo = 1,
    Professor = 2,
    Aluno = 3
}