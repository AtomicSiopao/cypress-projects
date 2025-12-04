// Imports
const login = require("../pageObjects/components/login");
const dashboard = require("../pageObjects/pages/dashboardPage");
const background = require("../pageObjects/components/background");
const logo = require("../pageObjects/components/logo");
const nametag = require("../pageObjects/components/nametag");
const settings = require("../pageObjects/components/settings");
const team = require("../pageObjects/components/team");
const billing = require("../pageObjects/components/billing");
const now = new Date().toLocaleTimeString();

describe("VCam.ai Dashboard", () => {
  beforeEach(() => {
    dashboard.visit();
    login.login();
    cy.ignoreReactError();
  });

  context("Dashboard Navigation", () => {
    it("should navigate through all dashboard pages", () => {
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

  context("Backgrounds", () => {
    beforeEach(() => {
      dashboard.goToBackgrounds();
    });

    it("should upload and remove an image background", () => {
      background.addBackgroundByImageUpload();
      background.deleteBackground(); // cleanup
    });

    it("should upload and remove a video background", () => {
      background.addBackgroundByVideoUpload();
      background.deleteBackground(); // cleanup
    });

    it("should select a stock photo and update permissions", () => {
      background.addBackgroundByStockPhoto();
      background.setBackgroundStateMemberSettings(1);
      background.setBackgroundPermissionSettings(0);
      background.deleteBackground(); // cleanup
    });
  });

  context("Logos", () => {
    beforeEach(() => {
      dashboard.goToLogos();
    });

    it("should upload and remove an image logo", () => {
      logo.addLogoByImageUpload();
      logo.deleteLogo(); // cleanup
    });

    it("should upload a video logo and update permissions", () => {
      logo.addLogoByVideoUpload();
      logo.setLogoPermissionSettings(1);
      logo.deleteLogo(); // cleanup
    });
  });

  context("Name Tags", () => {
    beforeEach(() => {
      dashboard.goToNameTags();
    });

    it("should configure a name tag and reset to default", () => {
      nametag.selectNameTagDesign(2);
      nametag.setNameTag("KopiBoi", "Resident Sleeper");
      nametag.allowNameTagsInApp(0);
      nametag.allowMembersToToggleNameTag(0);
      nametag.allowMembersToSetDetails(0);
      nametag.allowMembersToSetDesign(0);

      // Cleanup: reset to default
      nametag.selectNameTagDesign(0);
    });
  });

  context("Settings", () => {
    beforeEach(() => {
      dashboard.goToSettings();
    });

    it("should change workspace logo", () => {
      cy.fixture("workspace").then((data) => {
        settings.uploadLogo(data.workspace.logoPath);
      });
    });

    it("should rename the workspace", () => {
      settings.renameWorkspace(`Workspace ni Kopi ${now}`);
    });

    it("should leave the workspace (if multiple workspaces exist)", () => {
      settings.leaveWorkspace();
    });

    it("should delete the workspace (if multiple workspaces exist)", () => {
      settings.deleteWorkspace();
    });

    it.skip("SKIP: Domain and Workspace Discovery - current limitation", () => {
      const domain = "marco.com";
      const verificationEmail = "kopi@marco.com";
      settings.addDomain(domain, "Invite only", verificationEmail);
    });
  });

  context("Team", () => {
    it.skip("should invite users/team members", function () {
      cy.log(this.emails);
      // dashboard.goToTeam();
      // team.inviteUsers(this.users.email, "Member");
    });
  });

  context("License Upgrade", () => {
    beforeEach(() => {
      dashboard.goToBilling();
    });

    it("should upgrade license by redeeming license code", () => {
      cy.fixture("workspace").then((data) => {
        billing.upgradeLicense(data.workspace.code);
      });
    });
  });
});
