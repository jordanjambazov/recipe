Template.NewRecipe.events({
  "click .fa-close"() {
    Session.set("newRecipe", false);
  }
});
