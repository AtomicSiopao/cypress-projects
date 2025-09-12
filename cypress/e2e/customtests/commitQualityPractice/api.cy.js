describe('Accordions Practice', () => {
    beforeEach(() => {
        cy.visit('https://commitquality.com/practice');
    });

    it('Verify API Calls - GET', () => {
        cy.get('.container-text').contains('Apis').click();
        cy.get('[data-testid="get-button"]').click();
        cy.request('GET', 'https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => {
                cy.log(response.body.id);
                expect(response.body).to.be.an('object');
                expect(response.body.id).to.have.eq(1);
                expect(response.body.userId).to.have.eq(1);
                expect(response.body.title).to.have.eq('delectus aut autem');
                expect(response.body.completed).to.have.eq(false);
            });
    });
        it('Verify and Assert API Calls - GET', () => {;
            cy.get('.container-text').contains('Apis').click();
            cy.intercept('https://jsonplaceholder.typicode.com/todos/1').as('todos');
            cy.get('[data-testid="get-button"]').click();
            cy.wait('@todos').then((interception) => {
                expect(interception.response.statusCode).to.eq(200); // response status
                // payload
                expect(interception.response.body).to.have.property('userId');
                expect(interception.response.body.userId).to.have.eq(1);
                expect(interception.response.body).to.have.property('id');
                expect(interception.response.body.id).to.have.eq(1);
                expect(interception.response.body).to.have.property('title');
                expect(interception.response.body.title).to.have.eq('delectus aut autem');
                expect(interception.response.body).to.have.property('completed');
                expect(interception.response.body.completed).to.have.eq(false);
            });
        });
});