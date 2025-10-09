const dashboard = require("../pageObjects/pages/dashboardPage");
const login = require("../pageObjects/components/login");

describe("VCam.ai Dashboard", () => {
  beforeEach(() => {
    dashboard.visit();
  });

  it("Should login to VCam.ai Dashboard using valid credentials", () => {
    login.login();
  });

  it("Should check all the navigation in the Dashboard while logged in", () => {
    login.login();
    dashboard.goToDashboard();
    dashboard.goToBackgrounds();
    dashboard.goToLogos();
    dashboard.goToNameTags();
    dashboard.goToTeam();
    dashboard.goToBilling();
    dashboard.goToBillingFromDashboard();
    dashboard.goToSettings();
  });
});
