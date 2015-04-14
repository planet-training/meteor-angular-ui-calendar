Package.describe({
  summary: "Fullcalendar as ui-component",
  name: "planettraining:angular-ui-calendar",
  version: "0.0.2",
  git:"https://github.com/planet-training/meteor-angular-ui-calendar.git"
});


Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use("jquery", "client");
  api.use("momentjs:moment");

  api.use("urigo:angular", ["client", "server"]);

  api.addFiles([
    'bower_components/jquery-ui/ui/jquery.ui.core.js',
    'bower_components/jquery-ui/ui/jquery.ui.widget.js',
    'bower_components/jquery-ui/ui/jquery.ui.mouse.js',
    'bower_components/jquery-ui/ui/jquery.ui.draggable.js',
    'bower_components/jquery-ui/ui/jquery.ui.resizable.js',

    'bower_components/fullcalendar/dist/fullcalendar.min.js',
    'bower_components/fullcalendar/dist/fullcalendar.min.css',
    'bower_components/angular-ui-calendar/src/calendar.js'

  ], "client");


});
