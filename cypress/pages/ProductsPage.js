// Page Object - Produtos
class ProductsPage {
  // Elementos
  get btnAdicionarPrimeiroProduto() {
    return cy.get('a.btn.btn-default.add-to-cart').first()
  }

  get categoriaMulheres() {
    return cy.get('a[href="/category_products/1"]')
  }

  get categoriaMens() {
    return cy.get('a[href="/category_products/2"]')
  }

  get categoriaKids() {
    return cy.get('a[href="/category_products/3"]')
  }

  get botaoAdicionarAoCarrinhoCategoria() {
    return cy.get('a.btn.btn-default.add-to-cart').first()
  }

  get lblCarrinho() {
    return cy.contains('Cart')
  }

  get btnContinuar() {
    return cy.contains('Continue Shopping')
  }

  get btnProceeedCheckout() {
    return cy.contains('Proceed To Checkout')
  }

  // Métodos/Ações
  visitarPaginaProdutos() {
    cy.visit('https://www.automationexercise.com/products')
  }

  adicionarPrimeiroProdutoAoCarrinho() {
    this.btnAdicionarPrimeiroProduto.click()
    // Aguarda o modal de confirmação e remove-o para permitir cliques subsequentes
    cy.get('#cartModal', { timeout: 5000 })
      .should('be.visible')
      .invoke('remove')
    cy.wait(500)
  }

  selecionarCategoria(categoria) {
    if (categoria === 'WOMEN') {
      this.categoriaMulheres.click()
    } else if (categoria === 'MEN') {
      this.categoriaMens.click()
    } else if (categoria === 'KIDS') {
      this.categoriaKids.click()
    }
  }

  adicionarProdutoDaCategoriaAoCarrinho() {
    this.botaoAdicionarAoCarrinhoCategoria.click()
    cy.wait(1000)
  }

  verificarCarrinho() {
    cy.url().should('include', '/view_cart')
  }

  clicarContinuar() {
    cy.contains('Continue Shopping').click({ force: true })
    cy.wait(1000)
  }

  irParaCheckout() {
    this.btnProceeedCheckout.click()
    cy.wait(2000)
  }

  preencherDadosCheckout(dados) {
    cy.get('input[name="first_name"]').type(dados.nome)
    cy.get('input[name="email"]').type(dados.email)
    cy.get('textarea[name="address1"]').type(dados.endereco)
    cy.get('input[name="state"]').type(dados.estado)
    cy.get('input[name="zipcode"]').type(dados.cep)
    cy.get('input[name="country"]').type(dados.pais)
    cy.get('input[name="mobile_number"]').type(dados.telefone)
  }

  preencherDadosCartao(dados) {
    cy.get('input[name="name_on_card"]').type(dados.nomeCartao)
    cy.get('input[name="card_number"]').type(dados.numeroCartao)
    cy.get('input[name="cvc"]').type(dados.cvv)
    cy.get('input[name="expiry_month"]').type('12')
    cy.get('input[name="expiry_year"]').type('25')
  }

  clicadorBotaoPagar() {
    cy.contains('Pay and Confirm Order').click()
  }
}

export default new ProductsPage()
