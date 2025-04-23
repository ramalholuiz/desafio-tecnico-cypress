// npx cypress run --spec "cypress/e2e/gui/products.cy.js"
describe('Products', () => {
  beforeEach(() => {
    cy.guiLogin()
  })

  it('should list all products', () => {
    cy.get("[data-testid='listarProdutos']").click()
    cy.contains('h1', 'Lista dos Produtos').should('be.visible')
  })
})