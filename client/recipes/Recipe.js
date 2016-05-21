Template.Recipe.events({
  "click .toggle-menu"() {
    Meteor.call("toggleInMenu", this._id, this.inMenu);
  }
});
