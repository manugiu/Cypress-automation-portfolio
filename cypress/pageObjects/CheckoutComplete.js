class CheckoutComplete{
    verifyThankYou(message){
        cy.contains(message).should('be.visible')
    }
}

module.exports = CheckoutComplete;