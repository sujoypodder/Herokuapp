/// <reference types="cypress" />

describe('Signup Functionality cc', function(){

    /*it('Positive testc',function(){
        // positive test
        cy.signup('Alexa','alexa@mailinator.com','XYZabc12345','XYZabc12345')
        cy.get('#messages')
        .should('contain','Account was created for')
        .should('be.visible')
    })*/

    it('Positive test',function(){
        // Email is already exist
        cy.signup('Alex','alex@mailinator.com','XYZabc12345','XYZabc12345')
        cy.get(':nth-child(3) > :nth-child(1) > .errorlist > li')
        .should('contain','username already exists') //Account was created for Alex
        .should('be.visible')
    })
    
    it('Negative test1',function(){
        // two password fields didn't match
        cy.signup('Rathore','rathore@mailinator.com','XYZabc12345','xyzabc12345')
        cy.get('.user_card > :nth-child(3) > :nth-child(1)')
        .should('contain','two password fields')
        .should('be.visible')
    })

    it('Negative test2',function(){
        // password less than 8 char
        cy.signup('Rathore','rathore@mailinator.com','XYab12','XYab12')
        cy.get('.user_card > :nth-child(3) > :nth-child(1)')
        .should('contain','at least 8 characters')
        .should('be.visible')
    })

    it('Negative test3',function(){
        // entirely numeric password
        cy.signup('Rathore','rathore@mailinator.com','12345678','12345678')
        cy.get('.user_card > :nth-child(3) > :nth-child(1)')
        .should('contain','password is entirely numeric')
        .should('be.visible')
    })

    it('Negative test4',function(){
        // using common password 
        cy.signup('Rathore','rathore@mailinator.com','abcd1234','abcd1234')
        cy.get('.user_card > :nth-child(3) > :nth-child(1)')
        .should('contain','password is too common')
        .should('be.visible')
    })

    it('Negative test5',function(){
        // email validation- without '@'
        cy.signup('Rathore','rathoremailinator.com','XYZabc12345','XYZabc12345')
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('.is used at a wrong position in mailinator..com')
        })
    })

    it('Negative test6',function(){
        // email validation- double dot after @
        cy.signup('Rathore','rathore@mailinator..com','XYZabc12345','XYZabc12345')
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('.is used at a wrong position in mailinator..com')
        })
    })

    it('Negative test7',function(){
        // email validation- double dot before @
        cy.signup('Rathore','..rathore@mailinator.com','XYZabc12345','XYZabc12345')
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('.is used at a wrong position in mailinator..com')
        })
    })

    it('Negative test8',function(){
        // email validation- quoted strings must be dot separated or the only element making up the local part
        cy.signup('Rathore','abc”test”email@mailinator.com','XYZabc12345','XYZabc12345')
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('.is used at a wrong position in mailinator..com')
        })
    })

    it('Negative test9',function(){
        // email validation- only one @ is allowed outside quotation marks
        cy.signup('Rathore','A@b@c@mailinator.com','XYZabc12345','XYZabc12345')
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('.is used at a wrong position in mailinator..com')
        })
    })

    it('Negative test10',function(){
        // email validation- none of the special characters in this local part are allowed outside quotation marks
        cy.signup('Rathore','a”b(c)d,e:f;gi[j\k]l@mailinator.com','XYZabc12345','XYZabc12345')
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('.is used at a wrong position in mailinator..com')
        })
    })
})