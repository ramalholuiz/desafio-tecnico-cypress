/// <reference types="Cypress" />

describe('API - Products', () => {
    let token = ''

    before(() => {
      cy.request('POST', 'https://serverest.dev/login', {
        email: Cypress.env('user_email'),
        password: Cypress.env('user_password')
      }).then((res) => {
        expect(res.status).to.eq(200)
        token = res.body.authorization
      })
    })

    it('should list all registered products', () => {
      cy.request('GET', 'https://serverest.dev/produtos').then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.have.property('quantidade')
        expect(res.body.produtos).to.be.an('array')
      })
    })
})