import { getValue } from "../utils/custom";
describe('Broken Sweet Shop Page', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/login');
    });
    
    it('should display the Navigation Bar', () => {
        const navBar = {
            'Sweets': '/sweets',
            'About': '/about',
            'Login': '/login',
            'Basket': '/basket'
        };
        Object.entries(navBar).forEach(([selector, value]) => {
            cy.get('.nav-link').contains(selector).should('be.visible').click();
            cy.url().should('include', value);    
        });
        cy.get('img').each(($img) => {
            cy.wrap($img)
                .should('be.visible')
                .and(($images) => {
                    expect($images[0].naturalWidth, `Image ${$images.attr('src')} is broken`).to.be.greaterThan(0);
                });
        });
    });

    it('should navigate to the login page', () => {
        cy.get('.navbar .nav-link').contains('Login').click();
        Cypress.Promise.all([
            getValue('[title="test@user.com"]', 'title'),
            getValue('[title="qwerty"]', 'title')
        ]).then(([email, password]) => {
            cy.get('#exampleInputEmail').type(email);
            cy.get('#exampleInputPassword').type(password);

            cy.get('.btn-primary').contains('Login').click();
            cy.get('p.lead').should('contain', `Welcome back ${email}`);
        });
    });

});