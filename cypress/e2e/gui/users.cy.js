/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Users', () => {
  beforeEach(() => {
    cy.guiLogin()
  })

  it('should list all users', () => {
    cy.get("[data-testid='listarUsuarios']").click()
    cy.contains('h1', 'Lista dos usuários').should('be.visible')
  })

  it.only('should add a new user', () => {
    const lastName = faker.person.lastName()
    const fullName = `Ciclano ${lastName}`
    const userEmail = faker.internet.email({ firstName: 'ciclano', lastName })

    cy.get("[data-testid='cadastrarUsuarios']").click()
    cy.contains('h1', 'Cadastro de usuários').should('be.visible')
    cy.addUser(fullName, userEmail, 'teste', true)
    cy.url().should('include', '/listarusuarios')
  })
})