import 'cypress-xpath';

describe("Selectores", () => {
    it("Selector por ID", () => {
        cy.visit("https://automationintesting.online/") 
        cy.get('#name')
        .should('be.visible')
        .type('Cindys')        
    })

    it("Selector por Atributo", () => {
        cy.visit("https://automationintesting.online/") 
        cy.get('[placeholder="Name"]')
        .should('be.visible')
        .type('Cindys')        
    })

    it("Selector por xPath", () => {
        cy.visit("https://automationintesting.online/") 

        cy.xpath('//*[@id="name"]')
        .should('be.visible')
        .type('Cindys')        

        cy.xpath('/html/body/div[1]/div/div/div[5]/div[2]/form/div[2]/input')
        .should('be.visible')
        .type('fdsafds@gmail.com')        
    })

    it("Selector por Contains", () => {
        cy.visit("https://getbootstrap.com/docs/5.0/forms/checks-radios/") 

        cy.get('.form-check-label')
        .contains('Default radio')
        .click()

        cy.get('.form-check-label')
        .contains('Default checked radio')
        .click()
        
                
    })

    it("Selector por CopySelector", () => {
            cy.visit("https://getbootstrap.com/docs/5.0/forms/checks-radios/")

            cy.get('#search-input')
            .should('be.visible')
            .type('radio')


        })
    
})