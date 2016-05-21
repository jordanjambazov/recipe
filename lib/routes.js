if (Meteor.isClient) {
  Accounts.onLogin(function() {
    return FlowRouter.go("recipe-book");
  });


  Accounts.onLogout(function() {
    return FlowRouter.go("home");
  });
}


FlowRouter.triggers.enter([function(context, redirect) {
  if (!Meteor.userId()) {
    FlowRouter.go("home");
  }
}]);


FlowRouter.route('/', {
  name: 'home',
  action() {
    if (Meteor.userId()) {
      return FlowRouter.go("recipe-book");
    }
    GAnalytics.pageview();
    BlazeLayout.render('HomeLayout');
  }
});


FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: "Recipes"});
  }
});


FlowRouter.route('/recipe/:id', {
  name: 'recipe',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: "RecipeSingle"});
  }
});


FlowRouter.route('/menu', {
  name: 'menu',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: "Menu"});
  }
});
