Recipes = new Meteor.Collection("Recipes");

RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },

  desc: {
    type: String,
    label: "Description",
  },

  author: {
    type: String,
    label: "Author",
    autoValue() {
      return this.userId();
    },
    autoform: {
      type: "hidden"
    }
  },

  createAt: {
    type: Date,
    label: "Create At",
    autoValue() {
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  }
});


Recipes.attachSchema(RecipeSchema);
