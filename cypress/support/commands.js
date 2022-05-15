// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add('login', (user, password) => {
    cy.visit('http://auctiontakaschool.herokuapp.com/')
    cy.get('.mb-3 > .form-control').type(user) // username
    cy.get('.mb-2 > .form-control').type(password) // password
    cy.get('.btn').click()
})

Cypress.Commands.add('signup', (username, email, pass, conpass) => {
    cy.visit('http://auctiontakaschool.herokuapp.com/register/')
    cy.get('#id_username').type(username) 
    cy.get('#id_email').type(email)
    cy.get('#id_password1').type(pass) 
    cy.get('#id_password2').type(conpass) 
    cy.get('.btn').click()
})

Cypress.Commands.add('createitem', (pname, minbid, des, upfile, enddt) => {
    cy.get('#inputName4').type(pname) 
    cy.get('#inputBid4').type(minbid)
    cy.get('#inputDescription').type(des) 
    cy.get('#customFile').attachFile(upfile) 
    cy.get('#inputdate').click()
    .type(enddt)
    cy.get(':nth-child(7) > .btn').click()
})


