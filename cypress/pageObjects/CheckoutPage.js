const CheckoutOverviewPage = require ("./CheckoutOverviewPage")

class CheckoutPage{
    fillForm(firstName, lastName, pc){
        if (firstName) cy.get('[data-test="firstName"]').type(firstName)
        if (lastName) cy.get('[data-test="lastName"]').type(lastName)
        if (pc) cy.get('[data-test="postalCode"]').type(pc)
    }

    clickContinue(){
        cy.get('[data-test="continue"]').click()
        return new CheckoutOverviewPage();
    }

    verifyErrorMessage(message){
        cy.contains(message).should('be.visible')
    }
}

module.exports = CheckoutPage;