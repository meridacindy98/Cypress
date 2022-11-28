describe("Test con click", () => {
    it("Click sencillo", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .should('be.visible')
        .type('Admin')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .should('be.visible')
        .type('admin123')

        cy.get('.oxd-button')
        .should('be.visible')
        .click()

        cy.get(':nth-child(8) > .oxd-main-menu-item')
        .should('be.visible')
        .click()

        cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text')
        .should('be.visible')
        .click()
    })

    it("Click force true", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .should('be.visible')
        .type('Admin')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .should('be.visible')
        .type('admin123')

        cy.get('.oxd-button')
        .should('be.visible')
        .click()

        cy.get(':nth-child(8) > .oxd-main-menu-item')
        .should('be.visible')
        .click()

        cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text')
        .should('be.visible')
        .click({force:true})
    })

    it.only("Click por coordenada (x,y)", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")        

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .should('be.visible')
        .type('Admin')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .should('be.visible')
        .type('admin123')

        cy.get('.oxd-button')
        .should('be.visible')
        .click()

        cy.get('.oxd-topbar-header-title')
        .click(50, 5)

        cy.get('.oxd-topbar-header-title')
        .click(30, 3)

        cy.get('.oxd-layout-context')
        .click(40, -10, {force: true})

    })
    
})