/// <reference types="cypress" />

describe('API - Users', () => {
  let uniqueEmail = `user${Date.now()}@qa.com`
  let userId = ''

  it('should create a new user successfully', () => {
    cy.request('POST', 'https://serverest.dev/usuarios', {
      nome: 'Usuário Teste',
      email: uniqueEmail,
      password: 'teste',
      administrador: 'true'
    }).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body.message).to.eq('Cadastro realizado com sucesso')
      expect(res.body).to.have.property('_id')

      userId = res.body._id
    })
  })

  it('should return an error when email is already registered', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      failOnStatusCode: false,
      body: {
        nome: 'Usuário Duplicado',
        email: uniqueEmail,
        password: 'teste',
        administrador: 'false'
      }
    }).then((res) => {
      expect(res.status).to.eq(400)
      expect(res.body.message).to.eq('Este email já está sendo usado')
    })
  })

  it('should list all users', () => {
    cy.request('GET', 'https://serverest.dev/usuarios').then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('quantidade')
      expect(res.body.usuarios).to.be.an('array')
    })
  })

  it('should delete the user using the saved ID', () => {
    cy.request({
      method: 'DELETE',
      url: `https://serverest.dev/usuarios/${userId}`
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.message).to.include('Registro excluído com sucesso')
    })
  })
})
