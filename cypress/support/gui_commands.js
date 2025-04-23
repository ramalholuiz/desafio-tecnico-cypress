Cypress.Commands.add('guiLogin', (
  user_email = Cypress.env('user_email'),
  user_password = Cypress.env('user_password')
) => {
  cy.visit('/login')
  cy.get('#email').type(user_email)
  cy.get('#password').type(user_password, { log: false })
  cy.get("[data-testid='entrar']").click()
  cy.url().should('include', '/home')
})

Cypress.Commands.add('AddProduct', (productName, productPrice, productDescription, productQuantity) => {
  cy.fixture('mouse.jpg').as('imageFile')
  
  cy.get("[data-testid='nome']").type(productName)
  cy.get("[data-testid='preco']").type(productPrice)
  cy.get("[data-testid='descricao']").type(productDescription)
  cy.get("[data-testid='quantity']").type(productQuantity)
  cy.get("[data-testid='imagem']").selectFile('@imageFile').should(input => {
    expect(input[0].files[0].name).to.eq('mouse.jpg')
  })
  cy.get("[data-testid='cadastarProdutos']").click()
})