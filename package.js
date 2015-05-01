Package.describe({
  summary: "AngularJs directive for Arshaw FullCalendar",
  name: "angularui:ui-calendar",
  version: "0.8.1_7",
  git:"https://github.com/angular-ui/ui-calendar.git"
});


Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use("jquery", "client");
  api.use("momentjs:moment@2.0.0");
  api.use("angular:angular@1.3.15", "client");

  api.addFiles([
    'bower_components/angular-ui-calendar/src/calendar.js'
  ], "client");
});
