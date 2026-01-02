// Helpers para validações de API

function expectListName(response) {
  expect(response).to.have.property('body')
  expect(response.body).to.have.property('list')
  expect(response.body.list).to.have.property('name')
  return response.body.list.name
}

module.exports = { expectListName }
