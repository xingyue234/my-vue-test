// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('👍测试人员的饭碗', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
    cy.get('button').click()
    cy.contains('p', '好热')
  })
})
