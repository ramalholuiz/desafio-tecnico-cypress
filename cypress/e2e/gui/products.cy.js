/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'

describe('Products', () => {
  beforeEach(() => {
    cy.guiLogin()
  })

  it('should list all products', () => {
    cy.get("[data-testid='listarProdutos']").click()
    cy.contains('h1', 'Lista dos Produtos').should('be.visible')
  })

  it('should add a new product', () => {
    const productName = faker.commerce.productName()

    cy.get("[data-testid='cadastrarProdutos']").click()
    cy.contains('h1', 'Cadastro de Produtos').should('be.visible')
    cy.addProduct(productName, '30', 'Mouse bluetooth preto', '1')
    cy.url().should('include', '/listarprodutos')
  })
})