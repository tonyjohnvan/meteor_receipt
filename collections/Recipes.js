Recipes = new Meteor.Collection('recipes')

RecipeSchema = new SimpleSchema({
  name: {type: String, label: "Name"},
  desc: {type: String, label: "Description"},
  author: {
    type: String,
    label: "Author",
    autoValue: () => {
      return this.userId
    },
    autoform:{
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: () => {
      return new Date()
    },
    autoform:{
      type: "hidden"
    }
  }
})

Recipes.attachSchema( RecipeSchema );