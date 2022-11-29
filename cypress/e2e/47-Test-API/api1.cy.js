import 'cypress-plugin-tab'

describe("Api GET", () => {
    let datos;
    it("1 - Test api GET", () => {
        datos = cy.request("http://localhost:3000/posts")
        datos.its("status").should("equal", 200)
    })

    it("2 - Test api GET", () => {
        datos = cy.request("http://localhost:3000/posts")
        .should( (response) => {
            expect(response.status).to.eq(200)
        } )
        
    })

    it("3 - Test api GET other method", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers:{
                accept: "application/json"
            }
        }).then( response => {
            let datos = JSON.parse(JSON.stringify(response.body))
            cy.log(datos)
            expect(datos[0]).has.property("title", "json-server")
            expect(datos[0]).has.property("author", "typicode")

            expect(datos[1]).has.property("title", "Cindy")
            expect(datos[1]).has.property("author", "Cindor")
        } )        
    })
    
})

describe("Api POST", () => {

    it("1 - Test api POST", () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body:{
                "id": 4,
                "title": "Prueba POST",
                "author": "Prueba"
            }
        }).then( response => {
            expect(response.status).to.eq(201)
        } )  
    })
    
})