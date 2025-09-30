class sortedListPage {
    // Getters . Locators

    get header() {
        return cy.contains('h1', 'Sorted list');
    }

    get toDoButton() {
        return cy.get('.form_btn.add');
    }

    get toDo() {
        return cy.get('.list_form input');
    }

    get toDoList() {
        return cy.get('.collection');
    }

    // Setters


    // Actions
    visit() {
        cy.visit('/sortedList');
        this.header.should('be.visible');
    }

    clickAddToDoButton() {
        cy.wait(200); // debounce
        this.toDoButton.click();
    }

    addToDo(item) {
        this.toDo.type(item);
        this.clickAddToDoButton();
    }

    checkToDoList() {
        this.toDoList.should('exist');
        return this;
    }

    checkNewToDo(item) {
        this.toDoList.contains(item);
        return this;
    }

    checkToDoLength(expected) {
        return this.toDoList.children().should('have.length.at.least', expected);
    }

    getToDoLength() {
        return cy.get('body').then($body => {
            if ($body.find('.collection').length) {
                return cy.get('.collection').children().its('length');
            } else {
                return cy.wrap(0);
            }
        });
    }

    toDoLengthIsFull() {
        return this.toDoList.then($list => {
            const length = $list.children().length;
            expect(length).to.be.at.least(5);
        }).then(() => {
            cy.contains('.error', 'Your schedule is full!').should('be.visible');
        });
    }
}

module.exports = new sortedListPage();