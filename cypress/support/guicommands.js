Cypress.Commands.add('guiLogin', (
    user_email = Cypress.env('user_email'),
    user_password = Cypress.env('user_password')
) => {
  cy.intercept('POST', '**/login').as('loginRequest')
  cy.visit('/')

  cy.get('#email').type(user_email)
  cy.get('#password').type(user_password, { log: false })
  cy.get("[data-testid='entrar']").click()
  cy.wait('@loginRequest').its('response.statusCode').should('eq', 200)
})

Cypress.Commands.add('sessionLogin', (
    user_email = Cypress.env('user_email'),
    user_password = Cypress.env('user_password')
) => {
  const login = () => cy.guiLogin(user_email, user_password)
  cy.session(user_email, login)
})

