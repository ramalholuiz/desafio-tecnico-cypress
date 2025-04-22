// npx cypress run --spec "cypress/e2e/gui/login.cy.js"
describe('login', () => {
  it('sucessfully', () => {
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
    cy.contains('Email e/ou senha inválidos').should('be.visible')
    cy.get('.btn-close-error-alert').click()
  })
})
