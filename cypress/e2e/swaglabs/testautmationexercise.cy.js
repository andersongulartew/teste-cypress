//<reference types="cypress"/>


describe("test ", () => {

    beforeEach(() => {
        cy.visit("/");
    })


    it("test checking title",()=>{
        cy.title()
            .should('eq', 'Automation Exercise')
    })










})