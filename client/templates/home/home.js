/**
* Template - search
*/
Template.home.rendered = function () {
  AutoCompletion.init("input#searchBox");
}

Template.home.events = {
  'keyup input#searchBox': function () {
    AutoCompletion.autocomplete({
      element: 'input#searchBox',       // DOM identifier for the element
      collection: Items,              // MeteorJS collection object
      field: 'name',                    // Document field name to search for
      limit: 5,                         // Max number of elements to show
      sort: { name: 1 }});              // Sort object to filter results with
      //filter: { 'gender': 'female' }}); // Additional filtering
  }
}