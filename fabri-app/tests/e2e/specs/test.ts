// https://docs.cypress.io/api/table-of-contents

describe('Recipe-Creation', () => {
  it('URL should reflect the entered recipe', () => {
    cy.visit('/')
    cy.title()
      .should('eq', 'fabri')
    cy.contains('h1', 'Fast bring recipe importer')
    cy.url()
      .should('not.contain', 'n=')

    cy.contains('h2', 'Recipe')
      .next()
      .within(() => {
        cy.findByLabelText('Recipe Name:')
          .should('be.empty')
          .type('Humus mit Erdbeeren')

        cy.title()
          .should('eq', 'fabri - Humus mit Erdbeeren')

        cy.url()
          .should('contain', 'n=Humus+mit+Erdbeeren')

        cy.findByLabelText('Ingredient 1:')
          .should('be.empty')
          .type('Kichererbsen')

        cy.url()
          .should('contain', '&Kichererbsen')

        cy.findByLabelText('Quantity 1:')
          .should('be.empty')
          .type('200g')

        cy.url()
          .should('contain', '&Kichererbsen=200g')

        cy.findByLabelText('Ingredient 2:')
          .should('be.empty')
          .type('Oel')

        cy.findByLabelText('Quantity 2:')
          .should('be.empty')
          .type('70ml')

        cy.url()
          .should('contain', `&${encodeURI('Oel')}=70ml`)
      })
  })

  it('It should be possible to visit and change a given recipe url', () => {
    cy.visit('/?n=Kalter+Kaffee&Eis&Alter+Kaffee=200+ml')
    cy.title()
      .should('eq', 'fabri - Kalter Kaffee')

    cy.contains('h1', 'Fast bring recipe importer')

    cy.contains('h2', 'Recipe')
      .next()
      .within(() => {
        cy.findByLabelText('Recipe Name:')
          .should('have.value', 'Kalter Kaffee')

        cy.findByLabelText('Ingredient 1:')
          .should('have.value', 'Eis')

        cy.findByLabelText('Quantity 1:')
          .should('be.empty')

        cy.findByLabelText('Ingredient 2:')
          .should('have.value', 'Alter Kaffee')

        cy.findByLabelText('Quantity 2:')
          .should('have.value', '200 ml')
      })
  })

  it('should be possible to import a recipe to bring', () => {
    cy.visit('/?n=Herb+Butter&Butter=200g&Herbs&Salt=1+pinch')

    cy.findByText('Import to bring')
      .should('have.attr', 'href', 'https://api.getbring.com/rest/bringrecipes/deeplink?url=https%3A%2F%2Fus-central1-bring-recipe-provider.cloudfunctions.net%2Frecipes%2Fq1bKU7JS8kgtSlJwKi0pSS1S0lHKVLKqVoLyrJSMDAzSgYIgJcVALpAZnJhTAmQZKhRk5iVnKNXWAgA&source=web&baseQuantity=4&requestedQuantity=4')
  })

  it('should be possible to copy the import to bring to the clipboard', () => {
    cy.visit('/?n=Herb+Butter&Butter=200g&Herbs&Salt=1+pinch')

    cy.findByText('copy link to clipboard')
      .click()
    cy.log('1')

    cy.window().then(win =>
      new Cypress.Promise((resolve, reject) =>
        win.navigator
          .clipboard
          .readText()
          .then(clipboardText => resolve(clipboardText))
          .catch(reject))
    ).should('eq', 'https://api.getbring.com/rest/bringrecipes/deeplink?url=https%3A%2F%2Fus-central1-bring-recipe-provider.cloudfunctions.net%2Frecipes%2Fq1bKU7JS8kgtSlJwKi0pSS1S0lHKVLKqVoLyrJSMDAzSgYIgJcVALpAZnJhTAmQZKhRk5iVnKNXWAgA&source=web&baseQuantity=4&requestedQuantity=4')
  })

  // TO O: marmer 22.02.2022 NFC Support
  // TODO: marmer 22.02.2022 QR Support
  // TODO: marmer 22.02.2022 Styling ... :(
  // TODO: marmer 22.02.2022 Some Kind of reset Button (all it needs todo is to navigate to home
  // TODO: marmer 24.02.2022 Copy URL to Clipboard button
})
