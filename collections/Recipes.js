Recipes = new Mongo.Collection("recipes");

Recipes.allow({
  insert(userId, doc) {
    return !!userId;
  },

  update(userId, doc) {
    return !!userId;
  }
});


Ingredient = new SimpleSchema({
  name: {
    type: String,
  },
  amount: {
    type: String,
  }
});


RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },

  desc: {
    type: String,
    label: "Description",
  },

  ingredients: {
    type: [Ingredient]
  },

  inMenu: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type: "hidden",
    }
  },

  author: {
    type: String,
    label: "Author",
    autoValue() {
      return this.userId;
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

Meteor.methods({
  "toggleInMenu"(id, currentState) {
    Recipes.update(id, {
      $set: {
        inMenu: !currentState
      }
    });
  },

  "deleteRecipe"(id) {
    Recipes.remove(id);
  }
});
