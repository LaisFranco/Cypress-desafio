Cypress.Commands.add('login', (email, password) => {
  cy.visit('/')
  cy.get('input[type="email"]').type(email)
  cy.get('input[type="password"]').type(password)
  cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('checkUrl', (url) => {
  cy.url().should('include', url)
})

Cypress.Commands.add('waitForElement', (selector) => {
  cy.get(selector, { timeout: 10000 }).should('be.visible')
})
