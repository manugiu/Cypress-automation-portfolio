const CheckoutComplete = require("./CheckoutComplete");
const CheckoutPage = require("./CheckoutPage");

class CheckoutOverviewPage{
    finishOrder(){
        cy.get('[data-test="finish"]').click();
        return new CheckoutComplete();
    }

    verifyOrderSummary(product){
        cy.contains(product).should('be.visible');
    }
    
}

module.exports = CheckoutOverviewPage;