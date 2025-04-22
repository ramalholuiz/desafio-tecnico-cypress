describe('login', () => {
  it('sucessfully', () => {
    cy.guiLogin()

    cy.contains('h4', 'Produtos').should('be.visible')
  })
})