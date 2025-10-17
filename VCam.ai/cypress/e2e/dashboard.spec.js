const login = require("../pageObjects/components/login");
const dashboard = require("../pageObjects/pages/dashboardPage");
const background = require("../pageObjects/components/background");
const logo = require("../pageObjects/components/logo");
const nametag = require("../pageObjects/components/nametag");

describe("VCam.ai Dashboard", () => {
  beforeEach(() => {
    dashboard.visit();
  });

  //LOGIN
  it("Should login to VCam.ai Dashboard using valid credentials", () => {
    login.login();
  });

  // DASHBOARD NAVIGATION
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

  // BACKGROUNDS
  it("Should go to the Backgrounds page and upload image file as background then remove all backgrounds", () => {
    login.login();
    cy.ignoreReactError();
    dashboard.goToBackgrounds();
    background.addBackgroundByImageUpload();
    background.deleteBackground(); // cleanup
  });

  it("Should go to the Backgrounds page and upload video file as background ", () => {
    login.login();
    cy.ignoreReactError();
    dashboard.goToBackgrounds();
    background.addBackgroundByVideoUpload();
    background.deleteBackground(); // cleanup
  });

  it("Should go to the Backgrounds page and select a stock photo as background ", () => {
    login.login();
    cy.ignoreReactError();
    dashboard.goToBackgrounds();
    background.addBackgroundByStockPhoto();
    background.setBackgroundStateMemberSettings(1);
    background.setBackgroundPermissionSettings(0);
    background.deleteBackground(); // cleanup
  });

  // LOGOS
  it("Should go to the Logos page and upload image file as logo ", () => {
    login.login();
    cy.ignoreReactError();
    dashboard.goToLogos();
    logo.addLogoByImageUpload();
    logo.deleteLogo(); // cleanup
  });

  it("Should go to the Logos page and upload video file as logo ", () => {
    login.login();
    cy.ignoreReactError();
    dashboard.goToLogos();
    logo.addLogoByVideoUpload();
    logo.setLogoPermissionSettings(1);
    logo.deleteLogo(); // cleanup
  });

  // NAME TAGS
  it.only("Should login to VCam.ai Dashboard using valid credentials", () => {
    login.login();
    cy.ignoreReactError();
    dashboard.goToNameTags();
    nametag.selectNameTagDesign(2);
    nametag.setNameTag("KopiBoi", "Resident Sleeper");
    nametag.allowNameTagsInApp(0); // 1 to enable
    nametag.allowMembersToToggleNameTag(0);
    nametag.allowMembersToSetDetails(0);
    nametag.allowMembersToSetDesign(0);
    nametag.selectNameTagDesign(0); //Cleanup. Set to default again.
  });
});
