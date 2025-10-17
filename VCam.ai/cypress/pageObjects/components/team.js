class Team {
  get header() {
    return cy.get("h1", { timeout: 10000 }).should("contain", "Team");
  }

  get numberOfTotalMembers() {
    return cy.get("span").eq("Total members").sibling("span");
  }

  get numberOfPendingInvites() {
    return cy.get("span").eq("Pending invites").sibling("span");
  }

  get numberOfInactiveMembers() {
    return cy.get("span").eq("Never used the app").sibling("span");
  }

  get inviteButton() {
    return cy.getButtonByText("Invite members");
  }

  // USERS
  get usersList() {}


  // TEAM INVITE
  get emailField() {
    return cy.get('textarea[name="emails"]');
  }

  get roleDropdown() {
    return cy.get('select[name="role"]');
  }

  get inviteMembersButton() {
    return cy.getButtonByText("Invite Members");
  }

  get resendInvitesButton(){
    return cyu.getButtonByText('Resend invites');
  }
  // MACHINES
  get machinesList() {}

  get inviteMembersButton() {}

  // ACTIONS
  inviteUsers(emails, role) {
    this.inviteButton.click();
    cy.wrap(emails).each((email) => {
      this.emailField.type(email + ",");
    });
    this.roleDropdown.select(role);
    this.inviteMembersButton.click();
  }
}
module.exports = new Team();
