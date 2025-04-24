/// <reference types="cypress" />

describe('API - Users', () => {
  let uniqueEmail = `user${Date.now()}@qa.com`

  it('should create a new user successfully', () => {
    cy.request('POST', 'https://serverest.dev/usuarios', {
      nome: 'Usuário Teste',
      email: uniqueEmail,
      password: 'teste',
      administrador: 'true'
    }).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body.message).to.eq('Cadastro realizado com sucesso')
      expect(res.body).to.have.property('_id')
    })
  })

  it('should return an error when email is already registered', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      failOnStatusCode: false,
      body: {
        nome: 'Usuário Duplicado',
        email: uniqueEmail,
        password: 'teste',
        administrador: 'false'
      }
    }).then((res) => {
      expect(res.status).to.eq(400)
      expect(res.body.message).to.eq('Este email já está sendo usado')
    })
  })

  it('should list all users', () => {
    cy.request('GET', 'https://serverest.dev/usuarios').then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('quantidade')
      expect(res.body.usuarios).to.be.an('array')
    })
  })
})
