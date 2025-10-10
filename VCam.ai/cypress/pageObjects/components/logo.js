class LogoPage {
  // ====== SELECTORS ======
  get header() {
    return cy.get("h1", { timeout: 10000 }).should("contain", "Logos");
  }

  get addLogoButton() {
    return cy.getButtonByText("Add logo");
  }

  get setAsDefaultLogoCheckbox() {
    return cy.contains("label", "Set as default logo").find("input");
  }

  get browseFilesButton() {
    return cy.getButtonByText("Browse files");
  }

  get uploadLogoButton() {
    return cy.getButtonByText("Upload logo");
  }

  get cancelButton() {
    return cy.getButtonByText("Cancel");
  }

  get permissionsToast() {
    return cy.get('div[data-testid="flowbite-toast"]');
  }

  get currentLogoList() {
    const selector = "ul.flex.flex-row.gap-4.flex-wrap";

    return cy
      .exists(selector)
      .then((exists) => (exists ? cy.get(selector) : cy.wrap(0)));
  }

  // ====== HELPERS ======
  logCount(label, count) {
    cy.log(`${label}: ${count}`);
  }

  waitForUploadCompletion(beforeCount) {
    this.currentLogoList.should("have.length.greaterThan", beforeCount).then(($el) => {
      const afterCount = $el ? $el.children().its("length") : 0;
      this.logCount("After upload", afterCount);
      // return this.currentLogoList
      //   .should("have.length.greaterThan", beforeCount)
      //   .then((afterCount) => {
      //     cy.wait(5000);
      //     this.logCount("After upload", afterCount);
      //   });
    });
  }

  toggleSwitch(index, expectedState) {
    cy.get('button[role="switch"]')
      .eq(index)
      .invoke("attr", "aria-checked")
      .then((isChecked) => {
        const shouldBeChecked = Boolean(expectedState);
        if ((isChecked === "true") !== shouldBeChecked) {
          cy.get('button[role="switch"]').eq(index).click();
        }
      });
  }

  verifyToastMessage(expectedText) {
    this.permissionsToast
      .should("contain.text", expectedText)
      .and("be.visible");
    return this;
  }

  // ====== ACTIONS ======
  clickAddLogoButton() {
    this.addLogoButton.click();
    return this;
  }

  setAsDefaultBG() {
    this.setAsDefaultLogoCheckbox.check({ force: true });
    return this;
  }

  uploadFile(filePath) {
    this.browseFilesButton.selectFile(filePath, { action: "drag-drop" });
    this.uploadLogoButton.click();
    return this;
  }

  uploadAnImage() {
    cy.getButtonByText("Upload an image").click();
    return this.uploadFile("cypress/fixtures/aslogo.png");
  }

  uploadAVideo() {
    cy.getButtonByText("Upload a Video").click();
    return this.uploadFile("cypress/fixtures/muhehehe.mp4");
  }

  // ====== FLOWS ======
  addLogoByImageUpload() {
    this.currentLogoList.then(($el) => {
      const beforeCount = $el ? $el.children().its("length") : 0;
      this.logCount("Before image upload", beforeCount);

      this.clickAddLogoButton();
      this.uploadAnImage();
      cy.wait(5000);
      this.waitForUploadCompletion(beforeCount);
      return this.logCount("Afterimage upload", beforeCount);
    });
  }

  addLogoByVideoUpload() {
    this.currentLogoList.then(($el) => {
      const beforeCount = $el ? $el.children().its("length") : 0;

      this.logCount("Before image upload", beforeCount);

      this.clickAddLogoButton();
      this.uploadAVideo();
      cy.wait(5000);
      return this.waitForUploadCompletion(beforeCount);
    });
  }

  setLogoPermissionSettings(state) {
    this.toggleSwitch(0, state);
  }
}

module.exports = new LogoPage();
