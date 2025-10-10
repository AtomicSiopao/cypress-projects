const dashboard = require("../pageObjects/pages/dashboardPage");
const login = require("../pageObjects/components/login");
const logo = require("../pageObjects/components/logo2");

describe("VCam.ai Dashboard", () => {
  beforeEach(() => {
    dashboard.visit();
  });

  it.only("Should go to the Logos page and upload image file as logo ", () => {
    login.login();
    cy.ignoreReactError();
    dashboard.goToLogos();
    logo.addLogoByImageUpload();
  });

  it.only("Should go to the Logos page and upload video file as logo ", () => {
    login.login();
    cy.ignoreReactError();
    dashboard.goToLogos();
    logo.addLogoByVideoUpload();
    //logo.setLogoPermissionSettings(1);
  });
});
