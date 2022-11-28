describe("Introduccion Assert", () => {
    it("Assert", () => {
        cy.visit("https://automationintesting.online/")        
        
        cy.get('[data-testid="ContactName"]')
        .should('be.visible')
        .type('Cindys')

        cy.get('[data-testid="ContactEmail"]')
        .should('be.visible')
        .type('asdsa@asdas.com')
        
        cy.get('[data-testid="ContactPhone"]')
        .should('be.visible')
        .should('be.enabled')
        .type('1123581321')
    })
    
})