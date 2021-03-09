// cypress.json
({
    "baseUrl": "https://app.joinsatoshi.com/login"
})

describe('Forgot Password', () => {

    it('Navigate to Satoshi App', () => {

        cy.visit('https://app.joinsatoshi.com/login',
            { failOnStatusCode: false })
    })

    it('Scroll', () => {
        cy.scrollTo(0, 300)
            .wait(500)

    })

    it('click FP hyperlink', () => {
        cy.get(':nth-child(1) > .body1am6esa-0 > .StyledLink-sc-19qu5em-5')
            .wait(3000)
            .click()
    })

    it('put valid email', () => {
        cy.get('.Input-sc-1449a95-3')
            .type('valjesergomez@gmail.com')
    })

    it('click submit button', () => {
        cy.get('.ButtonWrapper-sc-1k3hgfv-0')
            .click()
    })

    it('click back to log in btn', () => {
        cy.get('.ButtonWrapper-sc-1k3hgfv-0')
            .wait(3000)
            .click()
    })

    it('Click Sign up Hyperlink', () => {
        cy.get(':nth-child(2) > .body1am6esa-0 > .StyledLink-sc-19qu5em-5')
            .click()
            .wait(4000)
    })

    it('Navigate to Satoshi App', () => {

        cy.visit('https://app.joinsatoshi.com/login',
            { failOnStatusCode: false })
    })

})