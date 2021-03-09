// cypress.json
({
    "baseUrl": "https://app.joinsatoshi.com/login"
})

describe('Login', () => {

    it('Navigate to Satoshi App', () => {

        cy.visit('https://app.joinsatoshi.com/login',
            { failOnStatusCode: false })
    })

    it('Put invalid username', () => {

        cy.get(':nth-child(3) > .InputBlock-sc-1449a95-0 > .InputWrapper-sc-1449a95-2 > .Input-sc-1449a95-3')
            .type('invalid@email2.com')

    })


    it('Put invalid password', () => {

        cy.get(':nth-child(4) > .InputBlock-sc-1449a95-0 > .InputWrapper-sc-1449a95-2 > .Input-sc-1449a95-3')
            .type('invalidpassword')


    })

    it('Scroll', () => {
        cy.scrollTo(0, 300)
            .wait(500)

    })

    it('Click Log In Button', () => {

        cy.get('.ButtonWrapper-sc-1k3hgfv-0')
            .click()

    })

    it('Verify flag notification', () => {

        cy.get('.body2am6esa-0')
            .should('have.text', 'Incorrect email format. Please try again.')

    })

    it('Scroll', () => {
        cy.scrollTo(0, 300)
            .wait(500)

    })

    it('Leave username field blank', () => {

        cy.get(':nth-child(3) > .InputBlock-sc-1449a95-0 > .InputWrapper-sc-1449a95-2 > .Input-sc-1449a95-3')
            .click()

    })

    it('Click Log In Button', () => {

        cy.get('.ButtonWrapper-sc-1k3hgfv-0')
            .click()
            .wait(5000)

    })

    it('Verify flag notification', () => {

        cy.get('.body2am6esa-0')
            .should('have.text', 'Incorrect email format. Please try again.')

    })

    it('Put valid username', () => {

        cy.get(':nth-child(3) > .InputBlock-sc-1449a95-0 > .InputWrapper-sc-1449a95-2 > .Input-sc-1449a95-3')
            .type('master@satoshi.com')

    })

    it('Put invalid password', () => {

        cy.get(':nth-child(4) > .InputBlock-sc-1449a95-0 > .InputWrapper-sc-1449a95-2 > .Input-sc-1449a95-3')
            .type('invalidpassword')


    })

    it('Click Log In Button', () => {

        cy.get('.ButtonWrapper-sc-1k3hgfv-0')
            .click()
            .wait(5000)

    })

    it('Put invalid password', () => {

        cy.get(':nth-child(4) > .InputBlock-sc-1449a95-0 > .InputWrapper-sc-1449a95-2 > .Input-sc-1449a95-3')
            .type('invalidpassword')


    })

    it('Scroll', () => {
        cy.scrollTo(0, 300)
            .wait(500)

    })

    it('Click Log In Button', () => {

        cy.get('.IconWrapper-sc-1449a95-5 > svg')
            .click()
            .wait(1000)
    })

    it('Verify password text', () => {

        cy.get(':nth-child(4) > .InputBlock-sc-1449a95-0 > .InputWrapper-sc-1449a95-2 > .Input-sc-1449a95-3')
            .contains(/.*/)
    })

})