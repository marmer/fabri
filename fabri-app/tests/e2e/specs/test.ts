// https://docs.cypress.io/api/table-of-contents

describe('Recipe-Creation', () => {
  it('First Site visit', () => {
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

        cy.url()
          .should('contain', `n=${encodeURIComponent('Humus mit Erdbeeren')}`)

        cy.findByLabelText('Ingredient 1:')
          .should('be.empty')
          .type('Kichererbsen')

        cy.url()
          .should('contain', `&${encodeURIComponent('Kichererbsen')}`)

        cy.findByLabelText('Quantity 1:')
          .should('be.empty')
          .type('200g')

        cy.url()
          .should('contain', `&${encodeURIComponent('Kichererbsen')}=200g`)

        cy.findByLabelText('Ingredient 2:')
          .should('be.empty')
          .type('Öl')

        cy.findByLabelText('Quantity 2:')
          .should('be.empty')
          .type('70ml')

        cy.url()
          .should('contain', `&${encodeURIComponent('Öl')}=70ml`)

        // TODO: marmer 21.02.2022 Import/Export with a nice url (and a redirect Check!. Don't forget to mock the getbring api here!)
      })
  })

  // TODO: marmer 21.02.2022 Servings
  // TODO: marmer 21.02.2022 Visit with ingredients
})
