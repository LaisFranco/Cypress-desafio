import './commands'

// Exemplo de hook antes de cada teste
beforeEach(() => {
  // Coloque código que você quer executar antes de cada teste
})

// Tratamento de exceções não capturadas
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
