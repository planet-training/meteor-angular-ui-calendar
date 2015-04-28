Package.describe({
  summary: "AngularJs directive for Arshaw FullCalendar",
  name: "angularui:ui-calendar",
  version: "0.8.1",
  git:"https://github.com/angular-ui/ui-calendar.git"
});


Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use("jquery", "client");
  api.use("momentjs:moment@2.0.0");
  api.use("angular:angular@1.3.15", "client");

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
