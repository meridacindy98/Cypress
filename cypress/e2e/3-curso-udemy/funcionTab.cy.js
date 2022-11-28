import 'cypress-plugin-tab'

describe("Funcion Tab", () => {
    it("Type con Tab", () => {
        cy.visit("https://www.edesur.com.ar:8080/OficinaVirtual2/paginas/acceso.aspx") 

        cy.get('#txtUsuario').type('cindor')
        .tab().type('Prueba1')
    })
    
})