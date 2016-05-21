Template.Recipe.helpers({
  "updateRecipeId"() {
    return this._id;
  }
});


Template.Recipe.events({
  "click .toggle-menu"() {
    Meteor.call("toggleInMenu", this._id, this.inMenu);
  },

  "click .fa-trash"() {
    Meteor.call("deleteRecipe", this._id);
  },

  "click .fa-pencil"() {
    var currentEditMode = Session.get("editMode");
    Session.set("editMode", !currentEditMode);
  }
});
