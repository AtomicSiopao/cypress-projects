class homePage {
    // GETTERS / LOCATORS
    get vcamLogo() {
        return cy.get('img[alt="VCam Logo"]');
    }

    get dashboardURL() {
        return cy.url();
    }

    // ASSERTIONS

    verifyDashboardURL() {
        this.dashboardURL.should('include', 'dashboard.vcam.ai');
        return this;
    }

    // FUNCTIONS
    visit() {
        cy.visit('https://vcam.ai/');
        this.vcamLogo.should('be.visible');
        return this;
    }

getButtonByText(btnText) {
    return cy.contains('button', btnText);
}

getLinkByText(linkText) {
    return cy.contains('a', linkText);
}

clickLogInLink() {
    cy.ignoreReactError();
    return this.getLinkByText('Log in').click();  
}

clickGetStartedLink() {
    cy.ignoreReactError();
    return this.getLinkByText('Get started').click();
}

}

module.exports = new homePage();