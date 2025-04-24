/// <reference types="Cypress" />

describe('API Login', () => {
  it('should login with valid credentials', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
          email: Cypress.env('user_email'),
          password: Cypress.env('user_password')
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('authorization')
      expect(res.body.message).to.eq('Login realizado com sucesso')
    })
  })
}) 