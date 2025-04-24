/// <reference types="Cypress" />

describe('API - Products', () => {
    let token = ''
    let productName = `Test Product ${Date.now()}`

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

    it('should create a new product with a valid token', () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        headers: {
          Authorization: token
        },
        body: {
          nome: productName,
          preco: 199,
          descricao: 'RGB wireless gaming mouse',
          quantidade: 10
        }
      }).then((res) => {
        expect(res.status).to.eq(201)
        expect(res.body.message).to.eq('Cadastro realizado com sucesso')
      })
    })
})