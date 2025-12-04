const login = require("../pageObjects/components/login");
const settings = require("../pageObjects/components/settings");
const dashboard = require("../pageObjects/pages/dashboardPage");
const onboarding = require("../pageObjects/pages/onboardingPage");

describe("VCam.ai Dashboard", () => {
  beforeEach(() => {
    dashboard.visit();
    login.login();
    cy.ignoreReactError();
  });

  it("Should login and select 'For Personal Use' on the onboarding page", () => {
    onboarding.setForPersonalUse();
    //onboarding.downloadVCam();
    dashboard.goToSettings();
    settings.deleteWorkspace();
  });

  it.only("Should login and select Team Use on the onboarding page", () => {
    onboarding.setForTeamUse();
    cy.fixture("workspace").then((data) => {
      let wsName = data.workspace.name;
      let members = data.workspace.members;
      onboarding.setupTeamWorkspace(wsName, members);
      dashboard.goToSettings();
      settings.getWorkspaceName().should('eq', wsName);
    });
  });
});
