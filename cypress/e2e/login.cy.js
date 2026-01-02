import LoginPage from '../pages/LoginPage'
import usuarioData from '../fixtures/usuarios.json'

describe('Testes de Login', () => {
  
  beforeEach(() => {
    LoginPage.visitarPaginaLogin()
  })

  it('Deve fazer login com credenciais válidas', () => {
    LoginPage.fazerLogin(
      usuarioData.usuarioValido.email,
      usuarioData.usuarioValido.password
    )
    cy.url().should('include', 'automationexercise.com')
  })
})
