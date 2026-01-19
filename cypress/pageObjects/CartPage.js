const CheckoutPage = require("./CheckoutPage");

class CartPage{
    proceedToCheckout(){    
        cy.get('[data-test="checkout"]').click();
        return new CheckoutPage();
    }

    verifyCartIsEmpty(){
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist');
        cy.get('[data-test="inventory-item"]').should('not.exist');
    }

    verifyQty(qty){
        cy.get('[data-test="shopping-cart-badge"]').should('exist');
        cy.get('[data-test="shopping-cart-badge"]').should('have.length', qty);
    }
}

module.exports = CartPage;