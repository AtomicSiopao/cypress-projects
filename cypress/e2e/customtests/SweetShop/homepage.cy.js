describe('Broken Sweetshop Page', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/');
    });

    it('should display all product images in home page', () => {
        cy.get('img').each(($img) => {
            cy.wrap($img)
                .should('be.visible')
                .and(($el) => {
                    expect($el[0].naturalWidth, `Image ${$el.attr('src')} is broken`).to.be.greaterThan(0);
                });
        });
    });
        it('should display all product images in Sweets page', () => {
            //checks if all the images in the Sweets page are displayed
            cy.get('.my-4 > .btn').click();
            cy.get('img').each(($img) => {
                cy.wrap($img)
                    .should('be.visible')
                    .and(($images) => {
                        expect($images[0].naturalWidth, `Image ${$images.attr('src')} is broken`).to.be.greaterThan(0);
                    });
            });
        });
    it('Should check if products can be added to cart', () => {
        //checks if all the images in the Sweets page are displayed
        cy.get('.my-4 > .btn').click();
        cy.document().then((doc) => {
            const buttonsInPage = doc.querySelectorAll('.card > .card-footer > .btn').length;
            let displayRows = buttonsInPage / 4;
            let itemsInBasket = 0;
            for (let x = 2; x <= displayRows + 1; x++) { // displayRows + 1 since selector always starts with 2 for some reason
                for (let y = 1; y <= 4; y++) { // column
                    cy.get(`:nth-child(${x}) > :nth-child(${y}) > .card > .card-footer > .btn`).click();
                    itemsInBasket++;
                    cy.log(`${itemsInBasket} items added in basket.`);
                };
            };
            cy.contains('.badge','16');
        });
    });

});