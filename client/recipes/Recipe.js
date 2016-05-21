Template.Recipe.helpers({
  "updateRecipeId"() {
    return this._id;
  }
});


Template.Recipe.events({
  "click .toggle-menu"() {
    Meteor.call("toggleInMenu", this._id, this.inMenu);
  }
});
