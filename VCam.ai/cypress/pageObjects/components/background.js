class BackgroundPage {
  // ====== SELECTORS ======
  get header() {
    return cy.get("h1", { timeout: 10000 }).should("contain", "Backgrounds");
  }

  get addBackgroundButton() {
    return cy.getButtonByText("Add background");
  }

  get setAsDefaultBackgroundCheckbox() {
    return cy.contains("label", "Set as default background").find("input");
  }

  get browseFilesButton() {
    return cy.getButtonByText("Browse files");
  }

  get uploadBackgroundButton() {
    return cy.getButtonByText("Upload background");
  }

  get cancelButton() {
    return cy.getButtonByText("Cancel");
  }

  get permissionsToast() {
    return cy.get('div[data-testid="flowbite-toast"]');
  }

  get numberOfBackgrounds() {
    return cy.get("body").then(($body) => {
      const $ul = $body.find("ul.flex.flex-row.gap-4.flex-wrap");
      const count = $ul.length > 0 ? $ul.children().length : 0;
      return cy.wrap(count);
    });
  }

  get unsplashList() {
    return cy.get("div.flex.flex-col.gap-1", { timeout: 5000 });
  }

  get saveBackgroundsButton() {
    return cy.getButtonByText("Save backgrounds");
  }

  // ====== HELPERS ======
  logCount(label, count) {
    cy.log(`${label}: ${count}`);
  }

  waitForUploadCompletion(beforeCount) {
    const checkUntilIncreased = (retries = 10) => {
      return this.numberOfBackgrounds.then((afterCount) => {
        cy.log(`Current: ${afterCount}, Before: ${beforeCount}`);

        if (afterCount > beforeCount) {
          return cy.wrap(afterCount);
        } else if (retries > 0) {
          cy.wait(1000);
          return cy.wrap(null).then(() => checkUntilIncreased(retries - 1)); // 👈 safe chaining
        } else {
          throw new Error("Background count did not increase");
        }
      });
    };

    return checkUntilIncreased().then((afterCount) => {
      this.logCount("After upload", afterCount);
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
  clickAddBackgroundButton() {
    this.addBackgroundButton.click();
    return this;
  }

  setAsDefaultBG() {
    this.setAsDefaultBackgroundCheckbox.check({ force: true });
    return this;
  }

  uploadFile(filePath) {
    this.browseFilesButton.selectFile(filePath, { action: "drag-drop" });
    this.uploadBackgroundButton.click();
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

  clickStockPhotoByUnsplash() {
    return cy.getButtonByText("Stock Photo by Unsplash");
  }

  // ====== FLOWS ======
  /**
   * Adds background via image upload and verifies increment
   */
  addBackgroundByImageUpload() {
    return this.numberOfBackgrounds.then((beforeCount) => {
      this.logCount("Before image upload", beforeCount);

      this.clickAddBackgroundButton();
      this.uploadAnImage();

      cy.wait(7000);

      return this.waitForUploadCompletion(beforeCount);
    });
  }

  /**
   * Adds background via video upload and verifies increment
   */
  addBackgroundByVideoUpload() {
    return this.numberOfBackgrounds.then((beforeCount) => {
      this.logCount("Before video upload", beforeCount);

      this.clickAddBackgroundButton();
      this.uploadAVideo();
      cy.wait(7000);

      return this.waitForUploadCompletion(beforeCount);
    });
  }

  /**
   * Adds background using Unsplash stock photo and verifies increment
   */
  addBackgroundByStockPhoto() {
    return this.numberOfBackgrounds.then((beforeCount) => {
      this.logCount("Before stock photo upload", beforeCount);
      this.clickAddBackgroundButton();

      this.clickStockPhotoByUnsplash().click();
      this.unsplashList.should("exist").children().first().click();
      this.saveBackgroundsButton.click();
      cy.wait(7000);
      return this.waitForUploadCompletion(beforeCount);
    });
  }

  setBackgroundStateMemberSettings(state) {
    this.toggleSwitch(0, state);
  }

  setBackgroundPermissionSettings(state) {
    this.toggleSwitch(1, state);
  }
}

module.exports = new BackgroundPage();
