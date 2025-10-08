const dashboard = require("../pageObjects/pages/dashboardPage");
const login = require("../pageObjects/components/login");


describe("VCam.ai Dashboard", () => {
  beforeEach(() => {
    dashboard.visit();
  });

  it("Should login to VCam.ai Dashboard using valid credentials", () => {
    login.login();
  });
  
});
