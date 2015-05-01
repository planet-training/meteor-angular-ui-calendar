# meteor-angular-ui-calendar
Adds angular ui-calendar directive for Meteor. This package is only a wrapper to include all necessary JS and CSS files to the the ui-calendar directive to work.

## Example 
Here is a showcase how to add the basic functionality into your app controller:
* https://gist.github.com/dohomi/d0ba6abdb30834fb6bba

## Install
meteor add angularui:ui-calendar

### Important
Make sure you have added FullCalendar into your application. You can use the following packages if it is missing:

meteor add planettraining:jquery-fullcalendar

If jQuery-Ui isn't loaded add this following for resizing and dragging:

meteor add planettraining:jquery-ui-drag-resize