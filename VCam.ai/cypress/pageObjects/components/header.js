class header {
  getButtonByText(btnText) {
    return cy.contains("button", btnText);
  }

  getLinkByText(linkText) {
    return cy.contains("a", linkText);
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

  checkHeaderLinks() {
    const headerLinks = [
      {
        text: "Overview",
        url: "/use-cases",
      },
      {
        text: "Finance",
        url: "/use-cases/finance",
      },
      {
        text: "Remote Work",
        url: "/use-cases/remote-work",
      },
      {
        text: "Content Creators",
        url: "/use-cases/content-creators",
      },
      {
        text: "Education",
        url: "/use-cases/education",
      },
      {
        text: "Telehealth",
        url: "/use-cases/telehealth",
      },
      {
        text: "Features",
        url: "/features",
      },
      {
        text: "Pricing",
        url: "/pricing",
      },
      {
        text: "News & Blog",
        url: "/blog",
      },
      {
        text: "Help & Support",
        url: "https://help.vcam.ai/en/",
      },
      {
        text: "Background Editor",
        url: "https://background.vcam.ai",
      },
    ];
    headerLinks.map(({ text, url }) => this.checkURLInLink(text, url));
  }
}

module.exports = new header();
