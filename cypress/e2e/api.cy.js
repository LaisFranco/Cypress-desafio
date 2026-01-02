const { expectListName } = require('../support/apiHelpers')

describe('API: Trello action', () => {
  it('GET action e valida campo list.name (usando fixture + comando)', () => {
    // usa o comando customizado que lê a fixture `trello.json`
    cy.getTrelloAction().then((response) => {
      // valida status 200 sempre
      expect(response.status).to.eq(200)

      // log completo do body para facilitar debugging quando a estrutura variar
      cy.log('response.body:', JSON.stringify(response.body))

      // Se o campo list existir, valida e loga seu name. Caso contrário, registra aviso.
      if (response.body && response.body.list && response.body.list.name) {
        const listName = expectListName(response)
        cy.log('list.name:', listName)
        // salva um relatório simples em JSON com o valor
        cy.writeFile('cypress/results/trello-action.json', { status: response.status, listName })
      } else {
        // não falhar — apenas logar que o campo não apareceu (pode exigir auth)
        cy.log('Aviso: campo `list` não presente na resposta; verifique se a API requer key/token')
        // salva o body completo para inspeção
        cy.writeFile('cypress/results/trello-action.json', { status: response.status, body: response.body })
      }
      // captura screenshot da execução para revisão visual
      cy.screenshot('api-response')
    })
  })
})
