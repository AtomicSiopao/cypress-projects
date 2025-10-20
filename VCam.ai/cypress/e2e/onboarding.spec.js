const login = require("../pageObjects/components/login");
const dashboard = require("../pageObjects/pages/dashboardPage");
const onboarding = require("../pageObjects/pages/onboardingPage");

describe("VCam.ai Dashboard", () => {
  beforeEach(() => {
    dashboard.visit();
  });

  it("Should login and go to the onboarding page when account does not have a workspace", () => {
      const members = [
        "test@test.com",
        "test2@test.com",
        "test3@test.com",
        "test4@test.com",
        "test5@test.com",
      ];
    login.login();
    cy.ignoreReactError();
    // onboarding.setForPersonalUse();
    // onboarding.downloadVCam();
    onboarding.setForTeamUse();
    onboarding.setupTeamWorkspace("wowowork", members);
  });
});
