describe('Broken Sweet Shop Page', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/');
    });

    it('should display the Navigation Bar', () => {
        cy.contains('.navbar-brand', 'Sweet Shop').should('be.visible');
        cy.contains('.navbar', 'Sweets').should('be.visible');
        cy.contains('.navbar', 'About').should('be.visible');
        cy.contains('.navbar', 'Login').should('be.visible');
        cy.contains('.navbar', 'Basket').should('be.visible');
        cy.get('img').each(($img) => {
            cy.wrap($img)
                .should('be.visible')
                .and(($images) => {
                    expect($images[0].naturalWidth, `Image ${$images.attr('src')} is broken`).to.be.greaterThan(0);
                });
        });
    });

    it('should display all product images in home page', () => {
        cy.get('img').each(($img) => {
            cy.wrap($img)
                .should('be.visible')
                .and(($el) => {
                    expect($el[0].naturalWidth, `Image ${$el.attr('src')} is broken`).to.be.greaterThan(0); // checks each image if it exists using naturalWidth
                });
        });
    });

    it('Should check if products in the homepage can be added to cart', () => {
        //cy.get('.my-4 > .btn').click();
        cy.document().then((doc) => {
            const buttonsInPage = doc.querySelectorAll('.card > .card-footer > .btn').length;
            let displayRows = buttonsInPage / 4;
            let itemsInBasket = 0;
            for (let y = 1; y <= 4; y++) { // column
                cy.get(`:nth-child(${y}) > .card > .card-footer > .btn`).click();
                itemsInBasket++;
                cy.log(`${itemsInBasket} items added in basket.`);
            };
            cy.contains('.badge', `${itemsInBasket}`);
        });
    });

});