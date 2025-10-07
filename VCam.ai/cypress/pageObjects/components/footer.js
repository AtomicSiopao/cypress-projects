class footer {
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

  checkFooterLinks() {
    const footerLinks = [
      {
        text: "Features",
        url: "/features",
      },
      {
        text: "Pricing",
        url: "/pricing",
      },
      {
        text: "Download",
        url: "/download",
      },
      {
        text: "Changelog",
        url: "/changelog",
      },
      {
        text: "Feedback",
        url: "https://feedback.vcam.ai",
      },
      {
        text: "Background Editor",
        url: "https://background.vcam.ai",
      },
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
        text: "About",
        url: "/about-us",
      },
      {
        text: "Help & Support",
        url: "https://help.vcam.ai/en/",
      },
      {
        text: "News & Blog",
        url: "/blog",
      },
      {
        text: "Affiliate Program",
        url: "https://affiliate.vcam.ai/signup",
      },
      {
        text: "Contact Sales",
        url: "https://form.typeform.com/to/az17rhBt",
      },
      {
        text: "Terms & Conditions",
        url: "/terms",
      },
      {
        text: "Privacy Policy",
        url: "/privacy",
      },
      {
        text: "Cookie Policy",
        url: "/cookies",
      },
    ];
    footerLinks.map(({ text, url }) => this.checkURLInLink(text, url));
  }
}
module.exports = new footer();
