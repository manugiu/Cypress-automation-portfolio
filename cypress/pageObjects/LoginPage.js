const InventoryPage = require("./InventoryPage");

class LoginPage {
    goTo(url) {
        cy.visit(url);
    }

    login(username, password){
        cy.get('[data-test="username"]').type(username);
        cy.get('[data-test="password"]').type(password);
        cy.get('[data-test="login-button"]').click();
        return new InventoryPage();
    }
}

module.exports = LoginPage;