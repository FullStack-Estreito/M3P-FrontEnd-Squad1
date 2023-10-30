# M3P-FrontEnd-Squad1

Frontend da LABSchool-Manager, uma aplicação Angular integrada com a API RESTful em C# .NET usando SQL Server como banco de dados.

## Tecnologias Utilizadas

- **Angular**: Framework de desenvolvimento para construção de interfaces de usuário.
- **Serviços**: Utilizados para encapsular lógica de negócios e interação com a API.
- **Componentização**: Divisão de interfaces em componentes reutilizáveis.
- **Data Binding**: Ligação bidirecional de dados entre o modelo e a interface.
- **Diretivas**: Adicionam comportamentos às tags HTML.
- **Layouts**: Organização e posicionamento dos componentes na interface.
- **Rotas**: Navegação entre diferentes componentes sem recarregar a página inteira.
- **Guarda de Rotas**: Proteção de rotas com base em condições específicas.
- **Requisições HTTP**: Interação com a API RESTful para buscar ou enviar dados.
- **Formulários Template-Driven e Reactive Forms**: Manipulação e validação de formulários.

## Pré-requisitos

- [Node.js](https://nodejs.org/en/download/) instalado
- [Angular CLI](https://angular.io/cli) instalado (`npm install -g @angular/cli`)

## Instalação e Execução

1. Clone o repositório: `git clone https://github.com/FullStack-Estreito/M3P-FrontEnd-Squad1.git`
2. Navegue até o diretório do projeto: `cd LABSchool-Manager`
3. Instale as dependências: `npm install`
4. Inicie o servidor de desenvolvimento e acesse: `ng serve --o`

## Uso

1. A aplicação está completamente integrada com a API. Certifique-se de que a API está rodando em `http://localhost:5203` para garantir o funcionamento correto do frontend.
2. Certifique-se de ter criado um usuário administrador e um whitelabel, pelo swagger da API através dos endpoints POST. O frontend possui autenticação de login e somente dará o primeiro acesso ao sistema para um usuário administrador. 

Usuário Admministrador (Admin é do tipoUsuario 0):
```
{
  "nome": "stringst",
  "genero": 0,
  "cpf": "stringstrin",
  "statusAtivo": true,
  "telefone": "stringstringstr",
  "email": "user@example.com",
  "senha": "string",
  "tipoUsuario": 0,
  "matricula": 0,
  "codigoProfessor": 0,
  "whiteLabelId": 0,
  "endereco": {
    "cep": "stringstr",
    "cidade": "string",
    "estado": 0,
    "logradouro": "string",
    "numero": "string",
    "complemento": "string",
    "bairro": "string",
    "referencia": "string"
  }
}
````

White Label:
```
{
  "nomeEmpresa": "string",
  "slogan": "string",
  "cores": "string",
  "urlLogo": "string",
  "complemento": "string"
}
```
## Estrutura do Projeto

- **/src/app**: Contém os componentes, serviços e modelos da aplicação.
- **/src/assets**: Recursos estáticos como imagens e estilos.

---

**Nota:** Certifique-se de que a API esteja rodando corretamente para evitar problemas de funcionalidade.

