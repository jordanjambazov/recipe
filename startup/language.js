getUserLanguage = function () {
  return "bg";
};


if (Meteor.isClient) {
  Meteor.startup(function () {
    Session.set("showLoadingIndicator", true);
    console.log("setting language")
    TAPi18n.setLanguage(getUserLanguage())
      .done(function () {
        Session.set("showLoadingIndicator", false);
      })
      .fail(function (error_message) {
        // Handle the situation
        console.log(error_message);
      });
  });
}
