const LoginPage = require("./LoginPage");
const CartPage = require("./CartPage");

class InventoryPage{

    verifyPageLoaded(){
        cy.url().should('eq', Cypress.config('baseUrl') + '/inventory.html');
        return this;
    }
    addItem(productName){
        const productId = productName.toLowerCase().replace(/\s+/g, '-');
        cy.get(`[data-test="add-to-cart-${productId}"]`).click();
    }

    goToCartPage(){
        cy.get('[data-test="shopping-cart-link"]').click();
        return new CartPage();
    }

    removeProduct(productName){
        const productId = productName.toLowerCase().replace(/\s+/g, '-');
        cy.get(`[data-test="remove-${productId}"]`).click();
    }
}

module.exports = InventoryPage;