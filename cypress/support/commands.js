Cypress.Commands.add('loginSession', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
    // Validamos que el login fue exitoso antes de guardar la sesión
    cy.url().should('contain', '/inventory.html')
  }, {
    cacheAcrossSpecs: true // Mantiene la sesión viva entre distintos archivos .feature
  })
})