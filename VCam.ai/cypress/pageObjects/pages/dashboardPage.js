class DashboardPage {

  // ====== URL & HEADER MAP ======
  sections = {
    dashboard: { url: "https://dashboard.vcam.ai/", header: "Dashboard" },
    backgrounds: {
      url: "https://dashboard.vcam.ai/app/backgrounds",
      header: "Backgrounds",
    },
    logos: { url: "https://dashboard.vcam.ai/app/logos", header: "Logos" },
    nametags: {
      url: "https://dashboard.vcam.ai/app/nametags",
      header: "Name Tags",
    },
    team: { url: "https://dashboard.vcam.ai/workspace/team", header: "Team" },
    billing: {
      url: "https://dashboard.vcam.ai/workspace/billing",
      header: "Billing",
    },
    settings: {
      url: "https://dashboard.vcam.ai/workspace/settings",
      header: "Settings",
    },
    deployment: {
      url: "https://dashboard.vcam.ai/workspace/deployment",
      header: "Deployment",
    },
  };

  // ====== ACTIONS ======
  visit() {
    cy.visit(this.sections.dashboard.url);
    return this;
  }

  getLinkByText(text) {
    return cy.contains("a", text, { timeout: 10000 });
  }

  clickLink(text) {
    this.getLinkByText(text).click({ force: true });
    return this;
  }

  checkHeader(section) {
    const key = section.toLowerCase().replace(/\s+/g, "");
    const expectedHeader = this.sections[key]?.header;
    if (!expectedHeader) throw new Error(`Invalid section: "${section}".`);

    cy.get("h1", { timeout: 10000 }).should("contain", expectedHeader);
    return this;
  }

  checkURL(section) {
    const key = section.toLowerCase().replace(/\s+/g, "");
    const expectedURL = this.sections[key]?.url;
    if (!expectedURL) throw new Error(`Invalid section: "${section}".`);

    cy.url().should("eq", expectedURL);
    return this;
  }

  // ====== NAVIGATION HELPERS ======
  navigateTo(section) {
    const key = section.toLowerCase().replace(/\s+/g, "");
    const sectionData = this.sections[key];

    if (!sectionData) throw new Error(`Invalid section: "${section}".`);

    // Click matching link text (header text and link label are the same)
    this.clickLink(sectionData.header);

    // Validate both URL and header
    this.checkURL(key);
    this.checkHeader(key);

    return this;
  }

  // ====== SHORTCUTS ======
  goToDashboard() {
    return this.navigateTo("dashboard");
  }

  goToBackgrounds() {
    return this.navigateTo("backgrounds");
  }

  goToLogos() {
    return this.navigateTo("logos");
  }

  goToNameTags() {
    return this.navigateTo("nametags");
  }

  goToTeam() {
    return this.navigateTo("team");
  }

  goToBilling() {
    return this.navigateTo("billing");
  }

  goToSettings() {
    return this.navigateTo("settings");
  }

  goToDeployment() {
    return this.navigateTo("deployment");
  }

  goToBillingFromDashboard() {
    this.clickLink("Dashboard");
    this.clickLink("See plans");
    this.checkURL("billing").checkHeader("billing");
    return this;
  }
}

module.exports = new DashboardPage();
