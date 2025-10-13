const login = require("../pageObjects/components/login");
const dashboard = require("../pageObjects/pages/dashboardPage");
const background = require("../pageObjects/components/background");
const logo = require("../pageObjects/components/logo");

describe("VCam.ai Dashboard", () => {
  beforeEach(() => {
    dashboard.visit();
  });

  it("Should login to VCam.ai Dashboard using valid credentials", () => {
    login.login();
  });

  it("Should check navigation in the Dashboard while logged in", () => {
    login.login();
    cy.ignoreReactError();
    dashboard.goToDashboard();
    dashboard.goToBackgrounds();
    dashboard.goToLogos();
    dashboard.goToNameTags();
    dashboard.goToTeam();
    dashboard.goToBilling();
    dashboard.goToBillingFromDashboard();
    dashboard.goToSettings();
  });

  it("Should go to the Backgrounds page and upload image file as background ", () => {
    login.login();
    cy.ignoreReactError();
    dashboard.goToBackgrounds();
    background.addBackgroundByImageUpload();
  });

  it("Should go to the Backgrounds page and upload video file as background ", () => {
    login.login();
    cy.ignoreReactError();
    dashboard.goToBackgrounds();
    background.addBackgroundByVideoUpload();
  });

  it("Should go to the Backgrounds page and select a stock photo as background ", () => {
    login.login();
    cy.ignoreReactError();
    dashboard.goToBackgrounds();
    background.addBackgroundByStockPhoto();
    background.setBackgroundStateMemberSettings(1);
    background.setBackgroundPermissionSettings(0);
  });

  it("Should go to the Logos page and upload image file as logo ", () => {
    login.login();
    cy.ignoreReactError();
    dashboard.goToLogos();
    logo.addLogoByImageUpload();
  });

  it("Should go to the Logos page and upload video file as logo ", () => {
    login.login();
    cy.ignoreReactError();
    dashboard.goToLogos();
    logo.addLogoByVideoUpload();
    logo.setLogoPermissionSettings(1);
  });
});
