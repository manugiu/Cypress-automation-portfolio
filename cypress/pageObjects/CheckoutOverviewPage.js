class CheckoutOverviewPage{
    finishOrder(){
        cy.get('[data-test="finish"]').click();
    }

    verifyOrderSummary(product){
        cy.contains(product).should('be.visible');
    }
    
}

module.exports = CheckoutOverviewPage;