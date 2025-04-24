/// <reference types="Cypress" />

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
})
