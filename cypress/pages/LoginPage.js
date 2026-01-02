// Page Object - Login
class LoginPage {
  // Elementos
  get inputEmail() {
    return cy.get('input[data-qa="login-email"]')
  }

  get inputPassword() {
    return cy.get('input[data-qa="login-password"]')
  }

  get btnLogin() {
    return cy.get('button[data-qa="login-button"]')
  }

  // Métodos/Ações
  visitarPaginaLogin() {
    cy.visit('https://www.automationexercise.com/login')
  }

  fazerLogin(email, password) {
    this.inputEmail.type(email)
    this.inputPassword.type(password)
    this.btnLogin.click()
  }
}

export default new LoginPage()
