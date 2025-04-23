Cypress.Commands.add('guiLogin', (
  user_email = Cypress.env('user_email'),
  user_password = Cypress.env('user_password')
) => {
  cy.visit('/login')

  cy.get('#email').type(user_email)
  cy.get('#password').type(user_password, { log: false })
  cy.get("[data-testid='entrar']").click()

})

Cypress.Commands.add('sessionLogin', () => {
    cy.session('user_session', () => {
      cy.guiLogin()
    })
})