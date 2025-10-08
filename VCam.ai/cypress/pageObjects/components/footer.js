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
        url: "https://www.vcam.ai/features",
      },
      {
        text: "Pricing",
        url: "https://www.vcam.ai/pricing",
      },
      {
        text: "Download",
        url: "https://www.vcam.ai/download",
      },
      {
        text: "Changelog",
        url: "https://www.vcam.ai/changelog",
      },
      {
        text: "Feedback",
        url: "https://feedback.vcam.ai",
      },
      {
        text: "Overview",
        url: "https://www.vcam.ai/use-cases",
      },
      {
        text: "Finance",
        url: "https://www.vcam.ai/use-cases/finance",
      },
      {
        text: "Remote Work",
        url: "https://www.vcam.ai/use-cases/remote-work",
      },
      {
        text: "Content Creators",
        url: "https://www.vcam.ai/use-cases/content-creators",
      },
      {
        text: "Education",
        url: "https://www.vcam.ai/use-cases/education",
      },
      {
        text: "Telehealth",
        url: "https://www.vcam.ai/use-cases/telehealth",
      },
      {
        text: "About",
        url: "https://www.vcam.ai/about-us",
      },
      {
        text: "Help & Support",
        url: "https://help.vcam.ai",
      },
      {
        text: "News & Blog",
        url: "https://www.vcam.ai/blog",
      },
      {
        text: "Affiliate Program",
        url: "https://affiliate.vcam.ai",
      },
      {
        text: "Contact Sales",
        url: "https://www.vcam.ai/sales",
      },
      {
        text: "Terms & Conditions",
        url: "https://www.vcam.ai/terms",
      },
      {
        text: "Privacy Policy",
        url: "https://www.vcam.ai/privacy",
      },
      {
        text: "Cookie Policy",
        url: "https://www.vcam.ai/cookies",
      },
    ];
    footerLinks.map(({ text, url }) => this.checkURLInLink(text, url));
  }
}
module.exports = new footer();
