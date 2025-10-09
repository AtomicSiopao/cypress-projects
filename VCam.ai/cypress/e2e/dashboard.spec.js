const dashboard = require("../pageObjects/pages/dashboardPage");
const login = require("../pageObjects/components/login");
const background = require("../pageObjects/components/background");

describe("VCam.ai Dashboard", () => {
  beforeEach(() => {
    dashboard.visit();
  });

  // it("Should login to VCam.ai Dashboard using valid credentials", () => {
  //   login.login();
  // });

  // it("Should check navigation in the Dashboard while logged in", () => {
  //   login.login();
  //   cy.ignoreReactError();
  //   dashboard.goToDashboard();
  //   dashboard.goToBackgrounds();
  //   dashboard.goToLogos();
  //   dashboard.goToNameTags();
  //   dashboard.goToTeam();
  //   dashboard.goToBilling();
  //   dashboard.goToBillingFromDashboard();
  //   dashboard.goToSettings();
  // });

  // it("Should go to the Backgrounds page and upload image file as background ", () => {
  //   login.login();
  //   cy.ignoreReactError();
  //   dashboard.goToBackgrounds();
  //   background.addBackgroundByImageUpload();
  // });

  // it("Should go to the Backgrounds page and upload video file as background ", () => {
  //   login.login();
  //   cy.ignoreReactError();
  //   dashboard.goToBackgrounds();
  //   background.addBackgroundByVideoUpload();
  // });

  it("Should go to the Backgrounds page and upload video file as background ", () => {
    login.login();
    cy.ignoreReactError();
    dashboard.goToBackgrounds();
    background.setBackgroundStateMemberSettings(0);
    background.setBackgroundPermissionSettings(1);

  });
});
