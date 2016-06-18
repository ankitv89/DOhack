import { Meteor } from 'meteor/meteor';

// Meteor.startup(() => {
//   // code to run on server at startup
// });


Meteor.startup(function() {
  
    Items.insert({name: 'Blueberries'});
    Items.insert({name: 'Strawberries'});
    Items.insert({name: 'Steak'});
    Items.insert({name: 'Eggs'});
    Items.insert({name: 'Egg eggs hello bangalore'});
  
});