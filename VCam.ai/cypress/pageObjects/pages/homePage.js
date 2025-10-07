class homePage {
  // GETTERS / LOCATORS
  get vcamLogo() {
    return cy.get('img[alt="VCam Logo"]');
  }

  get dashboardURL() {
    return cy.get("");
  }

  // ASSERTIONS

  verifyDashboardURL() {
    this.dashboardURL.should("include", "dashboard.vcam.ai");
    return this;
  }

  // FUNCTIONS
  visit() {
    cy.visit("https://vcam.ai/");
    this.vcamLogo.should("be.visible");
    return this;
  }

  getButtonByText(btnText) {
    return cy.contains("button", btnText);
  }

  getLinkByText(linkText) {
    return cy.contains("a", linkText);
  }

  clickLogInLink() {
    cy.ignoreReactError();
    return this.getLinkByText("Log in").click();
  }

  clickGetStartedLink() {
    cy.ignoreReactError();
    return this.getLinkByText("Get started").click();
  }

  clickForCompaniesAndTeamsLink() {
    cy.ignoreReactError();
    return this.getLinkByText("For companies & teams");
  }

  clickUseCasesMenuButton() {
    return this.getButtonByText("Use Cases").click();
  }

  clickFeaturesMenuLink() {
    return this.getLinkByText("Features").click();
  }

  clickPricingMenuLink() {
    return this.getLinkByText("Pricing").click();
  }

  clickResourcesMenuButton() {
    return this.getButtonByText("Resources").click();
  }

  checkURLInLink(text, url) {
    return this.getLinkByText(text).invoke("attr", "href").should("eq", url);
  }

  checkHomePageLinks() {
    const homePageLinks = [
      {
        text: "Read the Intel white paper ›",
        url: "https://www.intel.com/content/dam/develop/external/us/en/documents/xsplitvcam.pdf",
      },
      {
        text: "Learn how to get started ›",
        url: "https://help.vcam.ai/en/article/quick-start-guide-1a762y2/",
      },
    ];
    homePageLinks.map(({ text, url }) => this.checkURLInLink(text, url)); // or links.map((link) => checkURLInLink(text, url));
  }
}

module.exports = new homePage();
