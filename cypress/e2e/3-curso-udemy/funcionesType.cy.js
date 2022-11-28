describe("Funciones para Type", () => {
    it("Type --> Enter", () => {
        cy.visit("https://www.google.com/")        
        cy.title().should('eq', 'Google')  
        cy.get("[name='q']").type('cat breakdancing {enter}')     

    })
    
})