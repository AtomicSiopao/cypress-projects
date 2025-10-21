const login = require("../pageObjects/components/login");
const settings = require("../pageObjects/components/settings");
const dashboard = require("../pageObjects/pages/dashboardPage");

describe("VCam.ai Dashboard", () => {
  beforeEach(() => {
    dashboard.visit();
  });

  // it("Should login to VCam.ai Dashboard using valid credentials", () => {
  //   const emails = [
  //     "test@test.com",
  //     "test2@test.com",
  //     "test3@test.com",
  //     "test4@test.com",
  //     "test5@test.com",
  //   ];
  //   login.login();
  //   cy.ignoreReactError();
  //   dashboard.goToTeam();
  //   team.inviteUsers(emails, "Admin");
  // });

  // it("Should login to VCam.ai Dashboard using valid credentials", () => {
  //   login.login();
  //   cy.ignoreReactError();
  //   dashboard.goToSettings();
  //   settings.renameWorkspace("Workspace ni Kopi");
  //   settings.leaveWorkspace();
  // });

  it.only("test only", () => {
    const domain = "marco.com";
    login.login();
    cy.ignoreReactError();
    dashboard.goToSettings();
    settings. addDomain(domain, 'Invite only')  // type: Instant Access, Request to join, Invite only
  });
});
