class Background {
  get header() {
    return cy.get("h1", { timeout: 10000 }).should("contain", "Backgrounds");
  }

  get addBackgroundButton() {
    return this.getButtonByText("Add background");
  }

  get setAsDefaultBackgroundCheckbox() {
    return cy.get("input", "Set as default background");
  }

  get browseFilesButton() {
    return this.getButtonByText("Browse files");
  }

  get uploadBackgroundButton(){
    return this.getButtonByText("Upload background");
  }
  
  get cancelButton(){
    return this.getButtonByText("Cancel");
  }

  setAsDefaultBG() {
    return this.setAsDefaultBackgroundCheckbox.check();
  }

  getButtonByText(text) {
    return cy.contains("button", text, { timeout: 10000 });
  }

  browseFiles() {
    const filename = "C:\\Users\\AtomicSiopao\\Downloads\\aslogo.png";
    this.browseFilesButton.selectFile(filename, { action: 'drag-drop' });
    this.uploadBackgroundButton.click();
    return this;
  }

  uploadAnImage() {
    this.getButtonByText("Upload an image").click();
    this.browseFiles();
    return this;
  }

  uploadAVideo() {
    return this.getButtonByText("Upload a Video");
  }

  stockPhotoByUnsplash() {
    return this.getButtonByText("Stock Photo by Unsplash");
  }

  clickAddBackgroundButton() {
    return this.addBackgroundButton.click();
  }
  addBackgroundByImageUpload() {
    this.clickAddBackgroundButton();
    this.uploadAnImage();
  }
  addBackgroundByVideoUpload() {}
  addBackgroundByStockPhoto() {}
}

module.exports = new Background();
