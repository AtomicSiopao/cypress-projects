const login = require("../pageObjects/components/login");
const nametag = require("../pageObjects/components/nametag");
const dashboard = require("../pageObjects/pages/dashboardPage");

describe("VCam.ai Dashboard", () => {
  beforeEach(() => {
    dashboard.visit();
  });

  it("Should login to VCam.ai Dashboard using valid credentials", () => {
    login.login();
    cy.ignoreReactError();
    dashboard.goToNameTags();
    //nametag.selectNameTagDesign(2);
    nametag.setNameTag("KopiBoi", "Resident Sleeper");
    // nametag.allowNameTagsInApp(0); // 1 to enable
    // nametag.allowMembersToToggleNameTag(0);
    // nametag.allowMembersToSetDetails(0);
    // nametag.allowMembersToSetDesign(0);
  });
});
