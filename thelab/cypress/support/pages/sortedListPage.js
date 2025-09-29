class sortedList {
    visit() {
        cy.visit('/sortedList');
    }

    addItem(item) {
        cy.wait(500);
        cy.get('.list_form input').type(item);
        cy.wait(500); // wait for debounce
        cy.get('.form_btn.add').click();
    }
    
    checkItemExists(item) {
        cy.contains('.collection', item).should('exist');
        cy.log('Item added: ' + item);
    }

    checkToDoLength() {
        return cy.get('.collection').then($list => {
            const length = $list.children().length;
            cy.log('List length: ' + length);
            return cy.wrap(length);
        });
    }

    toDoLengthIsFull() {
        cy.get('.collection').then($list => {
            const length = $list.children().length;
            return length >= 5;
        });
        cy.contains('.error', 'Your schedule is full!').should('be.visible');
    }
}

module.exports = new sortedList();