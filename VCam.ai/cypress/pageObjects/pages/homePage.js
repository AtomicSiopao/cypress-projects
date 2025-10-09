class HomePage {
  // ====== GETTERS / LOCATORS ======
  get vcamLogo() {
    return cy.get('img[alt="VCam Logo"]');
  }

  get dashboardURL() {
    return cy.url();
  }

  // ====== ASSERTIONS ======
  verifyDashboardURL() {
    this.dashboardURL.should("include", "dashboard.vcam.ai");
    return this;
  }

  // ====== ACTIONS ======
  visit() {
    cy.visit("https://vcam.ai/");
    this.vcamLogo.should("be.visible");
    return this;
  }

  getButtonByText(btnText) {
    return cy.contains("button", btnText, { timeout: 5000 });
  }

  getLinkByText(linkText) {
    return cy.contains("a", linkText, { timeout: 5000 });
  }

  clickLink(text) {
    cy.ignoreReactError();
    this.getLinkByText(text).click();
    return this;
  }

  clickButton(text) {
    this.getButtonByText(text).click();
    return this;
  }

  // ====== NAVIGATION SHORTCUTS ======
  clickLogInLink() { return this.clickLink("Log in"); }
  clickGetStartedLink() { return this.clickLink("Get started"); }
  clickForCompaniesAndTeamsLink() { return this.clickLink("For companies & teams"); }
  clickUseCasesMenuButton() { return this.clickButton("Use Cases"); }
  clickFeaturesMenuLink() { return this.clickLink("Features"); }
  clickPricingMenuLink() { return this.clickLink("Pricing"); }
  clickResourcesMenuButton() { return this.clickButton("Resources"); }

  // ====== VALIDATIONS ======
  checkURLInLink(text, expectedUrl) {
    this.getLinkByText(text)
      .should("have.attr", "href", expectedUrl);
    return this;
  }

  getAllGetStartedButtons() {
    this.getLinkByText("Get started").each(($el) => {
      cy.wrap($el)
        .should("have.attr", "href", "https://dashboard.vcam.ai/");
    });
    return this;
  }

  checkHomePageLinks() {
    const linksToCheck = [
      {
        text: "Read the Intel white paper",
        url: "https://www.intel.com/content/dam/develop/external/us/en/documents/xsplitvcam.pdf",
      },
      {
        text: "Learn how to get started",
        url: "https://help.vcam.ai/en/article/quick-start-guide-1a762y2/",
      },
    ];

    linksToCheck.forEach(({ text, url }) => this.checkURLInLink(text, url));
    return this;
  }
}

module.exports = new HomePage();
