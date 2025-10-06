const homePage = require("../support/pages/homePage");

describe('VCam.ai Home Page', () => {
  beforeEach(() => {
    homePage.visit();
  });

  it('Should go to the VCam.ai Dashboard via Log in link', () => {
    homePage.clickLogInLink();
    
  })

  it('Should visit the VCam.ai Homepage via Get started button', () => {
    homePage.clickGetStartedLink();
  })
})