/// <reference types="cypress" />

describe('Add item Functionality cc', function(){

    it('Positive test',function(){
        // create item positive test
        cy.login('Jack','XYZabc12345')
        cy.get('#navbarDropdown')
        .should('contain','Dashboard')
        .should('be.visible').click()
        cy.get(':nth-child(1) > .dropdown-item')
        .should('contain','Create/Add')
        .should('be.visible').click()
        cy.createitem('iphone 13 pro max','750','using only 3 month, condition fully impressive','apl.jpeg','2022-05-20')
        cy.get(':nth-child(3) > .pb-3 > .card > .card-body > .container > .card-title').contains('iphone 13 pro max')
        cy.get(':nth-child(3) > .pb-3 > .card > .card-body > .container > .row > :nth-child(1)').should('contain','May 20, 2022, midnight')
        .should('be.visible')
        cy.get(':nth-child(3) > .pb-3 > .card > .card-body > .container > .row > :nth-child(2)').should('contain','Minimum Bid: 750.00')
        .should('be.visible')

    })

    it('Negative test1',function(){
        // create item negative test-submit button click without any data
        // that will be fail
        cy.login('Jack','XYZabc12345')
        cy.get('#navbarDropdown')
        .should('contain','Dashboard')
        .should('be.visible').click()
        cy.get(':nth-child(1) > .dropdown-item')
        .should('contain','Create/Add')
        .should('be.visible').click()
        cy.createitem(' ',' ',' ',' ',' ')

    })

    it('Negative test2',function(){
        // create item negative test- try to import file except than '.json, .js, .coffee, .html, .txt, .csv, .png, .jpg, .jpeg, .gif, .tif, .tiff, .zip' file and as well as large size
        // create item negative test- try to give input different date format
        // create item negative test-non numeric data into numeric field
        // This will also be failed
        cy.login('Jack','XYZabc12345')
        cy.get('#navbarDropdown')
        .should('contain','Dashboard')
        .should('be.visible').click()
        cy.get(':nth-child(1) > .dropdown-item')
        .should('contain','Create/Add')
        .should('be.visible').click()
        cy.createitem('Galaxy12s','abcd','brand new','swcs.pdf','2022/06/14')
    })
}) 