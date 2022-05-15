/// <reference types="cypress" />

describe('Logout Functionality', function(){

    it('Logout test',function(){
        // logout test
        cy.login('Tanjir','XYZabc12345')
        cy.get('#navbarDropdown')
        .should('contain','Dashboard')
        .should('be.visible').click()
        cy.get(':nth-child(4) > .dropdown-item').click()
        cy.title().should('eq','Login')
    })
})