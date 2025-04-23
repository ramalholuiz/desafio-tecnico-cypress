// npx cypress run --spec "cypress/e2e/gui/users.cy.js"

describe('Users', () => {
  beforeEach(() => {
    cy.guiLogin()
  })

  it('should list all users', () => {
    cy.get("[data-testid='listarUsuarios']").click()
    cy.contains('h1', 'Lista dos usuários').should('be.visible')
  })
})