class BackgroundPage {
  // ====== SELECTORS ======
  get header() {
    return cy.get("h1", { timeout: 10000 }).should("contain", "Backgrounds");
  }

  get addBackgroundButton() {
    return this.getButtonByText("Add background");
  }

  get setAsDefaultBackgroundCheckbox() {
    return cy.contains("label", "Set as default background").find("input");
  }

  get browseFilesButton() {
    return this.getButtonByText("Browse files");
  }

  get uploadBackgroundButton() {
    return this.getButtonByText("Upload background");
  }

  get cancelButton() {
    return this.getButtonByText("Cancel");
  }

  get permissionsToast() {
    return cy.get('div[data-testid="flowbite-toast"]');
  }

  get numberOfBackgrounds() {
    return cy.get("ul.flex.flex-row.gap-4.flex-wrap").children();
  }

  get unsplashList() {
    return cy.get("div.flex.flex-col.gap-1", { timeout: 5000 });
  }

  get saveBackgroundsButton() {
    return this.getButtonByText("Save backgrounds");
  }

  // ====== HELPERS ======
  getButtonByText(text) {
    return cy.contains("button", text, { timeout: 10000 });
  }

  logCount(label, count) {
    cy.log(`${label}: ${count}`);
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
    this.getButtonByText("Upload an image").click();
    this.uploadFile("C:\\Users\\AtomicSiopao\\Downloads\\aslogo.png");
    return this;
  }

  uploadAVideo() {
    this.getButtonByText("Upload a Video").click();
    this.uploadFile("C:\\Users\\AtomicSiopao\\Downloads\\muhehehe.mp4");
    return this;
  }

  stockPhotoByUnsplash() {
    return this.getButtonByText("Stock Photo by Unsplash");
  }

  // FLOWS
  addBackgroundByImageUpload() {
    this.numberOfBackgrounds.its("length").then((beforeCount) => {
      this.logCount("Before image upload", beforeCount);

      this.clickAddBackgroundButton();
      this.uploadAnImage();
      cy.wait(3000);
      this.numberOfBackgrounds
        .its("length")
        .should("be.greaterThan", beforeCount)
        .then((afterCount) => {
          this.logCount("After image upload", afterCount);
        });
    });
  }

  addBackgroundByVideoUpload() {
    this.numberOfBackgrounds.its("length").then((beforeCount) => {
      this.logCount("Before video upload", beforeCount);

      this.clickAddBackgroundButton();
      this.uploadAVideo();

      // Wait for upload completion or use assertion-based wait
      cy.wait(3000);

      this.numberOfBackgrounds
        .its("length")
        .should("be.greaterThan", beforeCount)
        .then((afterCount) => {
          this.logCount("After video upload", afterCount);
        });
    });
  }

  addBackgroundByStockPhoto() {
    this.numberOfBackgrounds.its("length").then((beforeCount) => {
      this.logCount("Before stock photo", beforeCount);

      this.clickAddBackgroundButton();
      this.stockPhotoByUnsplash().click();
      cy.wait(2000);
      this.unsplashList.children().first().click();
      this.saveBackgroundsButton.click();

      cy.wait(3000);

      this.numberOfBackgrounds
        .its("length")
        .should("be.greaterThan", beforeCount)
        .then((afterCount) => {
          this.logCount("After stock photo", afterCount);
        });
    });
  }

  setBackgroundStateMemberSettings(state) {
    cy.get('button[role="switch"]')
      .eq(0)
      .then(($btn) => {
        const isChecked = $btn.attr("aria-checked") === "true";
        const shouldBeChecked = state === 1;

        if (isChecked !== shouldBeChecked) {
          cy.wrap($btn).click();
        }
      });
  }

  setBackgroundPermissionSettings(state) {
    cy.get('button[role="switch"]')
      .eq(1)
      .then(($btn) => {
        const isChecked = $btn.attr("aria-checked") === "true";
        const shouldBeChecked = state === 1;

        if (isChecked !== shouldBeChecked) {
          cy.wrap($btn).click();
        }
      });
  }
}

module.exports = new BackgroundPage();
