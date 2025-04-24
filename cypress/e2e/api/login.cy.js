/// <reference types="cypress" />

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

  it('should fail to login with invalid credentials', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      failOnStatusCode: false,
      body: {
        email: Cypress.env('invalid_user_email'),
        password: Cypress.env('invalid_user_password')
      }
    }).then((res) => {
      expect(res.status).to.eq(401)
      expect(res.body.message).to.eq('Email e/ou senha inválidos')
    })
  })
}) 