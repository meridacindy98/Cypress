import 'cypress-plugin-tab'

describe("Segundo reto", () => {
    it("Probando la app", () => {
        cy.visit("https://computer-database.gatling.io/computers")
        
        //buscar
        cy.get('#searchbox').type('Acer Extensa')
        cy.get('#searchsubmit').should('be.visible').click()

        //agregar
        cy.get('#add').should('be.visible').click()
        cy.get('#name').should('be.visible').type('Cindys')
        cy.get('#introduced').should('be.visible').type('2022-10-01').tab().type('2023-10-01')
        cy.get('#company').should('be.visible').select('IMS Associates, Inc.').should('have.value', '9')
        cy.get('.primary').click()
    })
    
})