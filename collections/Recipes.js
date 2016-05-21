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
    label: () => TAPi18n.__("name")
  },
  amount: {
    type: String,
    label: () => TAPi18n.__("amount")
  }
});


RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: () => TAPi18n.__("name")
  },

  desc: {
    type: String,
    label: () => TAPi18n.__("desc"),
  },

  ingredients: {
    type: [Ingredient],
    label: () => TAPi18n.__("ingredients")
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
    label: () => TAPi18n.__("author"),
    autoValue() {
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },

  createAt: {
    type: Date,
    label: () => TAPi18n.__("created_at"),
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
