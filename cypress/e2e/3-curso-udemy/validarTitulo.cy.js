describe("Seccion 5 Validar Titulo", () => {
    it("validar titulo", () => {
        cy.visit('https://testingqarvn.com.es/') 
        cy.title().should('eq', 'TestingQaRvn | Mundo del Testing')       
    })    
})