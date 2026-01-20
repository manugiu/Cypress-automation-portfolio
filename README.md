# 🚀 Cypress E2E Automation Framework - SauceDemo

[![Cypress E2E Tests](https://github.com/manugiu/Cypress-automation-portfolio/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/manugiu/Cypress-automation-portfolio/actions/workflows/cypress-tests.yml)

A comprehensive end-to-end testing framework built with Cypress and Cucumber (BDD), demonstrating professional test automation practices using the Page Object Model design pattern.

## 📋 Table of Contents
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Scenarios](#test-scenarios)
- [Key Features](#key-features)
- [Contact](#contact)

## 🛠 Technologies Used

- **Cypress** (v15.9.0) - E2E Testing Framework
- **Cucumber** (@badeball/cypress-cucumber-preprocessor) - BDD Framework
- **JavaScript** - Programming Language
- **Page Object Model** - Design Pattern
- **Gherkin** - Test Specification Language

## 📁 Project Structure
```
cypress/
├── e2e/
│   └── features/              # Feature files (Gherkin scenarios)
│       ├── login-success.feature
│       ├── login-failure.feature
│       ├── checkout.feature
│       ├── cart-management.feature
│       ├── checkout-validation.feature
│       └── multi-item-checkout.feature
├── support/
│   ├── step_definitions/      # Step definition files
│   │   ├── common.steps.js
│   │   └── main.steps.js
│   └── pages/                 # Page Object Models
│       ├── LoginPage.js
│       ├── InventoryPage.js
│       ├── CartPage.js
│       ├── CheckoutPage.js
│       └── CheckoutOverviewPage.js
└── fixtures/
    └── users.json             # Test data
```

## ✅ Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/manugiu/cCpress-automation-portfolio.git
cd Cypress-automation-portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Verify Cypress installation:**
```bash
npx cypress verify
```

## 🚀 Running Tests

### Open Cypress Test Runner (Interactive Mode):
```bash
npx cypress open
```
Then select E2E Testing and choose a browser.

### Run All Tests (Headless Mode):
```bash
npx cypress run
```

### Run Specific Feature:
```bash
npx cypress run --spec "cypress/e2e/features/login-success.feature"
```

### Run with Specific Browser:
```bash
npx cypress run --browser chrome
```

## 🧪 Test Scenarios

### ✅ Authentication
- **Successful Login** - Valid user credentials
- **Failed Login** - Invalid credentials and locked user

### 🛒 Shopping Cart
- **Add Items** - Single and multiple products
- **Remove Items** - Cart management and empty cart validation

### 💳 Checkout Process
- **Complete Purchase** - End-to-end happy path with single item
- **Multi-item Purchase** - Checkout with multiple products
- **Form Validation** - Required field validations (First Name, Last Name, Postal Code)

## 🔌 API Testing

The framework includes API tests demonstrating backend testing capabilities:

**API Test Coverage:**
- **GET Requests** - Fetching and validating user data
- **POST Requests** - Creating resources and validating responses
- **Response Validation** - Status codes, data structure, and content verification

**Location:** `cypress/e2e/api/user-api.cy.js`

**Run API tests:**
```bash
npx cypress run --spec "cypress/e2e/api/**/*.cy.js"
```

## ⭐ Key Features

- ✨ **BDD Framework** with Cucumber for human-readable test scenarios
- 📄 **Page Object Model** for maintainable and reusable code
- 🔄 **Data-Driven Testing** using fixtures for test data management
- 🎯 **Positive & Negative Testing** covering success and error scenarios
- 📊 **Organized Structure** separating concerns (features, steps, pages)
- 🔧 **Professional Practices** following industry-standard patterns

## 📧 Contact

**Enzo Manuel Giuggiolini**  
- LinkedIn: [https://www.linkedin.com/in/enzo-manuel-giuggiolini/]
- Email: manuelgiuggiolini@gmail.com

---

*This project was created as part of my QA Automation portfolio to demonstrate proficiency in Cypress, Cucumber BDD, JavaScript, and the Page Object Model design pattern.*
