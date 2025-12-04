class SettingsPage {
  // ====== SELECTORS ======
  get header() {
    return cy.get("h1", { timeout: 10000 }).should("contain", "Workspace Settings");
  }

  get uploadLogoButton() {
    return cy.get('button[title="Upload logo"]');
  }

  get workspaceNameField() {
    return cy.get('input[name="name"]');
  }

  get saveButton() {
    return cy.getButtonByText("Save");
  }

  get workspaceDiscoveryHeader() {
    return cy.get("h2").should("contain", "Workspace Discovery");
  }

  get addDomainButton() {
    return cy.getButtonByText("Add domain");
  }

  get verificationEmailField() {
    return cy.get('input[name="emailAddress"]');
  }

  get addDomainButtonOnModal() {
    return cy.getButtonByText("Cancel").siblings("button");
  }

  get domainField() {
    return cy.get('input[name="domain"]');
  }

  get leaveWorkspaceHeader() {
    return cy.get("h2").should("contain", "Leave Workspace");
  }

  get cancelButton() {
    return cy.getButtonByText("Cancel");
  }

  // ====== HELPERS ======
  getWorkspaceName() {
    return this.workspaceNameField.invoke("val");
  }

  setDomainDiscovery(type) {
    cy.getButtonByText(type).click();
  }

  // ====== ACTIONS ======
  renameWorkspace(newName) {
    this.workspaceNameField
      .clear({ force: true })
      .type(newName, { delay: 50 });
    this.saveButton.click();
    return this;
  }

  leaveWorkspace() {
    this.getWorkspaceName().then((name) => {
      cy.getButtonByText(`Leave "${name}"`).click();
      cy.get('input[name="name"]').last().type(name);
      this.cancelButton.siblings("button").click();
    });
    return this;
  }

  deleteWorkspace() {
    this.getWorkspaceName().then((name) => {
      cy.getButtonByText(`Delete "${name}"`).click();
      cy.get('input[name="name"]').last().type(name);
      this.cancelButton.siblings("button").click();
    });
    return this;
  }

  addDomain(domain, type, verificationEmail) {
    this.addDomainButton.click();
    this.domainField.clear().type(domain);
    this.setDomainDiscovery(type);
    this.addDomainButtonOnModal.click();
    this.verificationEmailField.clear().type(verificationEmail);
    return this;
  }
}

module.exports = new SettingsPage();
