// cypress.json
({
    "baseUrl": "http://satoshi-frontend.s3-website.us-east-2.amazonaws.com/login"
})

describe('Sign up', () => {

    it('Navigate to Satoshi App', () => {

        cy.visit('http://satoshi-frontend.s3-website.us-east-2.amazonaws.com/login',
            { failOnStatusCode: false })
    })

    it('Scroll', () => {
        cy.scrollTo(0, 300)
            .wait(3000)

    })

    it('Click Sign up hyperlink', () => {

        cy.get(':nth-child(2) > .body1am6esa-0 > .StyledLink-sc-19qu5em-5')
            .click()
    })

    it('Enter invalid email add 1', () => {

        cy.get(':nth-child(2) > .InputBlock-sc-1449a95-0 > .InputWrapper-sc-1449a95-2 > .Input-sc-1449a95-3')
            .type('invalidemail')
            .wait(1000)
    })

    it('Enter invalid email add 2', () => {

        cy.get(':nth-child(3) > .InputBlock-sc-1449a95-0 > .InputWrapper-sc-1449a95-2 > .Input-sc-1449a95-3')
            .type('invalidemail')
            .wait(1000)
    })

    it('Click Continue Button', () => {

        cy.get('.ButtonWrapper-sc-1k3hgfv-0')
            .click()
            .wait(3000)
    })

    it('Enter email add 1', () => {

        cy.get(':nth-child(2) > .InputBlock-sc-1449a95-0 > .InputWrapper-sc-1449a95-2 > .Input-sc-1449a95-3')
            .clear()
            .type('satoshi6@mailinator.com')
            .wait(1000)
    })

    it('Enter email add 2', () => {

        cy.get(':nth-child(3) > .InputBlock-sc-1449a95-0 > .InputWrapper-sc-1449a95-2 > .Input-sc-1449a95-3')
            .clear()
            .type('satoshi6@mailinator.com')
            .wait(1000)
    })

    it('Click Continue Button', () => {

        cy.get('.ButtonWrapper-sc-1k3hgfv-0')
            .click()
            .wait(3000)
    })

    it('Set invalid password 1', () => {

        cy.get(':nth-child(2) > .InputBlock-sc-1449a95-0 > .InputWrapper-sc-1449a95-2 > .Input-sc-1449a95-3')
            .wait(3000)
            .type('invalidpassword')
    })

    it('Set invalid password 2', () => {

        cy.get(':nth-child(3) > .InputBlock-sc-1449a95-0 > .InputWrapper-sc-1449a95-2 > .Input-sc-1449a95-3')
            .wait(3000)
            .type('invalidpassword')
    })

    it('Click check mark', () => {

        cy.get('.checkmark')
            .wait(2000)
            .click()
    })

    it('Verify BTN is Disabled', () => {
        //verify button should be disabled
        cy.get('.ManageContent-sc-6fr5yy-6 > .ButtonWrapper-sc-1k3hgfv-0')
            .should('be.disabled')
    })

})