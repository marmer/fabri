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
    cy.visit('/?n=Kalter+Kaffee&Eis&Alter+Kaffee=200ml')
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
          .should('have.value', '200ml')
      })
  })

  // TODO: marmer 21.02.2022 Import/Export with a nice url (and a redirect Check!. Don't forget to mock the getbring api here!)
  // TODO: marmer 22.02.2022 Page Title = "fabri[ - Recipe namen]"
  // TODO: marmer 21.02.2022 Servings
  // TODO: marmer 21.02.2022 Visit with ingredients
})
