describe('Broken Sweet Shop Page', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/');
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

    it('should display the contents of the About Page', () => {
        cy.contains(':nth-child(2) > .nav-link', 'About').click(); // go to about page
        cy.contains('.display-3','Sweet Shop Project').should('be.visible');
        cy.contains('.my-4 > :nth-child(2)','An intentionally broken web application to help demonstrate Chrome DevTools.').should('be.visible');
        cy.contains('.my-4 > :nth-child(3)','Sweet Shop is a project created to help demonstrate some of the great features of the Chrome DevTools which may be of use to people who help test web applications. Sweet Shop encompasses common issues found in real-world web applications!').should('be.visible');
    });

});