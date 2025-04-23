// npx cypress run --spec "cypress/e2e/gui/login.cy.js"
describe('login', () => {
  it('sucessfully with valid credentials', () => {
    const email = Cypress.env('user_email')
    const password = Cypress.env('user_password')

    cy.intercept('POST', '**/login').as('loginRequest')
    cy.guiLogin(email, password)

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200)
  })

  it('should display an error message with invalid credentials', () => {
    const email = Cypress.env('invalid_user_email')
    const password = Cypress.env('invalid_user_password')

    cy.guiLogin(email, password)
    cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
  })

  it('should display an error message with empty credentials', () => {
    cy.visit('/login')
    cy.get("[data-testid='entrar']").click()
    cy.get("[data-dismiss='alert']").should('exist')
  })
})
