# Projeto Cypress

Projeto de testes end-to-end (E2E) usando Cypress — exemplo focado no fluxo:
- busca de produto
- inclusão no carrinho
- validação dos itens na tela de pagamento

**Observação:** a estrutura foi pensada para ser simples e legível; você pode usar qualquer IDE, recomendo Visual Studio Code.

## Estrutura do projeto

```
cypress/
├── e2e/                # Specs (testes)
│   ├── login.cy.js
│   └── produtos.cy.js
├── fixtures/           # Dados de teste (ex: usuarios.json)
├── pages/              # Page Objects (LoginPage.js, ProductsPage.js)
├── support/            # Suporte e comandos (commands.js, e2e.js)
├── screenshots/        # Screenshots gerados pelos testes
cypress.config.js      # Configuração do Cypress
package.json           # Scripts e dependências
README.md
```

## Pré-requisitos

- Node.js (recomendo v16+ ou a versão que você usa localmente)
- npm
- Conexão com a internet (os testes acessam https://www.automationexercise.com)

## Instalação

1. Instale dependências:

```bash
npm install
```

2. (Opcional) Abra o projeto no VS Code:

```bash
code .
```

## Como executar

- Abrir o Cypress em modo interativo (GUI):

```bash
npm run cypress:open
```

- Executar os testes em modo headless (CI):

```bash
npm run cypress:run
```

- Executar um spec específico:

```bash
npm run cypress:run -- --spec "cypress/e2e/login.cy.js"
```

## Configuração de dados (fixtures)

O arquivo `cypress/fixtures/usuarios.json` contém as credenciais usadas pelos testes. Exemplo:

```json
{
  "usuarioValido": {
    "email": "teste2025@teste.com.br",
    "password": "teste"
  }
}
```

Edite esse arquivo se quiser usar outras credenciais.

## Notas sobre suporte e comandos

- `cypress/support/commands.js` armazena comandos customizados reutilizáveis (ex.: `cy.login()`).
- `cypress/support/e2e.js` é carregado antes dos specs — mantenha nele apenas imports e handlers globais.

## Executando no Visual Studio Code

1. Abra o projeto no VS Code.
2. Instale a extensão recomendada (opcional): ESLint, Prettier.
3. Use o terminal integrado para rodar os comandos `npm` acima.

