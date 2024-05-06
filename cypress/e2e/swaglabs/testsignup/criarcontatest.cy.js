describe("test criar conta ", () => {

    beforeEach(() => {
        cy.visit("/login");
    })

    it("test inscrevendo novo usuário", () => {
        // PREENCHER INPUT NOME
        cy.get('input[name="name"]')
            .type("MARNI")
            .should("be.visible")

        // PREENCHER INPUT EMAIL
        cy.get('input[data-qa="signup-email"]')
            .type("MARNI@hotmail.com")
            .should("be.visible")

        // CLICAR EM BOTAO "SIGNUP"
        cy.get('button[data-qa="signup-button"]')
            .click()


        // VALIDAR TEXTO Enter Account Information
        cy.contains('Enter Account Information')
            .should('be.visible')

        // MARCAR RADIO
        cy.get('input[id="id_gender1"]')
            .click()

        // PREENCHER INPUT SENHA
        cy.get('input[type="password"]')
            .type('MARNI963')
            .should('be.visible')

        //Date of Birth SELECT
        cy.get('select[id="days"]')
            .select('23')
            .should('be.visible')

        cy.get('select[id="months"]')
            .select('January')
            .should('be.visible')

        cy.get('select[id="years"]')
            .select('1993')
            .should('be.visible')

        // SELECIONAR CHECKBOX "Sign up for our newsletter!"
        cy.get('#newsletter')
            .click()
            .should("be.visible")

        // SELECIONAR CHECKBOX "Receive special offers from our partners!"
        cy.get('#optin')
            .click()
            .should("be.visible")

        // PREENCHER FORMULÁRIO   - FIRST NAME
        cy.get('input[data-qa="first_name"]')
            .type("Thiago")
            .should("be.visible")

        // LAST NAME
        cy.get('input[data-qa="last_name"]')
            .type("Wodnoff")
            .should("be.visible")

        // COMPANY
        cy.get('input[data-qa="company"]')
            .type("Renner S/A")
            .should("be.visible")

        // ADDRESS
        cy.get('input[data-qa="address"]')
            .type("Av.  Senador Salgado Filho,1820")
            .should("be.visible")

        cy.get('input[data-qa="address2"]')
            .type("Av.  Senador Salgado Filho,1820")
            .should("be.visible")

        // PAÍS
        cy.get('select[id="country"]')
            .select('United States')
            .should('be.visible')

        // ESTADO
        cy.get('input[id="state"]')
            .type("Rio Grande do Sul")
            .should("be.visible")

        // CIDADE
        cy.get('input[id="city"]')
            .type("Viamão")
            .should("be.visible")

        // CEP
        cy.get('input[id="zipcode"]')
            .type("94475-000")
            .should("be.visible")

        // NUMERO CELULAR
        cy.get('input[id="mobile_number"]')
            .type("51985776172")
            .should("be.visible")

        // CLICAR BOTÃO "CREATE ACCOUNT"
        cy.contains("button", "Create Account")
            .click()
            .should("be.visible")

        // CLICAR BOTÃO "CONTINUE"
        cy.get('a[data-qa="continue-button"]')
            .click()
            .should("be.visible")

        // // CLICAR NO LINK DELETE
        // cy.get('a[href="/delete_account"]')
        //     .click()


    })


})