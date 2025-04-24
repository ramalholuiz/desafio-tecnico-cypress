Cypress.Commands.add('apiLogin', () => {
    cy.request('POST', 'https://serverest.dev/login', {
      email: Cypress.env('user_email'),
      password: Cypress.env('user_password')
    }).then(res => {
      expect(res.status).to.eq(200)
      Cypress.env('token', res.body.authorization)
    })
  })
