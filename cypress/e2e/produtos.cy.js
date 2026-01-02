import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import usuarioData from '../fixtures/usuarios.json'

describe('Testes de Produtos - Fluxo de Carrinho', () => {
  
  beforeEach(() => {
    // Fazer login antes de cada teste
    LoginPage.visitarPaginaLogin()
    LoginPage.fazerLogin(
      usuarioData.usuarioValido.email,
      usuarioData.usuarioValido.password
    )
    cy.url().should('include', 'automationexercise.com')
  })

  it('Deve realizar busca e incluir produto no carrinho', () => {
    // 1. Vai para página de produtos
    ProductsPage.visitarPaginaProdutos()
    
    // 2. Busca um produto (clicando em "Add to cart")
    ProductsPage.adicionarPrimeiroProdutoAoCarrinho()
    
    // 3. Vai para carrinho
    cy.contains('a', 'Cart').click()
    
    // 4. Valida que está na tela de carrinho
    ProductsPage.verificarCarrinho()
    
    // 5. Valida que o produto foi incluído
    cy.get('tbody tr').should('have.length.greaterThan', 0)
  })

  it('Deve validar produtos na tela de pagamento', () => {
    // 1. Vai para produtos e adiciona ao carrinho
    ProductsPage.visitarPaginaProdutos()
    ProductsPage.adicionarPrimeiroProdutoAoCarrinho()
    
    // 2. Vai para carrinho
    cy.contains('a', 'Cart').click()
    ProductsPage.verificarCarrinho()
    
    // 3. Procede para checkout
    cy.get('a.btn.btn-default').contains('Proceed To Checkout').click()
    cy.wait(2000)
    
    // 4. Valida que está na tela de pagamento
    cy.url().should('include', '/checkout')
    
    // 5. Valida que o produto aparece na tela de pagamento
    cy.get('tbody').should('contain', 'Blue Top')
  })
})
