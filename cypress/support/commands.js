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

// API: Trello helper command
// Uso: cy.getTrelloAction() -> retorna a resposta do cy.request
Cypress.Commands.add('getTrelloAction', (overrides = {}) => {
  // carrega fixture com as configurações
  return cy.fixture('trello').then((cfg) => {
    const actionId = overrides.actionId || cfg.actionId
    const key = overrides.key || cfg.key
    const token = overrides.token || cfg.token
    const url = `${cfg.baseUrl}/actions/${actionId}`

    const options = {
      method: 'GET',
      url,
      qs: {},
      failOnStatusCode: false,
    }

    if (key) options.qs.key = key
    if (token) options.qs.token = token

    return cy.request(options)
  })
})
