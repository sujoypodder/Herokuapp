/// <reference types="cypress" />

describe('Login Functionality cc', function(){

    it('Positive test',function(){
        // positive test
        cy.login('Tanjir','XYZabc12345')
        cy.get('#navbarDropdown')
        .should('contain','Dashboard')
        .should('be.visible')
    })

    it('Negative test1',function(){
        // negative test1
        cy.login('Tanjir','ABCt12345')
        cy.get('h1')
        .should('contain','Server Error (500)')
    })

    it('Negative test2',function(){
        // negative test2
        cy.login('Jaman','XYZabc12345')
        cy.get('h1')
        .should('contain','Server Error (500)')
    })

    it('Negative test3',function(){
        // negative test3
        cy.login('Jaman','ABCt12345')
        cy.get('h1')
        .should('contain','Server Error (500)')
    })
})