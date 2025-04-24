# Desafio Técnico Cypress - NTTDATA

Este repositório apresenta a solução do desafio técnico de automação de testes utilizando Cypress e JavaScript, com foco em testes de interface (E2E) e testes diretos de API. Demonstrando boas práticas de automação, organização de cenários e integração com CI/CD via GitHub Actions.

## Resumo

- Testes feitos com Cypress (E2E + API)
- Login, Produtos e Usuários foram testados
- Cypress + GitHub Actions + comandos customizados utilizando boas praticas
- Para rodar: `npm install && npx cypress run`

## Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) versão 14.3.1
- [Faker.js](https://fakerjs.dev/) para geração dinâmica de dados (opcional)
- JavaScript (ES6)
- Node.js

## Estrutura do projeto

A organização do projeto segue a separação entre testes de interface (GUI) e testes de API, com suporte a comandos reutilizáveis.

```
cypress/
├── e2e/
│   ├── api/
│   │   ├── login.cy.js
│   │   ├── products.cy.js
│   │   └── users.cy.js
│   ├── gui/
│   │   ├── login.cy.js
│   │   ├── products.cy.js
│   │   └── users.cy.js
├── fixtures/
│   └── mouse.jpg
├── support/
│   ├── e2e.js
│   └── gui_commands.js
```

Arquivos adicionais:

- `cypress.config.js` – Configuração global do Cypress
- `cypress.env.json` – Variáveis de ambiente (e-mails e senhas de teste)
- `package.json` – Dependências e scripts do projeto
- `README.md` – Documentação do projeto

## Aplicação testada

- **Frontend (Beta):** https://front.serverest.dev/
- **API REST (Swagger):** https://serverest.dev/

A aplicação simula uma loja virtual com funcionalidades de login, cadastro de usuários, listagem e criação de produtos, e carrinhos de compra.

## Escopo dos testes

### Testes de Interface (GUI)

- Validação do login com credenciais válidas, inválidas e em branco
- Cadastro de usuários com dados dinâmicos
- Cadastro de produtos com imagem
- Navegação entre telas e validações visuais

### Testes de API REST

- Login via API e uso de token de autenticação (JWT)
- Criação e exclusão de usuários
- Prevenção de usuários duplicados
- Criação de produtos com e sem autenticação
- Listagem de produtos e usuários

## Como executar os testes

### Instalação

Execute o seguinte comando na raiz do projeto:

```bash
npm install
```

### Execução dos testes com interface visual

```bash
npm run cy:open
```

### Execução dos testes em modo headless (linha de comando)

```bash
npm run cy:run
```

## Variáveis de ambiente

As credenciais utilizadas nos testes estão configuradas no arquivo `cypress.env.json`:

```json
{
  "user_email": "fulano@qa.com",
  "user_password": "teste",
  "invalid_user_email": "invalid@test.com",
  "invalid_user_password": "teste"
}
```

Esses valores são utilizados tanto nos testes de GUI quanto nos testes de API para cenários positivos e negativos.


## Considerações finais

Este projeto demonstra a aplicação de prática de automação de testes com Cypress, organizado para facilitar a manutenção, legibilidade.
