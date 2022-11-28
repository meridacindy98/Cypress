describe("Pruebitaaaaaaaaa", () => {
    it("Mi primer test ATR cuambia 420", () => {
        cy.log("Hola mun2")
    })

    it("Buscan video gato bailarin", () => {
        cy.visit('https://www.youtube.com')
        cy.get('#search-input > #search').type('Sims cat break-dancing')
        cy.get('#search-icon-legacy').click()
        cy.get(':nth-child(3) > :nth-child(2) > #dismissible > ytd-thumbnail.style-scope > .yt-simple-endpoint > .no-transition > #img').click()
        cy.wait(1000)

        
    })
    
})