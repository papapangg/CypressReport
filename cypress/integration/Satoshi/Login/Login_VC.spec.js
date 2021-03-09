// cypress.json
({
    "baseUrl": "https://app.joinsatoshi.com/login"
})

describe('Login', () => {

    it('Navigate to Satoshi App', () => {

        cy.visit('https://app.joinsatoshi.com/login',
            { failOnStatusCode: false })
    })

    it('Put valid username', () => {

        cy.get(':nth-child(3) > .InputBlock-sc-16ecb60-0 > .InputWrapper-sc-16ecb60-2 > .Input-sc-16ecb60-3')
            .type('master@satoshi.com')

    })


    it('Put valid password', () => {

        cy.get(':nth-child(4) > .InputBlock-sc-16ecb60-0 > .InputWrapper-sc-16ecb60-2 > .Input-sc-16ecb60-3')
            .type('Satoshi2020$')


    })

    it('Scroll', () => {
        cy.scrollTo(0, 300)
            .wait(500)

    })

    it('Click Log In Button', () => {

        cy.get('.ButtonWrapper-sc-5bay4n-0')
            .click()
    })

})