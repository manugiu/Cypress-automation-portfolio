describe('User API Tests', () => {
  
  it('GET - should fetch list of users', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        cy.log(JSON.stringify(response.body));
        
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.eq(10);
        
        // Validate first user structure
        expect(response.body[0]).to.have.property('id');
        expect(response.body[0]).to.have.property('name');
        expect(response.body[0]).to.have.property('email');
      });
  });

  it('POST - should create new user', () => {
    cy.request('POST', 
        'https://jsonplaceholder.typicode.com/posts',
        {
        "title": "My Test Post",
        "body": "This is a test from Cypress",
        "userId": 1
        })
        .then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(201);
            expect(response.body.title).to.eq('My Test Post');
            expect(response.body).to.have.property('id');
            expect(response.body.body).to.eq('This is a test from Cypress');
      });
  });


  it('GET - should return 404 for invalid endpoint', () => {
    cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts/99999999', 
        failOnStatusCode: false})
        .then((response) => {
            expect(response.status).to.eq(404);
      });
  });

    it('POST - should handle invalid data gracefully', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/99999999', 
            body: {

            },
            failOnStatusCode: false
        })
            .then((response) => {
                cy.log('Status ' + response.status)
                expect(response.status).to.eq(404);
        });
    });

});