# Projeto Cypress

- Projeto de testes end-to-end (E2E) usando Cypress — exemplo focado no fluxo:
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
README.md
```

## Pré-requisitos

- Node.js (recomendo v16+ ou a versão que você usa localmente)
- npm
- Conexão com a internet (os testes acessam https://www.automationexercise.com)

## Clonar o repositório (comece por aqui)

```bash
git clone git@github.com:LaisFranco/Cypress-desafio.git
cd Cypress-desafio
```
Após clonar, siga os passos de instalação abaixo.


## Instalação

1. Instale dependências:

```bash
npm install
```

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

### Abrir o Cypress usando o navegador Chrome

No modo interativo você pode escolher o navegador na UI. Para forçar o Chrome via CLI:

```bash
# abrir a interface do Cypress com o Chrome
npm run cypress:open -- --browser chrome

# executar em headless usando o Chrome
npm run cypress:run -- --browser chrome --headless
```

### Gravando vídeos das execuções

Por padrão o comando `cypress run` (modo headless) gera vídeos das execuções e os salva em `cypress/videos`.

- Para garantir que vídeos sejam gravados, verifique ou adicione no `cypress.config.js`:

```js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com'
  },
  video: true,
  videosFolder: 'cypress/videos'
})
```

- Para desabilitar vídeos (ex.: quando não quiser arquivos grandes):

```bash
npx cypress run --config video=false
```

Os screenshots continuam sendo salvos em `cypress/screenshots` automaticamente quando um teste falha (ou via `cy.screenshot()`).

### Nota sobre inclusão dos vídeos no repositório

- Para demonstração eu deixei os vídeos de `login` e `produtos` incluídos no repositório. Para isso a entrada que ignora `cypress/videos` foi temporariamente comentada no `.gitignore` para possibilitar o commit.
- Observação: o procedimento correto em projetos reais é NÃO commitar vídeos (arquivos binários grandes). Isso foi feito aqui apenas para facilitar a revisão e demonstração. Recomenda-se reverter a alteração no `.gitignore` após a demonstração.

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

-----

## Parte 2 — Teste de API (Trello)

Foi implementada a parte 2 do desafio de API que realiza um GET para a URL:

```
https://api.trello.com/1/actions/592f11060f95a3d3d46a987a
```

O teste valida o status code da resposta e, quando o campo está presente, exibe o valor do campo `name` dentro da estrutura `list` (no payload a chave fica em `response.body.data.list.name`).

O resultado desse GET é salvo em `cypress/results/trello-action.json` para inspeção e registro.

Observação: se a API exigir `key`/`token`, você pode configurá-los em `cypress/fixtures/trello.json` ou passar via `Cypress.env`.
